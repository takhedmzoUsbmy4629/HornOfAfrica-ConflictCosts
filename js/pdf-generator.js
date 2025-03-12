/**
 * PDF Generator - Handles the PDF report generation functionality
 */

/**
 * Initialize the PDF generator when the DOM is loaded
 */
function initPdfGenerator() {
    const downloadButton = document.getElementById('downloadReport');
    
    if (downloadButton) {
        downloadButton.addEventListener('click', generatePDF);
    }
}

/**
 * Generate and download a PDF report
 */
function generatePDF() {
    try {
        console.log("Generating PDF...");
        
        // Check if jsPDF is available and get constructor
        let jsPDFConstructor;
        
        if (typeof window.jspdf !== 'undefined') {
            jsPDFConstructor = window.jspdf.jsPDF;
            console.log("Using window.jspdf.jsPDF");
        } else if (typeof window.jsPDF !== 'undefined') {
            jsPDFConstructor = window.jsPDF;
            console.log("Using window.jsPDF");
        } else if (typeof jsPDF !== 'undefined') {
            jsPDFConstructor = jsPDF;
            console.log("Using global jsPDF");
        } else {
            console.error('jsPDF library not found');
            alert('PDF generation library not loaded. Please try again later.');
            return;
        }
        
        // Create a new document
        const doc = new jsPDFConstructor();
        console.log("PDF document created");
        
        // Get report content
        const reportContent = document.getElementById('reportContent');
        if (!reportContent) {
            console.error('Report content element not found');
            alert('Report content not found. Please refresh the page and try again.');
            return;
        }
        
        // Add title
        doc.setFontSize(24);
        doc.setTextColor(139, 0, 0); // Dark red
        doc.text('The True Cost of War in the Horn of Africa', 105, 20, { align: 'center' });
        
        // Add subtitle
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.text('Comprehensive Report', 105, 30, { align: 'center' });
        
        // Process content
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        
        const lines = reportContent.innerText.split('\n');
        let y = 40;
        
        lines.forEach(line => {
            // Format section headers
            if (line.startsWith('Executive Summary') || 
                line.startsWith('Major Conflicts') || 
                line.startsWith('Long-term Regional Impact') || 
                line.startsWith('Conclusion')) {
                
                y += 5;
                doc.setFontSize(14);
                doc.setTextColor(139, 0, 0);
                doc.text(line, 20, y);
                doc.setFontSize(12);
                doc.setTextColor(0, 0, 0);
                y += 8;
            } 
            // Format conflict headers
            else if (line.startsWith('Eritrean War') || 
                    line.startsWith('Ethiopian-Eritrean') || 
                    line.startsWith('Ogaden War') || 
                    line.startsWith('Ethiopia') || 
                    line.startsWith('Tigray War')) {
                
                doc.setFontSize(13);
                doc.setTextColor(0, 0, 0);
                doc.text(line, 20, y);
                doc.setFontSize(12);
                y += 7;
            } 
            // Skip empty lines
            else if (line.trim() === '') {
                y += 5;
            } 
            // Format regular content
            else {
                // Add a new page if we've reached the bottom
                if (y > 280) {
                    doc.addPage();
                    y = 20;
                }
                
                // Split long lines
                const textLines = doc.splitTextToSize(line, 170);
                textLines.forEach(textLine => {
                    doc.text(textLine, 20, y);
                    y += 7;
                });
            }
        });
        
        // Add footer
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text('© 2025 - The True Cost of War in the Horn of Africa', 105, 290, { align: 'center' });
        
        // Save the PDF
        console.log("Saving PDF...");
        doc.save('HornOfAfrica_WarCosts_Report.pdf');
        console.log("PDF saved successfully");
    } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Error generating PDF: ' + error.message);
    }
}

// When the DOM is loaded, initialize the PDF generator
document.addEventListener('DOMContentLoaded', initPdfGenerator);