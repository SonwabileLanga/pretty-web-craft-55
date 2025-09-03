# Afrohost Deployment Guide

## Files to Upload
Upload these files from the `dist` folder to your Afrohost `public_html` directory:

```
public_html/
├── index.html          (Main HTML file)
├── .htaccess          (URL rewriting rules)
├── favicon.ico        (Website icon)
├── placeholder.svg    (Placeholder image)
├── robots.txt         (SEO file)
└── assets/            (CSS, JS, and images)
    ├── index-Ddj6onS2.css
    ├── index-Umu34xYj.js
    └── network-background-5EFJJF4t.jpg
```

## Deployment Steps

### Method 1: cPanel File Manager
1. Login to your Afrohost cPanel
2. Open File Manager
3. Navigate to `public_html` folder
4. Upload all files from the `dist` folder
5. Set permissions: 644 for files, 755 for folders

### Method 2: FTP/SFTP
1. Use FTP client (FileZilla, WinSCP, etc.)
2. Connect to your Afrohost server
3. Upload contents of `dist` folder to `public_html`

### Method 3: Git Deployment (if supported)
1. Push your code to a Git repository
2. Connect Afrohost to your Git repo
3. Set build command: `npm run build`
4. Set publish directory: `dist`

## Troubleshooting

### If site doesn't load:
- Check that `index.html` is in the root of `public_html`
- Verify `.htaccess` file is uploaded
- Check file permissions (644 for files, 755 for folders)
- Clear browser cache

### If assets don't load:
- Ensure `assets` folder is uploaded completely
- Check that CSS and JS files are in the `assets` folder
- Verify file permissions

### If you get 404 errors:
- Make sure `.htaccess` file is present
- Check that mod_rewrite is enabled on your server

## Contact Support
If issues persist, contact Afrohost support with:
- Your domain name
- Error messages you're seeing
- Screenshots of your file structure in cPanel
