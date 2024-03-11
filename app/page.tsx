import ImageCarousel from '@/components/imageCarousel/ImageCarousel'
import React from 'react'

export default function Home() {
  return (
    <main>
      <ImageCarousel style={{ minHeight: "100dvh" }}>
        <div>
          <h1 className='fadeIn'>Header 1</h1>
          <p>Some text1</p> <button>click 1</button>
        </div>

        <div>
          <h1 className='fadeIn'>Header 2</h1>
          <p>Some text2</p> <button>Click 2</button>
        </div>

        <div>
          <h1 className='fadeIn'>Header 3</h1>
          <p>Some text3</p> <button>Click 3</button>
        </div>
      </ImageCarousel>
    </main>
  )
}
