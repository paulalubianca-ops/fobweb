import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const HOME_PHOTOS = [
  { src: "https://media.base44.com/images/public/69b84f0f01a311431532ce14/751a69d38_Photo-5673.jpg", alt: "Founder talk at Barcelona Finance Hub" },
  { src: "https://media.base44.com/images/public/69b84f0f01a311431532ce14/72103fd0f_Photo-5903.jpg", alt: "Founder presenting at FoB event" },
  { src: "https://media.base44.com/images/public/69b84f0f01a311431532ce14/4f2d93862_Photo-5938.jpg", alt: "Speaker presenting startup case" },
  { src: "https://media.base44.com/images/public/69b84f0f01a311431532ce14/433aad1ac_Photo-6078.jpg", alt: "Storytelling masterclass" },
  { src: "https://media.base44.com/images/public/69b84f0f01a311431532ce14/0da3128c2_Photo-6590.jpg", alt: "Networking on rooftop" },
  { src: "https://media.base44.com/images/public/69b84f0f01a311431532ce14/5a10f02a5_Photo-6599.jpg", alt: "FoB community group photo" },
];

const STUDENTS_PHOTOS = [
  { src: "https://media.base44.com/images/public/69b84f0f01a311431532ce14/e829dba32_Photo-5791.jpg", alt: "Students asking questions" },
  { src: "https://media.base44.com/images/public/69b84f0f01a311431532ce14/8f4e12b0b_Photo-5811.jpg", alt: "Student engaging at FoB event" },
  { src: "https://media.base44.com/images/public/69b84f0f01a311431532ce14/b9aa5c98d_Photo-6248.jpg", alt: "Young students listening intently" },
  { src: "https://media.base44.com/images/public/69b84f0f01a311431532ce14/2512f4425_Photo-6499.jpg", alt: "Students networking" },
  { src: "https://media.base44.com/images/public/69b84f0f01a311431532ce14/9a5f8f1ea_Photo-6539.jpg", alt: "Interview at FoB event" },
  { src: "https://media.base44.com/images/public/69b84f0f01a311431532ce14/9e94c7165_Photo-6576.jpg", alt: "Rooftop networking event" },
];

export default function PhotoGallery({ variant = "home" }) {
  const [lightbox, setLightbox] = useState(null);
  const photos = variant === "students" ? STUDENTS_PHOTOS : HOME_PHOTOS;

  return (
    <section className="py-20 bg-white" aria-label="Event photos">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <p className="text-teal-600 text-sm font-semibold tracking-wide mb-2">IN THE ROOM</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-teal-900">
            {variant === "students" ? "Where students show up." : "Where things happen."}
          </h2>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((photo, i) => (
            <motion.button
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              onClick={() => setLightbox(photo)}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                i === 0 ? 'row-span-2' : ''
              }`}
            >
              <div className={`w-full ${i === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'} overflow-hidden`}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/20 transition-colors duration-300 rounded-2xl" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[90vh] max-w-full rounded-xl object-contain"
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}