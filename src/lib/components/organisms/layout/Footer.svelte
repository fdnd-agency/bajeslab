<script>
    import NewsletterForm from '$lib/components/molecules/NewsletterForm/NewsletterForm.svelte';
</script>

<footer>
    <div class="footer-wrapper">
        <div class="footer-brand">
            <h3 class="subtitle">Healthy Urban Living Lab</h3>
            <p>Samen bouwen aan een gezonde, stedelijke toekomst.</p>
        </div>

        <nav>
            <div class="nav-group">
                <h4>Navigatie</h4>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/over-ons">Over ons</a></li>
                    <li><a href="/projecten">Projecten</a></li>
                    <li><a href="/netwerk">Netwerk</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>

            <div class="contact-info">
                <h4>Contact</h4>
                <a class="contact-info-item" href="https://www.google.com/maps/search/Bijlmerbajes,+H.J.E.+Wenckebachweg+48,+1096+AH+Amsterdam/@52.3369631,4.9225222,17z?entry=ttu&g_ep=EgoyMDI1MTAyNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 27 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.0566 25.8059C12.8027 25.8059 12.5851 25.7277 12.4038 25.5713C12.2225 25.4149 12.0865 25.2096 11.9958 24.9554C11.6512 23.8606 11.216 22.8343 10.6902 21.8763C10.1824 20.9184 9.46613 19.7943 8.5413 18.504C7.61648 17.2137 6.86393 15.982 6.28365 14.809C5.7215 13.636 5.44043 12.2187 5.44043 10.5569C5.44043 8.26958 6.17485 6.33413 7.64368 4.75059C9.13065 3.14749 10.935 2.34595 13.0566 2.34595C15.1783 2.34595 16.9735 3.14749 18.4423 4.75059C19.9293 6.33413 20.6728 8.26958 20.6728 10.5569C20.6728 12.336 20.3555 13.8218 19.7208 15.0143C19.1042 16.1873 18.3879 17.3505 17.5719 18.504C16.5927 19.9116 15.8492 21.0846 15.3415 22.023C14.8519 22.9418 14.4438 23.9193 14.1174 24.9554C14.0268 25.2291 13.8817 25.4442 13.6822 25.6006C13.5009 25.7374 13.2923 25.8059 13.0566 25.8059ZM13.0566 13.4894C13.8182 13.4894 14.462 13.2059 14.9879 12.639C15.5137 12.072 15.7767 11.378 15.7767 10.5569C15.7767 9.73582 15.5137 9.0418 14.9879 8.47485C14.462 7.9079 13.8182 7.62443 13.0566 7.62443C12.295 7.62443 11.6512 7.9079 11.1254 8.47485C10.5995 9.0418 10.3365 9.73582 10.3365 10.5569C10.3365 11.378 10.5995 12.072 11.1254 12.639C11.6512 13.2059 12.295 13.4894 13.0566 13.4894Z" fill="currentColor"/>
                    </svg>
                    <p>1096 AH Amsterdam</p>
                </a>
                <a class="contact-info-item" href="tel:+0306097222">
                    <svg width="24" height="24" viewBox="0 0 27 29" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.31152 0.5C5.438 0.5 5.53862 0.536224 5.63281 0.612305C5.7639 0.718254 5.87949 0.851138 5.97852 1.01562L8.92578 7.04102L8.93164 7.05273C9.04095 7.26226 9.07604 7.49312 9.02246 7.76758C8.96492 8.06209 8.84716 8.29289 8.67676 8.47656L7.32227 9.93652C7.21006 10.0575 7.15017 10.2062 7.11426 10.3223C7.07924 10.4355 7.05078 10.5636 7.05078 10.6934V10.7373L7.05859 10.7803C7.1424 11.2544 7.32603 11.7735 7.59473 12.333V12.334C7.8313 12.8438 8.18832 13.4487 8.65625 14.1445C9.01755 14.6818 9.48721 15.2725 10.0615 15.916L10.6709 16.5781C11.5075 17.4992 12.2626 18.2284 12.9355 18.7568C13.5895 19.2702 14.1531 19.6609 14.6201 19.918C15.0596 20.1598 15.4459 20.3356 15.752 20.4014V20.4004L16.0967 20.4756L16.1484 20.4863H16.2021C16.2686 20.4863 16.3352 20.4758 16.3955 20.4609L16.5508 20.4121C16.6667 20.3704 16.8125 20.3018 16.9277 20.1777L16.9307 20.1748L18.4932 18.4609C18.7331 18.2355 18.9944 18.1338 19.2979 18.1338C19.5542 18.1338 19.6968 18.1835 19.7725 18.2324L19.8965 18.3125H19.9268L25.1279 21.624H25.1289C25.4156 21.8154 25.5541 22.0283 25.6025 22.2656C25.6359 22.5694 25.5537 22.8156 25.3438 23.042L21.6689 26.9727L21.6592 26.9824L21.6504 26.9932C21.5332 27.1335 21.372 27.2638 21.1543 27.377C20.9847 27.4652 20.8236 27.5266 20.6709 27.5645L20.5215 27.5947C20.4764 27.5983 20.4246 27.6014 20.3779 27.6064C20.3106 27.6137 20.2104 27.6182 20.0723 27.6182C19.7664 27.6182 19.2344 27.5604 18.4531 27.4316C17.729 27.3122 16.8145 27.0121 15.7012 26.5146C14.6067 26.0257 13.3503 25.2851 11.9297 24.2842C10.5301 23.2981 9.02736 21.9344 7.42188 20.1846L7.41699 20.1797C6.14125 18.8245 5.09029 17.5348 4.26074 16.3105C3.423 15.0741 2.75408 13.9382 2.25098 12.9023C1.74345 11.8574 1.36744 10.9202 1.11914 10.0889C0.865396 9.23925 0.696888 8.51893 0.609375 7.9248C0.518999 7.31122 0.487994 6.85748 0.503906 6.54883C0.517968 6.27607 0.525906 6.08286 0.529297 5.98535C0.559595 5.76321 0.62699 5.52949 0.737305 5.2832C0.846092 5.04036 0.969057 4.863 1.09863 4.7373L1.1084 4.72852L1.11719 4.71875L4.79395 0.756836C4.97209 0.564984 5.13957 0.500031 5.31152 0.5Z" />
                    </svg>
                    <p>030 609 7222</p>
                </a>
                <a class="contact-info-item" href="mailto:Hull@hva.nl">
                    <svg width="24" height="24" viewBox="0 0 22 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.4946 7.03C17.588 7.03 16.8174 6.68826 16.1828 6.00479C15.5481 5.32132 15.2308 4.49139 15.2308 3.515C15.2308 2.53861 15.5481 1.70868 16.1828 1.02521C16.8174 0.341736 17.588 0 18.4946 0C19.4012 0 20.1718 0.341736 20.8064 1.02521C21.441 1.70868 21.7583 2.53861 21.7583 3.515C21.7583 4.49139 21.441 5.32132 20.8064 6.00479C20.1718 6.68826 19.4012 7.03 18.4946 7.03ZM2.17583 21.09C1.57748 21.09 1.06525 20.8605 0.639151 20.4016C0.21305 19.9427 0 19.3911 0 18.7467V4.68667C0 4.04225 0.21305 3.49059 0.639151 3.03169C1.06525 2.57278 1.57748 2.34333 2.17583 2.34333H13.1638C13.0913 2.73389 13.055 3.12444 13.055 3.515C13.055 3.90556 13.0913 4.29611 13.1638 4.68667C13.2907 5.31156 13.4992 5.89251 13.7893 6.42952C14.0795 6.96653 14.433 7.44008 14.8501 7.85017L10.8792 10.545L2.17583 4.68667V7.03L10.8792 12.8883L16.6179 9.02183C16.9262 9.139 17.2344 9.22687 17.5427 9.28546C17.8509 9.34404 18.1682 9.37333 18.4946 9.37333C19.0748 9.37333 19.646 9.27569 20.2081 9.08042C20.7701 8.88514 21.2869 8.59222 21.7583 8.20167V18.7467C21.7583 19.3911 21.5453 19.9427 21.1192 20.4016C20.6931 20.8605 20.1809 21.09 19.5825 21.09H2.17583Z" fill="currentColor"/>
                    </svg>
                    <p>Hull@hva.nl</p>
                </a>
            </div>
        </nav>

        <div class="newsletter-wrapper">
             <NewsletterForm />
        </div>

        <div class="footer-bottom">
            <div class="footer-copyright">
                <p>© {new Date().getFullYear()} Healthy Urban Living Lab. All Rights Reserved.</p>
            </div>
        </div>
    </div>
