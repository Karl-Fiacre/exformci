import React, { useState, useEffect } from 'react';
import { MessageCircle, Send, X, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export const Chatbot: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');

  // Reset messages with correct greeting when language changes or component opens
  useEffect(() => {
    setMessages([
      {
        id: 1,
        text: t('chatbot.greeting'),
        isBot: true,
        timestamp: new Date()
      }
    ]);
  }, [t]);

  const getResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('service') || lowerMessage.includes('offre')) {
      return t('chatbot.services');
    }
    if (lowerMessage.includes('laboratoire') || lowerMessage.includes('laboratory') || lowerMessage.includes('analyse')) {
      return t('chatbot.laboratory');
    }
    if (lowerMessage.includes('formation') || lowerMessage.includes('training') || lowerMessage.includes('cours')) {
      return t('chatbot.training');
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('adresse') || lowerMessage.includes('téléphone')) {
      return t('chatbot.contact');
    }

    return t('chatbot.default');
  };

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-accent hover:bg-accent-light shadow-2xl animate-bounce-gentle"
        size="icon"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 animate-scale-in">
          <Card className="w-80 h-96 bg-white/95 backdrop-blur-xl border-0 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-accent p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Assistant EXFORM</div>
                    <div className="text-xs opacity-80">
                      {t('chatbot.online')}
                    </div>
                  </div>
                </div>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-white hover:bg-white/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-64">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm animate-fade-in ${
                      message.isBot
                        ? 'bg-muted text-muted-foreground'
                        : 'bg-accent text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-muted/50">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t('chatbot.placeholder')}
                  className="flex-1 border-0 bg-white/80 focus:ring-2 focus:ring-accent"
                />
                <Button
                  onClick={sendMessage}
                  size="icon"
                  className="bg-accent hover:bg-accent-light text-white"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};
