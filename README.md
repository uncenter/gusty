# Attrbreeze

A minimal atomic CSS stylesheet using dynamic utility ~~classes~~ attributes.

> [!NOTE]
> This project is only a fun exploration of CSS data types and [Chrome 133 (beta)'s new "advanced" `attr()`](https://developer.chrome.com/blog/advanced-attr), inspired by [Jhey](https://jhey.dev)'s skeets around the topic: https://bsky.app/profile/jhey.dev/post/3lgq7fun4ek22, https://bsky.app/profile/jhey.dev/post/3lgq7lfnf7c22. Please don't take this seriously!

Think [Tailwind CSS](https://tailwindcss.com/) or [UnoCSS](https://unocss.dev/), but the utility classes/attributes are declared once and can be used in any number of variations without requiring more generated CSS.

For the following HTML:

```html
<div class="px-8 px-6 px-4 px-2"></div>
```

Tailwind CSS would need to generate the following CSS:

```css
.px-2 {
	padding-left: 0.5rem;
	padding-right: 0.5rem;
}
.px-4 {
	padding-left: 1rem;
	padding-right: 1rem;
}
.px-6 {
	padding-left: 1.5rem;
	padding-right: 1.5rem;
}
.px-8 {
	padding-left: 2rem;
	padding-right: 2rem;
}
```

Whereas for the following HTML (rough translation into Attrbreeze's syntax):

```html
<div px="2rem" px="1.5rem" px="1rem" px="0.5rem"></div>
```

Attrbreeze only requires as single declaration block:

```css
[px] {
	padding-left: attr(px type(<length> | <percentage>));
	padding-right: attr(px type(<length> | <percentage>));
}
```

> [!NOTE]
> While Attrbreeze only _needs_ this one declaration for all `px` attributes/classes, usage of the stylesheet would include all other utility attributes. This is unlike Tailwind CSS, which purges unused classes.

Attrbreeze theoretically scales better with larger projects, since more variation of utility attributes usually (e.g. with Tailwind CSS) means more classes in the compiled stylesheet, whereas the Attrbreeze stylesheet is always the same length.
