{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 HelveticaNeue;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
{\*\listtable{\list\listtemplateid1\listhybrid{\listlevel\levelnfc23\levelnfcn23\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{check\}}{\leveltext\leveltemplateid1\'01\uc0\u10003 ;}{\levelnumbers;}\fi-360\li720\lin720 }{\listname ;}\listid1}
{\list\listtemplateid2\listhybrid{\listlevel\levelnfc23\levelnfcn23\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{circle\}}{\leveltext\leveltemplateid101\'01\uc0\u9702 ;}{\levelnumbers;}\fi-360\li720\lin720 }{\listname ;}\listid2}}
{\*\listoverridetable{\listoverride\listid1\listoverridecount0\ls1}{\listoverride\listid2\listoverridecount0\ls2}}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab560
\pard\pardeftab560\slleading20\partightenfactor0

\f0\fs26 \cf0 brew install pnpm\
brew install node\
\
pnpm install\
\pard\pardeftab560\pardirnatural\partightenfactor0
\ls1\ilvl0\cf0 {\listtext	\uc0\u10003 	}$ docker pull ghcr.io/mistralai/{\field{\*\fldinst{HYPERLINK "https://simple.m.wikipedia.org/wiki/Mistral_AI"}}{\fldrslt mistral}}-\AppleHighlight-1 \AppleHilightClrSch-2 src\AppleHighlight0 \AppleHilightClrSch0 /vllm:latest\
\pard\pardeftab560\slleading20\partightenfactor0
\cf0 \
~FROM nvcr.io/nvidia/pytorch:23.01-py3~\
RUN pip install git+https://github.com/stanford-futuredata/stk.git@main\
RUN pip install flash-attn\
ENV PYTHONPATH="/mount/megablocks/third_party/Megatron-LM:$\{PYTHONPATH\}"\
\pard\pardeftab560\pardirnatural\partightenfactor0
\ls2\ilvl0\cf0 {\listtext	\uc0\u9702 	}WORKDIR /mount/\AppleHighlight-1 \AppleHilightClrSch-4 megablocks\AppleHighlight0 \AppleHilightClrSch0 \
\pard\pardeftab560\pardirnatural\partightenfactor0
\cf0 /noCoverage\
//practice}