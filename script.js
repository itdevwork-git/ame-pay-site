<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AME Pay | Seamless Payments. Stronger Cash Flow.</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=DM+Sans:wght@400;500&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            blue: '#1A3FE0',
                            cyan: '#00D4FF',
                            lightBg: '#FFFFFF',
                            altBg: '#F8FAFC',
                            surface: '#FFFFFF',
                            border: '#E2E8F0',
                            textPrimary: '#0F172A',
                            textSecondary: '#334155',
                            textMuted: '#64748B'
                        }
                    },
                    fontFamily: {
                        sans: ['DM Sans', 'sans-serif'],
                        sora: ['Sora', 'sans-serif'],
                        mono: ['JetBrains Mono', 'monospace'],
                    }
                }
            }
        }
    </script>
    
    <style>
        body {
            font-family: 'DM Sans', sans-serif;
            scroll-behavior: smooth;
        }
        h1, h2, h3, h4 {
            font-family: 'Sora', sans-serif;
        }
        .animate-fade-in {
            animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
        }
        /* Style standard range input styling */
        input[type="range"]::-webkit-slider-thumb {
            background: #1A3FE0;
            border: 2px solid #00D4FF;
        }
    </style>
</head>
<body class="bg-brand-lightBg text-brand-textPrimary overflow-x-hidden antialiased">

    <nav class="fixed top-0 left-0 right-0 h-20 bg-white/90 backdrop-blur-md border-b border-brand-border z-50 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
            <!-- Brand Logo Frame featuring AME Pay Logo.png in a crisp white capsule for dark logo isolation -->
            <a href="#" onclick="navigateTo('home'); return false;" class="flex items-center gap-3 group">
                <div class="h-11 px-3 py-1.5 rounded-lg bg-white flex items-center justify-center border border-brand-border shadow-sm transition-transform duration-200 group-hover:scale-[1.02]">
                    <img src="AME Pay Logo.png" alt="AME Pay Logo.png" class="h-8 w-auto object-contain" onerror="this.onerror=null; this.outerHTML='<span class=\'text-white font-sora font-extrabold text-lg tracking-tight\'>ame<span class=\'text-brand-cyan\'>pay</span></span>'">
                </div>
            </a>

            <!-- Responsive Desktop Links (Deep slate gray for perfect readability) -->
            <div class="hidden md:flex items-center space-x-8">
                <a href="#features" onclick="navigateTo('features'); return false;" class="nav-link text-brand-textSecondary hover:text-brand-blue font-semibold text-sm transition-colors duration-200">Infrastructure</a>
                <a href="#who-its-for" onclick="navigateTo('who-its-for'); return false;" class="nav-link text-brand-textSecondary hover:text-brand-blue font-semibold text-sm transition-colors duration-200">Solutions</a>
                <a href="#pricing" onclick="navigateTo('pricing'); return false;" class="nav-link text-brand-textSecondary hover:text-brand-blue font-semibold text-sm transition-colors duration-200">Pricing</a>
                <a href="#about" onclick="navigateTo('about'); return false;" class="nav-link text-brand-textSecondary hover:text-brand-blue font-semibold text-sm transition-colors duration-200">About & Contact</a>
            </div>

            <!-- Single Decisive Call-to-Action Link -->
            <div class="hidden sm:flex items-center space-x-4">
                <a href="#get-started" onclick="navigateTo('about'); return false;" class="bg-gradient-to-r from-brand-blue to-brand-blue/90 hover:from-brand-blue hover:to-brand-cyan text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 shadow-md hover:scale-[1.02] transform">
                    Get Started Free
                </a>
            </div>

            <!-- Mobile Hamburger Toggle -->
            <button onclick="toggleMobileMenu()" class="md:hidden p-2 text-brand-textPrimary hover:text-brand-blue focus:outline-none" aria-label="Toggle Navigation Menu">
                <svg id="menu-icon" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>

        <!-- Mobile Drawer Menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-brand-border px-4 pt-2 pb-6 space-y-3 absolute top-20 left-0 right-0 shadow-xl">
            <a href="#features" onclick="navigateTo('features'); toggleMobileMenu(); return false;" class="block py-3 text-brand-textSecondary hover:text-brand-blue text-base font-semibold border-b border-brand-border">Infrastructure</a>
            <a href="#who-its-for" onclick="navigateTo('who-its-for'); toggleMobileMenu(); return false;" class="block py-3 text-brand-textSecondary hover:text-brand-blue text-base font-semibold border-b border-brand-border">Solutions</a>
            <a href="#pricing" onclick="navigateTo('pricing'); toggleMobileMenu(); return false;" class="block py-3 text-brand-textSecondary hover:text-brand-blue text-base font-semibold border-b border-brand-border">Pricing</a>
            <a href="#about" onclick="navigateTo('about'); toggleMobileMenu(); return false;" class="block py-3 text-brand-textSecondary hover:text-brand-blue text-base font-semibold border-b border-brand-border">About & Contact</a>
            <a href="#get-started" onclick="navigateTo('about'); toggleMobileMenu(); return false;" class="block text-center bg-brand-blue text-white py-3 rounded-lg font-bold text-sm mt-4 shadow-md">
                Get Started Free
            </a>
        </div>
    </nav>

    <!-- Main Container -->
    <main class="pt-20">

        <!-- ========================================== PAGE 1: HOMEPAGE ========================================== -->
        <div id="view-home" class="page-view animate-fade-in">
            
            <!-- Hero Section (Light and fully visible with cyan-blue accents) -->
            <section class="relative bg-gradient-to-b from-brand-altBg via-white to-brand-lightBg pt-20 pb-24 overflow-hidden">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div class="text-center max-w-4xl mx-auto">
                        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-brand-blue/10 text-brand-blue mb-6">
                            <span class="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                            Fintech Infrastructure for Australian SMBs
                        </span>
                        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-textPrimary tracking-tight leading-none mb-6">
                            Seamless Payments.<br class="hidden sm:inline">
                            <span class="bg-gradient-to-r from-brand-blue to-brand-blue/80 bg-clip-text text-transparent">Stronger Cash Flow.</span>
                        </h1>
                        <p class="text-lg sm:text-xl text-brand-textSecondary max-w-2xl mx-auto mb-10 font-normal">
                            AME Pay is the payment platform built for Australian businesses — automate invoice collection, reduce late payments, and get paid on time. Every time.
                        </p>
                        
                        <!-- Hero CTA with simple explicit flow directions -->
                        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <a href="#contact" onclick="navigateTo('about'); return false;" class="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-brand-blue to-brand-blue/90 shadow-lg shadow-brand-blue/15 hover:shadow-brand-blue/30 transition-all duration-300 hover:scale-[1.03] text-center">
                                Get Started Free
                            </a>
                            <a href="#problem-marker" class="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-brand-textSecondary hover:text-brand-blue hover:bg-brand-altBg transition-all duration-200 text-center flex items-center justify-center gap-2">
                                See how it works <span class="text-brand-blue">↓</span>
                            </a>
                        </div>

                        <!-- Trust Metrics Grid -->
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-brand-border">
                            <div class="text-center">
                                <p class="font-mono text-3xl font-extrabold text-brand-blue">$2.4B+ AUD</p>
                                <p class="text-xs text-brand-textMuted uppercase tracking-wider font-bold mt-1">Managed Volume</p>
                            </div>
                            <div class="text-center">
                                <p class="font-mono text-3xl font-extrabold text-brand-blue">99.999%</p>
                                <p class="text-xs text-brand-textMuted uppercase tracking-wider font-bold mt-1">Uptime SLA</p>
                            </div>
                            <div class="text-center">
                                <p class="font-mono text-3xl font-extrabold text-brand-blue">Tier 1</p>
                                <p class="text-xs text-brand-textMuted uppercase tracking-wider font-bold mt-1">PCI Compliance</p>
                            </div>
                            <div class="text-center">
                                <p class="font-mono text-3xl font-extrabold text-brand-blue">500+</p>
                                <p class="text-xs text-brand-textMuted uppercase tracking-wider font-bold mt-1">Aussie Businesses</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Problem Statement Section: Agitate the pain point -->
            <section id="problem-marker" class="py-20 bg-brand-altBg border-y border-brand-border">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div class="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
                            <span class="px-3 py-1.5 rounded-full text-xs font-bold bg-red-100 text-red-700 border border-red-200 mb-4">
                                The Cash Flow Gap
                            </span>
                            <div class="font-mono text-7xl sm:text-8xl lg:text-9xl font-black text-brand-blue tracking-tighter leading-none mb-2">
                                50%+
                            </div>
                            <p class="text-sm font-bold uppercase tracking-wider text-brand-textSecondary">of Australian invoices are paid late</p>
                        </div>
                        <div class="lg:col-span-7">
                            <h2 class="text-3xl sm:text-4xl font-extrabold text-brand-textPrimary tracking-tight mb-6">
                                Late Payments Are Hurting Australian Businesses
                            </h2>
                            <p class="text-lg text-brand-textSecondary leading-relaxed mb-6">
                                More than half of small business invoices in Australia are settled past their due date. The result? Tighter cash flow, missed growth opportunities, and hours of administrative labor wasted chasing clients.
                            </p>
                            <p class="text-lg text-brand-textSecondary leading-relaxed">
                                AME Pay takes the chasing out of the equation — so you can focus on running your business, not your accounts receivable.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Solution Overview Section -->
            <section class="py-20 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center max-w-3xl mx-auto mb-16">
                        <span class="inline-block px-3 py-1.5 rounded-full text-xs font-bold bg-brand-blue/10 text-brand-blue mb-4">
                            Solution Snapshot
                        </span>
                        <h2 class="text-3xl sm:text-4xl font-extrabold text-brand-textPrimary tracking-tight">
                            Smart, Simple, & Stress-Free Collections
                        </h2>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="p-8 rounded-2xl border border-brand-border bg-brand-altBg/50 hover:bg-white hover:shadow-xl hover:border-brand-blue/20 transition-all duration-300">
                            <div class="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-6 text-brand-blue text-2xl font-bold">
                                🔄
                            </div>
                            <h3 class="text-xl font-bold text-brand-textPrimary mb-3">Get Paid Automatically</h3>
                            <p class="text-brand-textSecondary text-sm leading-relaxed">
                                Set up direct debit terms or recurring triggers once. Invoices are collected automatically when due — no phone calls, no manual reminders.
                            </p>
                        </div>

                        <div class="p-8 rounded-2xl border border-brand-border bg-brand-altBg/50 hover:bg-white hover:shadow-xl hover:border-brand-blue/20 transition-all duration-300">
                            <div class="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-6 text-emerald-700 text-2xl font-bold">
                                💸
                            </div>
                            <h3 class="text-xl font-bold text-brand-textPrimary mb-3">No Setup Fees</h3>
                            <p class="text-brand-textSecondary text-sm leading-relaxed">
                                Transparent, pay-as-you-go pricing tailored for growth. You only pay a flat 1.2% per settled transaction on standard collections. No hidden surprises.
                            </p>
                        </div>

                        <div class="p-8 rounded-2xl border border-brand-border bg-brand-altBg/50 hover:bg-white hover:shadow-xl hover:border-brand-blue/20 transition-all duration-300">
                            <div class="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mb-6 text-brand-blue text-2xl font-bold">
                                🇦🇺
                            </div>
                            <h3 class="text-xl font-bold text-brand-textPrimary mb-3">Local Support</h3>
                            <p class="text-brand-textSecondary text-sm leading-relaxed">
                                Avoid cold global support lines. Get dedicated, expert assistance from a highly responsive team based locally in Sydney and Melbourne, ready to help.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- How It Works Section -->
            <section id="how-it-works-section" class="py-20 bg-brand-altBg border-y border-brand-border">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center max-w-3xl mx-auto mb-16">
                        <span class="inline-block px-3 py-1.5 rounded-full text-xs font-bold bg-brand-blue/10 text-brand-blue mb-4">
                            Easy Onboarding
                        </span>
                        <h2 class="text-3xl sm:text-4xl font-extrabold text-brand-textPrimary tracking-tight">
                            Up and Running in 3 Steps
                        </h2>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        <!-- Horizontal connector line for desktop -->
                        <div class="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-0.5 bg-brand-border z-0"></div>

                        <div class="text-center relative z-10">
                            <div class="w-14 h-14 rounded-full bg-brand-blue text-white flex items-center justify-center font-mono text-lg font-bold mx-auto mb-6 shadow-md">
                                1
                            </div>
                            <h3 class="text-lg font-bold text-brand-textPrimary mb-2">Connect Your Ledger</h3>
                            <p class="text-brand-textSecondary text-sm max-w-xs mx-auto">
                                Sync effortlessly with Xero, QuickBooks, or MYOB in less than three clicks.
                            </p>
                        </div>

                        <div class="text-center relative z-10">
                            <div class="w-14 h-14 rounded-full bg-brand-textSecondary text-white flex items-center justify-center font-mono text-lg font-bold mx-auto mb-6 shadow-md">
                                2
                            </div>
                            <h3 class="text-lg font-bold text-brand-textPrimary mb-2">Set Payment Rules</h3>
                            <p class="text-brand-textSecondary text-sm max-w-xs mx-auto">
                                Define collection rules: scheduled recurring charges or automatic billing based on invoice due dates.
                            </p>
                        </div>

                        <div class="text-center relative z-10">
                            <div class="w-14 h-14 rounded-full bg-brand-blue text-white flex items-center justify-center font-mono text-lg font-bold mx-auto mb-6 shadow-md">
                                3
                            </div>
                            <h3 class="text-lg font-bold text-brand-textPrimary mb-2">Receive Payments</h3>
                            <p class="text-brand-textSecondary text-sm max-w-xs mx-auto">
                                Funds clear directly into your business account. Ledgers update and reconcile automatically.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Integrations Section -->
            <section class="py-16 bg-white border-b border-brand-border">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p class="text-xs uppercase tracking-widest text-brand-textMuted font-bold mb-8">Direct Native Sync & Integration</p>
                    <div class="flex flex-wrap items-center justify-center gap-12">
                        <div class="flex items-center gap-2 bg-brand-altBg px-6 py-3 rounded-xl border border-brand-border">
                            <span class="w-2.5 h-2.5 rounded-full bg-[#00b7e2]"></span>
                            <span class="font-sora font-extrabold text-lg text-brand-textPrimary tracking-tight">Xero</span>
                        </div>
                        <div class="flex items-center gap-2 bg-brand-altBg px-6 py-3 rounded-xl border border-brand-border">
                            <span class="w-2.5 h-2.5 rounded-full bg-[#2ca01c]"></span>
                            <span class="font-sora font-extrabold text-lg text-brand-textPrimary tracking-tight">QuickBooks</span>
                        </div>
                        <div class="flex items-center gap-2 bg-brand-altBg px-6 py-3 rounded-xl border border-brand-border">
                            <span class="w-2.5 h-2.5 rounded-full bg-[#6a1b9a]"></span>
                            <span class="font-sora font-extrabold text-lg text-brand-textPrimary tracking-tight">MYOB</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Features Section -->
            <section class="py-20 bg-brand-lightBg">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
                        <div class="max-w-2xl">
                            <span class="inline-block px-3 py-1.5 rounded-full text-xs font-bold bg-brand-blue/10 text-brand-blue mb-4">
                                Engineered Features
                            </span>
                            <h2 class="text-3xl sm:text-4xl font-extrabold text-brand-textPrimary tracking-tight">
                                Built for Australian Financial Operations
                            </h2>
                        </div>
                        <a href="#features" onclick="navigateTo('features'); return false;" class="text-brand-blue font-bold hover:underline mt-4 lg:mt-0 flex items-center gap-1">
                            Explore full capabilities <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                        </a>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="p-8 rounded-2xl bg-brand-altBg border border-brand-border hover:border-brand-blue/30 transition-all">
                            <h3 class="text-xl font-bold text-brand-textPrimary mb-3">Subscriptions & Recurring Billing</h3>
                            <p class="text-brand-textSecondary text-sm mb-4 leading-relaxed">
                                Authorize direct collection rules for flexible, variable, or fixed intervals. Keep billing perfectly synchronized with contracts.
                            </p>
                            <span class="text-xs font-mono font-bold text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded">Automation Standard</span>
                        </div>
                        <div class="p-8 rounded-2xl bg-brand-altBg border border-brand-border hover:border-brand-blue/30 transition-all">
                            <h3 class="text-xl font-bold text-brand-textPrimary mb-3">Batch Collection & Clearing</h3>
                            <p class="text-brand-textSecondary text-sm mb-4 leading-relaxed">
                                Queue thousands of invoice clearing instructions at once. Minimize payment delay windows on high volume merchant batches.
                            </p>
                            <span class="text-xs font-mono font-bold text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded">Volume Scale Ready</span>
                        </div>
                        <div class="p-8 rounded-2xl bg-brand-altBg border border-brand-border hover:border-brand-blue/30 transition-all">
                            <h3 class="text-xl font-bold text-brand-textPrimary mb-3">Smart Recovery & Auto-Retry</h3>
                            <p class="text-brand-textSecondary text-sm mb-4 leading-relaxed">
                                Mitigate failed collections instantly. Our scheduler automatically analyzes retries using local clearance windows to maximize collection rates.
                            </p>
                            <span class="text-xs font-mono font-bold text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded">Intelligent Clearing</span>
                        </div>
                        <div class="p-8 rounded-2xl bg-brand-altBg border border-brand-border hover:border-brand-blue/30 transition-all">
                            <h3 class="text-xl font-bold text-brand-textPrimary mb-3">Automated Ledger Reconciliation</h3>
                            <p class="text-brand-textSecondary text-sm mb-4 leading-relaxed">
                                Eradicate tedious payment matching tasks. Transactions are tagged and settled back into your accounting ledger immediately.
                            </p>
                            <span class="text-xs font-mono font-bold text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded">Ledger Harmony</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Social Proof Section -->
            <section class="py-20 bg-brand-altBg border-y border-brand-border">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <!-- PLACEHOLDER: Client to supply testimonial quotes, names, company, logos -->
                    <div class="text-center max-w-3xl mx-auto mb-16">
                        <span class="inline-block px-3 py-1.5 rounded-full text-xs font-bold bg-brand-blue/10 text-brand-blue mb-4">
                            Social Proof
                        </span>
                        <h2 class="text-3xl sm:text-4xl font-extrabold text-brand-textPrimary tracking-tight">
                            Trusted by Businesses Across Australia
                        </h2>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="p-8 rounded-2xl bg-white border border-brand-border shadow-sm">
                            <div class="flex items-center gap-1 text-yellow-500 mb-4">
                                <span class="text-xl">★★★★★</span>
                            </div>
                            <p class="text-brand-textSecondary text-sm italic mb-6">
                                "The integration with our Xero ledgers worked instantly on day one. We have successfully automated 90% of our consulting collection queues, reducing our debtor days outstanding from 42 days to under 4."
                            </p>
                            <div>
                                <h4 class="font-bold text-brand-textPrimary text-sm">Marcus Vance</h4>
                                <p class="text-xs text-brand-textMuted">Managing Director, Vance Strategic Partners</p>
                            </div>
                        </div>

                        <div class="p-8 rounded-2xl bg-white border border-brand-border shadow-sm">
                            <div class="flex items-center gap-1 text-yellow-500 mb-4">
                                <span class="text-xl">★★★★★</span>
                            </div>
                            <p class="text-brand-textSecondary text-sm italic mb-6">
                                "We scaled our Australian SaaS startup with AME Pay as our clearing agent. Handling multi-frequency subscription cycles without high monthly software license fees was a major win for us."
                            </p>
                            <div>
                                <h4 class="font-bold text-brand-textPrimary text-sm">Evelyn Vance</h4>
                                <p class="text-xs text-brand-textMuted">Chief Operating Officer, Ledgerly SaaS</p>
                            </div>
                        </div>

                        <div class="p-8 rounded-2xl bg-white border border-brand-border shadow-sm">
                            <div class="flex items-center gap-1 text-yellow-500 mb-4">
                                <span class="text-xl">★★★★★</span>
                            </div>
                            <p class="text-brand-textSecondary text-sm italic mb-6">
                                "Our trade business struggles to collect payments from commercial builders on site. Using AME Pay direct billing templates, we automatically debit on construction milestones. No chasing invoices anymore."
                            </p>
                            <div>
                                <h4 class="font-bold text-brand-textPrimary text-sm">Thomas Jenkins</h4>
                                <p class="text-xs text-brand-textMuted">Founder, Jenkins Commercial Plumbing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Pricing Section -->
            <section class="py-20 bg-brand-lightBg">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center max-w-3xl mx-auto mb-16">
                        <span class="inline-block px-3 py-1.5 rounded-full text-xs font-bold bg-brand-blue/10 text-brand-blue mb-4">
                            Transparent Pricing
                        </span>
                        <h2 class="text-3xl sm:text-4xl font-extrabold text-brand-textPrimary tracking-tight">
                            Simple Rates. Ultimate Clarity.
                        </h2>
                        <p class="text-brand-textSecondary text-sm mt-3">Avoid hidden maintenance fees, minimum billing limits, and lock-in contracts.</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <!-- Standard Tier -->
                        <div class="p-8 rounded-3xl border border-brand-border bg-white shadow-lg relative flex flex-col justify-between">
                            <div>
                                <span class="inline-block px-3 py-1 rounded-full text-xs font-bold bg-brand-blue/10 text-brand-blue mb-4">
                                    Standard Pay-As-You-Go
                                </span>
                                <h3 class="text-3xl font-extrabold text-brand-textPrimary">From 1.2%</h3>
                                <p class="text-xs text-brand-textMuted mt-1">Per cleared transaction</p>
                                <p class="text-sm text-brand-textSecondary mt-4 leading-relaxed">
                                    Our flexible clearing solution for small-to-medium Australian enterprises requiring rapid deployment and instant ledger synchronization.
                                </p>
                                <ul class="mt-6 space-y-3 border-t border-brand-border pt-6">
                                    <li class="flex items-center gap-3 text-sm text-brand-textSecondary">
                                        <span class="text-brand-blue font-bold">✓</span> Unlimited client mandates
                                    </li>
                                    <li class="flex items-center gap-3 text-sm text-brand-textSecondary">
                                        <span class="text-brand-blue font-bold">✓</span> Native accounting software sync
                                    </li>
                                    <li class="flex items-center gap-3 text-sm text-brand-textSecondary">
                                        <span class="text-brand-blue font-bold">✓</span> Automated retry schedulers
                                    </li>
                                    <li class="flex items-center gap-3 text-sm text-brand-textSecondary">
                                        <span class="text-brand-blue font-bold">✓</span> Standard customer dashboards
                                    </li>
                                </ul>
                            </div>
                            <div class="mt-8">
                                <a href="#contact" onclick="navigateTo('pricing'); return false;" class="block w-full py-3 px-4 rounded-xl text-center text-sm font-bold bg-brand-blue hover:bg-brand-blue/90 text-white transition-all shadow-md">
                                    Start Collecting Free
                                </a>
                            </div>
                        </div>

                        <!-- Elite Tier -->
                        <div class="p-8 rounded-3xl border border-brand-blue bg-brand-altBg shadow-lg relative flex flex-col justify-between">
                            <div>
                                <span class="inline-block px-3 py-1 rounded-full text-xs font-bold bg-brand-blue text-white mb-4">
                                    Custom Processing
                                </span>
                                <h3 class="text-3xl font-extrabold text-brand-textPrimary">Elite Custom</h3>
                                <p class="text-xs text-brand-textMuted mt-1">Volume-linked scaling rates</p>
                                <p class="text-sm text-brand-textSecondary mt-4 leading-relaxed">
                                    Engineered specifically for high volume merchant operators, complex corporate entities, and multi-site franchise groups.
                                </p>
                                <ul class="mt-6 space-y-3 border-t border-brand-border pt-6">
                                    <li class="flex items-center gap-3 text-sm text-brand-textSecondary">
                                        <span class="text-brand-blue font-bold">✓</span> Dedicated processing pipes
                                    </li>
                                    <li class="flex items-center gap-3 text-sm text-brand-textSecondary">
                                        <span class="text-brand-blue font-bold">✓</span> Customized billing logic rules
                                    </li>
                                    <li class="flex items-center gap-3 text-sm text-brand-textSecondary">
                                        <span class="text-brand-blue font-bold">✓</span> 24/7 Priority SLA support
                                    </li>
                                    <li class="flex items-center gap-3 text-sm text-brand-textSecondary">
                                        <span class="text-brand-blue font-bold">✓</span> Multi-entity clearing boards
                                    </li>
                                </ul>
                            </div>
                            <div class="mt-8">
                                <a href="#contact" onclick="navigateTo('about'); return false;" class="block w-full py-3 px-4 rounded-xl text-center text-sm font-bold bg-brand-textPrimary hover:bg-brand-textSecondary text-white transition-all shadow-md">
                                    Talk to Sales
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Final Conversion Call To Action -->
            <section class="py-24 bg-gradient-to-r from-brand-blue to-brand-blue/80 text-white relative overflow-hidden">
                <div class="absolute inset-0 bg-black/5"></div>
                <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
                        Start Collecting Payments Today
                    </h2>
                    <p class="text-lg sm:text-xl text-white/95 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Join hundreds of Australian businesses currently utilizing AME Pay to secure, simplify, and automate daily cash collections.
                    </p>
                    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#contact" onclick="navigateTo('about'); return false;" class="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-brand-blue bg-white hover:bg-brand-altBg transition-all duration-300 shadow-xl text-center">
                            Get Started Free →
                        </a>
                        <a href="#contact" onclick="navigateTo('about'); return false;" class="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-white border border-white/30 hover:border-white hover:bg-white/10 transition-all duration-200 text-center">
                            Book a Demo Platform Call
                        </a>
                    </div>
                </div>
            </section>
        </div>

        <!-- ========================================== PAGE 2: FEATURES ========================================== -->
        <div id="view-features" class="page-view hidden animate-fade-in">
            <!-- Features Hero -->
            <section class="py-16 bg-brand-altBg border-b border-brand-border">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span class="inline-block px-3 py-1.5 rounded-full text-xs font-bold bg-brand-blue/10 text-brand-blue mb-4">
                        Deep Dive
                    </span>
                    <h1 class="text-4xl sm:text-5xl font-extrabold text-brand-textPrimary tracking-tight mb-4">
                        Everything You Need to Get Paid Faster
                    </h1>
                    <p class="text-lg sm:text-xl text-brand-textSecondary max-w-3xl mx-auto font-normal">
                        Our technology is optimized for security, automation, and effortless accounting alignment. Let us handle the friction of collection logistics.
                    </p>
                </div>
            </section>

            <!-- Detailed Feature Sub-sections (Symmetric Alternating Layouts) -->
            <section class="py-20 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
                    
                    <!-- Feature Group 1: Invoice Automation -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span class="text-xs font-mono font-bold text-brand-blue uppercase tracking-wider block mb-2">Automated Billing</span>
                            <h2 class="text-3xl font-bold text-brand-textPrimary tracking-tight mb-6">
                                Invoice Automation Engine
                            </h2>
                            <p class="text-brand-textSecondary text-base leading-relaxed mb-8">
                                Let your accounting ledgers trigger immediate transaction mandates. When an invoice is generated inside Xero or MYOB, AME Pay dynamically detects, registers, and schedules direct collections matching customer terms.
                            </p>
                            <ul class="space-y-4">
                                <li class="flex items-start gap-3">
                                    <span class="text-brand-blue text-lg font-bold">✓</span>
                                    <p class="text-sm text-brand-textSecondary"><strong class="text-brand-textPrimary">Instant Event Detection:</strong> Invoices sync immediately upon authorization.</p>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="text-brand-blue text-lg font-bold">✓</span>
                                    <p class="text-sm text-brand-textSecondary"><strong class="text-brand-textPrimary">Smart Scheduling:</strong> Clears payments on the precise invoice due date.</p>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="text-brand-blue text-lg font-bold">✓</span>
                                    <p class="text-sm text-brand-textSecondary"><strong class="text-brand-textPrimary">Debtor Notification Hub:</strong> Customers receive secure links to update payment details.</p>
                                </li>
                            </ul>
                        </div>
                        <div class="bg-brand-altBg border border-brand-border rounded-2xl p-8 shadow-sm">
                            <div class="font-mono text-xs text-emerald-400 bg-brand-textPrimary p-6 rounded-xl overflow-x-auto shadow-inner">
                                <span class="text-gray-500">// Simulating AME Pay Automated Invoice Lifecycle Event</span><br>
                                <span class="text-blue-300">const</span> ledgerEvent = <span class="text-yellow-200">await</span> amepay.<span class="text-yellow-300">syncInvoice</span>(<span class="text-orange-300">"INV-2026-009"</span>);<br><br>
                                <span class="text-purple-300">if</span> (ledgerEvent.status === <span class="text-orange-300">"unpaid"</span>) {<br>
                                &nbsp;&nbsp;<span class="text-yellow-200">await</span> amepay.<span class="text-yellow-300">queueClearing</span>({<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;amount: ledgerEvent.total,<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;dueDate: ledgerEvent.dueDate,<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;retryLimit: <span class="text-red-400">3</span><br>
                                &nbsp;&nbsp;});<br>
                                &nbsp;&nbsp;console.log(<span class="text-orange-300">"Invoice scheduled for automated recovery."</span>);<br>
                                }
                            </div>
                        </div>
                    </div>

                    <!-- Feature Group 2: Subscriptions & Recurring Billing -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div class="lg:order-2">
                            <span class="text-xs font-mono font-bold text-brand-blue uppercase tracking-wider block mb-2">Steady Revenue</span>
                            <h2 class="text-3xl font-bold text-brand-textPrimary tracking-tight mb-6">
                                Subscriptions & Recurring Billing
                            </h2>
                            <p class="text-brand-textSecondary text-base leading-relaxed mb-8">
                                Manage fluid billing structures easily. AME Pay processes fixed plans, variable utility plans, usage pricing, and multi-tier subscription operations inside a single, intuitive dashboard.
                            </p>
                            <ul class="space-y-4">
                                <li class="flex items-start gap-3">
                                    <span class="text-brand-blue text-lg font-bold">✓</span>
                                    <p class="text-sm text-brand-textSecondary"><strong class="text-brand-textPrimary">Variable Usage Support:</strong> Bill customers dynamically based on direct API usage indicators.</p>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="text-brand-blue text-lg font-bold">✓</span>
                                    <p class="text-sm text-brand-textSecondary"><strong class="text-brand-textPrimary">Painless Plan Upgrades:</strong> Prorate monthly subscriptions mid-cycle without messing up reconciliation parameters.</p>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="text-brand-blue text-lg font-bold">✓</span>
                                    <p class="text-sm text-brand-textSecondary"><strong class="text-brand-textPrimary">Grace Period Triggers:</strong> Grant configurable access options during credit card renewal cycles.</p>
                                </li>
                            </ul>
                        </div>
                        <div class="lg:order-1 bg-brand-altBg text-brand-textPrimary rounded-2xl p-8 relative overflow-hidden border border-brand-border shadow-sm">
                            <h4 class="text-xs font-mono text-brand-blue uppercase tracking-widest mb-6 font-bold">Live Subscription Clearing Pipeline</h4>
                            <div class="space-y-4 font-mono text-xs">
                                <div class="bg-white p-4 rounded border border-brand-border flex items-center justify-between">
                                    <span>Plan ID: Standard Premium</span>
                                    <span class="text-brand-blue font-bold">Active</span>
                                </div>
                                <div class="bg-white p-4 rounded border border-brand-border flex items-center justify-between">
                                    <span>Interval: Monthly (1st of month)</span>
                                    <span class="text-brand-textMuted">Variable</span>
                                </div>
                                <div class="bg-white p-4 rounded border border-brand-border flex items-center justify-between">
                                    <span>Clearance Route: BECS Direct Debit</span>
                                    <span class="text-emerald-600 font-bold">99.9% Success</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Feature Group 3: Smart Recovery & Reconciliation -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span class="text-xs font-mono font-bold text-brand-blue uppercase tracking-wider block mb-2">Failed Payment Defense</span>
                            <h2 class="text-3xl font-bold text-brand-textPrimary tracking-tight mb-6">
                                Smart Recovery & Ledger Reconciliation
                            </h2>
                            <p class="text-brand-textSecondary text-base leading-relaxed mb-8">
                                Protect your operations from credit card failures, expired credentials, and bank routing errors. AME Pay’s intelligent retry scheduler retries payments strategically, recovering up to 82% of failed transactions before manual outreach is required.
                            </p>
                            <ul class="space-y-4">
                                <li class="flex items-start gap-3">
                                    <span class="text-brand-blue text-lg font-bold">✓</span>
                                    <p class="text-sm text-brand-textSecondary"><strong class="text-brand-textPrimary">Algorithmic Retries:</strong> Analyzes payment attempt records to schedule card retries at high-success times.</p>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="text-brand-blue text-lg font-bold">✓</span>
                                    <p class="text-sm text-brand-textSecondary"><strong class="text-brand-textPrimary">Auto-matching:</strong> Reconciles payments instantly against matching ledger IDs on collection.</p>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="text-brand-blue text-lg font-bold">✓</span>
                                    <p class="text-sm text-brand-textSecondary"><strong class="text-brand-textPrimary">Aging Ledgers Update:</strong> Instantly moves invoices to "Settled" status across systems.</p>
                                </li>
                            </ul>
                        </div>
                        <div class="bg-brand-altBg border border-brand-border rounded-2xl p-8 text-center flex flex-col justify-center items-center">
                            <span class="text-xs uppercase font-bold text-brand-textMuted mb-2">Automated Recovery Rate</span>
                            <div class="text-6xl font-extrabold text-brand-blue mb-4">82.4%</div>
                            <p class="text-xs text-brand-textSecondary max-w-xs leading-relaxed">
                                Of payment processing errors are automatically resolved by our system before triggering late notifications.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- ========================================== PAGE 3: PRICING ========================================== -->
        <div id="view-pricing" class="page-view hidden animate-fade-in">
            <!-- Pricing Hero -->
            <section class="py-16 bg-brand-altBg border-b border-brand-border text-center">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <span class="inline-block px-3 py-1.5 rounded-full text-xs font-bold bg-brand-blue/10 text-brand-blue mb-4">
                        Investment Value
                    </span>
                    <h1 class="text-4xl sm:text-5xl font-extrabold text-brand-textPrimary tracking-tight mb-4">
                        Simple Pricing. No Hidden Surprises.
                    </h1>
                    <p class="text-lg sm:text-xl text-brand-textSecondary max-w-3xl mx-auto font-normal">
                        Select a payment processing structure optimized for your monthly volume. Switch structures as your team expands.
                    </p>
                </div>
            </section>

            <!-- Dynamic Pricing Fee Calculator Tool -->
            <section class="py-16 bg-white border-b border-brand-border">
                <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="p-8 rounded-2xl bg-brand-altBg border border-brand-border text-center shadow-sm">
                        <h3 class="text-xl font-bold text-brand-textPrimary mb-2">Estimate Your Processing Fees</h3>
                        <p class="text-xs text-brand-textSecondary mb-6">Drag the slider below to project monthly clearance costs.</p>
                        
                        <div class="mb-8">
                            <label class="block text-sm font-bold text-brand-textSecondary mb-2">
                                Monthly Processing Volume (AUD)
                            </label>
                            <input id="volume-slider" type="range" min="10000" max="1000000" step="10000" value="100000" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-blue" oninput="calculateFees(this.value)">
                            <div class="flex justify-between text-xs text-brand-textMuted font-mono mt-2">
                                <span>$10k</span>
                                <span>$500k</span>
                                <span>$1M+</span>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-4 border-t border-brand-border pt-6">
                            <div>
                                <p class="text-xs text-brand-textMuted uppercase font-bold tracking-wider">Total Projected Volume</p>
                                <p id="calc-volume-display" class="font-mono text-2xl font-bold text-brand-textPrimary mt-1">$100,000</p>
                            </div>
                            <div>
                                <p class="text-xs text-brand-textMuted uppercase font-bold tracking-wider">Estimated Monthly Fees</p>
                                <p id="calc-fees-display" class="font-mono text-2xl font-bold text-brand-blue mt-1">$1,200</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- FAQ Section -->
            <section class="py-20 bg-brand-altBg">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-16">
                        <span class="inline-block px-3 py-1.5 rounded-full text-xs font-bold bg-brand-blue/10 text-brand-blue mb-4">
                            Operational Support
                        </span>
                        <h2 class="text-3xl font-bold text-brand-textPrimary tracking-tight">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div class="space-y-4">
                        <div class="bg-white rounded-xl border border-brand-border overflow-hidden">
                            <button onclick="toggleFaq(this)" class="w-full text-left px-6 py-4 font-bold text-brand-textPrimary hover:bg-brand-altBg/50 flex justify-between items-center transition-colors">
                                <span>Are there any setup fees, lock-ins or hidden monthly costs?</span>
                                <span class="faq-icon text-brand-blue text-xl transition-transform duration-200">+</span>
                            </button>
                            <div class="faq-content hidden px-6 pb-5 text-sm text-brand-textSecondary leading-relaxed border-t border-brand-border/50 pt-4">
                                No setup fees, recurring base platform licensing, or hidden maintenance costs exist on the pay-as-you-go tier. You only pay a flat 1.2% rate per cleared transaction. You can deactivate your account at any point without contract fees.
                            </div>
                        </div>

                        <div class="bg-white rounded-xl border border-brand-border overflow-hidden">
                            <button onclick="toggleFaq(this)" class="w-full text-left px-6 py-4 font-bold text-brand-textPrimary hover:bg-brand-altBg/50 flex justify-between items-center transition-colors">
                                <span>How long does the implementation and onboarding process take?</span>
                                <span class="faq-icon text-brand-blue text-xl transition-transform duration-200">+</span>
                            </button>
                            <div class="faq-content hidden px-6 pb-5 text-sm text-brand-textSecondary leading-relaxed border-t border-brand-border/50 pt-4">
                                Standard sync onboarding requires less than 10 minutes. Once integrated with Xero, MYOB, or QuickBooks, your first batch collection schedules can go live immediately.
                            </div>
                        </div>

                        <div class="bg-white rounded-xl border border-brand-border overflow-hidden">
                            <button onclick="toggleFaq(this)" class="w-full text-left px-6 py-4 font-bold text-brand-textPrimary hover:bg-brand-altBg/50 flex justify-between items-center transition-colors">
                                <span>Can we process direct debits dynamically with variable customer invoices?</span>
                                <span class="faq-icon text-brand-blue text-xl transition-transform duration-200">+</span>
                            </button>
                            <div class="faq-content hidden px-6 pb-5 text-sm text-brand-textSecondary leading-relaxed border-t border-brand-border/50 pt-4">
                                Absolutely. Once clients sign an authorized BECS billing template, you can bill them for variable totals matching your monthly invoices directly from your ledger automatically.
                            </div>
                        </div>

                        <div class="bg-white rounded-xl border border-brand-border overflow-hidden">
                            <button onclick="toggleFaq(this)" class="w-full text-left px-6 py-4 font-bold text-brand-textPrimary hover:bg-brand-altBg/50 flex justify-between items-center transition-colors">
                                <span>Is customer payment data hosted on local servers inside Australia?</span>
                                <span class="faq-icon text-brand-blue text-xl transition-transform duration-200">+</span>
                            </button>
                            <div class="faq-content hidden px-6 pb-5 text-sm text-brand-textSecondary leading-relaxed border-t border-brand-border/50 pt-4">
                                Yes. All user financial assets, transaction files, customer mandates, and billing records are stored locally on high-security Australian servers in full compliance with local financial privacy regulations.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- ========================================== PAGE 4: WHO IT'S FOR ========================================== -->
        <div id="view-who-its-for" class="page-view hidden animate-fade-in">
            <section class="py-16 bg-brand-altBg border-b border-brand-border text-center">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <span class="inline-block px-3 py-1.5 rounded-full text-xs font-bold bg-brand-blue/10 text-brand-blue mb-4">
                        Target Segments
                    </span>
                    <h1 class="text-4xl sm:text-5xl font-extrabold text-brand-textPrimary tracking-tight mb-4">
                        Built for How Your Team Operates
                    </h1>
                    <p class="text-lg sm:text-xl text-brand-textSecondary max-w-3xl mx-auto font-normal">
                        Explore customized payment solutions and onboarding routes built to support your business model.
                    </p>
                </div>
            </section>

            <!-- Segment Cards -->
            <section class="py-20 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        
                        <!-- Segment 1: Service-Based Businesses -->
                        <div class="p-8 rounded-2xl border border-brand-border bg-brand-altBg/30 flex flex-col justify-between">
                            <div>
                                <h3 class="text-xl font-bold text-brand-textPrimary mb-4">Service & Professional Teams</h3>
                                <p class="text-brand-textSecondary text-sm mb-6 leading-relaxed">
                                    Great for agencies, consultants, legal teams, and commercial trades who manage ongoing customer projects with set deadlines.
                                </p>
                                <ul class="space-y-3 mb-8">
                                    <li class="flex items-center gap-2 text-sm text-brand-textSecondary">
                                        <span class="text-brand-blue font-bold">✓</span> Direct ledger integration
                                    </li>
                                    <li class="flex items-center gap-2 text-sm text-brand-textSecondary">
                                        <span class="text-brand-blue font-bold">✓</span> Flexible billing templates
                                    </li>
                                    <li class="flex items-center gap-2 text-sm text-brand-textSecondary">
                                        <span class="text-brand-blue font-bold">✓</span> Automatic unpaid reminders
                                    </li>
                                </ul>
                            </div>
                            <a href="#contact" onclick="navigateTo('about'); return false;" class="block w-full py-3 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-lg text-sm font-bold text-center shadow-md">Onboard Service Account</a>
                        </div>

                        <!-- Segment 2: SaaS / Subscription Businesses -->
                        <div class="p-8 rounded-2xl border border-brand-border bg-brand-altBg/30 flex flex-col justify-between">
                            <div>
                                <h3 class="text-xl font-bold text-brand-textPrimary mb-4">SaaS & Subscription Apps</h3>
                                <p class="text-brand-textSecondary text-sm mb-6 leading-relaxed">
                                    Built for software startups and digital providers managing daily, weekly, or variable subscription cycles.
                                </p>
                                <ul class="space-y-3 mb-8">
                                    <li class="flex items-center gap-2 text-sm text-brand-textSecondary">
                                        <span class="text-brand-blue font-bold">✓</span> Developer friendly REST APIs
                                    </li>
                                    <li class="flex items-center gap-2 text-sm text-brand-textSecondary">
                                        <span class="text-brand-blue font-bold">✓</span> Failed card dunning retry tools
                                    </li>
                                    <li class="flex items-center gap-2 text-sm text-brand-textSecondary">
                                        <span class="text-brand-blue font-bold">✓</span> Custom customer dashboards
                                    </li>
                                </ul>
                            </div>
                            <a href="#contact" onclick="navigateTo('about'); return false;" class="block w-full py-3 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-lg text-sm font-bold text-center shadow-md">Deploy API Sandbox</a>
                        </div>

                        <!-- Segment 3: Enterprise / Multi-site -->
                        <div class="p-8 rounded-2xl border border-brand-border bg-brand-altBg/30 flex flex-col justify-between">
                            <div>
                                <h3 class="text-xl font-bold text-brand-textPrimary mb-4">Enterprise & Multi-entity</h3>
                                <p class="text-brand-textSecondary text-sm mb-6 leading-relaxed">
                                    Custom setups for high volume corporate entities, franchise groups, and operations spread across multiple offices.
                                </p>
                                <ul class="space-y-3 mb-8">
                                    <li class="flex items-center gap-2 text-sm text-brand-textSecondary">
                                        <span class="text-brand-blue font-bold">✓</span> Dedicated processing pipes
                                    </li>
                                    <li class="flex items-center gap-2 text-sm text-brand-textSecondary">
                                        <span class="text-brand-blue font-bold">✓</span> Customized billing logic rules
                                    </li>
                                    <li class="flex items-center gap-2 text-sm text-brand-textSecondary">
                                        <span class="text-brand-blue font-bold">✓</span> 24/7 Priority SLA support
                                    </li>
                                </ul>
                            </div>
                            <a href="#contact" onclick="navigateTo('about'); return false;" class="block w-full bg-brand-textPrimary hover:bg-brand-textSecondary text-white rounded-lg text-sm font-bold text-center shadow-md py-3">Connect Enterprise Sales</a>
                        </div>

                    </div>
                </div>
            </section>
        </div>

        <!-- ========================================== PAGE 5: ABOUT & CONTACT ========================================== -->
        <div id="view-about" class="page-view hidden animate-fade-in">
            <!-- Hero Header -->
            <section class="py-16 bg-brand-altBg border-b border-brand-border text-center">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <span class="inline-block px-3 py-1.5 rounded-full text-xs font-bold bg-brand-blue/10 text-brand-blue mb-4">
                        Local Presence
                    </span>
                    <h1 class="text-4xl sm:text-5xl font-extrabold text-brand-textPrimary tracking-tight mb-4">
                        We are Aussie, and we've got your back.
                    </h1>
                    <p class="text-lg sm:text-xl text-brand-textSecondary max-w-3xl mx-auto font-normal">
                        Based locally in Sydney and Melbourne, we build robust financial infrastructure to help Australian business owners protect their cash flow.
                    </p>
                </div>
            </section>

            <!-- Company Story + Intake form -->
            <section class="py-20 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        
                        <!-- Story Block -->
                        <div>
                            <h2 class="text-2xl font-bold text-brand-textPrimary mb-6">Designed to Help Small Businesses Succeed</h2>
                            <p class="text-brand-textSecondary text-sm leading-relaxed mb-6">
                                AME Pay was created by former financial systems engineers who saw first-hand the stress that late payments put on local operations. Waiting 30 to 60 days to clear invoices holds back growth and makes it harder to pay staff on time.
                            </p>
                            <p class="text-brand-textSecondary text-sm leading-relaxed mb-8">
                                We designed AME Pay to solve this problem. Our platform connects directly to standard accounting ledgers, automating direct debit collections so teams can focus on growing their business instead of chasing money.
                            </p>
                            
                            <!-- Security Badges Integration -->
                            <div class="border-t border-brand-border pt-8">
                                <h4 class="text-xs uppercase tracking-wider font-bold text-brand-textMuted mb-4">Active Compliance Credentials</h4>
                                <div class="flex flex-wrap gap-4">
                                    <span class="bg-brand-altBg px-3 py-1.5 rounded border border-brand-border text-xs font-mono font-bold text-brand-textPrimary">PCI DSS Tier 1 compliant</span>
                                    <span class="bg-brand-altBg px-3 py-1.5 rounded border border-brand-border text-xs font-mono font-bold text-brand-textPrimary">AES-256 data security</span>
                                    <span class="bg-brand-altBg px-3 py-1.5 rounded border border-brand-border text-xs font-mono font-bold text-brand-textPrimary">Australian Data Residency</span>
                                </div>
                            </div>
                        </div>

                        <!-- Contact Intake Form -->
                        <div class="p-8 rounded-3xl bg-brand-altBg border border-brand-border shadow-sm">
                            <!-- PLACEHOLDER: Client to supply support hours, support phone numbers, and live chat API details -->
                            <div class="mb-6 p-4 bg-yellow-100 border border-yellow-200 rounded-xl text-yellow-800 text-xs leading-relaxed">
                                <strong>Setup Note:</strong> Client to supply final support hours, support phone numbers, and live chat API integration parameters.
                            </div>

                            <h3 class="text-xl font-bold text-brand-textPrimary mb-4">Send a Message to Our Support Team</h3>
                            
                            <form id="contact-form" class="space-y-4" onsubmit="handleFormSubmit(event)">
                                <div class="grid grid-cols-2 gap-4">
                                    <div>
                                        <label class="block text-xs font-bold text-brand-textSecondary mb-1">First Name</label>
                                        <input type="text" required class="w-full p-3 rounded-lg border border-brand-border bg-white text-sm focus:ring-2 focus:ring-brand-blue focus:outline-none" placeholder="Jennifer">
                                    </div>
                                    <div>
                                        <label class="block text-xs font-bold text-brand-textSecondary mb-1">Last Name</label>
                                        <input type="text" required class="w-full p-3 rounded-lg border border-brand-border bg-white text-sm focus:ring-2 focus:ring-brand-blue focus:outline-none" placeholder="Vance">
                                    </div>
                                </div>

                                <div>
                                    <label class="block text-xs font-bold text-brand-textSecondary mb-1">Business Email Address</label>
                                    <input type="email" required class="w-full p-3 rounded-lg border border-brand-border bg-white text-sm focus:ring-2 focus:ring-brand-blue focus:outline-none" placeholder="info@ame-pay.com.au">
                                </div>

                                <div>
                                    <label class="block text-xs font-bold text-brand-textSecondary mb-1">Company Name</label>
                                    <input type="text" class="w-full p-3 rounded-lg border border-brand-border bg-white text-sm focus:ring-2 focus:ring-brand-blue focus:outline-none" placeholder="AME Tech Pty Ltd
