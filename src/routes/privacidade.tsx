import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidade")({
  component: PrivacidadePage,
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Manual do Locador de Carros" },
      {
        name: "description",
        content:
          "Como o Manual do Locador de Carros coleta, usa e protege os seus dados pessoais, em conformidade com a LGPD.",
      },
    ],
  }),
});

function PrivacidadePage() {
  const atualizacao = "17 de julho de 2026";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        <header className="mb-10 border-b border-border pb-6">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            Política de Privacidade
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Manual do Locador de Carros. Última atualização: {atualizacao}.
          </p>
        </header>

        <div className="space-y-8 text-[15px] leading-relaxed text-foreground/90">
          <section>
            <p>
              Esta Política de Privacidade explica como o Manual do Locador de
              Carros, produto operado no âmbito da Winner Locações, coleta, usa,
              armazena e protege as informações dos visitantes e clientes do site{" "}
              <strong>manualdolocador.com</strong> e das suas páginas
              relacionadas. Ao navegar no site ou concluir uma compra, você
              concorda com as práticas descritas aqui. Este documento segue a
              Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018, LGPD).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">1. Quem somos</h2>
            <p>
              O responsável pelo tratamento dos dados é o Manual do Locador de
              Carros (Winner Locações). Para qualquer assunto relacionado a esta
              política ou aos seus dados, o contato é o e-mail{" "}
              <a
                href="mailto:realucas1995@gmail.com"
                className="font-medium text-primary underline underline-offset-2"
              >
                realucas1995@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              2. Quais dados coletamos
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Dados de cadastro e compra:</strong> nome, e-mail,
                telefone e informações necessárias para processar o pagamento e
                entregar o produto, fornecidos por você no momento da compra.
              </li>
              <li>
                <strong>Dados de navegação:</strong> páginas visitadas, tempo de
                permanência, cliques, tipo de dispositivo, navegador e origem do
                acesso, coletados automaticamente por cookies e tecnologias
                semelhantes.
              </li>
              <li>
                <strong>Identificadores de campanha:</strong> parâmetros de URL
                (UTMs) usados para entender por qual anúncio ou canal você chegou
                até nós.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              3. Como usamos os seus dados
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Processar o pedido, o pagamento e liberar o acesso ao produto.</li>
              <li>Prestar suporte e responder às suas solicitações.</li>
              <li>
                Enviar comunicações sobre a sua compra e, quando autorizado,
                conteúdos e ofertas.
              </li>
              <li>
                Medir e melhorar o desempenho do site e das nossas campanhas de
                anúncios.
              </li>
              <li>Cumprir obrigações legais e prevenir fraudes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              4. Cookies e ferramentas de terceiros
            </h2>
            <p className="mb-3">
              Utilizamos cookies e tecnologias de mensuração próprias e de
              terceiros para operar o site, medir audiência e otimizar anúncios.
              Entre os serviços que podem coletar dados de navegação estão:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Meta (Facebook e Instagram):</strong> pixel de
                conversão, para medir resultados e exibir anúncios.
              </li>
              <li>
                <strong>Google:</strong> Google Tag Manager e serviços de
                análise, para gerenciar tags e medir o uso do site.
              </li>
              <li>
                <strong>Microsoft Clarity:</strong> análise de comportamento e
                uso das páginas.
              </li>
              <li>
                <strong>UTMify:</strong> rastreamento de origem de campanha por
                parâmetros de URL.
              </li>
              <li>
                <strong>Plataforma de checkout e processadores de pagamento:</strong>{" "}
                para concluir a compra com segurança. Os dados de pagamento são
                tratados diretamente pela plataforma de pagamento, e não
                armazenamos os dados do seu cartão.
              </li>
            </ul>
            <p className="mt-3">
              Você pode gerenciar ou bloquear cookies nas configurações do seu
              navegador. Ao desativar alguns cookies, partes do site podem não
              funcionar como esperado.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              5. Compartilhamento de dados
            </h2>
            <p>
              Não vendemos os seus dados pessoais. Compartilhamos informações
              apenas com os fornecedores necessários para operar o serviço
              (plataforma de checkout, processadores de pagamento e ferramentas
              de análise e anúncios citadas acima), sempre no limite necessário,
              ou quando exigido por obrigação legal ou ordem de autoridade
              competente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              6. Armazenamento e segurança
            </h2>
            <p>
              Mantemos os seus dados apenas pelo tempo necessário para cumprir as
              finalidades descritas nesta política e as obrigações legais.
              Adotamos medidas técnicas e organizacionais razoáveis para proteger
              as informações contra acesso não autorizado, perda ou uso indevido.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Os seus direitos</h2>
            <p className="mb-3">
              Nos termos da LGPD, você pode, a qualquer momento, solicitar:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Confirmação de que tratamos os seus dados e acesso a eles.</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
              <li>
                Anonimização, bloqueio ou eliminação de dados desnecessários ou
                tratados em desconformidade com a lei.
              </li>
              <li>Portabilidade e informação sobre com quem compartilhamos dados.</li>
              <li>
                Revogação do consentimento e exclusão dos dados tratados com base
                nele.
              </li>
            </ul>
            <p className="mt-3">
              Para exercer qualquer um desses direitos, escreva para{" "}
              <a
                href="mailto:realucas1995@gmail.com"
                className="font-medium text-primary underline underline-offset-2"
              >
                realucas1995@gmail.com
              </a>
              . Responderemos no prazo previsto em lei.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              8. Alterações nesta política
            </h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. A
              versão vigente é sempre a publicada nesta página, com a data de
              última atualização indicada no topo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">9. Contato</h2>
            <p>
              Dúvidas sobre esta política ou sobre o tratamento dos seus dados
              podem ser enviadas para{" "}
              <a
                href="mailto:realucas1995@gmail.com"
                className="font-medium text-primary underline underline-offset-2"
              >
                realucas1995@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

        <footer className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
          <Link to="/" className="text-primary underline underline-offset-2">
            Voltar para a página inicial
          </Link>
          <p className="mt-4">
            © Manual do Locador de Carros. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </div>
  );
}
