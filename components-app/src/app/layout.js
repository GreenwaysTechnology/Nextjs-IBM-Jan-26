
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{marginTop:100,marginLeft:200}}>
          {children}
        </div>
      </body>
    </html>
  );
}
