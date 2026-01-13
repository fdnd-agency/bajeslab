<script>
    import { enhance } from '$app/forms';
    
    let loading = $state(false);
    let message = $state(''); 
    let isSuccess = $state(false); 
    let showFeedback = $state(false);
    let feedbackTimeout;

    const handleEnhance = ({ formElement }) => {
        loading = true;
        showFeedback = false;
        
        return async ({ result }) => {
            loading = false;
            
            if (result.type === 'success' || result.type === 'failure') {
                message = result.data?.message || 'Er ging iets mis';
                isSuccess = result.data?.success || false;
                showFeedback = true;

                if (isSuccess) {
                    formElement.reset(); 
                }
            } else {
                message = 'Serverfout. Probeer het later opnieuw.';
                isSuccess = false;
                showFeedback = true;
            }

            clearTimeout(feedbackTimeout);
            feedbackTimeout = setTimeout(() => {
                showFeedback = false;
            }, 5000);
        };
    };
</script>

<div class="newsletter-container">
    <form method="POST" action="/?/newsletter" use:enhance={handleEnhance}>
        <label for="email" class="visually-hidden">E-mailadres</label>
        <input 
            id="email"
            type="email" 
            name="email" 
            placeholder="E-mailadres" 
            required 
            disabled={loading}
        />
        <button type="submit" disabled={loading}>
            {#if loading}
                <span class="loader"></span>
            {:else}
                Abonneer
            {/if}
        </button>
    </form>

    <div class="form-status" aria-live="polite">
        {#if showFeedback}
            <p class="status-message {isSuccess ? 'success' : 'error'}">
                {message}
            </p>
        {/if}
    </div>
</div>

<style>
    /* Mobile First: Vanaf 320px */
    .newsletter-container {
        width: 100%;
        max-width: 100%;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
        margin-top: 1rem;
    }

    input {
        width: 100%;
        height: 48px;
        padding: 0 1rem;
        border-radius: 8px;
        border: 1px solid rgba(0,0,0,0.1);
        font-family: 'Urbanist', sans-serif;
        font-size: 1rem;
        outline: none;
    }

    button {
        width: 100%;
        height: 48px;
        background-color: var(--color-accent3-l2);
        color: var(--color-primary-base);
        border: none;
        border-radius: 8px;
        font-family: 'Urbanist', sans-serif;
        font-weight: 700;
        font-size: 1rem;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-color 0.2s;
    }

    button:hover:not(:disabled) {
        filter: brightness(1.05);
    }

    /* Vanaf 480px: Elementen naast elkaar */
    @media (min-width: 480px) {
        form {
            flex-direction: row;
            gap: 0;
            height: 48px;
        }

        input {
            border-radius: 8px 0 0 8px;
            border-right: none;
        }

        button {
            width: auto;
            min-width: 120px;
            border-radius: 0 8px 8px 0;
        }
    }

    /* Status meldingen */
    .form-status {
        min-height: 24px;
        margin-top: 8px;
    }

    .status-message {
        font-size: 0.875rem;
        margin: 0;
    }

    .status-message.success { color: #22c55e; }
    .status-message.error { color: #ef4444; }

    /* Loader */
    .loader {
        width: 20px;
        height: 20px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top-color: var(--color-primary-base);
        animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }

    .visually-hidden {
        position: absolute;
        width: 1px; height: 1px;
        padding: 0; margin: -1px;
        overflow: hidden; clip: rect(0, 0, 0, 0);
        border: 0;
    }
</style>