">
                                </div>

                                <div>
                                    <label class="block text-xs font-bold text-brand-textSecondary mb-1">Message Description</label>
                                    <textarea rows="4" required class="w-full p-3 rounded-lg border border-brand-border bg-white text-sm focus:ring-2 focus:ring-brand-blue focus:outline-none" placeholder="Let us know about your payment setup..."></textarea>
                                </div>

                                <button type="submit" class="w-full py-3 bg-brand-blue text-white rounded-lg text-sm font-bold shadow-lg hover:bg-brand-blue/90 transition-all duration-300">
                                    Submit Request
                                </button>
                            </form>
                            
                            <!-- Success State Banner -->
                            <div id="form-success" class="hidden mt-4 p-4 bg-emerald-100 border border-emerald-200 text-emerald-800 text-sm font-bold rounded-xl text-center">
                                Thank you! Your request was received successfully. A local support engineer will be in touch within two business hours.
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>

    </main>

    <!-- Consolidated Universal Footer Section -->
    <footer class="bg-brand-altBg text-brand-textPrimary border-t border-brand-border pt-16 pb-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                
                <div>
                    <!-- Footer branding matching dark logo container framework exactly -->
                    <div class="h-11 w-32 px-3 py-1.5 rounded-lg bg-white flex items-center justify-center border border-brand-border shadow-sm mb-6">
                        <img src="AME Pay Logo.png" alt="AME Pay Logo.png" class="h-8 w-auto object-contain" onerror="this.onerror=null; this.outerHTML='<span class=\'text-white font-sora font-extrabold text-sm tracking-tight\'>ame<span class=\'text-brand-cyan\'>pay</span></span>'">
                    </div>
                    <p class="text-xs text-brand-textSecondary leading-relaxed mb-6">
                        Seamless payment automation and direct debit clearing infrastructure engineered specifically for growing Australian businesses.
                    </p>
                    <div class="flex items-center gap-2 text-xs font-mono text-emerald-600 font-bold">
                        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        All Systems Operational
                    </div>
                </div>

                <div>
                    <h4 class="font-bold text-sm text-brand-textPrimary mb-4">Infrastructure</h4>
                    <ul class="space-y-3 text-xs text-brand-textSecondary">
                        <li><a href="#features" onclick="navigateTo('features'); return false;" class="hover:text-brand-blue transition-colors">Direct Debit Mandate Clearing</a></li>
                        <li><a href="#features" onclick="navigateTo('features'); return false;" class="hover:text-brand-blue transition-colors">Smart Recovery Auto-Retry</a></li>
                        <li><a href="#features" onclick="navigateTo('features'); return false;" class="hover:text-brand-blue transition-colors">Ledger Sync Systems</a></li>
                        <li><a href="#features" onclick="navigateTo('features'); return false;" class="hover:text-brand-blue transition-colors">Developer REST API Docs</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-bold text-sm text-brand-textPrimary mb-4">Company</h4>
                    <ul class="space-y-3 text-xs text-brand-textSecondary">
                        <li><a href="#about" onclick="navigateTo('about'); return false;" class="hover:text-brand-blue transition-colors">Our Australian Story</a></li>
                        <li><a href="#about" onclick="navigateTo('about'); return false;" class="hover:text-brand-blue transition-colors">Active Compliance Hub</a></li>
                        <li><a href="#about" onclick="navigateTo('about'); return false;" class="hover:text-brand-blue transition-colors">Sydney Operations</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-bold text-sm text-brand-textPrimary mb-4">Active Compliance</h4>
                    <ul class="space-y-3 text-xs text-brand-textSecondary font-medium">
                        <li><span class="block">PCI DSS Level 1 Certified</span></li>
                        <li><span class="block">Australian Privacy Act Standard</span></li>
                        <li><span class="block">BECS Cleared Direct Debits</span></li>
                    </ul>
                </div>

            </div>

            <div class="border-t border-brand-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p class="text-xs text-brand-textMuted">
                    © 2026 AME Pay Australia Pty Ltd. All rights reserved.
                </p>
                <div class="flex gap-6 text-xs text-brand-textMuted">
                    <span class="hover:text-brand-blue transition-colors cursor-pointer">Privacy Policy</span>
                    <span class="hover:text-brand-blue transition-colors cursor-pointer">Terms of Service</span>
                    <span class="hover:text-brand-blue transition-colors cursor-pointer">Sydney • Melbourne</span>
                </div>
            </div>
        </div>
    </footer>

    <script>
        // Smooth client-side SPA routing
        function navigateTo(viewId) {
            // Hide all views
            const views = document.querySelectorAll('.page-view');
            views.forEach(view => {
                view.classList.add('hidden');
            });

            // Show target view
            const targetView = document.getElementById('view-' + viewId);
            if (targetView) {
                targetView.classList.remove('hidden');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            // Sync navigation active indicator styling
            const links = document.querySelectorAll('.nav-link');
            links.forEach(link => {
                if(link.getAttribute('href').includes(viewId)) {
                    link.classList.remove('text-brand-textSecondary');
                    link.classList.add('text-brand-blue');
                } else {
                    link.classList.remove('text-brand-blue');
                    link.classList.add('text-brand-textSecondary');
                }
            });
        }

        // Toggle mobile drawer
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
            } else {
                menu.classList.add('hidden');
            }
        }

        // Contact form handling and mailto redirect
        function handleFormSubmit(event) {
            event.preventDefault();
            
            // Extract the user values dynamically
            const firstName = document.getElementById('first-name').value;
            const lastName = document.getElementById('last-name').value;
            const email = document.getElementById('email').value;
            const companyName = document.getElementById('company').value || 'N/A';
            const messageText = document.getElementById('message').value;

            // Target recipient email parameters
            const recipient = 'info@ame-pay.com.au';
            const subject = `AME Pay Inquiry: ${companyName} (${firstName} ${lastName})`;
            
            // Construct a clean plaintext body template
            const body = `Inquiry Details:\n` +
                         `---------------------------------------------\n` +
                         `Sender: ${firstName} ${lastName}\n` +
                         `Business Email: ${email}\n` +
                         `Company Name: ${companyName}\n\n` +
                         `Message:\n` +
                         `${messageText}\n` +
                         `---------------------------------------------\n` +
                         `Submitted via AME Pay Landing Portal.`;

            // Build valid system URI
            const mailtoUri = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // Open the default system email client
            window.location.href = mailtoUri;

            // Handle UI success and resetting animations
            const form = document.getElementById('contact-form');
            const success = document.getElementById('form-success');

            form.classList.add('hidden');
            success.classList.remove('hidden');

            setTimeout(() => {
                form.reset();
                form.classList.remove('hidden');
                success.classList.add('hidden');
            }, 5000);
        }

        // Fee calculations logic
        function calculateFees(value) {
            const volume = parseInt(value);
            const volumeDisplay = document.getElementById('calc-volume-display');
            const feesDisplay = document.getElementById('calc-fees-display');

            // 1.2% processing rate
            const calculatedFees = Math.round(volume * 0.012);

            volumeDisplay.innerText = '$' + volume.toLocaleString();
            feesDisplay.innerText = '$' + calculatedFees.toLocaleString();
        }

        // Contact form handling demo state
        function handleFormSubmit(event) {
            event.preventDefault();
            const form = document.getElementById('contact-form');
            const success = document.getElementById('form-success');

            form.classList.add('hidden');
            success.classList.remove('hidden');

            setTimeout(() => {
                form.reset();
                form.classList.remove('hidden');
                success.classList.add('hidden');
            }, 5000);
        }

        // Toggle FAQ Accordions
        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.faq-icon');

            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.innerText = '−';
                icon.style.transform = 'rotate(180deg)';
            } else {
                content.classList.add('hidden');
                icon.innerText = '+';
                icon.style.transform = 'rotate(0deg)';
            }
        }

        // Auto initialization
        window.onload = function() {
            calculateFees(100000);
        }
    </script>


</body>
</html>
