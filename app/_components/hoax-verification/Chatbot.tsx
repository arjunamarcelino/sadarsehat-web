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
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() && !selectedFile && !isLinkMode) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input || (isLinkMode ? "Link yang dikirim" : "File yang diunggah"),
      timestamp: new Date(),
      file: selectedFile || undefined,
      link: isLinkMode ? input : undefined,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setSelectedFile(null);
    setIsLinkMode(false);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: "Terima kasih! Saya sedang menganalisis informasi yang Anda berikan. Hasil verifikasi akan segera tersedia...",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
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
          {messages.map((message) => (
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
                  <div className="mb-2 flex items-center gap-2 text-sm">
                    <Link2 className="w-4 h-4" />
                    <a
                      href={message.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline truncate"
                    >
                      {message.link}
                    </a>
                  </div>
                )}
                <p className="font-body text-sm lg:text-base whitespace-pre-wrap break-words">
                  {message.content}
                </p>
                <p
                  className={`text-xs mt-2 ${
                    message.type === "user" ? "text-white/70" : "text-teal-deep/70"
                  }`}
                >
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </motion.div>
          ))}
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

