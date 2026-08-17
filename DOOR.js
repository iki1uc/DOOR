// DOOR.js
// Übergangsmodul – Durchgang, Transition, Warp, Kanal

export const DOOR = {
    // Status
    open: false,
    transition: false,
    warb: false,
    kanal: false,
    api: false,
    
    // Zähler
    count: { door: 0, trans: 0, warb: 0, kanal: 0, api: 0 },

    // DOOR öffnen/schließen
    openDoor() {
        this.open = true;
        this.count.door++;
        return { status: 'ok', message: '🚪 DOOR geöffnet', count: this.count.door };
    },

    closeDoor() {
        this.open = false;
        this.transition = false;
        this.warb = false;
        this.kanal = false;
        return { status: 'ok', message: '🚪 DOOR geschlossen' };
    },

    isOpen() {
        return this.open;
    },

    // TRANS – Transition
    trans() {
        if (!this.open) return { status: 'error', message: '❌ DOOR nicht geöffnet' };
        this.transition = true;
        this.count.trans++;
        return { status: 'ok', message: '🌀 TRANS aktiviert', count: this.count.trans };
    },

    // WARB – Warp
    warb() {
        if (!this.open) return { status: 'error', message: '❌ DOOR nicht geöffnet' };
        this.warb = true;
        this.count.warb++;
        return { status: 'ok', message: '⚡ WARB aktiviert', count: this.count.warb };
    },

    // KANAL
    kanal() {
        if (!this.open) return { status: 'error', message: '❌ DOOR nicht geöffnet' };
        this.kanal = true;
        this.count.kanal++;
        return { status: 'ok', message: '🔗 KANAL verbunden', count: this.count.kanal };
    },

    // API
    api() {
        this.api = true;
        this.count.api++;
        return { status: 'ok', message: '🔌 API verbunden', count: this.count.api };
    },

    // Reset
    reset() {
        this.open = false;
        this.transition = false;
        this.warb = false;
        this.kanal = false;
        this.api = false;
        this.count = { door: 0, trans: 0, warb: 0, kanal: 0, api: 0 };
        return { status: 'ok', message: '⟲ DOOR zurückgesetzt' };
    },

    // Status abrufen
    getStatus() {
        return {
            open: this.open,
            transition: this.transition,
            warb: this.warb,
            kanal: this.kanal,
            api: this.api,
            count: this.count
        };
    }
};

// Default Export für einfaches Importieren
export default DOOR;
