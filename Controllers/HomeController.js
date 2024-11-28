const homeController = async (req, res) => {
    return res.status(200).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Caption Fetcher API</title>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
            <style>
                :root {
                    --primary-color: #3498db;
                    --secondary-color: #2ecc71;
                    --background-color: #f7f9fc;
                    --text-dark: #2c3e50;
                    --text-light: #7f8c8d;
                }

                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: 'Inter', Arial, sans-serif;
                    background-color: var(--background-color);
                    line-height: 1.6;
                    color: var(--text-dark);
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                }

                .gradient-bg {
                    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                    color: white;
                    padding: 40px 20px;
                    text-align: center;
                }

                .container {
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 40px 20px;
                    flex-grow: 1;
                }

                .card {
                    background-color: white;
                    border-radius: 12px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
                    padding: 40px;
                    transition: transform 0.3s ease;
                }

                .card:hover {
                    transform: translateY(-10px);
                }

                .endpoint {
                    background-color: #f8f9fa;
                    border-left: 4px solid var(--primary-color);
                    margin-bottom: 20px;
                    padding: 20px;
                    border-radius: 8px;
                    transition: all 0.3s ease;
                }

                .endpoint:hover {
                    background-color: #f1f3f5;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
                }

                .endpoint h3 {
                    color: var(--primary-color);
                    margin-bottom: 15px;
                    font-weight: 600;
                }

                .endpoint-example {
                    background-color: #e9ecef;
                    padding: 12px;
                    border-radius: 6px;
                    font-family: monospace;
                    color: #495057;
                    margin: 10px 0;
                    word-break: break-all;
                }

                .code-highlight {
                    background-color: rgba(52, 152, 219, 0.1);
                    color: var(--primary-color);
                    padding: 2px 6px;
                    border-radius: 4px;
                    font-family: monospace;
                }

                footer {
                    background-color: #f1f3f5;
                    text-align: center;
                    padding: 20px;
                    color: var(--text-light);
                }

                @media (max-width: 768px) {
                    .card {
                        padding: 20px;
                    }
                }
            </style>
        </head>
        <body>
            <header class="gradient-bg">
                <h1>Caption Fetcher API</h1>
                <p>Effortlessly Fetch and Translate YouTube Video Captions</p>
            </header>

            <div class="container">
                <div class="card">
                    <h2 style="margin-bottom: 30px; color: var(--text-dark);">API Endpoints</h2>

                    <div class="endpoint">
                        <h3>1. Fetch Video Captions</h3>
                        <p>Retrieve captions for a YouTube video using its video ID.</p>
                        <p>
                            <strong>Endpoint:</strong> 
                            <span class="code-highlight">/caption/:videoId</span>
                        </p>
                        <div class="endpoint-example">
                            GET https://youtube-caption-api.vercel.app/caption/E4WlUXrJgy4
                        </div>
                    </div>

                    <div class="endpoint">
                        <h3>2. Translate Captions</h3>
                        <p>Fetch and translate video captions to a specific language.</p>
                        <p>
                            <strong>Endpoint:</strong> 
                            <span class="code-highlight">/translate/:lang/:videoId</span>
                        </p>
                        <div class="endpoint-example">
                            GET https://youtube-caption-api.vercel.app/translate/es/E4WlUXrJgy4
                        </div>
                        <p>
                            <strong>Language Codes:</strong> Use 
                            <span class="code-highlight">ISO 639-1</span> 
                            (e.g., en, es, fr)
                        </p>
                    </div>
                </div>
            </div>

            <footer>
                &copy; 2024 Caption Fetcher API • Developed with ❤️ by Your Team
            </footer>
        </body>
        </html>
    `);
};

module.exports = homeController;