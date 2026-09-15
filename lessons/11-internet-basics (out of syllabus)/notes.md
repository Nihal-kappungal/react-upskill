# Internet Basics — Notes

## 1. Domain Name

A domain name is a human-readable address used to access a website.

Example:

google.com

Instead of remembering an IP address, we use a domain name.

---

## 2. DNS

DNS = Domain Name System.

Its job is to translate a domain name into an IP address.

Example:

google.com
↓
DNS
↓
IP Address

The browser can then communicate with the server using the IP address.

---

## 3. Subdomain

A subdomain is a domain that exists under another domain.

Example:

example.com

www.example.com
api.example.com
admin.example.com

---

## 4. Server

A server is a computer that provides resources or services to other computers over a network.

For a website, the server can store:

- HTML
- CSS
- JavaScript
- Images
- Backend code
- Databases

---

## 5. Hosting

Hosting means making our application/files available on a server so users can access them through the internet.

### Shared Hosting

Multiple websites use resources on the same server.

### Cloud Hosting

We can rent computing resources from cloud providers.

Examples:

- AWS
- Azure
- DigitalOcean

---

## 6. Web Server

A web server receives HTTP requests and sends responses.

Examples:

- Apache
- Nginx

---

## 7. HTTP vs HTTPS

HTTP sends data without transport encryption.

HTTPS uses encryption through TLS.

HTTPS is what we normally want for modern websites.

---

## 8. SSH

SSH allows us to securely connect to a remote server through a terminal.

Example:

Local Computer
↓
SSH
↓
Remote Server

---

## 9. SFTP

SFTP = SSH File Transfer Protocol.

It can be used to securely transfer files between our computer and a remote server.

---

## 10. Basic Website Flow

User
↓
Internet
↓
DNS
↓
IP Address
↓
Web Server
↓
Application
↓
Response
↓
User's Browser
