import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'GASTROTOUR 2025 - Experiencia Gastronómica Vegana en Buenos Aires'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui',
          position: 'relative',
        }}
      >
        {/* Decorative circles */}
        <div style={{
          position: 'absolute',
          top: '80px',
          left: '120px',
          width: '120px',
          height: '120px',
          border: '2px solid rgba(34, 197, 94, 0.2)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '100px',
          right: '150px',
          width: '150px',
          height: '150px',
          border: '2px solid rgba(34, 197, 94, 0.2)',
          borderRadius: '50%',
        }} />

        {/* Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '50px',
        }}>
          <svg width="180" height="180" viewBox="0 0 128 128" fill="none">
            {/* Leaf */}
            <path d="M64 35C64 35 50 42 50 58C50 74 64 82 64 82C64 82 78 74 78 58C78 42 64 35 64 35Z"
                  fill="#22c55e" opacity="0.9"/>
            <path d="M64 35C64 35 64 35 64 82" stroke="#16a34a" stroke-width="2" stroke-linecap="round"/>

            {/* Fork */}
            <g transform="translate(38, 70)">
              <line x1="8" y1="0" x2="8" y2="25" stroke="#f5f5f5" stroke-width="2.5" stroke-linecap="round"/>
              <line x1="3" y1="0" x2="3" y2="12" stroke="#f5f5f5" stroke-width="2.5" stroke-linecap="round"/>
              <line x1="8" y1="0" x2="8" y2="12" stroke="#f5f5f5" stroke-width="2.5" stroke-linecap="round"/>
              <line x1="13" y1="0" x2="13" y2="12" stroke="#f5f5f5" stroke-width="2.5" stroke-linecap="round"/>
            </g>

            {/* Knife */}
            <g transform="translate(72, 70)">
              <line x1="8" y1="0" x2="8" y2="25" stroke="#f5f5f5" stroke-width="3" stroke-linecap="round"/>
              <path d="M5 0L11 0L8 8L5 0Z" fill="#f5f5f5"/>
            </g>
          </svg>
        </div>

        {/* Year badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          marginBottom: '40px',
        }}>
          <div style={{
            width: '50px',
            height: '2px',
            background: 'rgba(34, 197, 94, 0.4)',
          }} />
          <span style={{
            color: '#22c55e',
            fontSize: '28px',
            fontWeight: '500',
            letterSpacing: '0.3em',
          }}>2025</span>
          <div style={{
            width: '50px',
            height: '2px',
            background: 'rgba(34, 197, 94, 0.4)',
          }} />
        </div>

        {/* Main title */}
        <h1 style={{
          fontSize: '120px',
          fontWeight: 'bold',
          color: '#f5f5f5',
          margin: '0 0 30px 0',
          letterSpacing: '-0.02em',
        }}>
          GASTROTOUR
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '40px',
          color: '#a3a3a3',
          margin: '0 0 20px 0',
          letterSpacing: '0.05em',
        }}>
          Experiencia Gastronómica Vegana
        </p>

        {/* Location */}
        <p style={{
          fontSize: '32px',
          color: '#737373',
          margin: '0',
        }}>
          Buenos Aires • 10 de Noviembre
        </p>

        {/* Decorative dots */}
        <div style={{
          display: 'flex',
          gap: '15px',
          marginTop: '40px',
        }}>
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: '#22c55e',
          }} />
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: 'rgba(34, 197, 94, 0.6)',
          }} />
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: 'rgba(34, 197, 94, 0.3)',
          }} />
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
