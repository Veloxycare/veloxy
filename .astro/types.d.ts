declare module 'astro:content' {
	interface Render {
		'.mdoc': Promise<{
			Content(props: Record<string, any>): import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"Blogs": Record<string, {
  id: string;
  slug: string;
  body: string;
  collection: "Blogs";
  data: any;
  render(): Render[".md"];
}>;
"LegalDocuments": Record<string, {
  id: string;
  slug: string;
  body: string;
  collection: "LegalDocuments";
  data: any;
  render(): Render[".md"];
}>;
"blogs": {
"discover-veloxy-careride-affordable-nemt-rates-for-cancer-patients-and-senior-citizens-in-jefferson-and-walker-county-alabama.mdoc": {
	id: "discover-veloxy-careride-affordable-nemt-rates-for-cancer-patients-and-senior-citizens-in-jefferson-and-walker-county-alabama.mdoc";
  slug: "discover-veloxy-careride-affordable-nemt-rates-for-cancer-patients-and-senior-citizens-in-jefferson-and-walker-county-alabama";
  body: string;
  collection: "blogs";
  data: any
} & { render(): Render[".mdoc"] };
"how-veloxy-care-ride-is-making-a-difference-in-the-lives-of-cancer-patients.mdoc": {
	id: "how-veloxy-care-ride-is-making-a-difference-in-the-lives-of-cancer-patients.mdoc";
  slug: "how-veloxy-care-ride-is-making-a-difference-in-the-lives-of-cancer-patients";
  body: string;
  collection: "blogs";
  data: any
} & { render(): Render[".mdoc"] };
"how-veloxy-care-ride-s-senior-care-program-is-making-a-difference-in-the-lives-of-seniors.mdoc": {
	id: "how-veloxy-care-ride-s-senior-care-program-is-making-a-difference-in-the-lives-of-seniors.mdoc";
  slug: "how-veloxy-care-ride-s-senior-care-program-is-making-a-difference-in-the-lives-of-seniors";
  body: string;
  collection: "blogs";
  data: any
} & { render(): Render[".mdoc"] };
"veloxy-care-ride-your-trusted-transportation-service-in-jefferson-county-al.mdoc": {
	id: "veloxy-care-ride-your-trusted-transportation-service-in-jefferson-county-al.mdoc";
  slug: "veloxy-care-ride-your-trusted-transportation-service-in-jefferson-county-al";
  body: string;
  collection: "blogs";
  data: any
} & { render(): Render[".mdoc"] };
};
"legaldocuments": {
"about-us.mdoc": {
	id: "about-us.mdoc";
  slug: "about-us";
  body: string;
  collection: "legaldocuments";
  data: any
} & { render(): Render[".mdoc"] };
"community-guidelines.mdoc": {
	id: "community-guidelines.mdoc";
  slug: "community-guidelines";
  body: string;
  collection: "legaldocuments";
  data: any
} & { render(): Render[".mdoc"] };
"compliance.mdoc": {
	id: "compliance.mdoc";
  slug: "compliance";
  body: string;
  collection: "legaldocuments";
  data: any
} & { render(): Render[".mdoc"] };
"driver-certifications-to-acquire-upon-driving-for-veloxy-care-ride.mdoc": {
	id: "driver-certifications-to-acquire-upon-driving-for-veloxy-care-ride.mdoc";
  slug: "driver-certifications-to-acquire-upon-driving-for-veloxy-care-ride";
  body: string;
  collection: "legaldocuments";
  data: any
} & { render(): Render[".mdoc"] };
"non-discrimination-policy.mdoc": {
	id: "non-discrimination-policy.mdoc";
  slug: "non-discrimination-policy";
  body: string;
  collection: "legaldocuments";
  data: any
} & { render(): Render[".mdoc"] };
"privacy-policy.mdoc": {
	id: "privacy-policy.mdoc";
  slug: "privacy-policy";
  body: string;
  collection: "legaldocuments";
  data: any
} & { render(): Render[".mdoc"] };
"terms-and-conditions.mdoc": {
	id: "terms-and-conditions.mdoc";
  slug: "terms-and-conditions";
  body: string;
  collection: "legaldocuments";
  data: any
} & { render(): Render[".mdoc"] };
"veloxy-care-ride-tnc-record-retention-policy.mdoc": {
	id: "veloxy-care-ride-tnc-record-retention-policy.mdoc";
  slug: "veloxy-care-ride-tnc-record-retention-policy";
  body: string;
  collection: "legaldocuments";
  data: any
} & { render(): Render[".mdoc"] };
"zero-tolerance-intoxicating-substances-policy.mdoc": {
	id: "zero-tolerance-intoxicating-substances-policy.mdoc";
  slug: "zero-tolerance-intoxicating-substances-policy";
  body: string;
  collection: "legaldocuments";
  data: any
} & { render(): Render[".mdoc"] };
};
"pages": Record<string, {
  id: string;
  slug: string;
  body: string;
  collection: "pages";
  data: any;
  render(): Render[".md"];
}>;
"posts": {
"first-post.mdoc": {
	id: "first-post.mdoc";
  slug: "first-post";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".mdoc"] };
};

	};

	type DataEntryMap = {
		"footer": {
"index": {
	id: "index";
  collection: "footer";
  data: any
};
};
"navbar": {
"index": {
	id: "index";
  collection: "navbar";
  data: any
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
