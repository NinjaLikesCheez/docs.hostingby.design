module.exports = {
  docs: [
    {
      type: "doc",
      id: "home",
    },
    {
      type: "category",
      label: "Pre-Sales",
      collapsed: false,
      items: [
        "pre-sales/payment-methods",
        "pre-sales/notes-cc",
        "pre-sales/refund",
        "pre-sales/switching",
        "pre-sales/dedicated-ip",
        "pre-sales/data-retention-policy",
        "pre-sales/support-scope",
      ],
    },
    {
      type: "category",
      label: "Application hosting",
      collapsed: true,
      items: [
        {
          "Getting Started": [
            "application-hosting/getting-started/how-do-i-connect",
            "application-hosting/getting-started/dashboard",
            "application-hosting/getting-started/box-basics",
            "application-hosting/getting-started/abuse",
            "application-hosting/getting-started/bandwitdh",
            "application-hosting/getting-started/ftp-bouncer",
          ],
          "Applications (Official)": [
            "application-hosting/applications/application-basics",
            "application-hosting/applications/autobrr",
            "application-hosting/applications/autodl",
            "application-hosting/applications/bazarr",
            "application-hosting/applications/btsync",
            "application-hosting/applications/deluge",
            "application-hosting/applications/emby",
            "application-hosting/applications/flaresolverr",
            "application-hosting/applications/jackett",
            "application-hosting/applications/jellyfin",
            "application-hosting/applications/lidarr",
            "application-hosting/applications/medusa",
            "application-hosting/applications/nzbget",
            "application-hosting/applications/ombi",
            "application-hosting/applications/plex",
            "application-hosting/applications/plex-tunnel",
            "application-hosting/applications/prowlarr",
            "application-hosting/applications/radarr",
            "application-hosting/applications/rtorrent",
            "application-hosting/applications/sabnzbd",
            "application-hosting/applications/sonarr",
            "application-hosting/applications/tautulli",
            "application-hosting/applications/qbittorrent",
            "application-hosting/applications/wireguard",
          ],
          "Applications (Community)": [
            "application-hosting/community-applications/filebrowser",
            "application-hosting/community-applications/lounge",
            "application-hosting/community-applications/overseerr",
          ],
          "Guides (How To's)": [
            "application-hosting/guides/iplookup",
            "application-hosting/guides/d2r",
            "application-hosting/guides/flexget",
            "application-hosting/guides/kodi",
            "application-hosting/guides/mktorrent",
            "application-hosting/guides/systemd",
            "application-hosting/guides/network_userscript",
            "application-hosting/guides/migration",
            "application-hosting/guides/rclone-mergerfs",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Dedicated servers",
      collapsed: true,
      items: [
        {
          "Getting Started": [
            "dedicated-servers/getting-started/how-do-i-connect",
            "dedicated-servers/getting-started/abuse",
            "dedicated-servers/getting-started/bandwidth",
            "dedicated-servers/getting-started/ftp-bouncer",
            "dedicated-servers/getting-started/leaseweb-reinstall",
            "dedicated-servers/getting-started/hetzner-reinstall",
            "dedicated-servers/getting-started/ipv6-setup",
            "dedicated-servers/getting-started/guestftp",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "VPS Hosting",
      collapsed: true,
      items: [
        {
          "Getting Started": [
            "vps-hosting/abuse",
            "vps-hosting/fair-use-policy",
          ],
        },
      ],
    },
  ],
};
