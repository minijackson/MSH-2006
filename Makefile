GENERATED_FILES=$(wildcard *.pdf *.log *.out *.aux *.toc)

all: main.pdf

main.pdf: main.tex
	pdflatex main.tex
	latex_count=8	                                \
	while egrep -s 'Rerun (LaTeX|to)' main.log && [ $$latex_count -gt 0 ] ;\
		echo '** Re-running LaTeX **';              \
		pdflatex main.tex                         \
	done

clean:
	-test -z "$(GENERATED_FILES)" || rm -f $(GENERATED_FILES)

.PHONY: all clean

