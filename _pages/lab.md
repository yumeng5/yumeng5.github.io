---
layout: archive
permalink: /lab/
title: "PhD Students"
author_profile: true
---

{% include base_path %}

<style>
	/* Scoped styles for this page */
	.students-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 1.25rem;
		margin-top: 1rem;
	}
	.student-card {
		background: #ffffff;
		border: 1px solid #e6e8eb;
		border-radius: 12px;
		padding: 16px;
		text-align: center;
		box-shadow: 0 1px 2px rgba(0,0,0,0.04);
		/* Remove movement on hover to avoid layout shift */
		transition: box-shadow 0.15s ease;
	}
	/* Keep hover shadow minimal and no translate */
	.student-card:hover { box-shadow: 0 1px 2px rgba(0,0,0,0.04); }
	.student-card a { text-decoration: none; color: inherit; display: flex; flex-direction: column; align-items: center; }
	/* Prevent global hover underline on the entire card; we'll underline only the name */
	.student-card a:hover { text-decoration: none; }
	.student-card img {
		width: 120px; height: 120px; object-fit: cover;
		border-radius: 50%; border: 1px solid #e5e7eb;
	}
	/* Light background hover effect on clickable name, consistent with site */
	.student-card .name { margin-top: 10px; font-weight: 600; font-size: 1.05rem; display: inline-block; padding: 2px 6px; border-radius: 6px; transition: background-color 0.15s ease; }
	.student-card a:hover .name { background-color: #f5f9ff; text-decoration: underline; text-underline-offset: 2px; }
	/* Keep years/meta free of underline even on hover */
	.student-card a:hover .meta { text-decoration: none !important; }

	/* Fine-tune headshot crop for Wei-Lin Chen */
	.student-card img.offset { object-position: 50% 25%; }
	.student-card .meta { color: #6b7280; font-size: 0.9rem; margin-top: 4px; }

	/* Acknowledgements entries */
	.ack-entries { list-style: none; padding-left: 0; margin: 0.5rem 0 0; display: grid; gap: 10px; }
	.ack-item { border: 1px solid #e6e8eb; border-radius: 10px; background: #fafbfd; }
	.ack-item a { display: flex; align-items: center; gap: 12px; padding: 10px 12px; text-decoration: none; color: inherit; justify-content: space-between; }
	/* Prevent global underline on the entire row (hover/focus/active) */
	.ack-item a:hover, .ack-item a:focus, .ack-item a:active { text-decoration: none !important; }
	.ack-item img { height: 28px; width: auto; opacity: 0.95; }
	@media (min-width: 700px) { .ack-item img { height: 30px; } }
	.ack-item .ack-name { font-weight: 600; display: inline-block; padding: 1px 4px; border-radius: 4px; }
	.ack-item .ack-dates { color: #6b7280; margin-left: auto; text-align: right; min-width: 140px; font-variant-numeric: tabular-nums; font-size: 0.9rem; }
	/* Underline only the funding name on interaction; never underline dates */
	/* Match student-card underline style */
	.ack-item a:hover .ack-name, .ack-item a:focus .ack-name, .ack-item a:active .ack-name { text-decoration: underline; text-underline-offset: 2px; background-color: #f5f9ff; }
	.ack-item a:hover .ack-dates, .ack-item a:focus .ack-dates, .ack-item a:active .ack-dates { text-decoration: none !important; border-bottom: 0 !important; }
	.ack-item:hover { background: #f5f9ff; border-color: #e1e7ff; }
</style>

<div class="students-grid">
	<div class="student-card">
		<a href="https://www.cs.virginia.edu/~tqf5qb/" target="_blank" rel="noopener">
			<img src="{{ base_path }}/images/Zhepei_Wei.png" alt="Headshot of Zhepei Wei" loading="lazy" />
			<div class="name">Zhepei Wei</div>
			<div class="meta">2023 Fall – Present</div>
		</a>
	</div>
	<div class="student-card">
		<a href="https://wlchen0206.github.io/" target="_blank" rel="noopener">
			<img class="offset" src="{{ base_path }}/images/Wei-Lin_Chen.jpg" alt="Headshot of Wei-Lin Chen" loading="lazy" />
			<div class="name">Wei-Lin Chen</div>
			<div class="meta">2024 Fall – Present</div>
		</a>
	</div>
	<div class="student-card">
		<a href="https://zhuxinyu.top/" target="_blank" rel="noopener">
			<img src="{{ base_path }}/images/Xinyu_Zhu.png" alt="Headshot of Xinyu Zhu" loading="lazy" />
			<div class="name">Xinyu Zhu</div>
			<div class="meta">2024 Fall – Present</div>
		</a>
	</div>
</div>

<h2 class="pub-subhead" style="border-left:none; padding-left:0; font-size:1.9em;">Acknowledgements</h2>
<p>We are grateful for the generous support of the following organizations, whose contributions make our research possible:</p>
<ul class="ack-entries">
	<li class="ack-item">
		<a href="https://openai.com/research/superalignment-fast-grants" target="_blank" rel="noopener">
			<img src="{{ base_path }}/images/openai.png" alt="OpenAI" loading="lazy" />
			<span class="ack-name">OpenAI Superalignment Fast Grants</span>
			<span class="ack-dates">2024/04–2025/04</span>
		</a>
	</li>
	<li class="ack-item">
		<a href="https://www.openphilanthropy.org/request-for-proposals-technical-ai-safety-research/" target="_blank" rel="noopener">
			<img src="{{ base_path }}/images/open_philanthropy.png" alt="Open Philanthropy" loading="lazy" />
			<span class="ack-name">Open Philanthropy Technical AI Safety Research</span>
			<span class="ack-dates">2025/08–2026/08</span>
		</a>
	</li>
	<li class="ack-item">
		<a href="https://www.amazon.science/research-areas/latest-news/63-amazon-research-award-recipients-announced-spring-2025" target="_blank" rel="noopener">
			<img src="{{ base_path }}/images/amazon.svg" alt="Amazon" loading="lazy" />
			<span class="ack-name">Amazon Research Awards</span>
			<span class="ack-dates">2026/11–2027/11</span>
		</a>
	</li>
</ul>
