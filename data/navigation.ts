import { Menu } from "@/types/navigation";

export const productsMenu: Menu = {
    "title": "Products",
    "categories": [
        {
            "id": "link-in-bio-and-tools",
            "title": "Link in bio + tools",
            "icon": "link",
            "subItems": [
                {
                    "title": "Link in bio",
                    "description": "Customize your Linktree",
                    "link": "#"
                },
                {
                    "title": "Link shortener",
                    "description": "Create trackable, shareable short links",
                    "link": "#"
                },
                {
                    "title": "QR code generator",
                    "description": "Turn links into scannable QR codes",
                    "link": "#"
                },
                {
                    "title": "Canva Background Editor",
                    "description": "Import your custom designs from Canva into your profile",
                    "link": "#"
                }
            ],
            "footer": {
                "title": "Linktree for every social platform",
                "description": "Grow and engage your audience everywhere",
                "socialIcons": [
                    { "platform": "Instagram", "icon": "/navigation/socials/instagram.svg" },
                    { "platform": "TikTok", "icon": "/navigation/socials/tiktok.svg" },
                    { "platform": "LinkedIn", "icon": "/navigation/socials/alpinelinux.svg" },
                    { "platform": "X / Twitter", "icon": "/navigation/socials/threads.svg" }
                ]
            },
            "featured": {
                "sectionTitle": "Featured",
                "image": "/navigation/products/featured.avif",
                "title": "Join 70M+ using Linktree as their link in bio",
                "description": "One link to share everything you create, curate, and sell across all your socials.",
                "link": "#"
            }
        },
        {
            "id": "manage-your-social-media",
            "title": "Manage your social media",
            "icon": "share",
            "subItems": [
                {
                    "title": "Schedule and auto-post",
                    "description": "Hands-free, hassle-free social media planning",
                    "link": "#"
                },
                {
                    "title": "Instagram auto reply",
                    "description": "Automated replies and DMs triggered by comments",
                    "link": "#"
                },
                {
                    "title": "AI content & caption generator",
                    "description": "Instant AI-powered post ideas and captions",
                    "link": "#"
                },
                {
                    "title": "Hashtag generator",
                    "description": "Trending hashtag suggestions for better reach",
                    "link": "#"
                }
            ],
            "footer": {
                "title": "Social integration for every social platform",
                "description": "Plan, auto post, and share across all platforms",
                "socialIcons": [
                    { "platform": "Instagram", "icon": "/navigation/socials/instagram.svg" },
                    { "platform": "TikTok", "icon": "/navigation/socials/tiktok.svg" },
                    { "platform": "Facebook", "icon": "/navigation/socials/facebook.svg" },
                    { "platform": "Pinterest", "icon": "/navigation/socials/pinterest.svg" },
                    { "platform": "LinkedIn", "icon": "/navigation/socials/alpinelinux.svg" },
                    { "platform": "Threads", "icon": "/navigation/socials/threads.svg" },
                    { "platform": "YouTube", "icon": "/navigation/socials/youtube.svg" }
                ]
            },
            "featured": {
                "sectionTitle": "What's New",
                "image": "/navigation/products/what.avif",
                "title": "Boost sales with Instagram Auto-reply",
                "description": "Instantly reply to comments, send traffic to your offers, and turn engagement into sales—automatically.",
                "link": "#"
            }
        },
        {
            "id": "grow-and-engage-your-audience",
            "title": "Grow and engage your audience",
            "icon": "users",
            "subItems": [
                {
                    "title": "Collect leads with contact forms",
                    "description": "Turn visitors into subscribers",
                    "link": "#"
                },
                {
                    "title": "Manage and activate your audience",
                    "description": "Organize, tag, and track contacts",
                    "link": "#"
                },
                {
                    "title": "Send contacts to email tools",
                    "description": "Sync with Mailchimp, Klaviyo, Kit & more",
                    "link": "#"
                }
            ],
            "featured": {
                "sectionTitle": "Featured",
                "image": "/navigation/products/send-contacts-to-email-tools.avif",
                "title": "Connect your email tools, activate your audience",
                "description": "Send new contacts straight from Linktree to Mailchimp, Klaviyo, Kit and more.",
                "link": "#"
            }
        },
        {
            "id": "monetize-your-following",
            "title": "Monetize your following",
            "icon": "dollar",
            "subItems": [
                {
                    "title": "Earn with a Linktree Shop",
                    "description": "Sell products and earn commission",
                    "link": "#"
                },
                {
                    "title": "Sell an online course",
                    "description": "Create and sell your expertise easily",
                    "link": "#"
                },
                {
                    "title": "Host digital products",
                    "description": "Sell digital products and build your email list",
                    "link": "#"
                },
                {
                    "title": "Earn by hosting sponsored links",
                    "description": "Share brand offers and earn for every sign-up or sale",
                    "link": "#"
                },
                {
                    "title": "Get rewarded for growing your Linktree",
                    "description": "Earn points, level up and unlock cash bonuses",
                    "link": "#"
                },
                {
                    "title": "Booked and paid, easily",
                    "description": "Offer sessions and earn from your expertise",
                    "link": "#"
                }
            ],
            "featured": {
                "sectionTitle": "Featured",
                "image": "/navigation/products/booked-and-paid-easily.avif",
                "title": "Turn Your Linktree into a Storefront That Pays",
                "description": "Add affiliate products, share what you love, and start earning in minutes with industry-leading commissions.",
                "link": "#"
            }
        },
        {
            "id": "measure-your-success",
            "title": "Measure your success",
            "icon": "chart",
            "subItems": [
                {
                    "title": "Social + link analytics",
                    "description": "Track clicks, engagement and audience insights",
                    "link": "#"
                }
            ],
            "featured": {
                "sectionTitle": "Featured",
                "image": "/navigation/products/social-link-analytics.avif",
                "title": "Grow engagement with analytics",
                "description": "Make data-driven decisions for your Linktree and social media platforms with analytics that are easy to understand.",
                "link": "#"
            }
        }
    ]
};

export const learnMenu: Menu = {
    "title": "Learn",
    "categories": [
        {
            "id": "resources",
            "title": "Resources",
            "icon": "grid",
            "subItems": [
                {
                    "title": "Read our blog",
                    "description": "All the latest tips, tricks and growth strategies",
                    "link": "#"
                },
                {
                    "title": "Success Stories",
                    "description": "Real people, real results on Linktree",
                    "link": "#"
                }
            ],
            "featured": {
                "sectionTitle": "Learn with Linktree",
                "image": "/navigation/learn/success-stories.avif",
                "title": "Create & sell your own online Course",
                "description": "If you’ve got something to share, you’ve got something to sell. Easily create and share an online course that...",
                "link": "#"
            }
        },
        {
            "id": "how-to-use-linktree",
            "title": "How to use Linktree",
            "icon": "lightbulb",
            "subItems": [
                {
                    "title": "Linktree Help Centre",
                    "description": "Get answers, guides and support",
                    "link": "#"
                }
            ],
            "featured": {
                "sectionTitle": "Learn with Linktree",
                "image": "/navigation/learn/success-stories.avif",
                "title": "Create & sell your own online Course",
                "description": "If you’ve got something to share, you’ve got something to sell. Easily create and share an online course that...",
                "link": "#"
            }
        }
    ]
}