</footer>

<style>
    footer {
        width: 100%;
        padding: 4rem 1rem 2rem;
        background-color: var(--color-primary-base);
        color: var(--color-neutral1-l3);
    }
    .footer-wrapper {
        max-width: 1200px;
        margin: 0 auto;
    }
    footer h3 {
        margin-bottom: 0.5rem;
		color: var(--color-accent2-base);
		-webkit-text-stroke: 0.05rem var(--color-accent2-base);
    }

    footer h4 {
        margin-bottom: 1rem;
        color: var(--color-accent2-base);
        font-size: 1.1rem;
    }

    /* Navigation */
    nav {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        margin-top: 3rem;
    }
    nav ul {
        list-style: none;
        padding: 0;
    }
    nav ul li {
        margin-top: 0.75rem;
    }
    nav ul li a {
        color: var(--color-neutral1-l3);
        text-decoration: none;
        transition: color 0.2s ease, transform 0.2s ease;
        display: inline-block;
    }
    nav ul li a:hover {
        color: var(--color-accent2-base);
        transform: translateX(4px);
    }

    /* Contact info */
    .contact-info {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    .contact-info-item {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.5rem 0;
        color: var(--color-neutral1-l3);
        text-decoration: none;
        transition: color 0.2s ease;
    }
    .contact-info-item:hover {
        color: var(--color-accent2-base);
    }
    .contact-info-item svg {
        flex-shrink: 0;
    }

    .newsletter-wrapper {
        margin-top: 3rem;
    }

    /* Footer Bottom */
    .footer-bottom {
        margin-top: 4rem;
        padding-top: 2rem;
        border-top: 1px solid rgba(255,255,255,0.1);
        text-align: center;
    }
    .footer-copyright p {
        font-size: 0.85rem;
        opacity: 0.7;
    }

    @media (min-width: 768px) {
        .footer-wrapper {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr 1fr 1.2fr;
            grid-template-areas:
                "brand nav contact newsletter"
                "bottom bottom bottom bottom";
            gap: 2rem;
        }
        .footer-brand { grid-area: brand; }
        nav { 
            display: contents; 
        }
        .nav-group { grid-area: nav; }
        .contact-info { grid-area: contact; }
        .newsletter-wrapper { 
            grid-area: newsletter; 
            margin-top: 0;
        }
        .footer-bottom { grid-area: bottom; }
    }
</style>