import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
export function onRouteDidUpdate({location, previousLocation}) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  if (location.pathname !== previousLocation?.pathname) {
    // console.log('Adding tooltip');
    const footnoteRefs = document.querySelectorAll('a[data-footnote-ref], a[id^="user-content-fnref-"], sup a');
    const tooltip = document.createElement('div');
    tooltip.className = 'footnote-tooltip';
    document.body.appendChild(tooltip);

    footnoteRefs.forEach((ref, index) => {
      // console.log(`Footnote ref ${index}:`, ref.outerHTML);

      ref.addEventListener('mouseenter', (e) => {
        const footnoteId = ref.getAttribute('href')?.replace('#', '');
        // console.log('Footnote ID:', footnoteId);
        const footnoteContent = footnoteId ? document.getElementById(footnoteId)?.querySelector('p')?.innerHTML.replace(/<a[^>]*>[^<]*<\/a>\s*$/, '') : null;
        // console.log('Footnote content:', footnoteContent);
        if (footnoteContent) {
          tooltip.innerHTML = footnoteContent;
          tooltip.style.display = 'block';
          tooltip.style.left = `${e.pageX + 10}px`;
          tooltip.style.top = `${e.pageY + 10}px`;
        }
      });

      ref.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
      });
    });
  }
}
