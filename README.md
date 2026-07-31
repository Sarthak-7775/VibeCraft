# Vibecraft

Vibecraft is an AI-powered code generation and prototyping platform. It leverages a multi-agent system to interpret user requests, generate fully functional Next.js application components, and iterate on them in a secure, sandboxed environment. Acting as an autonomous software engineer, Vibecraft can build, refine, and instantly preview full-stack React features, complete with styling and interactivity.

## What it does

- **AI-Driven Code Generation**: Utilizes Large Language Models (via Groq) to understand complex user requirements and translate them into production-ready Next.js code.
- **Sandboxed Execution**: Employs E2B Code Interpreter to safely execute, test, and render generated code in isolated environments.
- **Multi-Agent Workflow**: Uses Inngest to orchestrate background jobs and autonomous agents that work together to plan, write, and verify code.
- **Modern Stack Prototypes**: Automatically provisions Next.js 15, React 19, and Tailwind CSS templates, utilizing Shadcn UI components for polished, accessible designs.

## Technologies Used

This project is built with the following cutting-edge technologies:

- **Framework**: [Next.js 15](https://nextjs.org) (App Router)
- **UI Library**: [React 19](https://react.dev)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Database & ORM**: [PostgreSQL](https://postgresql.org) with [Prisma](https://www.prisma.io/)
- **API & State Management**: [tRPC](https://trpc.io/) & [TanStack React Query](https://tanstack.com/query/latest)
- **Authentication**: [Clerk](https://clerk.com/)
- **Background Jobs & Agent Orchestration**: [Inngest](https://www.inngest.com/)
- **Sandboxed Code Execution**: [E2B Code Interpreter](https://e2b.dev/)
- **AI Integration**: [Groq SDK](https://groq.com/) for fast LLM inference

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.
