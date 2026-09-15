import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: '#0A0C0E',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#EDE7DC',
          borderRadius: 4,
          fontWeight: 800,
          border: '1px solid rgba(237, 231, 220, 0.25)',
        }}
      >
        MG
      </div>
    ),
    {
      ...size,
    }
  );
}
