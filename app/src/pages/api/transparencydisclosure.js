import React, { useState, useEffect } from "react";
import ReturnHome from "../../components/Buttons/returnhome";
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

const PdfViewer = ({ pdfFile, isOpen, togglePdf, buttonLabel }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [pdfDimensions, setPdfDimensions] = useState({ width: 0, height: 0 });
    const [pageDimensions, setPageDimensions] = useState({ width: 800, height: 600 }); // Ajusta esto a tus preferencias

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const pageHeight = 600; 

    const scale = pageHeight / pageDimensions.height;



    const nextPage = () => {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1);
        }
    };

    const prevPage = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    };

    useEffect(() => {
        const fetchPdfDimensions = async () => {
            try {
                const pdf = await pdfjs.getDocument(pdfFile).promise;
                const page = await pdf.getPage(1); // Tomar la primera página para obtener sus dimensiones
                const viewport = page.getViewport({ scale: 1 });
                setPdfDimensions({
                    width: viewport.width,
                    height: viewport.height,
                });
            } catch (error) {
                console.error("Error fetching PDF dimensions:", error);
            }
        };

        fetchPdfDimensions();
    }, [pdfFile]);

    const calculateScale = () => {
        const { width, height } = pageDimensions;
        const { width: pdfWidth, height: pdfHeight } = pdfDimensions;

        const scale = Math.min(width / pdfWidth, height / pdfHeight);

        return scale;
    };

    const customTextRenderer = (textItem) => {
        return (
            <span style={{ fontSize: "12px" }}>
                {textItem.str}
            </span>
        );
    };

    return (
        <div>
            {isOpen ? (
                <div>
                    <button onClick={() => togglePdf(pdfFile, false)} style={styles.button}>
                        Close PDF
                    </button>
                    <div>
                        <button onClick={prevPage} style={styles.button}>
                            Previous Page
                        </button>
                        <span>{pageNumber} of {numPages}</span>
                        <button onClick={nextPage} style={styles.button}>
                            Next Page
                        </button>
                    </div>
                    <br />
                    <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                  

                            <Page
    pageNumber={pageNumber}
    width={pageDimensions.width * scale}
    height={pageDimensions.height* scale}
                            customTextRenderer={customTextRenderer}
                            scale={1}
/>

                    </Document>
                </div>
            ) : (
                <a href="#" onClick={(e) => { e.preventDefault(); togglePdf(pdfFile, true); }} style={styles.button}>
                    {buttonLabel}
                </a>
            )}
        </div>
    );
};


