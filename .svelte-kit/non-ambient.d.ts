
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/Alicante" | "/Difficolta" | "/Gallery" | "/Scuola" | "/Spagnoli" | "/Vita_in_Spagna";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/Alicante": Record<string, never>;
			"/Difficolta": Record<string, never>;
			"/Gallery": Record<string, never>;
			"/Scuola": Record<string, never>;
			"/Spagnoli": Record<string, never>;
			"/Vita_in_Spagna": Record<string, never>
		};
		Pathname(): "/" | "/Alicante" | "/Alicante/" | "/Difficolta" | "/Difficolta/" | "/Gallery" | "/Gallery/" | "/Scuola" | "/Scuola/" | "/Spagnoli" | "/Spagnoli/" | "/Vita_in_Spagna" | "/Vita_in_Spagna/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/chicas.webp" | "/IMG_0038.jpg" | "/IMG_0038.webp" | "/IMG_0045.jpg" | "/IMG_0045.webp" | "/IMG_0050.jpg" | "/IMG_0050.webp" | "/IMG_0052.jpg" | "/IMG_0052.webp" | "/IMG_0059.jpg" | "/IMG_0059.webp" | "/IMG_0062.jpg" | "/IMG_0062.webp" | "/IMG_0065.jpg" | "/IMG_0065.webp" | "/IMG_0087.webp" | "/IMG_0089.webp" | "/IMG_0092.webp" | "/IMG_0094.webp" | "/IMG_0096.webp" | "/IMG_0097.webp" | "/IMG_0102.webp" | "/IMG_0104.webp" | "/IMG_9415.jpg" | "/IMG_9415.webp" | "/IMG_9420.jpg" | "/IMG_9420.webp" | "/IMG_9484.jpg" | "/IMG_9484.webp" | "/IMG_9485.jpg" | "/IMG_9485.webp" | "/IMG_9530.jpg" | "/IMG_9530.webp" | "/IMG_9578.jpg" | "/IMG_9578.webp" | "/IMG_9580.jpg" | "/IMG_9580.webp" | "/IMG_9605.jpg" | "/IMG_9605.webp" | "/IMG_9637.jpg" | "/IMG_9637.webp" | "/IMG_9640.jpg" | "/IMG_9640.webp" | "/IMG_9659.jpg" | "/IMG_9659.webp" | "/IMG_9663.jpg" | "/IMG_9663.webp" | "/IMG_9667.jpg" | "/IMG_9667.webp" | "/IMG_9676.jpg" | "/IMG_9676.webp" | "/IMG_9765.jpg" | "/IMG_9765.webp" | "/IMG_9804.jpg" | "/IMG_9804.webp" | "/IMG_9857.jpg" | "/IMG_9857.webp" | "/IMG_9883.jpg" | "/IMG_9883.webp" | "/IMG_9908.jpg" | "/IMG_9908.webp" | "/IMG_9910.jpg" | "/IMG_9910.webp" | "/IMG_9911.jpg" | "/IMG_9911.webp" | "/IMG_9912.jpg" | "/IMG_9912.webp" | "/IMG_9914.jpg" | "/IMG_9914.webp" | "/IMG_9921.jpg" | "/IMG_9921.webp" | "/IMG_9950.jpg" | "/IMG_9950.webp" | "/IMG_9951.jpg" | "/IMG_9951.webp" | "/IMG_9952.jpg" | "/IMG_9952.webp" | "/IMG_9953.jpg" | "/IMG_9953.webp" | "/IMG_9954.jpg" | "/IMG_9954.webp" | "/IMG_9955.jpg" | "/IMG_9955.webp" | "/IMG_9956.jpg" | "/IMG_9956.webp" | "/IMG_9957.jpg" | "/IMG_9957.webp" | "/IMG_9959.jpg" | "/IMG_9959.webp" | "/IMG_9960.jpg" | "/IMG_9960.webp" | "/IMG_9961.jpg" | "/IMG_9961.webp" | "/IMG_9965.jpg" | "/IMG_9965.webp" | "/IMG_9966.jpg" | "/IMG_9966.webp" | "/IMG_9968.jpg" | "/IMG_9968.webp" | "/IMG_9971.jpg" | "/IMG_9971.webp" | "/IMG_9972.jpg" | "/IMG_9972.webp" | "/Immagine WhatsApp 2025-12-15 ore 13.31.28_dc4706c2.jpg" | "/pattern_paseo_de_la_explanada.webp" | string & {};
	}
}