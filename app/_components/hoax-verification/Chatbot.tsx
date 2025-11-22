"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Link2, FileText, X, Paperclip, MessageSquare } from "lucide-react";
import Button from "@/app/_components/ui/Button";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
  file?: File;
  link?: string;
}

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content: "Halo! Saya siap membantu Anda memverifikasi informasi kesehatan. Anda dapat mengirimkan pertanyaan, link, atau file yang ingin dicek.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLinkMode, setIsLinkMode] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [typingMessage, setTypingMessage] = useState<string>("");
  const [typingMessageId, setTypingMessageId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, typingMessage]);

  const getHardcodedResponse = (input: string, isLink: boolean, fileName?: string): string | null => {
    // Check for vaccine file
    if (fileName && fileName.toLowerCase().includes("vaksin")) {
      return `HASIL VERIFIKASI: FAKTA

Status: Informasi ini adalah FAKTA dan akurat secara medis.

Penjelasan Singkat:

Vaksin bukan penyebab autisme. Penelitian ilmiah yang ekstensif selama puluhan tahun telah membuktikan bahwa tidak ada hubungan antara vaksinasi dan autisme. Klaim bahwa vaksin menyebabkan autisme berasal dari penelitian yang telah ditarik kembali karena data yang dimanipulasi dan metodologi yang salah. Vaksinasi adalah salah satu intervensi kesehatan publik yang paling efektif dan aman untuk mencegah penyakit menular.

Penjelasan Detail:

Tidak ada bukti ilmiah yang menunjukkan bahwa vaksin menyebabkan autisme. Penelitian yang menyatakan hubungan antara vaksin MMR dan autisme yang diterbitkan pada tahun 1998 telah ditarik kembali oleh jurnal yang mempublikasikannya. Sejak saat itu, ratusan penelitian ilmiah dengan ribuan peserta telah dilakukan dan semuanya menunjukkan bahwa tidak ada hubungan antara vaksin dan autisme. Organisasi kesehatan terkemuka di dunia seperti WHO dan CDC telah menyatakan dengan jelas bahwa vaksin aman dan efektif. Vaksinasi telah menyelamatkan jutaan nyawa dan mencegah penyakit serius seperti campak, polio, dan difteri.

Referensi:

Centers for Disease Control and Prevention (CDC) - https://www.cdc.gov/vaccinesafety/concerns/autism.html

World Health Organization (WHO) - https://www.who.int/news-room/questions-and-answers/item/vaccines-and-autism`;
    }
    
    // Check for hypertension file
    if (fileName && fileName.toLowerCase().includes("hipertensi")) {
      return `HASIL VERIFIKASI: HOAX

Status: Informasi ini adalah HOAX dan berpotensi berbahaya untuk kesehatan.

Penjelasan Singkat:

Menghentikan konsumsi obat hipertensi secara tiba-tiba atau tanpa pengawasan dokter adalah sangat berbahaya. Hipertensi adalah kondisi medis serius yang memerlukan pengobatan jangka panjang untuk mencegah komplikasi seperti stroke, serangan jantung, dan kerusakan organ. Menghentikan obat hipertensi dapat menyebabkan tekanan darah naik kembali dengan cepat dan meningkatkan risiko komplikasi yang mengancam jiwa.

Penjelasan Detail:

Hipertensi atau tekanan darah tinggi adalah kondisi kronis yang memerlukan pengobatan berkelanjutan. Menghentikan obat hipertensi secara tiba-tiba dapat menyebabkan rebound hypertension, yaitu kondisi dimana tekanan darah naik kembali bahkan lebih tinggi dari sebelumnya. Hal ini dapat menyebabkan komplikasi serius seperti stroke, serangan jantung, gagal jantung, kerusakan ginjal, dan masalah pada mata. Perubahan atau penghentian obat hipertensi harus dilakukan di bawah pengawasan dokter yang akan mengevaluasi kondisi pasien, menyesuaikan dosis secara bertahap, atau mengganti dengan obat lain jika diperlukan. Pasien tidak boleh menghentikan atau mengurangi dosis obat hipertensi sendiri tanpa konsultasi medis.

Referensi:

American Heart Association - https://www.heart.org/en/health-topics/high-blood-pressure

Mayo Clinic - https://www.mayoclinic.org/diseases-conditions/high-blood-pressure`;
    }
    
    // Check for TB brain/meningitis content
    if (
      input.toLowerCase().includes("tuberkulosis") && 
      (input.toLowerCase().includes("otak") || input.toLowerCase().includes("meningitis"))
    ) {
      return `HASIL VERIFIKASI: FAKTA

Status: Informasi ini adalah FAKTA dan akurat secara medis.

Penjelasan Singkat:

Informasi bahwa bakteri tuberkulosis (TB) dapat menyerang otak adalah benar. TB otak atau meningitis tuberkulosis dapat terjadi ketika bakteri TB menyebar dari paru-paru ke otak melalui aliran darah atau getah bening. Meningitis tuberkulosis adalah bentuk TB yang paling serius dan dapat berakibat fatal jika tidak ditangani dengan tepat. Vaksin BCG dapat membantu mencegah TB berat termasuk meningitis TB pada anak-anak.

Penjelasan Detail:

Tuberkulosis (TB) tidak hanya menyerang paru-paru. Meskipun paru-paru adalah tempat utama infeksi, penyakit ini dapat menyebar ke berbagai organ lain melalui aliran darah atau penyebaran langsung dari organ yang berdekatan. Meningitis tuberkulosis adalah salah satu bentuk TB ekstrapulmoner yang paling serius dan paling berbahaya dengan risiko kematian tinggi. Di daerah dengan beban TB tinggi, meningitis TB biasanya terjadi pada anak usia 0-5 tahun. Vaksin BCG telah terbukti dapat membantu mencegah meningitis TB pada anak-anak. Gejala meliputi demam ringan, sakit kepala terus-menerus, mual, dan mengantuk yang dapat berkembang menjadi koma. Selain otak, TB ekstrapulmoner juga dapat menyerang ginjal, peritoneum, perikardium, tulang, dan organ lainnya. Diagnosis dilakukan melalui pemeriksaan mikroskopis, kultur, dan tes diagnostik molekuler. Pengobatan menggunakan antibiotik multipel selama 6-9 bulan, dengan meningitis TB memerlukan 9-12 bulan.

Referensi:

MSD Manuals - Extrapulmonary Tuberculosis - https://www.msdmanuals.com/professional/infectious-diseases/mycobacteria/extrapulmonary-tuberculosis-tb

World Health Organization (WHO) - Tuberculosis - https://www.who.int/health-topics/tuberculosis`;
    }
    
    // Check for MSD Manuals link about extrapulmonary TB
    if (isLink && (input.includes("msdmanuals.com") && input.includes("extrapulmonary-tuberculosis"))) {
      return `HASIL VERIFIKASI: FAKTA

Status: Informasi ini adalah FAKTA dan akurat secara medis.

Penjelasan Singkat:

Informasi bahwa bakteri tuberkulosis (TB) dapat menyerang otak adalah benar. TB otak atau meningitis tuberkulosis dapat terjadi ketika bakteri TB menyebar dari paru-paru ke otak melalui aliran darah atau getah bening. Meningitis tuberkulosis adalah bentuk TB yang paling serius dan dapat berakibat fatal jika tidak ditangani dengan tepat. Vaksin BCG dapat membantu mencegah TB berat termasuk meningitis TB pada anak-anak.

Penjelasan Detail:

Tuberkulosis (TB) tidak hanya menyerang paru-paru. Meskipun paru-paru adalah tempat utama infeksi, penyakit ini dapat menyebar ke berbagai organ lain melalui aliran darah atau penyebaran langsung dari organ yang berdekatan. Meningitis tuberkulosis adalah salah satu bentuk TB ekstrapulmoner yang paling serius dan paling berbahaya dengan risiko kematian tinggi. Di daerah dengan beban TB tinggi, meningitis TB biasanya terjadi pada anak usia 0-5 tahun. Vaksin BCG telah terbukti dapat membantu mencegah meningitis TB pada anak-anak. Gejala meliputi demam ringan, sakit kepala terus-menerus, mual, dan mengantuk yang dapat berkembang menjadi koma. Selain otak, TB ekstrapulmoner juga dapat menyerang ginjal, peritoneum, perikardium, tulang, dan organ lainnya. Diagnosis dilakukan melalui pemeriksaan mikroskopis, kultur, dan tes diagnostik molekuler. Pengobatan menggunakan antibiotik multipel selama 6-9 bulan, dengan meningitis TB memerlukan 9-12 bulan.

Referensi:

MSD Manuals - Extrapulmonary Tuberculosis - https://www.msdmanuals.com/professional/infectious-diseases/mycobacteria/extrapulmonary-tuberculosis-tb

World Health Organization (WHO) - Tuberculosis - https://www.who.int/health-topics/tuberculosis`;
    }
    
    // Check for the specific Facebook link about chickenpox
    if (isLink && input && (input.includes("facebook.com/share/1BYfuP3uMZ") || input.includes("1BYfuP3uMZ"))) {
      return `HASIL VERIFIKASI: HOAX

Status: Informasi ini adalah HOAX dan berpotensi berbahaya untuk kesehatan.

Penjelasan Singkat:

Postingan ini berisi informasi yang salah tentang pengobatan cacar air. Beberapa klaim dapat membahayakan kesehatan, seperti penggunaan alkohol tinggi yang dapat menyebabkan iritasi kulit parah, larangan mandi yang justru meningkatkan risiko infeksi, dan rekomendasi obat yang tidak terbukti secara medis. Pengobatan cacar air yang benar harus didasarkan pada bukti ilmiah dan rekomendasi medis yang terpercaya.

Penjelasan Detail:

Postingan ini berisi klaim yang salah tentang pengobatan cacar air. Penggunaan alkohol 95-99% untuk mengobati gatal sangat berbahaya karena dapat menyebabkan iritasi kulit parah dan luka bakar kimia. Larangan mandi juga salah karena mandi justru penting untuk menjaga kebersihan dan mencegah infeksi sekunder. Mandi air hangat dengan sabun lembut dapat membantu mengurangi gatal. Postingan juga merekomendasikan obat MA POH (MA QING) yang tidak ada bukti ilmiahnya dan tidak terdaftar di Badan POM. Larangan makanan tertentu seperti hati, telur, atau ikan juga tidak memiliki bukti ilmiah. Postingan juga salah dalam terminologi dengan menyamakan cacar air (Varicella) dengan smallpox yang merupakan penyakit berbeda. Pengobatan cacar air yang benar meliputi istirahat, minum air putih yang banyak, mandi air hangat dengan sabun lembut, lotion kalamin untuk mengurangi gatal, parasetamol untuk demam, dan antihistamin untuk mengurangi gatal. Konsultasi dokter diperlukan untuk kasus berat atau kelompok risiko tinggi.

Referensi:

Centers for Disease Control and Prevention (CDC) - https://www.cdc.gov/chickenpox/about/index.html

World Health Organization (WHO) - https://www.who.int/health-topics/varicella`;
    }
    return null;
  };

  const handleSend = async () => {
    if (!input.trim() && !selectedFile && !isLinkMode) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: isLinkMode ? "" : (input || (selectedFile ? "File yang diunggah" : "")),
      timestamp: new Date(),
      file: selectedFile || undefined,
      link: isLinkMode ? input : undefined,
    };

    setMessages((prev) => [...prev, userMessage]);
    const userInput = input;
    setInput("");
    setSelectedFile(null);
    setIsLinkMode(false);

    // Check for hardcoded response
    const hardcodedResponse = userInput || selectedFile 
      ? getHardcodedResponse(userInput || "", isLinkMode, selectedFile?.name) 
      : null;

    // Show typing indicator
    setIsTyping(true);

    // Simulate processing time (3.5-4 seconds before starting to type - more noticeable)
    const processingTime = hardcodedResponse ? 3500 : 4000;

    setTimeout(() => {
      setIsTyping(false);
      
      const messageId = (Date.now() + 1).toString();
      const fullResponse = hardcodedResponse || `HASIL VERIFIKASI: SEDANG DIPROSES

Status: Informasi Anda sedang dianalisis oleh sistem AI.`;
      
      // Create message with empty content first
      const botMessage: Message = {
        id: messageId,
        type: "bot",
        content: "",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setTypingMessageId(messageId);
      
      // Start typing effect
      let currentIndex = 0;
      const typingSpeed = 5; // milliseconds per character (faster typing)
      
      typingIntervalRef.current = setInterval(() => {
        if (currentIndex < fullResponse.length) {
          setTypingMessage(fullResponse.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          if (typingIntervalRef.current) {
            clearInterval(typingIntervalRef.current);
            typingIntervalRef.current = null;
          }
          // Update the message with full content
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === messageId
                ? { ...msg, content: fullResponse }
                : msg
            )
          );
          setTypingMessage("");
          setTypingMessageId(null);
        }
      }, typingSpeed);
    }, processingTime);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setIsLinkMode(false);
      setInput("");
    }
  };

  const handleLinkMode = () => {
    setIsLinkMode(true);
    setSelectedFile(null);
    setInput("");
  };

  const handleTextMode = () => {
    setIsLinkMode(false);
    setSelectedFile(null);
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="flex h-full flex-col bg-white">
      {/* Header */}
      <div className="flex-shrink-0 border-b border-soft-mint bg-soft-mint/20 px-6 py-4">
        <h2 className="font-heading text-xl text-teal-deep">Chatbot Verifikasi</h2>
        <p className="font-body text-sm text-dark mt-1">AI Assistant untuk Verifikasi Hoaks</p>
      </div>

      {/* Messages Container - Scrollable */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto px-6 py-4 space-y-4"
      >
        <AnimatePresence>
          {messages.map((message) => {
            // Use typing message if this message is currently being typed
            const displayContent = typingMessageId === message.id ? typingMessage : message.content;
            
            return (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-3 ${
                  message.type === "user"
                    ? "bg-emerald-health text-white"
                    : "bg-soft-mint text-teal-deep"
                }`}
              >
                {message.file && (
                  <div className="mb-2 flex items-center gap-2 text-sm">
                    <FileText className="w-4 h-4" />
                    <span className="truncate">{message.file.name}</span>
                  </div>
                )}
                {message.link && (
                  <div className={`mb-2 flex items-center gap-2 text-sm ${message.type === "user" ? "text-white" : "text-teal-deep"}`}>
                    <Link2 className="w-4 h-4 flex-shrink-0" />
                    <a
                      href={message.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`underline break-all hover:opacity-80 ${message.type === "user" ? "text-white" : "text-emerald-health"}`}
                    >
                      {message.link}
                    </a>
                  </div>
                )}
                {displayContent && (
                <div className="font-body text-sm lg:text-base whitespace-pre-wrap break-words">
                  {displayContent.split('\n\n').map((paragraph, pIdx) => {
                    if (!paragraph.trim()) return null;
                    
                    // Format first line as header if it's all caps or contains "HASIL VERIFIKASI"
                    if (paragraph.includes('HASIL VERIFIKASI:')) {
                      const lines = paragraph.split('\n');
                      return (
                        <div key={pIdx} className="mb-4">
                          <h3 className="font-heading font-bold text-base mb-2 text-alert-orange">
                            {lines[0]}
                          </h3>
                          {lines.slice(1).map((line, lIdx) => {
                            if (line.startsWith('Status:')) {
                              return (
                                <p key={lIdx} className="font-semibold mb-3 text-teal-deep">
                                  {line}
                                </p>
                              );
                            }
                            if (line.startsWith('Penjelasan Singkat:')) {
                              return (
                                <h4 key={lIdx} className="font-heading font-semibold text-sm mt-4 mb-2">
                                  {line}
                                </h4>
                              );
                            }
                            if (line.startsWith('Penjelasan Detail:')) {
                              return (
                                <h4 key={lIdx} className="font-heading font-semibold text-sm mt-4 mb-2">
                                  {line}
                                </h4>
                              );
                            }
                            if (line.startsWith('Referensi:')) {
                              return (
                                <h4 key={lIdx} className="font-heading font-semibold text-sm mt-4 mb-2">
                                  {line}
                                </h4>
                              );
                            }
                            if (line.includes('https://')) {
                              // Extract URL from line
                              const urlMatch = line.match(/https?:\/\/[^\s]+/);
                              if (urlMatch) {
                                const url = urlMatch[0];
                                const beforeUrl = line.substring(0, line.indexOf(url));
                                const afterUrl = line.substring(line.indexOf(url) + url.length);
                                return (
                                  <p key={lIdx} className="mb-2">
                                    {beforeUrl}
                                    <a 
                                      href={url} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="text-emerald-health underline hover:text-teal-deep break-all"
                                    >
                                      {url}
                                    </a>
                                    {afterUrl}
                                  </p>
                                );
                              }
                            }
                            return (
                              <p key={lIdx} className="mb-2 leading-relaxed">
                                {line}
                              </p>
                            );
                          })}
                        </div>
                      );
                    }
                    
                    // Regular paragraph - check for URLs
                    const urlRegex = /(https?:\/\/[^\s]+)/g;
                    if (urlRegex.test(paragraph)) {
                      const parts = paragraph.split(urlRegex);
                      return (
                        <p key={pIdx} className="mb-3 leading-relaxed">
                          {parts.map((part, partIdx) => {
                            if (part.match(/^https?:\/\//)) {
                              return (
                                <a
                                  key={partIdx}
                                  href={part}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-emerald-health underline hover:text-teal-deep break-all"
                                >
                                  {part}
                                </a>
                              );
                            }
                            return <span key={partIdx}>{part}</span>;
                          })}
                        </p>
                      );
                    }
                    
                    return (
                      <p key={pIdx} className="mb-3 leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  })}
                  {typingMessageId === message.id && (
                    <span className="inline-block w-2 h-4 bg-teal-deep ml-1 animate-pulse" />
                  )}
                </div>
                )}
                <p
                  className={`text-xs mt-2 ${
                    message.type === "user" ? "text-white/70" : "text-teal-deep/70"
                  }`}
                >
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </motion.div>
            );
          })}
        </AnimatePresence>
        
        {/* Typing Indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex justify-start"
            >
              <div className="bg-soft-mint text-teal-deep rounded-lg px-4 py-3 max-w-[80%]">
                <div className="flex items-center gap-1">
                  <span className="font-body text-sm">Sedang menganalisis</span>
                  <div className="flex gap-1 ml-2">
                    <motion.span
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                        delay: 0,
                      }}
                      className="w-2 h-2 bg-teal-deep rounded-full"
                    />
                    <motion.span
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                        delay: 0.2,
                      }}
                      className="w-2 h-2 bg-teal-deep rounded-full"
                    />
                    <motion.span
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                        delay: 0.4,
                      }}
                      className="w-2 h-2 bg-teal-deep rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="flex-shrink-0 border-t border-soft-mint bg-soft-mint/10 p-4">
        {/* Mode Selector */}
        <div className="flex gap-2 mb-3">
          <button
            onClick={handleTextMode}
            className={`px-3 py-1.5 rounded-lg text-xs font-body font-semibold transition-colors ${
              !isLinkMode && !selectedFile
                ? "bg-emerald-health text-white"
                : "bg-white text-emerald-health border border-emerald-health hover:bg-soft-mint"
            }`}
          >
            <MessageSquare className="w-4 h-4 inline mr-1.5" />
            Text
          </button>
          <button
            onClick={handleLinkMode}
            className={`px-3 py-1.5 rounded-lg text-xs font-body font-semibold transition-colors ${
              isLinkMode
                ? "bg-emerald-health text-white"
                : "bg-white text-emerald-health border border-emerald-health hover:bg-soft-mint"
            }`}
          >
            <Link2 className="w-4 h-4 inline mr-1.5" />
            Link
          </button>
          <button
            onClick={() => fileInputRef.current?.click()}
            className={`px-3 py-1.5 rounded-lg text-xs font-body font-semibold transition-colors ${
              selectedFile
                ? "bg-emerald-health text-white"
                : "bg-white text-emerald-health border border-emerald-health hover:bg-soft-mint"
            }`}
          >
            <Paperclip className="w-4 h-4 inline mr-1.5" />
            File
          </button>
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleFileSelect}
            accept="image/*,.pdf,.doc,.docx"
          />
        </div>

        {/* Selected File Display */}
        {selectedFile && (
          <div className="mb-3 flex items-center gap-2 p-2 bg-soft-mint rounded-lg">
            <FileText className="w-4 h-4 text-emerald-health" />
            <span className="flex-1 font-body text-sm text-dark truncate">
              {selectedFile.name}
            </span>
            <button
              onClick={removeFile}
              className="text-emerald-health hover:text-teal-deep"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Input Field */}
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder={
              isLinkMode
                ? "Paste link di sini..."
                : selectedFile
                ? "Tambahkan pesan (opsional)..."
                : "Tulis pertanyaan atau informasi yang ingin diverifikasi..."
            }
            className="flex-1 px-4 py-3 rounded-lg border border-soft-mint focus:outline-none focus:ring-2 focus:ring-emerald-health focus:border-transparent font-body text-sm"
          />
          <Button
            onClick={handleSend}
            disabled={!input.trim() && !selectedFile && !isLinkMode}
            rightIcon={<Send className="w-4 h-4" />}
          >
            Kirim
          </Button>
        </div>
      </div>
    </div>
  );
}