const TransparencyDisclosure = () => {
    const [openPDFs, setOpenPDFs] = useState([]);

    const togglePdf = (pdfFile, open) => {
        if (open) {
            setOpenPDFs([...openPDFs, pdfFile]);
        } else {
            setOpenPDFs(openPDFs.filter(file => file !== pdfFile));
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Transparency Disclosure</h1>
            <h2>Slavery and Human Trafficking Statement and Modern Slavery Act</h2>

            <p>
    This Statement provides an overview of the efforts that Abrahamic (together with its subsidiaries, collectively referred to as "Abrahamic," the "Ecosystem," "we," "us," or "our") has undertaken, including during any fiscal year, to ensure that forced and involuntary labor is not taking place within our business or supply chains. We have prepared this Statement on a consolidated basis for Abrahamic, including any future additions such as Abrahamic Foundation. However, it does not encompass entities outside this group, such as suppliers, startups, small businesses dealing with tangible assets, or others. We are compelled to discontinue business or contractual relationships with such entities if they breach our trust. We maintain a zero-tolerance policy towards Modern Slavery or Human Trafficking, as we vehemently oppose such atrocities anywhere in the world.
</p>

<p>
    Our aim is to contribute to a new era of change marked by transparency and to serve as an exemplar to the world. We adhere to a unified compliance program with a comprehensive set of policies addressing forced labor, human trafficking, and modern slavery. Our compliance program and policies also extend to mitigating child labor risks.
</p>

<p>
    In this Statement, this term encompasses slave labor, prison labor, indentured labor, bonded labor, human trafficking, child labor, and similar exploitative practices and many more.
</p>

<h2>Company Overview on this Pivotal Matter</h2>

<p>
    Abrahamic aspires to excel in cultivating the ecosystem and businesses while upholding established norms and values. We aspire to become one of the most impactful ecosystems globally. We are committed to instilling these values within our associates operating worldwide. Our objective is to offer a diverse range of goods and services under well-recognized national and international brands, among others.
            </p>
            
            <p>We have established an expansive network of global sourcing partners to efficiently meet the needs of our customers, investors, and traders, without engaging in any illegal practices that infringe upon human rights. Our vendors and factories, regardless of their location, adhere to our established norms and protocols aimed at combatting these issues within legal boundaries.</p>

<p>Abrahamic focus remains steadfast on innovation, products, services, and technology. We are determined to remain untethered from inhumane practices proliferating across the world. We are resolute in facing any situation that challenges our commitment to the ecosystem. For instance, raw materials from factories must meet stringent standards, and finished products, including general manufactured and fully assembled items for customers or stores, must comply with our evolving supply chain for a better future at all levels.</p>

<p>Within Abrahamic, Ecosystem responsibility occupies a significant role in fostering ethical business conduct and is integral to our strategic approach. We recognize our potential to lead in promoting sustainable development and upholding human rights. Our philosophy and forward-looking strategy set a high bar for ambition and transparency in sustainable business practices at Abrahamic. We do so because we understand that resources are finite, and human rights are inviolable. We wholeheartedly embrace this responsibility, which will be reflected in our annual reports under the Abrahamic umbrella. Our aspiration is to align with international standards and policies and actively contribute to positive change. The requirements for engaging in business with Abrahamic are primarily based on the Universal Declaration of Human Rights, the Core Conventions of the International Labor Organization (ILO), the United Nations Guiding Principles on Business and Human Rights, as well as third-party standards such as the OECD Due Diligence Guidance for Responsible Supply Chains in the Extractive and Mineral Sectors, and various frameworks and codes of conduct, several of which are addressed in this Statement. Within our supply chains, we undertake the following steps to communicate our expectations and criteria to our business partners:</p>

<p>At the onset of our engagement, each business partner receives a copy of "A Shared Commitment," our code of conduct, which was initially introduced in 1991. This code explicitly forbids forced and involuntary labor, as well as child labor, and broadly mandates adherence to ILO standards.</p>

<p>The "Abrahamic Chain Guidelines" are imparted to both suppliers and licensees as part of our onboarding process. These guidelines offer explicit directions to our suppliers and licensees for complying with all aspects of "A Shared Commitment," including the prohibitions against forced labor and child labor.</p>

<p>Our "Migrant Worker Policy," an integral component of the Supply Chain Guidelines, obliges suppliers and licensees to observe a "no fees" (employer-paid) policy. This policy ensures that migrant workers are not burdened with expenses to secure or retain employment in any factory or business entity that collaborates, distributes, or engages in negotiations or commercial dealings with us. Additionally, our "Migrant Worker Policy" furnishes comprehensive guidance to suppliers and licensees on responsible migrant worker recruitment, along with strategies to comprehensively address and sustainably mitigate risks associated with forced and modern-day slavery. To reinforce the policy, we have developed resources and practical tools to help suppliers enhance their management and recruitment systems for migrant workers, with these materials also being included in our supplier training programs, especially in high-risk areas.</p>

<p>Within the Abrahamic ecosystem, it is mandated that suppliers and licensees certify the absence of slave labor and human trafficking in the materials used for manufacturing our products.</p>

<p>Moreover, our "Abrahamic Commitment to Responsible Recruitment" is designed to counter forced labor risks affecting migrant workers. We are confident that we are diligently adhering to all relevant regulations and laws in all material aspects. We subject our product supply chains to verification processes that involve evaluation, monitoring, and addressing the risks of forced and modern-day slavery.</p>

<p>In our industry and supply chain, we employ various strategies to assess, track, and manage the risks associated with forced and coerced labor. Due to the effectiveness of our internal employment regulations and procedures, we believe that the risks of forced and involuntary labor within our workforce are minimal. However, within the broader Ecosystem and companies like ours, these risks are most pronounced at the upper-tier suppliers with whom we lack direct relationships. This is especially true in regions with weaker protections for workers' rights and a prevalence of migrant labor.</p>

<h2>Assessment</h2>

<p>To gauge and mitigate the threats posed by forced and involuntary labor within the supply industry and supply chains, we actively participate in multi-stakeholder initiatives. We seek membership in associations and programs dedicated to safeguarding workers' rights, including the prevention of forced and involuntary labor. These initiatives encompass bodies such as the Responsible Labor Initiative (RLI), the International Safety Accord, the United States Council for International Business, the Better Work Program, and others worldwide. The Abrahamic ecosystem aims to provide strategic guidance to these organizations, ensuring consistent respect and promotion of the rights of workers vulnerable to forced labor within global supply chains. In our efforts to assess and address the risks of forced and coerced labor, we draw from external sources, databases, and conduct additional research. We engage consultants and collaborate with civil society members, utilizing reporting, survey findings, stakeholder discussions, and various other methods.</p>

<h2>Monitoring and Addressing Risks</h2>           

<p>We will be dedicated to overseeing compliance with Abrahamic stipulations, notably the prohibitions against forced and involuntary labor, and promptly taking corrective action in response to identified risks or violations. Prior to permitting Level 1 companies to produce any products for us, we will conduct pre-sourcing assessments. Certain key Level 2 companies will also undergo such assessments. Once production commences, we will regularly audit all Level 1 and significant Level 2 companies. We will be engaging directly with businesses to rectify identified issues and, if necessary, we cease collaboration with supplier factories that fail to adhere to our policies, processes, or guidelines.</p>

<p>Abrahamic is unwavering and will commit to constructing a transparent and traceable value chain, encompassing the journey from Farm to Factory and Factory to Company, bolstered by documentation verification, auditing, and testing initiatives.</p>

<p>Certifications: Suppliers and licensees are required to embrace "A Shared Commitment" and pledge to fulfill its obligations at the commencement or renewal of a partnership. Moreover, Abrahamic Ecosystem's Merchandise Policy mandates that direct suppliers certify that materials integrated into Abrahamic products or services, whether procured directly or indirectly, originate from sources that abstain from forced or involuntary labor.</p>

<p>Factory and Company Audits: Credible third-party auditors will conduct audits, typically on a 12 to 24-month cycle, with the frequency determined by several factors, including the outcomes of previous audits. Audits are ordinarily arranged in advance to foster a trusting and cooperative rapport with suppliers; however, unannounced audits are also conducted.</p>

<p>The Social Labor Convergence Project (SLCP) guides these audits, functioning as an industry-wide data collection tool with the aim of devising an effective and sustainable solution for social audits, thereby alleviating audit fatigue for our suppliers. The SLCP includes specific metrics relevant to forced and involuntary labor. As part of the audit process, we solicit confidential input from workers to gain direct insights into workplace conditions. We further scrutinize factory conditions through assessments conducted by independent organizations.</p>

<p>Due to the vulnerabilities tied to recruitment systems, migrant workers can be disproportionately exposed to the perils of forced and involuntary labor. In response, we will be collaborating with an external partner to identify high-risk districts for migrant labor. These districts are situated in East Asia, Southeast Asia, the Middle East, and Africa. To augment our monitoring capabilities concerning forced and involuntary labor risks, we will be integrating a supplementary assessment tool into factory audits for supplier and licensee facilities in high-risk districts. This tool centers on recruitment practices and the treatment of migrant labor.</p>

<p>Remediation: Abrahamic audit program will encourage our business partners to assume greater responsibility for their labor practices and overall compliance with employment and worker-related matters. It will provide avenues for suppliers to rectify many identified issues. Remediation is pivotal in empowering suppliers to establish workplaces that are secure, legal, and equitable. We enhance the effectiveness of our program by regularly engaging with suppliers to track their progress in mitigating forced and involuntary labor hazards. We will make sure to extend recognition to business partners who adopt and uphold our standards and policies through ongoing collaboration.</p>

<p>Termination: We consider termination as a last-resort measure, recognizing the potential harm to workers that can ensue. As a result, we prioritize addressing issues directly with manufacturers or suppliers. In instances where issues are structural, we collaborate with civil society, business associations, and governmental agencies. Termination of a relationship with a supplier or factory is only contemplated if it either fails to rectify issues identified during an audit or commits an egregious violation of our policies or guidelines, for which remediation is neither suitable nor feasible—such as cases involving child or forced labor.</p>

<h2>Internal Accountability & Training</h2>
            
<p>To fortify the efficacy of our endeavors aimed at eradicating forced and involuntary labor, we will institute rigorous internal accountability mechanisms through a well-defined governance structure and clearly delineated roles and responsibilities.</p>

<p>The CEO of Abrahamic champions and upholds our vision, bearing ultimate responsibility for executing these programs, including the management of human rights practices across our value chain. The Abrahamic Committee of the Board of Directors lends support and guidance to our Senior Management Team and subsequently reports to the broader Board of Directors concerning our Abrahamic policies and strategies. Comprising three independent directors, the Abrahamic Committee will convene four times annually to oversee our performance and advancement across key performance indicators pertaining to social and human rights. These indicators, established yearly to further our program commitments, are central to our progress. Meetings encompass updates on ongoing issues, program developments, and deliberation and committee approval of strategy updates or new partnerships/initiatives.</p>

<p>Accountability lines for Abrahamic are meticulously established, extending from subject matter experts within the Abrahamic team to our CEO, facilitated through our Chief Sustainability Officer. Our Abrahamic team will be collaborating closely with any global business and supply teams to reinforce alignment with Abrahamic goals. Furthermore, they facilitate on-site assessments, remediation efforts, and capability-building programs within supplier regions. The Abrahamic team is and will be accountable for internal and external reporting to our ecosystem director, including contributions to our annual report.</p>

<p>All associates at Abrahamic are mandated to complete compliance and ethics training, encompassing the review and certification of our core policies upon recruitment and subsequently on an annual basis. Any associate found in violation of our policies or guidelines or failing to adhere to our moral, legal, or ethical standards may be subject to disciplinary actions instituted by Abrahamic.</p>

<p>Members of our Abrahamic team and other associates will be actively participating in external training programs and seminars concerning social compliance matters, specifically those related to forced and involuntary labor. Additionally, we are in the process of developing a reporting hotline, accessible online and via telephone, to allow associates and workers to confidentially report potential violations of legal, regulatory, or policy standards and other ethical concerns, where allowed under applicable law.</p>

<h2>External Training</h2>

<p>To guarantee that 100% of migrant workers within our Level 1 and key Level 2 supplier facilities are exempt from paying recruitment fees, all suppliers and licensees in high-risk districts are mandated to complete a series of modules and quizzes hosted on the e-learning platform. These modules cover topics related to forced labor and the recruitment of foreign migrant workers. We further require all new factories and companies in high-risk districts to complete the suite of training modules on forced labor available on the e-learning platform that we will provide as we grow.</p>
            
<p>Our Abrahamic team and associates also will be contributing as speakers in external training programs and seminars addressing forced and involuntary labor, fostering heightened awareness, and advocating for the adoption of best practices in tackling these challenges.</p>

<h2>Assessing the Effectiveness of Our Efforts</h2>
           
<p>We will be tracking several key performance indicators (KPIs) to gauge the effectiveness of our actions aimed at assessing and addressing the risks of forced and involuntary labor. Among the metrics monitored are audit findings and grievances submitted through our grievance mechanisms. We will meticulously monitor the number and nature of findings and grievances as we grow, as well as the progress made in remedying identified issues. To ensure full compliance, we will oversee vendors' adherence to our training standards. We know that this will be part of the solution to observe and evaluate these well stablish concepts. </p>

<h2>Approval and Signature</h2>

<p>This statement, in accordance with the Modern Slavery Act, necessitates approval quarterly or annually by the Corporate Responsibility Committee of the Abrahamic ecosystem Board of Directors, acting on behalf of the Board and the boards of directors of the pertinent entities. The undersigned, in the capacity of Director & Chief Executive Officer, formally affixes their signature to this statement on specific dates.</p>

            <h2>This document serves as a commitment form that requires completion to adhere to the following protocol:</h2>

            <PdfViewer pdfFile={require('./pdfs/transparency.pdf')} isOpen={openPDFs.includes(require('./pdfs/transparency.pdf'))} togglePdf={togglePdf} buttonLabel="Modern Slavery Act Compliance Commitment Form" />
            <PdfViewer pdfFile={require('./pdfs/second.pdf')} isOpen={openPDFs.includes(require('./pdfs/second.pdf'))} togglePdf={togglePdf} buttonLabel="Modern Slavery Act Compliance Statement and Protocol Document" />

            <ReturnHome />
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: "#041f26",
        color: "white",
        padding: "20px",
        boxShadow: "0px 0px 10px #282c34",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "justify",
    },
    title: {
        textAlign: "center",
        fontSize: "36px",
        margin: "0 0 20px 0",
    },
    button: {
        backgroundColor: "white",
        color: "#282c34",
        padding: "10px 20px",
        borderRadius: "5px",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "16px",
        marginTop: "20px",
        boxShadow: "0px 0px 5px white",
        transition: "all 0.2s ease-in-out",
        cursor: "pointer",
        border: "none",
        display: "inline-block",
        textTransform: "uppercase",
    },
};

export default TransparencyDisclosure;
