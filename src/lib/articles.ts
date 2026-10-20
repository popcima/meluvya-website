export type ArticleSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  list?: { ordered?: boolean; items: { title?: string; text: string }[] };
  table?: { headers: string[]; rows: string[][] };
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  published: string;
  modified: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  imageVariants?: { src: string; width: number }[];
  imageCredit?: { name: string; url: string };
  caption: string;
  quickAnswer: string;
  sections: ArticleSection[];
  faq: { question: string; answer: string }[];
  sources: { title: string; url: string; note: string }[];
  related: string[];
};

const date = "2026-10-19";

export const articles: Article[] = [
  {
    "slug": "fix-mixed-lighting-in-portraits",
    "title": "How to fix mixed lighting in portrait photos",
    "description": "One cheek orange and the other blue? Find the competing light sources, simplify the setup, or make a targeted correction without flattening the scene.",
    "summary": "One cheek orange and the other blue? Find the competing light sources, simplify the setup, or make a targeted correction without flattening the scene.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-30244807-4k.webp",
    "imageAlt": "Portrait lit by contrasting blue and pink lights",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imagePosition: "50% 35%",
    imageVariants: [{"src":"blog/pexels-30244807-480.webp","width":480},{"src":"blog/pexels-30244807-960.webp","width":960},{"src":"blog/pexels-30244807-1600.webp","width":1600},{"src":"blog/pexels-30244807-4k.webp","width":2561}],
    imageCredit: {"name":"Marcus","url":"https://www.pexels.com/photo/vibrant-portrait-with-neon-lighting-30244807/"},
    "quickAnswer": "When different light sources color different parts of a face, one white-balance adjustment usually cannot neutralize every area. If you can retake the photo, remove or avoid one source first. For an existing image, choose a believable overall balance, then correct the remaining area locally if your editor supports masks.",
    "sections": [
      {
        "id": "recognize",
        "title": "Check whether the problem changes across the face",
        "paragraphs": [
          "Compare the forehead, both cheeks, neck, and a nearby neutral object. An orange cast everywhere suggests a different problem from an orange cheek beside a blue cheek. The latter can happen beside a daylight window with a warm room lamp still on.",
          "Research on mixed-illuminant white balance explains why treating the whole scene as if it had one light source can fail. This diagnosis is about where the color changes, not deciding that every warm or cool patch must disappear."
        ]
      },
      {
        "id": "capture",
        "title": "Simplify the light before retaking",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Find the boundary.",
              "text": "Turn your face slowly while watching the preview. Notice whether the colored patch follows the lamp-facing side. Keep the camera position steady so the comparison is useful."
            },
            {
              "title": "Remove one influence.",
              "text": "Switch off a nearby lamp, move away from a colored sign, or choose a spot lit mainly by the window. Take another frame before changing any editing settings."
            },
            {
              "title": "Check the neck too.",
              "text": "A corrected face above an orange neck can still look disconnected. Judge all visible skin together while preserving the natural differences between areas."
            }
          ]
        }
      },
      {
        "id": "edit",
        "title": "Choose an editing response",
        "table": {
          "headers": [
            "What remains",
            "Useful response",
            "Stopping point"
          ],
          "rows": [
            [
              "A cast across the whole image",
              "Try global temperature and tint.",
              "Neutral objects improve together."
            ],
            [
              "One differently colored cheek",
              "Use a softly blended local correction if available.",
              "The boundary stops drawing attention."
            ],
            [
              "Strong colored light with missing detail",
              "Keep the intentional color or choose another photo.",
              "Further correction creates gray, patchy skin."
            ]
          ]
        },
        "paragraphs": [
          "Adobe's masking documentation describes adjusting selected regions. That capability belongs to the editor being used; this is not a claim about controls in Meluvya."
        ]
      },
      {
        "id": "judge",
        "title": "Keep a little of the room",
        "paragraphs": [
          "A restaurant portrait does not have to resemble daylight. Try a version that keeps the warm background while making the face easier to read. Compare it with the untouched image at normal viewing size, then look closely for a visible mask edge.",
          "Do not paint every cheek the same color. Shadows, makeup, and reflected surroundings can create legitimate variation. If correction becomes a collection of disconnected patches, the simpler choice may be the original mood or a retake."
        ]
      }
    ],
    "faq": [
      {
        "question": "Can lowering saturation fix mixed light?",
        "answer": "It can make the cast less obvious, but it also removes unrelated colors. It does not independently balance two light sources."
      },
      {
        "question": "Is a blue shadow always wrong?",
        "answer": "No. A cool shadow can describe the environment. Correct it only when it conflicts with your intended portrait."
      },
      {
        "question": "What if my editor has no masks?",
        "answer": "Try a modest global compromise, keep the color as part of the scene, or retake with simpler lighting. Avoid a promise of perfect recovery."
      }
    ],
    "sources": [
      {
        "title": "Research: white balance in mixed-illuminant scenes",
        "url": "https://arxiv.org/abs/2109.08750",
        "note": "Explains the limits of assuming one illuminant across a scene."
      },
      {
        "title": "Adobe Lightroom: selective adjustments",
        "url": "https://helpx.adobe.com/lightroom/mobile/masks-and-selective-adjustments/create-masks.html",
        "note": "Masks allow targeted changes instead of altering the whole frame."
      }
    ],
    "related": [
      "remove-color-cast-from-photos",
      "window-light-portraits-at-home"
    ]
  },
  {
    "slug": "direct-flash-portrait-tips",
    "title": "Direct flash portrait tips for a deliberate night look",
    "description": "Build a direct-flash portrait around distance, background, reflections, and exposure. A short capture checklist helps you avoid accidental glare.",
    "summary": "Build a direct-flash portrait around distance, background, reflections, and exposure. A short capture checklist helps you avoid accidental glare.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-19723159-4k.webp",
    "imageAlt": "Woman with her hands near her face, brightly lit against a dark background",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imagePosition: "50% 45%",
    imageVariants: [{"src":"blog/pexels-19723159-480.webp","width":480},{"src":"blog/pexels-19723159-960.webp","width":960},{"src":"blog/pexels-19723159-1600.webp","width":1600},{"src":"blog/pexels-19723159-4k.webp","width":2560}],
    imageCredit: {"name":"Tolga Aslantürk","url":"https://www.pexels.com/photo/beautiful-brunette-woman-in-flashlight-19723159/"},
    "quickAnswer": "For a deliberate direct-flash portrait, start with one person, a simple background, and a comfortable camera distance. Take a flash-on test, check the face and reflective objects, then change one position at a time. A dark background is a creative choice, but a blank white face is a reason to adjust or retake.",
    "sections": [
      {
        "id": "intent",
        "title": "Decide what the flash should do",
        "paragraphs": [
          "Direct flash points light toward the subject from near the camera. Its obvious highlights and shadows can suit a candid night portrait. Before shooting, choose whether you want the location to remain visible or the person to stand out against darkness.",
          "Nikon's flash guidance treats the subject lighting and the ambient background as separate parts of the picture. A phone's automatic processing gives you less independent control than a dedicated lighting setup, so assess actual frames instead of copying camera settings."
        ]
      },
      {
        "id": "sequence",
        "title": "Use a four-frame sequence",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Keep an ambient reference.",
              "text": "Take one picture with flash off. It tells you which lights belong to the location and whether the face is readable without added light."
            },
            {
              "title": "Try flash from your first position.",
              "text": "Inspect the forehead, nose, pale clothing, and jewelry. Look for blank bright patches rather than assuming a brighter preview is better."
            },
            {
              "title": "Change the background relationship.",
              "text": "Move the person away from a nearby wall, or change your angle to keep an unwanted wall shadow out of the composition. Repeat the frame."
            },
            {
              "title": "Resolve the reflection.",
              "text": "Shift the camera or face slightly if glasses, a mirror, or a glossy sign sends a bright reflection back. Confirm that both eyes remain visible."
            }
          ]
        }
      },
      {
        "id": "trouble",
        "title": "Read the test frame",
        "table": {
          "headers": [
            "Problem",
            "Try next"
          ],
          "rows": [
            [
              "Face too bright, location too dark",
              "Increase your distance a little and check again; automatic flash behavior varies."
            ],
            [
              "Strong shadow on a nearby wall",
              "Create more subject-to-wall space or include the shadow deliberately."
            ],
            [
              "Bright spot hides an eye",
              "Change the face/light/camera angle before editing."
            ],
            [
              "Ghosted moving edges",
              "Ask for a still moment and compare with a better-lit position."
            ]
          ]
        }
      },
      {
        "id": "finish",
        "title": "Choose the frame before choosing an effect",
        "paragraphs": [
          "Keep the version with a readable expression and useful detail. An intentional flash look can be hard, imperfect, or dramatic; it does not require the strongest possible contrast.",
          "A digicam-style edit is a separate decision made after capture. First solve glare and framing, then decide whether the color and texture need changing. Save the unedited flash photo so you can return to the lighting you actually captured."
        ]
      }
    ],
    "faq": [
      {
        "question": "Does a phone flash reproduce a studio flash?",
        "answer": "No. Power, placement, modifiers, and camera controls differ. Use the same observation process, not an assumption of identical results."
      },
      {
        "question": "Should flash always be on at night?",
        "answer": "No. Compare an ambient frame first. Flash may change the atmosphere or create unwanted reflections."
      },
      {
        "question": "Can an effect repair a white reflection over an eye?",
        "answer": "It cannot guarantee recovery of an eye that was not recorded clearly. Changing the angle during capture is preferable."
      }
    ],
    "sources": [
      {
        "title": "Nikon: flash photography the easy way",
        "url": "https://www.nikonusa.com/learn-and-explore/c/tips-and-techniques/flash-photography-the-easy-way",
        "note": "Flash lighting can be considered separately from the ambient background."
      }
    ],
    "related": [
      "digicam-photo-effect-on-phone",
      "reduce-glasses-glare-in-portraits",
      "why-night-phone-photos-are-blurry"
    ]
  },
  {
    "slug": "portrait-photos-in-harsh-sunlight",
    "title": "How to take portrait photos in harsh sunlight",
    "description": "Make midday portraits easier with open shade, cleaner shadow patterns, and a useful exposure check. Learn when hard light can work as part of the picture.",
    "summary": "Make midday portraits easier with open shade, cleaner shadow patterns, and a useful exposure check. Learn when hard light can work as part of the picture.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-33507990-4k.webp",
    "imageAlt": "Woman raising her arms in sunlight beside a shaded wall",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imagePosition: "50% 35%",
    imageVariants: [{"src":"blog/pexels-33507990-480.webp","width":480},{"src":"blog/pexels-33507990-960.webp","width":960},{"src":"blog/pexels-33507990-1600.webp","width":1600},{"src":"blog/pexels-33507990-4k.webp","width":3840}],
    imageCredit: {"name":"Amar Preciado","url":"https://www.pexels.com/photo/portrait-of-woman-in-sunlight-against-rustic-background-33507990/"},
    "quickAnswer": "Start by finding even shade with a view toward the bright sky. Avoid placing the face under scattered leaf shadows. If you stay in direct sun, choose its direction deliberately and check the brightest facial areas before taking more photos. A comfortable expression matters more than forcing a particular angle.",
    "sections": [
      {
        "id": "choose",
        "title": "Choose between soft shade and intentional hard light",
        "paragraphs": [
          "Midday is not automatically a bad time for a portrait. The problem is often the placement of a sharp shadow across an eye or nose, or a person squinting through an uncomfortable pose. Decide whether you want to simplify those shadows or make them part of the image.",
          "Adobe's portrait-lighting guidance distinguishes the mood created by hard and soft sources. You do not have to remove every shadow. You need a lighting pattern that supports the expression."
        ]
      },
      {
        "id": "shade",
        "title": "Find a more even patch of shade",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Look for a continuous shadow.",
              "text": "Try the shaded side of a building or a covered walkway. Check the whole face rather than just where the feet are standing."
            },
            {
              "title": "Face the brighter opening.",
              "text": "Turn toward the open side of the shade and compare with facing deep into it. Select the angle where the eyes are readable without losing the desired shape."
            },
            {
              "title": "Inspect the surroundings.",
              "text": "A bright colored wall or sign can influence nearby skin. Move a little and see whether the color changes before correcting it in an editor."
            },
            {
              "title": "Check the background exposure.",
              "text": "A sunlit street behind a shaded face may still be much brighter. Change the camera angle to include less bright sky or choose a background in similar light."
            }
          ]
        }
      },
      {
        "id": "hard-light",
        "title": "If you keep direct sunlight, keep the pattern clean",
        "paragraphs": [
          "Take a test with the light coming from the side, then another with it farther behind the person. Do not ask someone to look into the sun. Compare the nose shadow, visible eye detail, and forehead highlights in the saved images.",
          "For a hard-light portrait, a clean edge can be more convincing than several small patches from overhead leaves. Move the subject a short distance and watch how the pattern changes. The exercise is to choose a pattern, not to find a universally flattering angle."
        ]
      },
      {
        "id": "decide",
        "title": "Use the smallest useful change",
        "table": {
          "headers": [
            "What distracts you",
            "First change to try"
          ],
          "rows": [
            [
              "A stripe across one eye",
              "Move out of the patchy shadow."
            ],
            [
              "Squinting or an uncomfortable pose",
              "Change direction or move into shade."
            ],
            [
              "Blank highlights on skin",
              "Adjust capture exposure if available and review the face."
            ],
            [
              "A bright background overwhelms the portrait",
              "Reframe toward a quieter, similarly lit background."
            ]
          ]
        }
      }
    ],
    "faq": [
      {
        "question": "Can I just add a golden-hour filter?",
        "answer": "A warm edit changes color, but it does not move the sun or replace the original shadow pattern."
      },
      {
        "question": "Is tree shade suitable?",
        "answer": "Sometimes. Look for an even patch across the face; scattered bright spots can be harder to work with."
      },
      {
        "question": "Should I brighten every shadow?",
        "answer": "No. Keep shadows that show shape. If brightening reveals little detail or distracting noise, another capture position may work better."
      }
    ],
    "sources": [
      {
        "title": "Adobe: portrait lighting",
        "url": "https://www.adobe.com/creativecloud/photography/discover/portrait-lighting.html",
        "note": "Hard and soft light, direction, and portrait mood."
      }
    ],
    "related": [
      "backlit-phone-portraits",
      "can-you-fix-overexposed-portraits",
      "choose-portrait-background"
    ]
  },
  {
    "slug": "why-close-selfies-look-different",
    "title": "Why close selfies look different: camera distance explained",
    "description": "Understand why a close camera changes facial proportions, why cropping is different from moving, and how to compare selfies without beauty judgments.",
    "summary": "Understand why a close camera changes facial proportions, why cropping is different from moving, and how to compare selfies without beauty judgments.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-9253767-4k.webp",
    "imageAlt": "Close-up portrait showing a woman's natural skin texture",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imagePosition: "50% 40%",
    imageVariants: [{"src":"blog/pexels-9253767-480.webp","width":480},{"src":"blog/pexels-9253767-960.webp","width":960},{"src":"blog/pexels-9253767-1600.webp","width":1600},{"src":"blog/pexels-9253767-4k.webp","width":2560}],
    imageCredit: {"name":"Ron Lach","url":"https://www.pexels.com/photo/close-up-photo-of-woman-9253767/"},
    "quickAnswer": "A close camera sees nearer parts of the face as relatively larger than parts farther away. Moving the camera back changes that perspective; cropping a close photo afterward does not undo it. Compare pictures taken from different distances with similar framing before deciding which presentation you prefer.",
    "sections": [
      {
        "id": "distance",
        "title": "Distance changes the relationship between features",
        "paragraphs": [
          "A photograph is a view from one position, not a final verdict on your appearance. Adobe Research describes how short selfie distances can change the apparent relationship between the nose and the rest of the face. The underlying issue is viewpoint.",
          "Lighting, expression, camera height, processing, and whether an image is mirrored can also change how familiar it feels. Do not attribute every difference to a wide-angle lens or assume that one photograph is the uniquely correct version of you."
        ]
      },
      {
        "id": "compare",
        "title": "Make a fair distance comparison",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Hold the conditions steady.",
              "text": "Use one lighting position and a relaxed expression. Keep the camera near the same height so a low angle does not become another variable."
            },
            {
              "title": "Take the close frame.",
              "text": "Use your normal selfie position and leave enough room around the face. Save it without a beauty effect."
            },
            {
              "title": "Move the camera farther away.",
              "text": "Use a stable support and timer, or ask someone to help. Keep the same camera where practical rather than changing lenses and processing at once."
            },
            {
              "title": "Match the final framing.",
              "text": "Crop the farther picture to a similar head size. Compare the relationship between features, not simply which face fills more of the screen."
            }
          ]
        }
      },
      {
        "id": "separate",
        "title": "Separate three different changes",
        "table": {
          "headers": [
            "Action",
            "What changes"
          ],
          "rows": [
            [
              "Move the camera backward",
              "The viewpoint and relative distances change."
            ],
            [
              "Crop the existing close frame",
              "The boundary changes; captured perspective stays."
            ],
            [
              "Switch cameras without moving",
              "Field of view and processing may change; the camera remains near the same viewpoint."
            ]
          ]
        }
      },
      {
        "id": "choose",
        "title": "Choose a useful portrait, not a measurement",
        "paragraphs": [
          "The farther frame might need a smaller crop than you expected, or the close frame might feel more personal. Keep the version that suits the purpose. A profile portrait, a playful selfie, and an environmental picture do not need identical framing.",
          "If you are choosing a source for an AI portrait, prioritize recognizable features, readable eyes, and a clear image. Perspective-aware software can alter proportions, but a generated change should not be treated as evidence of how you look in real life."
        ]
      }
    ],
    "faq": [
      {
        "question": "Will zooming fix a selfie?",
        "answer": "Zooming alone from the same position does not provide the same perspective change as moving the camera. Many phones also crop digitally or switch cameras."
      },
      {
        "question": "Why does a mirrored selfie feel more familiar?",
        "answer": "You may be used to your mirror view. Familiarity and left-right reversal are separate from camera distance."
      },
      {
        "question": "Is there one correct selfie distance?",
        "answer": "No. Space, framing, camera, and preference all matter. Use a comparison rather than a universal beauty rule."
      }
    ],
    "sources": [
      {
        "title": "Adobe Research: camera distance and selfie perspective",
        "url": "https://research.adobe.com/news/how-to-get-rid-of-your-big-nose-in-selfies/",
        "note": "Explains why close camera positions change facial perspective."
      }
    ],
    "related": [
      "self-timer-portraits-with-phone",
      "choose-photo-for-ai-portraits"
    ]
  },
  {
    "slug": "choose-portrait-background",
    "title": "How to choose a background for portrait photos",
    "description": "Use brightness, edges, color, and context to choose a portrait background. A quick check helps remove distractions before you reach for background blur.",
    "summary": "Use brightness, edges, color, and context to choose a portrait background. A quick check helps remove distractions before you reach for background blur.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-19158754-4k.webp",
    "imageAlt": "Woman standing in sunlight against a darker outdoor background",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imagePosition: "50% 40%",
    imageVariants: [{"src":"blog/pexels-19158754-480.webp","width":480},{"src":"blog/pexels-19158754-960.webp","width":960},{"src":"blog/pexels-19158754-1600.webp","width":1600},{"src":"blog/pexels-19158754-4k.webp","width":2560}],
    imageCredit: {"name":"apertur 2.8","url":"https://www.pexels.com/photo/young-woman-posing-outside-in-sunlight-19158754/"},
    "quickAnswer": "Choose a background that supports the person and the story. Check for bright patches, objects crossing the head, and colors competing with the face. Move the camera a little before changing the location: a small shift can remove a distracting edge while keeping the setting.",
    "sections": [
      {
        "id": "purpose",
        "title": "Decide how much location the picture needs",
        "paragraphs": [
          "A café, street, or garden can explain the moment. A plain wall can concentrate attention on an expression. Neither is automatically more professional. First write a short purpose for the photo: a profile image, an outfit picture, or a memory of a place.",
          "Photographer Tony Gale's Adobe article describes backgrounds as choices that support a headshot. Apply that principle to your own purpose rather than treating every visible object as clutter."
        ]
      },
      {
        "id": "scan",
        "title": "Scan the frame in four passes",
        "table": {
          "headers": [
            "Pass",
            "Look for",
            "Possible change"
          ],
          "rows": [
            [
              "Brightness",
              "A window or lamp brighter than the face",
              "Move it out of the frame or choose a new angle."
            ],
            [
              "Edges",
              "A pole, frame, or horizon crossing the head",
              "Shift the camera sideways or change its height."
            ],
            [
              "Color",
              "A vivid object pulling attention away",
              "Include less of it or use it deliberately."
            ],
            [
              "Meaning",
              "Objects that add or contradict the story",
              "Keep useful context and exclude accidental details."
            ]
          ]
        }
      },
      {
        "id": "comparison",
        "title": "Try three backgrounds without changing locations",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Keep the person still.",
              "text": "Start with your current view and take one test frame. Note the single background detail your eye goes to first."
            },
            {
              "title": "Move one step sideways.",
              "text": "Reframe the person to a similar size. Check whether a background edge separates from the head and whether a new distraction appears."
            },
            {
              "title": "Change camera height slightly.",
              "text": "Try a slightly higher or lower viewpoint. Judge the face and posture as well as the background; solving one problem should not introduce another."
            }
          ]
        }
      },
      {
        "id": "blur",
        "title": "Do not make blur do all the work",
        "paragraphs": [
          "A bright blob can remain distracting even when it is soft. A complicated outline can also expose mistakes in computational portrait blur. First make the composition useful with ordinary photo capture, then decide whether blur adds anything.",
          "Before leaving, view the whole picture as a small thumbnail. If the setting overwhelms the person, change framing or simplify the location. If the place is part of the story, leave enough of it to be recognizable instead of cropping everything away."
        ]
      }
    ],
    "faq": [
      {
        "question": "Does a portrait need a plain background?",
        "answer": "No. Context can be valuable. A useful background gives the viewer something relevant to understand without obscuring the person."
      },
      {
        "question": "Should the background match clothing?",
        "answer": "It can, but matching is not a requirement. Check whether the person separates clearly from the setting."
      },
      {
        "question": "Can background blur fix a bad composition?",
        "answer": "Sometimes it reduces detail, but brightness, color, and awkward edges can still distract. Check the composition first."
      }
    ],
    "sources": [
      {
        "title": "Adobe: using backgrounds in headshots",
        "url": "https://blog.adobe.com/en/publish/2022/12/21/how-to-use-backgrounds-to-level-up-your-headshots",
        "note": "Portrait backgrounds should support the subject; photographer guidance."
      }
    ],
    "related": [
      "how-to-crop-portrait-photos",
      "portrait-mode-blur-mistakes"
    ]
  },
  {
    "slug": "mirror-selfie-photo-tips",
    "title": "Mirror selfie tips: framing, reflections, and cleaner photos",
    "description": "Plan a mirror selfie around two frames: the mirror and the final photo. Check phone placement, reflected light, background clutter, and crop before sharing.",
    "summary": "Plan a mirror selfie around two frames: the mirror and the final photo. Check phone placement, reflected light, background clutter, and crop before sharing.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-6598911-4k.webp",
    "imageAlt": "Woman taking a phone selfie in a full-length mirror",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imagePosition: "50% 45%",
    imageVariants: [{"src":"blog/pexels-6598911-480.webp","width":480},{"src":"blog/pexels-6598911-960.webp","width":960},{"src":"blog/pexels-6598911-1600.webp","width":1600},{"src":"blog/pexels-6598911-4k.webp","width":2560}],
    imageCredit: {"name":"Thirdman","url":"https://www.pexels.com/photo/a-woman-taking-selfie-in-front-of-the-mirror-6598911/"},
    "quickAnswer": "Clean the mirror, inspect everything visible in its reflection, and decide whether the phone is part of the composition. Use the mirror edges deliberately or exclude them. Take a test, check face visibility and reflected lights, then adjust the phone position before taking a longer series.",
    "sections": [
      {
        "id": "two-frames",
        "title": "Compose the reflection and the photograph",
        "paragraphs": [
          "A mirror selfie contains two boundaries: what the mirror reflects and what the camera includes. A neat room can still produce a cluttered reflection if a doorframe, bright lamp, or object behind you crosses the subject.",
          "Adobe's reflection-photography guide treats reflective surfaces and viewing angle as creative elements. For a mirror selfie, begin by deciding whether the mirror itself belongs in the picture or is simply the tool used to see you."
        ]
      },
      {
        "id": "setup",
        "title": "Set up the shot in a useful order",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Inspect the surface.",
              "text": "Look for fingerprints and marks where the face will appear. Clean the mirror appropriately rather than relying on an effect to hide every spot."
            },
            {
              "title": "Check the reflected background.",
              "text": "Look behind you through the camera, not just around the room. Move small distractions and choose how much space to include."
            },
            {
              "title": "Place the phone deliberately.",
              "text": "Try one version with the face visible and another with the phone treated as part of the pose. Avoid hiding one eye by accident if expression is the subject."
            },
            {
              "title": "Take a saved-frame check.",
              "text": "Review the image rather than only the live preview. Look for a reflected light, clipped hand, or mirror edge that feels accidental."
            }
          ]
        }
      },
      {
        "id": "troubleshoot",
        "title": "Fix the reflection at capture",
        "table": {
          "headers": [
            "Distraction",
            "Change to try"
          ],
          "rows": [
            [
              "A bright flash spot",
              "Try available light or change the angle; the reflection may remain part of a deliberate flash look."
            ],
            [
              "The phone covers the expression",
              "Move it slightly sideways and recheck the crop."
            ],
            [
              "Mirror edges nearly touch the body",
              "Include more border or crop clearly inside it."
            ],
            [
              "Background dominates the outfit",
              "Change your position relative to the reflected scene."
            ]
          ]
        }
      },
      {
        "id": "review",
        "title": "Review the whole reflection before posting",
        "paragraphs": [
          "Look for readable addresses, screens, and other people's reflections. This is a useful sharing check, not something a visual effect automatically handles. Also check whether lettering has been reversed by the mirror or by an additional flip.",
          "Keep one uncropped version when possible. It leaves you room to make a square profile crop and a taller outfit crop later. If your feet or hands are essential to the picture, capture extra space instead of trying to reconstruct them afterward."
        ]
      }
    ],
    "faq": [
      {
        "question": "Should I flip a mirror selfie?",
        "answer": "That is a presentation choice. Check text and recognizable surroundings, and avoid assuming a flipped image changes the captured perspective."
      },
      {
        "question": "Is using flash wrong?",
        "answer": "No. It can be part of the look, but its reflection may obscure detail. Inspect a test frame first."
      },
      {
        "question": "Do I need to hide the phone?",
        "answer": "No. A visible phone can make the selfie feel intentional. Decide its role instead of treating it as an automatic flaw."
      }
    ],
    "sources": [
      {
        "title": "Adobe: reflection photography",
        "url": "https://www.adobe.com/creativecloud/photography/discover/reflection-photography.html",
        "note": "Reflections and viewing angles as composition tools."
      }
    ],
    "related": [
      "how-to-crop-portrait-photos",
      "why-close-selfies-look-different"
    ]
  },
  {
    "slug": "take-couple-photos-with-phone",
    "title": "How to take couple photos with a phone",
    "description": "Keep both people readable in a phone portrait with shared light, a balanced camera position, and a two-face focus check before choosing a favorite.",
    "summary": "Keep both people readable in a phone portrait with shared light, a balanced camera position, and a two-face focus check before choosing a favorite.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-39820803-4k.webp",
    "imageAlt": "Couple standing together beneath leafy trees",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imagePosition: "35% 55%",
    imageVariants: [{"src":"blog/pexels-39820803-480.webp","width":480},{"src":"blog/pexels-39820803-960.webp","width":960},{"src":"blog/pexels-39820803-1600.webp","width":1600},{"src":"blog/pexels-39820803-4k.webp","width":3840}],
    imageCredit: {"name":"Helena Jankovičová Kováčová","url":"https://www.pexels.com/photo/romantic-outdoor-portrait-of-couple-in-nature-39820803/"},
    "quickAnswer": "Start with both people at a similar distance from the phone and in the same patch of light. Use ordinary photo mode for a baseline, check both faces in the saved frame, and take a short series with small changes in expression. Choose a picture both people like before applying a shared edit.",
    "sections": [
      {
        "id": "both",
        "title": "Treat both faces as subjects",
        "paragraphs": [
          "A picture can work beautifully for one person while leaving the other blurred, hidden, or poorly lit. Make your first test simple: stand or sit beside each other, with both faces turned enough toward the available light to read the eyes.",
          "Nikon's portrait guidance emphasizes eye focus and warns that a narrow zone of focus can leave intended subjects outside it. Keeping faces at a similar camera distance is a practical starting exercise, not a guarantee that every phone will focus perfectly."
        ]
      },
      {
        "id": "setup",
        "title": "Build the frame together",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Choose shared light.",
              "text": "Avoid placing one person in direct sun and the other in deep shade. Move together toward a more even position if one face is difficult to expose."
            },
            {
              "title": "Center the camera on the pair.",
              "text": "Keep the phone from being much closer to one person. Leave a little room around shoulders and hands for later crops."
            },
            {
              "title": "Make a simple focus test.",
              "text": "Take one still frame and zoom in on both sets of eyes. If one person is soft, adjust positions and repeat before adding movement."
            },
            {
              "title": "Add an interaction.",
              "text": "Try looking at each other, then toward the lens, or talking between frames. Use an activity that feels comfortable instead of holding an awkward pose."
            }
          ]
        }
      },
      {
        "id": "select",
        "title": "Use a two-person selection check",
        "table": {
          "headers": [
            "Check",
            "Keep the frame when"
          ],
          "rows": [
            [
              "Expression",
              "Both people are comfortable with how they appear."
            ],
            [
              "Focus",
              "Each intended face is sufficiently clear at the planned viewing size."
            ],
            [
              "Light",
              "Neither face is lost in shadow or a blank highlight."
            ],
            [
              "Framing",
              "Hands and shoulders are included or cropped deliberately."
            ]
          ]
        }
      },
      {
        "id": "edit",
        "title": "Match the mood without matching everyone's skin",
        "paragraphs": [
          "A shared edit should not force two different skin tones to look identical. Look for a coherent overall color balance while retaining real differences. If one face needs a major correction, consider whether another frame has better shared lighting.",
          "For a timer photograph, make a placeholder frame first and check where both people will stand. Take a few attempts with breaks to review; dozens of unchecked frames can repeat the same avoidable problem."
        ]
      }
    ],
    "faq": [
      {
        "question": "Should I use Portrait mode?",
        "answer": "You can try it after an ordinary-photo baseline. Inspect both faces and the space between people for unwanted blur."
      },
      {
        "question": "How do we avoid one person looking much larger?",
        "answer": "Check whether the camera is much nearer to one person. A more balanced position changes that relationship without changing either person."
      },
      {
        "question": "Can we take the photo without another photographer?",
        "answer": "A stable support and timer can help. Set up the framing first and confirm focus in a saved test."
      }
    ],
    "sources": [
      {
        "title": "Nikon: tips for taking portraits",
        "url": "https://www.nikonusa.com/learn-and-explore/c/tips-and-techniques/quick-tips-for-taking-better-portraits",
        "note": "Eye focus, depth of field, and examples of fill light."
      }
    ],
    "related": [
      "self-timer-portraits-with-phone",
      "consistent-editing-for-photo-set",
      "portrait-mode-blur-mistakes"
    ]
  },
  {
    "slug": "cloudy-day-portrait-photo-tips",
    "title": "Cloudy-day portrait tips for soft, lively photos",
    "description": "Use overcast light without making portraits feel flat. Find direction, separate the background, and choose color deliberately instead of adding fake sunshine.",
    "summary": "Use overcast light without making portraits feel flat. Find direction, separate the background, and choose color deliberately instead of adding fake sunshine.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-28678652-4k.webp",
    "imageAlt": "Black-and-white outdoor portrait with softly blurred foliage",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imagePosition: "50% 35%",
    imageVariants: [{"src":"blog/pexels-28678652-480.webp","width":480},{"src":"blog/pexels-28678652-960.webp","width":960},{"src":"blog/pexels-28678652-1600.webp","width":1600},{"src":"blog/pexels-28678652-4k.webp","width":2560}],
    imageCredit: {"name":"R.O.Y","url":"https://www.pexels.com/photo/portrait-of-a-woman-in-outdoor-setting-28678652/"},
    "quickAnswer": "On a cloudy day, look for the brightest part of the sky and turn the face toward it. Choose a background that separates from the person, then check the eyes and shadow shape. Overcast light can be soft, but its direction and the surrounding buildings still affect the portrait.",
    "sections": [
      {
        "id": "look",
        "title": "Find direction even when the sun is hidden",
        "paragraphs": [
          "Nikon's portrait advice identifies cloudy days as an opportunity for soft, diffused light. Soft does not mean identical from every direction. An open street, the edge of a covered area, and a narrow passage can produce different relationships between face and background.",
          "Use your own face as a quick preview: turn slowly while looking at the camera screen, then compare saved frames. Choose where the eyes and cheeks have readable shape rather than assuming the brightest possible exposure will be the most lively."
        ]
      },
      {
        "id": "exercise",
        "title": "Try an open-sky and covered-edge comparison",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Begin in an open position.",
              "text": "Photograph the face with a simple background. Note whether the eyes are clear and whether hair separates from the surroundings."
            },
            {
              "title": "Move near a covered edge.",
              "text": "Stand safely under a doorway or similar cover with the face toward the open sky. Take a second frame from a comparable distance."
            },
            {
              "title": "Compare the shadow pattern.",
              "text": "Keep the version whose shape fits the mood. A darker side can be useful; if it hides expression, change direction or return to the open position."
            },
            {
              "title": "Choose the setting.",
              "text": "Use a textured wall, foliage, or an identifiable street detail if it adds context. Avoid a large blank sky merely because it is easy to include."
            }
          ]
        }
      },
      {
        "id": "color",
        "title": "Keep color believable before making it warmer",
        "paragraphs": [
          "A cloudy portrait can look cool without being incorrectly edited. First check whether the whole photograph has an unwanted cast. Then decide whether a modest warmer treatment suits the memory. Changing temperature cannot recreate a low sun's directional shadows.",
          "Instead of increasing every color, choose what deserves attention: a coat, a background, or the expression. Compare a restrained edit with the original at a small size. If the clothing becomes more prominent than the person, reconsider the strength."
        ]
      },
      {
        "id": "limits",
        "title": "When the cloudy-day plan needs adjusting",
        "table": {
          "headers": [
            "Condition",
            "Useful response"
          ],
          "rows": [
            [
              "Light is soft but too dim for movement",
              "Use a still moment, steadier support, or a brighter position."
            ],
            [
              "Dark hair merges with a dark wall",
              "Choose a different background or camera angle."
            ],
            [
              "Rain makes the location uncomfortable",
              "Use a sheltered position and keep equipment dry."
            ]
          ]
        }
      }
    ],
    "faq": [
      {
        "question": "Is overcast weather better than sunshine?",
        "answer": "It offers a different starting point, often with gentler shadow edges. The best choice depends on the mood, location, and available light."
      },
      {
        "question": "Should I use a cloudy white-balance preset?",
        "answer": "You can compare it if your camera offers one, but judge the result rather than assuming the preset is always correct."
      },
      {
        "question": "Can a cloudy portrait become a sunset photo?",
        "answer": "A warm color edit is possible, but it does not reproduce the original direction and shape of sunset light."
      }
    ],
    "sources": [
      {
        "title": "Nikon: portraiture with Robert Vasquez",
        "url": "https://www.nikonusa.com/learn-and-explore/c/nikon-creators/exploring-the-human-element-in-portraiture-with-robert-vasquez",
        "note": "Cloudy-day light and attention to a portrait subject's eyes."
      }
    ],
    "related": [
      "remove-color-cast-from-photos",
      "portrait-photos-in-harsh-sunlight",
      "golden-hour-photo-editing"
    ]
  },
  {
    "slug": "backlit-phone-portraits",
    "title": "How to take backlit portraits with a phone",
    "description": "Balance a bright background with a readable face. Choose between a portrait and a silhouette, control flare, and check the capture before editing.",
    "summary": "Balance a bright background with a readable face. Choose between a portrait and a silhouette, control flare, and check the capture before editing.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-37728399-4k.webp",
    "imageAlt": "Man seen from behind with warm sunlight outlining his hair",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imagePosition: "50% 40%",
    imageVariants: [{"src":"blog/pexels-37728399-480.webp","width":480},{"src":"blog/pexels-37728399-960.webp","width":960},{"src":"blog/pexels-37728399-1600.webp","width":1600},{"src":"blog/pexels-37728399-4k.webp","width":3072}],
    imageCredit: {"name":"Alef Morais","url":"https://www.pexels.com/photo/back-view-portrait-in-golden-hour-light-37728399/"},
    "quickAnswer": "When light comes from behind the person, decide whether the face or silhouette is the priority. For a readable face, try focusing and metering on it, then inspect the saved photo for lost background detail. If the contrast is too strong, change position or include less bright sky instead of relying on an edit to fix everything.",
    "sections": [
      {
        "id": "priority",
        "title": "Choose what must remain visible",
        "paragraphs": [
          "A sunset or bright window can be much brighter than the person in front of it. Nikon's portrait guidance includes fill light as one way to manage backlighting. Without extra lighting, your most useful controls may be position, framing, and the exposure tools your phone provides.",
          "Write the priority before adjusting: recognizable face, readable location, or strong silhouette. If you try to maximize all three without checking the available detail, the result can become a flat compromise."
        ]
      },
      {
        "id": "choice",
        "title": "Choose the capture you actually want",
        "table": {
          "headers": [
            "Goal",
            "Try",
            "Accept or watch for"
          ],
          "rows": [
            [
              "A readable face",
              "Meter on the face if the camera supports it.",
              "Bright background areas may lose detail."
            ],
            [
              "A deliberate silhouette",
              "Expose for the bright setting and separate the outline.",
              "Facial detail may be absent by design."
            ],
            [
              "More balanced light",
              "Move toward a less extreme background or a brighter face position.",
              "The composition will change."
            ]
          ]
        }
      },
      {
        "id": "capture",
        "title": "Check a backlit frame in four places",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Look at the eyes.",
              "text": "Is the expression readable at the intended viewing size? Do not judge only by the bright outline around the hair."
            },
            {
              "title": "Look at the sky or window.",
              "text": "Decide which background detail matters. A small bright reflection and a completely blank scenic sky are different tradeoffs."
            },
            {
              "title": "Look for flare.",
              "text": "If a hazy patch covers the face, shift the camera slightly or position the bright source behind an object. Compare a new frame rather than just adding contrast."
            },
            {
              "title": "Look at the outline.",
              "text": "Check that the head and shoulders separate from poles, branches, or another person's shape, especially for a silhouette."
            }
          ]
        }
      },
      {
        "id": "edit",
        "title": "Treat capture and recovery as different jobs",
        "paragraphs": [
          "For a saved portrait with some face detail, a careful shadow adjustment may help. If the face is nearly blank, brightening can reveal noise without producing a useful expression. Keep a version that preserves the scene's contrast instead of forcing the face to match the sky.",
          "If you are still at the location, take a second composition with less bright background. Having a usable alternative is more valuable than assuming a later filter can recover every tone."
        ]
      }
    ],
    "faq": [
      {
        "question": "Should I always tap the face?",
        "answer": "It is a useful starting point for a readable face when your camera supports tap metering, but review the saved result because automatic behavior varies."
      },
      {
        "question": "Will HDR solve backlighting?",
        "answer": "It may help retain tones, but motion and strong contrast can still create problems. Check the image rather than treating HDR as a guarantee."
      },
      {
        "question": "Is a dark face always an exposure mistake?",
        "answer": "No. It can be a deliberate silhouette. The question is whether it supports the photograph you intended."
      }
    ],
    "sources": [
      {
        "title": "Nikon: tips for taking portraits",
        "url": "https://www.nikonusa.com/learn-and-explore/c/tips-and-techniques/quick-tips-for-taking-better-portraits",
        "note": "Eye focus, depth of field, and examples of fill light."
      }
    ],
    "related": [
      "brighten-dark-face-in-photo",
      "hdr-phone-photos-explained",
      "golden-hour-photo-editing"
    ]
  },
  {
    "slug": "black-and-white-portrait-editing",
    "title": "Black-and-white portrait editing: keep shape and separation",
    "description": "Make a monochrome portrait with readable skin, hair, and clothing. Learn when color mixing helps and when a color original is the stronger picture.",
    "summary": "Make a monochrome portrait with readable skin, hair, and clothing. Learn when color mixing helps and when a color original is the stronger picture.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-28529737-4k.webp",
    "imageAlt": "Black-and-white portrait of a man looking up into the light",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imagePosition: "50% 35%",
    imageVariants: [{"src":"blog/pexels-28529737-480.webp","width":480},{"src":"blog/pexels-28529737-960.webp","width":960},{"src":"blog/pexels-28529737-1600.webp","width":1600},{"src":"blog/pexels-28529737-4k.webp","width":2433}],
    imageCredit: {"name":"David Underland","url":"https://www.pexels.com/photo/monochrome-portrait-of-man-in-sunlight-28529737/"},
    "quickAnswer": "A useful black-and-white edit needs separation between important tones, not just zero saturation. Start with a clear portrait, convert a copy, and compare the face against hair, clothing, and background. Adjust brightness and contrast gently; if your editor offers a black-and-white mix, use it to change how original colors become gray.",
    "sections": [
      {
        "id": "choose",
        "title": "Choose a picture that still works without color",
        "paragraphs": [
          "Temporarily view the photo in monochrome and ask what remains interesting: expression, light, shape, texture, or a relationship with the setting. A portrait whose main attraction is a vivid outfit against a complementary wall may lose its organizing idea.",
          "Adobe's Lightroom tone-and-color documentation describes a black-and-white mix for controlling how source colors translate into gray. This gives more flexibility than removing saturation, but does not make every photograph a stronger monochrome image."
        ]
      },
      {
        "id": "edit",
        "title": "Build the tones in a deliberate order",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Set face brightness.",
              "text": "Make the expression readable without trying to make every skin area equally light. Keep the natural transition between the lit and shaded sides."
            },
            {
              "title": "Check adjacent shapes.",
              "text": "Look where hair meets a dark wall and where a sleeve meets the torso. If important shapes merge, try a modest tonal adjustment or a different crop."
            },
            {
              "title": "Adjust contrast last.",
              "text": "Increase it only while retaining the detail you care about. Inspect dark hair and bright fabric before accepting a dramatic preview."
            },
            {
              "title": "Compare at the final size.",
              "text": "A strong close-up edit can become muddy as a small profile image. Judge both the whole frame and the size at which it will be seen."
            }
          ]
        }
      },
      {
        "id": "mix",
        "title": "If your editor has a monochrome color mix",
        "table": {
          "headers": [
            "Observation",
            "Try cautiously",
            "Check afterward"
          ],
          "rows": [
            [
              "Face and background become the same gray",
              "Adjust the source color range affecting one area.",
              "Similar colors elsewhere may change too."
            ],
            [
              "Lips become unusually dark",
              "Ease the relevant color conversion.",
              "The face should still have shape."
            ],
            [
              "Sky or foliage becomes distracting",
              "Reduce its tonal prominence.",
              "Avoid unnatural edges around hair."
            ]
          ]
        }
      },
      {
        "id": "restraint",
        "title": "Do not use monochrome to hide every problem",
        "paragraphs": [
          "Removing color can reduce an unwanted color cast, but it does not repair missed focus, a clipped cheek, or an awkward expression. Keep those capture problems separate from the style decision.",
          "Save both versions and compare them a little later. Choose black and white because the tones tell the story well, not because it seems like a mandatory way to make a photo look serious."
        ]
      }
    ],
    "faq": [
      {
        "question": "Is black and white the same as desaturation?",
        "answer": "Desaturation removes color. A dedicated monochrome mix can also control how different original colors map to gray, depending on the editor."
      },
      {
        "question": "Should every black-and-white portrait have strong contrast?",
        "answer": "No. Soft tonal transitions can suit a quiet portrait. Let the expression and light determine the treatment."
      },
      {
        "question": "Can it fix mixed lighting?",
        "answer": "It can hide some color differences, but the uneven brightness and shadow pattern remain."
      }
    ],
    "sources": [
      {
        "title": "Adobe Lightroom Classic: image tone and color",
        "url": "https://helpx.adobe.com/lightroom-classic/desktop/process-and-develop-photos/image-tone-color.html",
        "note": "Tonal adjustments and black-and-white mixing."
      }
    ],
    "related": [
      "vintage-photo-effects-guide",
      "fix-mixed-lighting-in-portraits"
    ]
  },
  {
    "slug": "why-edited-portraits-look-unnatural",
    "title": "Why edited portraits look unnatural—and what to undo first",
    "description": "Diagnose plastic skin, bright edge halos, odd color, and disconnected local edits. Use a reversible audit instead of stacking more effects.",
    "summary": "Diagnose plastic skin, bright edge halos, odd color, and disconnected local edits. Use a reversible audit instead of stacking more effects.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-15558373-4k.webp",
    "imageAlt": "Photographer working beside a laptop, drawing tablet, and camera",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imagePosition: "50% 50%",
    imageVariants: [{"src":"blog/pexels-15558373-480.webp","width":480},{"src":"blog/pexels-15558373-960.webp","width":960},{"src":"blog/pexels-15558373-1600.webp","width":1600},{"src":"blog/pexels-15558373-4k.webp","width":2560}],
    imageCredit: {"name":"Kawê Rodrigues","url":"https://www.pexels.com/photo/man-editing-photos-with-use-of-laptop-and-tablet-15558373/"},
    "quickAnswer": "Compare the edit with the original at the same size. Undo or reduce one group of changes at a time: smoothing, local contrast, color, then targeted retouching. Keep the least aggressive version that solves the actual problem. More editing is rarely a useful first response when you cannot identify what went wrong.",
    "sections": [
      {
        "id": "baseline",
        "title": "Start with a matched comparison",
        "paragraphs": [
          "Place the original and edited photo side by side with the same crop and brightness of display. A tighter crop can make a face seem different even when retouching is modest. Compare the eyes, cheek transitions, jaw outline, and surrounding background.",
          "Describe the problem in observable terms: missing texture, a bright rim, orange highlights, or a face lighter than the neck. That description gives you a specific adjustment to investigate instead of a vague feeling that the portrait looks wrong."
        ]
      },
      {
        "id": "audit",
        "title": "Find the most likely adjustment to revisit",
        "table": {
          "headers": [
            "Visible symptom",
            "Inspect first",
            "A useful recovery target"
          ],
          "rows": [
            [
              "Skin looks uniformly smooth",
              "Smoothing, noise reduction, or negative texture",
              "Some variation returns without making skin harsh."
            ],
            [
              "Bright or dark rims along edges",
              "Sharpening, clarity, or strong local contrast",
              "Edges look clean at normal viewing size."
            ],
            [
              "Face and neck have different color",
              "Local color masks and selective brightening",
              "The lighting relationship feels coherent."
            ],
            [
              "Features no longer resemble the source",
              "Reshaping or generative changes",
              "Return to a version the subject recognizes and approves."
            ]
          ]
        }
      },
      {
        "id": "undo",
        "title": "Run a reversible edit audit",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Save the current state.",
              "text": "Keep a version so you can compare without worrying about losing work. Do not overwrite the only original."
            },
            {
              "title": "Disable the strongest effect.",
              "text": "If the editor provides layers or an edit history, turn off one group. Otherwise reopen the original and rebuild the essential adjustment."
            },
            {
              "title": "Restore a small amount.",
              "text": "Add back only enough to address the named issue. Avoid using a new filter to compensate for an older overcorrection."
            },
            {
              "title": "Check normal size again.",
              "text": "An edit that is invisible in the final use may not need more work. Inspect close detail as a diagnostic step, not a demand for perfect skin."
            }
          ]
        }
      },
      {
        "id": "limits",
        "title": "Keep texture and identity separate",
        "paragraphs": [
          "Adobe's masking documentation distinguishes texture from clarity and allows local changes. Those controls can affect different aspects of a portrait; treating them as interchangeable smoothing tools can produce a confusing result.",
          "If an exported image has already lost detail, lowering another slider cannot guarantee restoration. Return to the original or an earlier editable version. For a generated portrait, compare features and details directly before deciding whether the result is suitable to share."
        ]
      }
    ],
    "faq": [
      {
        "question": "Should all skin texture remain?",
        "answer": "That is an aesthetic choice. The useful test is whether the treatment fits the intended picture and the person's preferences, rather than a rule that every pore must be visible."
      },
      {
        "question": "Can sharpening reverse smoothing?",
        "answer": "It can emphasize remaining edges but cannot reliably reconstruct the original texture."
      },
      {
        "question": "Is an unrealistic edit always bad?",
        "answer": "No. A stylized portrait can be intentional. Be clear about the desired result and do not mistake a stylized change for factual detail."
      }
    ],
    "sources": [
      {
        "title": "Adobe Lightroom Classic: masking",
        "url": "https://helpx.adobe.com/lightroom-classic/desktop/process-and-develop-photos/masking.html",
        "note": "Local adjustments and the distinction between texture and clarity."
      },
      {
        "title": "Adobe Photoshop: sharpening overview",
        "url": "https://helpx.adobe.com/photoshop/desktop/effects-filters/smart-filters/sharpening-overview.html",
        "note": "Sharpening increases contrast at edges."
      }
    ],
    "related": [
      "edit-photos-without-losing-original",
      "check-ai-portrait-details"
    ]
  },
  {
    "slug": "how-to-crop-portrait-photos",
    "title": "How to crop portrait photos without awkward framing",
    "description": "Choose a portrait crop around the image's purpose, expression, hands, and headroom. Compare square and tall versions without losing your original.",
    "summary": "Choose a portrait crop around the image's purpose, expression, hands, and headroom. Compare square and tall versions without losing your original.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-15758649-4k.webp",
    "imageAlt": "Photographer holding a camera in front of a mirror",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imagePosition: "50% 40%",
    imageVariants: [{"src":"blog/pexels-15758649-480.webp","width":480},{"src":"blog/pexels-15758649-960.webp","width":960},{"src":"blog/pexels-15758649-1600.webp","width":1600},{"src":"blog/pexels-15758649-4k.webp","width":2571}],
    imageCredit: {"name":"Elif Çöküç","url":"https://www.pexels.com/photo/woman-taking-a-mirror-selfie-with-a-camera-15758649/"},
    "quickAnswer": "Choose the intended use before cropping. Place the face where it reads clearly, inspect every edge for accidental cuts, and keep enough context to explain the pose. Compare the cropped result with the full image; a tighter crop should solve a specific distraction rather than simply make the face larger.",
    "sections": [
      {
        "id": "purpose",
        "title": "Pick the job before the rectangle",
        "paragraphs": [
          "A small profile image needs a readable expression. An outfit photograph needs more body and clothing. A memory of a location needs enough environment to remain meaningful. These purposes can require different crops from the same source.",
          "Adobe documents cropping as a way to trim image content and change composition. Keep a copy or a reversible crop so the discarded surroundings remain available for another use."
        ]
      },
      {
        "id": "method",
        "title": "Use a five-edge check",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Top.",
              "text": "Decide whether the top of the head belongs in the frame. A deliberate close crop can work; a tiny accidental cut is often less convincing."
            },
            {
              "title": "Bottom.",
              "text": "Check what the crop says about shoulders, hands, and clothing. Try moving the boundary away from an awkward-looking joint rather than obeying a universal crop rule."
            },
            {
              "title": "Left and right.",
              "text": "Look for fingers, elbows, or background objects entering as unexplained fragments. Give a gesture enough space to make sense."
            },
            {
              "title": "The direction of attention.",
              "text": "If the person looks to one side, compare a little more space in that direction with a centered version."
            },
            {
              "title": "The final display.",
              "text": "Preview the crop at the size and shape where it will appear. A circular avatar can trim corners that a square editor preview still shows."
            }
          ]
        }
      },
      {
        "id": "compare",
        "title": "Make three versions for different purposes",
        "table": {
          "headers": [
            "Version",
            "Priority",
            "Question"
          ],
          "rows": [
            [
              "Close portrait",
              "Expression and eyes",
              "Does it remain readable as a thumbnail?"
            ],
            [
              "Upper-body portrait",
              "Expression plus gesture",
              "Do hands and shoulders feel intentionally framed?"
            ],
            [
              "Environmental portrait",
              "Person and place",
              "Does the setting add meaning rather than empty space?"
            ]
          ]
        }
      },
      {
        "id": "limits",
        "title": "A crop changes framing, not capture",
        "paragraphs": [
          "Cropping cannot change the viewpoint of a close selfie, restore focus, or reveal a hand outside the original frame. It also leaves fewer original pixels for the final image. If you need a much tighter crop, check the saved output for sufficient detail at its intended size.",
          "Avoid automatically cropping every portrait to the same ratio just because a social platform offers it. Keep a flexible master and make the delivery crop separately. The strongest rectangle is the one that serves this photograph's job."
        ]
      }
    ],
    "faq": [
      {
        "question": "How much headroom is correct?",
        "answer": "There is no fixed amount. Compare the face's placement and the empty space at the actual display size."
      },
      {
        "question": "Can I crop through the top of the head?",
        "answer": "Yes, if it feels deliberate and suits a close portrait. Compare it with a version that includes the whole head."
      },
      {
        "question": "Will cropping improve resolution?",
        "answer": "No. It removes part of the image. Enlarging the remaining area is a separate resampling step."
      }
    ],
    "sources": [
      {
        "title": "Adobe Photoshop: crop photos",
        "url": "https://helpx.adobe.com/in/photoshop/desktop/crop-resize-transform/crop-straighten/crop-photos.html",
        "note": "Cropping changes framing and trims image content."
      }
    ],
    "related": [
      "photo-sharpening-vs-resolution",
      "choose-portrait-background"
    ]
  },
  {
    "slug": "brighten-dark-face-in-photo",
    "title": "How to brighten a dark face in a photo",
    "description": "Lift a dark portrait carefully without washing out the background. Check shadow detail, noise, and local adjustment edges before saving.",
    "summary": "Lift a dark portrait carefully without washing out the background. Check shadow detail, noise, and local adjustment edges before saving.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-18109722-4k.webp",
    "imageAlt": "Woman standing beneath string lights at night",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imagePosition: "50% 40%",
    imageVariants: [{"src":"blog/pexels-18109722-480.webp","width":480},{"src":"blog/pexels-18109722-960.webp","width":960},{"src":"blog/pexels-18109722-1600.webp","width":1600},{"src":"blog/pexels-18109722-4k.webp","width":2560}],
    imageCredit: {"name":"Alex Paz","url":"https://www.pexels.com/photo/portrait-of-woman-at-night-18109722/"},
    "quickAnswer": "First check whether the face contains usable detail in the original. If the whole photo is dark, try a modest overall brightness adjustment. If only the face is dark, use a local adjustment when your editor offers it, then inspect noise and the transition into hair and neck. Stop when further brightening reveals artifacts rather than useful detail.",
    "sections": [
      {
        "id": "diagnose",
        "title": "Decide whether the whole image needs lifting",
        "paragraphs": [
          "A portrait taken against a bright sky can have a properly bright background and an underexposed face. A dim indoor image may be dark everywhere. These are different editing problems: lifting the entire first picture can erase the background you wanted to keep.",
          "Adobe's shadow-and-highlight guidance describes targeted tonal corrections. The useful principle is to change the area or tonal range that needs help, while keeping an untouched source available."
        ]
      },
      {
        "id": "workflow",
        "title": "Brighten in small, inspectable steps",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Open the best source.",
              "text": "Use the original saved photograph, not a compressed chat preview or screenshot, when it is available."
            },
            {
              "title": "Make a small global test.",
              "text": "Raise brightness or exposure slightly. If the scene improves together, continue carefully; if the background washes out, return to the starting point."
            },
            {
              "title": "Target the face if needed.",
              "text": "Use a softly blended mask or selective adjustment in an editor that supports it. Include the relevant neck area so the face does not appear pasted onto the body."
            },
            {
              "title": "Inspect the darkest important detail.",
              "text": "Look at the shaded eye and hairline. Keep the adjustment only if it reveals useful shape without distracting speckles, banding, or an obvious bright halo."
            }
          ]
        }
      },
      {
        "id": "stop",
        "title": "Know when to stop recovering shadows",
        "table": {
          "headers": [
            "Result after brightening",
            "Decision"
          ],
          "rows": [
            [
              "Expression becomes readable with modest noise",
              "Keep the smallest adjustment that works at the final size."
            ],
            [
              "Skin becomes patchy while eyes remain unclear",
              "Try another frame or accept a darker treatment."
            ],
            [
              "Background loses its intended atmosphere",
              "Reduce the global change or make a more selective edit."
            ],
            [
              "A bright boundary appears around the face",
              "Reduce the adjustment and refine the mask transition."
            ]
          ]
        }
      },
      {
        "id": "tradeoff",
        "title": "Do not turn every shadow into daylight",
        "paragraphs": [
          "A night portrait can remain dark and still be successful. The target may be readable eyes and an identifiable expression, not equal brightness across the frame. Compare a restrained version with a brighter version as thumbnails.",
          "If the scene was not recorded clearly, editing cannot guarantee the original detail. A generative reconstruction is a different operation and may invent features. For an important likeness, prefer a clearer source photograph."
        ]
      }
    ],
    "faq": [
      {
        "question": "Should I raise shadows or exposure?",
        "answer": "Names vary by editor. Exposure generally affects a wider range; a shadow adjustment targets darker tones. Compare their effects on both face and background."
      },
      {
        "question": "Why does brightening show grain?",
        "answer": "The adjustment can make existing noise more visible. More brightness does not mean more captured detail."
      },
      {
        "question": "Can I recover a completely black face?",
        "answer": "Not reliably if useful facial information is absent. Try the original file and another capture before trusting a reconstruction."
      }
    ],
    "sources": [
      {
        "title": "Adobe Photoshop: shadow and highlight detail",
        "url": "https://helpx.adobe.com/photoshop/desktop/repair-retouch/adjust-light-tone/adjust-shadow-and-highlight-detail.html",
        "note": "Targeted tonal corrections and preservation of an original."
      }
    ],
    "related": [
      "backlit-phone-portraits",
      "photo-noise-vs-film-grain",
      "check-ai-portrait-details"
    ]
  },
  {
    "slug": "can-you-fix-overexposed-portraits",
    "title": "Can you fix an overexposed portrait?",
    "description": "Check whether bright skin still contains detail before trying highlight recovery. Learn the difference between revealing recorded tones and inventing replacements.",
    "summary": "Check whether bright skin still contains detail before trying highlight recovery. Learn the difference between revealing recorded tones and inventing replacements.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-18259251-4k.webp",
    "imageAlt": "Man in a white shirt with bright sunlight across his face",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imagePosition: "50% 45%",
    imageVariants: [{"src":"blog/pexels-18259251-480.webp","width":480},{"src":"blog/pexels-18259251-960.webp","width":960},{"src":"blog/pexels-18259251-1600.webp","width":1600},{"src":"blog/pexels-18259251-4k.webp","width":3840}],
    imageCredit: {"name":"yaroslav -","url":"https://www.pexels.com/photo/portrait-of-young-man-in-sunlight-18259251/"},
    "quickAnswer": "Sometimes. Lowering exposure or highlights can reveal bright detail that remains in the file. If the important area was clipped to uniform white with no recoverable information, making it darker will not restore the original texture. Test the original file before deciding whether to edit, choose another frame, or retake.",
    "sections": [
      {
        "id": "test",
        "title": "Start with a recovery test",
        "paragraphs": [
          "Open the highest-quality original you have and temporarily reduce exposure or highlights. Watch the bright cheek, forehead, or white clothing. Does shading and texture appear, or does the white patch simply become a flat gray patch?",
          "Adobe's overexposure tutorial demonstrates recovering highlight information in a usable source. Camera Raw's documentation also explains clipping as lost tonal information. A successful example is not a promise that every bright photograph is recoverable."
        ]
      },
      {
        "id": "diagnose",
        "title": "Read the result of the test",
        "table": {
          "headers": [
            "What appears",
            "What it suggests",
            "Next step"
          ],
          "rows": [
            [
              "Texture and gentle shading",
              "Useful information may remain.",
              "Restore overall balance without making the entire image too dark."
            ],
            [
              "A flat patch that only changes brightness",
              "The needed detail may be absent from this file.",
              "Check an original or another frame."
            ],
            [
              "Odd color around the bright patch",
              "Recovery is not producing a convincing transition.",
              "Reduce the correction and compare with another capture."
            ]
          ]
        }
      },
      {
        "id": "edit",
        "title": "Recover without making the face muddy",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Set a moderate overall exposure.",
              "text": "Do not darken the whole picture just to make one bright spot disappear. Keep the expression readable."
            },
            {
              "title": "Work on the highlights.",
              "text": "Use the relevant control if available and inspect the brightest meaningful area. Small reflections do not always need visible texture."
            },
            {
              "title": "Recheck the face as a whole.",
              "text": "Compare cheeks, lips, and neck. A recovered forehead should not make the rest of the face look unnaturally dim."
            },
            {
              "title": "Save a comparison.",
              "text": "Keep the original and the restrained recovery side by side. Choose based on the intended display, not the most dramatic slider movement."
            }
          ]
        }
      },
      {
        "id": "retake",
        "title": "Use a retake when the missing detail matters",
        "paragraphs": [
          "If an essential facial area remains blank, another frame is often the more honest solution. During a retake, check the saved image's brightest skin areas and adjust the camera exposure or lighting position before continuing.",
          "Generative tools may create plausible texture inside a blank area, but that is not recovery of the recorded scene. For a portrait where likeness matters, do not present invented detail as restored original information."
        ]
      }
    ],
    "faq": [
      {
        "question": "Does a white area always mean overexposure?",
        "answer": "No. White clothing, a background, or a small reflection can be intentionally bright. Assess whether important detail is missing."
      },
      {
        "question": "Is a RAW file always recoverable?",
        "answer": "No. It can provide more editing flexibility than a processed file in some situations, but it cannot guarantee recovery of clipped capture information."
      },
      {
        "question": "Can lowering brightness fix the problem?",
        "answer": "Only if the file retains useful information. A blank patch becoming gray is not restored texture."
      }
    ],
    "sources": [
      {
        "title": "Adobe: adjusting an overexposed photo",
        "url": "https://www.adobe.com/learn/lightroom-classic/web/fix-overexposed-photo",
        "note": "Highlights and clipping checks in an example editing workflow."
      },
      {
        "title": "Adobe Camera Raw: color and tonal adjustments",
        "url": "https://helpx.adobe.com/camera-raw/desktop/using/make-color-tonal-adjustments-camera.html",
        "note": "White-balance references, temperature and tint, and clipping."
      }
    ],
    "related": [
      "brighten-dark-face-in-photo",
      "portrait-photos-in-harsh-sunlight"
    ]
  },
  {
    "slug": "remove-color-cast-from-photos",
    "title": "How to remove a color cast from portrait photos",
    "description": "Correct an overall orange, blue, green, or magenta cast with a sensible reference. Keep natural skin differences and know when white balance is not enough.",
    "summary": "Correct an overall orange, blue, green, or magenta cast with a sensible reference. Keep natural skin differences and know when white balance is not enough.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-31654390-4k.webp",
    "imageAlt": "Portrait of a woman under purple and pink lighting",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imagePosition: "50% 35%",
    imageVariants: [{"src":"blog/pexels-31654390-480.webp","width":480},{"src":"blog/pexels-31654390-960.webp","width":960},{"src":"blog/pexels-31654390-1600.webp","width":1600},{"src":"blog/pexels-31654390-4k.webp","width":2887}],
    imageCredit: {"name":"Nadya Ketler","url":"https://www.pexels.com/photo/creative-portrait-in-neon-lighting-31654390/"},
    "quickAnswer": "If the whole image shares an unwanted tint, start with white balance. Use a known neutral object under the same light as the face when possible, then refine temperature and tint by eye. If different areas need opposite corrections, stop treating the problem as one global cast and investigate mixed lighting.",
    "sections": [
      {
        "id": "reference",
        "title": "Choose a reference you can trust",
        "paragraphs": [
          "A white shirt is not automatically a perfect reference: it may be cream, reflect a colored light, or contain no useful highlight detail. Prefer an object you know was neutral and that received the same light as the subject.",
          "Adobe Camera Raw describes white balance using neutral references, temperature, and tint. Its controls are an example of the underlying approach; another editor may use different names or provide fewer options."
        ]
      },
      {
        "id": "balance",
        "title": "Correct the overall cast first",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Remove the style temporarily.",
              "text": "Disable a warm filter or color effect before diagnosing the capture. Otherwise you may compensate for an intentional edit instead of the original lighting."
            },
            {
              "title": "Try the neutral reference.",
              "text": "Use an eyedropper if available, or compare the object while adjusting manually. Look at the face immediately after the change."
            },
            {
              "title": "Refine temperature.",
              "text": "Move cautiously between cooler and warmer until the overall balance suits the scene. Avoid treating a remembered sunset like neutral studio light."
            },
            {
              "title": "Refine tint if needed.",
              "text": "Look for a remaining green or magenta influence. Change only enough to improve the reference and skin together."
            }
          ]
        }
      },
      {
        "id": "check",
        "title": "Check the correction in three places",
        "table": {
          "headers": [
            "Area",
            "Question"
          ],
          "rows": [
            [
              "Neutral reference",
              "Does it look plausible under this scene's light?"
            ],
            [
              "Face and neck",
              "Do their colors belong to the same environment without becoming identical?"
            ],
            [
              "Background",
              "Did the correction remove an intentional atmosphere or create a new cast?"
            ]
          ]
        }
      },
      {
        "id": "limits",
        "title": "Do not neutralize a scene at any cost",
        "paragraphs": [
          "A candlelit room or colored sign can legitimately color the face. You can reduce an unwanted cast without removing all evidence of the location. Make one neutral version and one slightly atmospheric version, then compare which better represents the intended mood.",
          "If one cheek improves while the other becomes worse, the source probably needs a more local approach. Another possibility is a color-profile or display problem: when the same file looks different between apps or screens, investigate the viewing workflow before repeatedly changing skin color."
        ]
      }
    ],
    "faq": [
      {
        "question": "Can I fix a cast by reducing saturation?",
        "answer": "It may make the tint weaker, but it also removes other colors. White balance is a more targeted starting point for an overall cast."
      },
      {
        "question": "Should teeth or eye whites be perfectly white?",
        "answer": "No. They can contain shadows and reflected color. Forcing them to bright neutral white can look unnatural."
      },
      {
        "question": "Why did correcting the wall make skin worse?",
        "answer": "The wall may not be neutral or may receive different light. Try a better reference and check for mixed lighting."
      }
    ],
    "sources": [
      {
        "title": "Adobe Camera Raw: color and tonal adjustments",
        "url": "https://helpx.adobe.com/camera-raw/desktop/using/make-color-tonal-adjustments-camera.html",
        "note": "White-balance references, temperature and tint, and clipping."
      }
    ],
    "related": [
      "fix-mixed-lighting-in-portraits",
      "why-photos-look-different-on-screens"
    ]
  },
  {
    "slug": "photo-noise-vs-film-grain",
    "title": "Photo noise vs film grain: what is the difference?",
    "description": "Tell unwanted digital noise from a deliberate grain effect. Balance cleanup and texture without smoothing away useful portrait detail.",
    "summary": "Tell unwanted digital noise from a deliberate grain effect. Balance cleanup and texture without smoothing away useful portrait detail.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-4992637-4k.webp",
    "imageAlt": "Film cameras, lenses, and film rolls on a wooden table",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imagePosition: "50% 50%",
    imageVariants: [{"src":"blog/pexels-4992637-480.webp","width":480},{"src":"blog/pexels-4992637-960.webp","width":960},{"src":"blog/pexels-4992637-1600.webp","width":1600},{"src":"blog/pexels-4992637-4k.webp","width":3840}],
    imageCredit: {"name":"Rachel Claire","url":"https://www.pexels.com/photo/vintage-camera-near-lens-and-camera-roll-on-table-4992637/"},
    "quickAnswer": "Digital noise is variation in the captured or processed image that can appear as brightness speckles or colored blotches. Film grain comes from photographic film; a grain effect imitates a chosen texture. For a portrait, diagnose unwanted noise first, make only the cleanup needed, then decide separately whether intentional grain supports the style.",
    "sections": [
      {
        "id": "identify",
        "title": "Look at the pattern before moving a slider",
        "paragraphs": [
          "Inspect a smooth shadow, a cheek, and a textured area such as hair. Fine brightness variation is different from large colored patches. Block-shaped artifacts around edges can point to compression rather than the same noise problem.",
          "Adobe's noise-reduction documentation distinguishes luminance noise from color noise and notes the need to preserve detail. Its Denoise explanation also treats cleanup and texture as choices rather than a rule that every photo must become perfectly smooth."
        ]
      },
      {
        "id": "pattern",
        "title": "Match the visible issue to the decision",
        "table": {
          "headers": [
            "Pattern",
            "Possible explanation",
            "Useful comparison"
          ],
          "rows": [
            [
              "Colored specks in dark areas",
              "Color noise",
              "Try color-noise cleanup and inspect skin color."
            ],
            [
              "Fine light-dark variation",
              "Luminance noise or added texture",
              "Compare a modest cleanup with the source."
            ],
            [
              "Square blocks or damaged outlines",
              "Compression artifacts",
              "Find a higher-quality original before editing."
            ],
            [
              "Even texture added by a preset",
              "Deliberate grain effect",
              "Disable the effect and judge whether it helps."
            ]
          ]
        }
      },
      {
        "id": "order",
        "title": "Separate cleanup from the style",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Use the best file.",
              "text": "Start from the original rather than a downloaded thumbnail or screenshot. Removing noise from an already damaged copy can hide more detail."
            },
            {
              "title": "Try restrained cleanup.",
              "text": "Increase reduction only while the distracting pattern improves. Watch eyelashes, hair, and fabric for smearing."
            },
            {
              "title": "Check the intended size.",
              "text": "Noise that dominates a large zoom may be unobtrusive in the final portrait. Do not sacrifice recognizable detail for an inspection view nobody will use."
            },
            {
              "title": "Add grain only if wanted.",
              "text": "If you choose a grain effect, compare its amount and apparent size in the exported picture. Texture should support the mood rather than obscure expression."
            }
          ]
        }
      },
      {
        "id": "limits",
        "title": "A textured photo does not automatically look like film",
        "paragraphs": [
          "Film-inspired pictures also depend on color, contrast, light, and framing. Adding grain cannot reproduce all those relationships, and covering a blurred face with texture does not recover focus.",
          "Keep a clean working version before adding the final texture. That makes it easier to produce a subtler portrait later or a different delivery size without repeating all your editing."
        ]
      }
    ],
    "faq": [
      {
        "question": "Is all noise bad?",
        "answer": "No. The acceptable amount depends on the photo and its use. A meaningful expression can matter more than a perfectly smooth background."
      },
      {
        "question": "Does grain hide bad image quality?",
        "answer": "It can disguise some variation but does not restore missing information. Judge whether the face remains clear."
      },
      {
        "question": "Should I denoise every portrait?",
        "answer": "Only when the noise distracts from the intended result. Compare with an untreated version before committing."
      }
    ],
    "sources": [
      {
        "title": "Adobe Photoshop: noise and JPEG artifacts",
        "url": "https://helpx.adobe.com/photoshop/desktop/effects-filters/artistic-stylize-filters/reduce-image-noise-and-jpeg-artifacts.html",
        "note": "Luminance noise, color noise, and the detail tradeoff."
      },
      {
        "title": "Adobe: Denoise demystified",
        "url": "https://blog.adobe.com/en/publish/2023/04/18/denoise-demystified",
        "note": "Technical background on noise reduction and texture."
      }
    ],
    "related": [
      "vintage-photo-effects-guide",
      "why-saved-photos-lose-quality"
    ]
  },
  {
    "slug": "photo-sharpening-vs-resolution",
    "title": "Photo sharpening vs resolution: what can each fix?",
    "description": "Separate edge contrast, pixel dimensions, missed focus, and enlargement. Learn when sharpening helps and when it only makes a damaged photo look harsher.",
    "summary": "Separate edge contrast, pixel dimensions, missed focus, and enlargement. Learn when sharpening helps and when it only makes a damaged photo look harsher.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-31743037-4k.webp",
    "imageAlt": "Black-and-white portrait of a photographer holding a camera",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imagePosition: "50% 45%",
    imageVariants: [{"src":"blog/pexels-31743037-480.webp","width":480},{"src":"blog/pexels-31743037-960.webp","width":960},{"src":"blog/pexels-31743037-1600.webp","width":1600},{"src":"blog/pexels-31743037-4k.webp","width":3840}],
    imageCredit: {"name":"Anil Sharma","url":"https://www.pexels.com/photo/portrait-of-photographer-with-camera-in-hand-31743037/"},
    "quickAnswer": "Sharpening makes existing edges more prominent; resolution describes image dimensions or sampling in context. More sharpening does not add a new capture, and enlarging a file does not prove that new detail is authentic. Diagnose whether the problem is soft edges, too few pixels, motion, or missed focus before choosing a tool.",
    "sections": [
      {
        "id": "definitions",
        "title": "Separate three questions",
        "paragraphs": [
          "Adobe describes sharpening as increasing contrast where tones meet. Its resampling documentation describes adding or removing pixels when image dimensions change. These operations can make an image more usable, but neither should be confused with taking a clearer original photograph.",
          "Ask: are useful details present, are their edges easy to read, and is the file large enough for the intended output? A photo can have many pixels and still be blurred; a smaller sharp picture can look excellent when shown at a suitable size."
        ]
      },
      {
        "id": "diagnose",
        "title": "Choose the operation by the symptom",
        "table": {
          "headers": [
            "Symptom",
            "Try",
            "Limit"
          ],
          "rows": [
            [
              "Useful detail looks slightly soft",
              "Modest sharpening at the final size",
              "Excess creates rims and harsh texture."
            ],
            [
              "The image is too small for the intended display",
              "Find the original or consider careful enlargement",
              "Estimated pixels are not proof of recovered detail."
            ],
            [
              "Moving features are smeared",
              "Choose another frame or a better capture",
              "Edge contrast cannot reliably restore the original moment."
            ],
            [
              "The background is sharp but the face is not",
              "Check for missed focus",
              "Sharpening everything may emphasize the wrong subject."
            ]
          ]
        }
      },
      {
        "id": "inspect",
        "title": "Use a controlled sharpening check",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Duplicate the output candidate.",
              "text": "Keep the original and any editable working file unchanged."
            },
            {
              "title": "Set the intended pixel dimensions.",
              "text": "Judge the image at the size you will actually deliver instead of repeatedly enlarging and shrinking copies."
            },
            {
              "title": "Increase sharpening gradually.",
              "text": "Look at the eye outline, hair against the sky, and a textured garment. Stop before bright borders or brittle texture become visible."
            },
            {
              "title": "Compare with sharpening off.",
              "text": "Keep the change only if the portrait reads better without drawing attention to the processing."
            }
          ]
        }
      },
      {
        "id": "ai",
        "title": "Treat generated detail as interpretation",
        "paragraphs": [
          "An AI enhancement may produce plausible eyelashes, fabric, or hair in a soft area. That can be useful for a stylized picture, but it may differ from the person or scene. Inspect meaningful features against the source.",
          "For an important likeness, choosing a clearer original is often the better decision. If no alternative exists, use a smaller display size and a restrained treatment rather than presenting invented detail as exact recovery."
        ]
      }
    ],
    "faq": [
      {
        "question": "Will changing 72 DPI to 300 DPI improve a screen photo?",
        "answer": "Changing a print-resolution label alone does not add pixels or recover detail. For screen use, check actual pixel dimensions."
      },
      {
        "question": "Can I sharpen before resizing?",
        "answer": "Editors support different workflows, but inspect the final resized output and avoid repeated aggressive sharpening."
      },
      {
        "question": "Is a larger file always sharper?",
        "answer": "No. File size also depends on format, compression, and content. Inspect the actual image."
      }
    ],
    "sources": [
      {
        "title": "Adobe Photoshop: sharpening overview",
        "url": "https://helpx.adobe.com/photoshop/desktop/effects-filters/smart-filters/sharpening-overview.html",
        "note": "Sharpening increases contrast at edges."
      },
      {
        "title": "Adobe Photoshop: image size, resolution, and resampling",
        "url": "https://helpx.adobe.com/photoshop/desktop/crop-resize-transform/resize-adjust-resolution/image-size-resolution-and-resampling.html",
        "note": "Pixel dimensions and resampling; not proof of recovered scene detail."
      }
    ],
    "related": [
      "why-night-phone-photos-are-blurry",
      "check-ai-portrait-details",
      "why-saved-photos-lose-quality"
    ]
  },
  {
    "slug": "vibrance-vs-saturation-portraits",
    "title": "Vibrance vs saturation: which should you use for portraits?",
    "description": "Compare vibrance and saturation without overdoing skin or clothing. A simple side-by-side edit helps you choose the control that solves the actual color problem.",
    "summary": "Compare vibrance and saturation without overdoing skin or clothing. A simple side-by-side edit helps you choose the control that solves the actual color problem.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-31544926-4k.webp",
    "imageAlt": "Woman holding flowers against a pink studio backdrop",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imagePosition: "50% 40%",
    imageVariants: [{"src":"blog/pexels-31544926-480.webp","width":480},{"src":"blog/pexels-31544926-960.webp","width":960},{"src":"blog/pexels-31544926-1600.webp","width":1600},{"src":"blog/pexels-31544926-4k.webp","width":3840}],
    imageCredit: {"name":"frank minjarez","url":"https://www.pexels.com/photo/young-woman-holding-bouquet-on-pink-background-31544926/"},
    "quickAnswer": "In Adobe's tools, saturation changes color intensity broadly, while vibrance gives less-saturated colors more attention and is designed to reduce oversaturation of skin tones. Start with a small adjustment and compare skin, clothing, and background. Neither slider corrects an underlying white-balance problem.",
    "sections": [
      {
        "id": "difference",
        "title": "Different behavior, not a universal winner",
        "paragraphs": [
          "Adobe documents vibrance as a selective approach to saturation. Other editors may implement similarly named controls differently, so compare the result in the tool you use. A skin-protection design does not guarantee every complexion and colored lighting setup will remain unchanged.",
          "Choose the issue first. Is the whole image too dull, is one jacket too bright, or is the face orange because of a cast? A color-intensity slider cannot answer all three problems equally well."
        ]
      },
      {
        "id": "decision",
        "title": "Choose a starting point",
        "table": {
          "headers": [
            "Problem",
            "Try first",
            "Watch"
          ],
          "rows": [
            [
              "Muted scene, already vivid clothing",
              "A modest vibrance adjustment",
              "The clothing and skin may still change."
            ],
            [
              "Whole edit feels over-colored",
              "Reduce saturation slightly",
              "Avoid draining the expression and environment together."
            ],
            [
              "Only one object is too vivid",
              "A targeted color adjustment if available",
              "Check similar colors elsewhere in the frame."
            ],
            [
              "Skin has an orange or green cast",
              "White balance or lighting diagnosis",
              "Intensity is not the same as color balance."
            ]
          ]
        }
      },
      {
        "id": "compare",
        "title": "Make a useful two-version comparison",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Start from a neutral baseline.",
              "text": "Disable strong color presets temporarily and set a reasonable overall brightness."
            },
            {
              "title": "Save a saturation version.",
              "text": "Use a small increase or decrease that addresses your intended mood. Notice which region reaches an uncomfortable intensity first."
            },
            {
              "title": "Save a vibrance version.",
              "text": "Return to the same baseline and adjust vibrance. Do not assume equal slider numbers produce equal visual changes."
            },
            {
              "title": "Judge the portrait, then the whole frame.",
              "text": "Compare cheeks, lips, a colorful garment, and the background at normal viewing size. Choose the version with fewer unrelated changes."
            }
          ]
        }
      },
      {
        "id": "restraint",
        "title": "Leave room for color that is already present",
        "paragraphs": [
          "Sunset skin, red signage, and brightly dyed fabric can begin with strong color. Increasing intensity because the rest of the frame is quiet may damage the balance you wanted. Consider letting a quieter background remain quiet.",
          "Save an editable version before export. If a later screen makes the picture look much more vivid, check color management and display conditions before creating another global correction from a compressed copy."
        ]
      }
    ],
    "faq": [
      {
        "question": "Is vibrance always better for skin?",
        "answer": "No. It is designed to be more selective in Adobe's implementation, but the source image and strength still matter."
      },
      {
        "question": "Can I use both controls?",
        "answer": "Yes, if each change has a purpose. Compare with the baseline so one adjustment is not simply compensating for the other."
      },
      {
        "question": "Will saturation make a sunset look real?",
        "answer": "It strengthens color, not the lighting geometry. Excess can make skin and sky look less believable."
      }
    ],
    "sources": [
      {
        "title": "Adobe Photoshop: adjust vibrance",
        "url": "https://helpx.adobe.com/photoshop/using/adjust-vibrance.html",
        "note": "How Adobe distinguishes vibrance from saturation."
      }
    ],
    "related": [
      "remove-color-cast-from-photos",
      "golden-hour-photo-editing",
      "why-photos-look-different-on-screens"
    ]
  },
  {
    "slug": "consistent-editing-for-photo-set",
    "title": "How to edit a photo set consistently without making every shot identical",
    "description": "Build a coherent portrait set with a reference image, individual exposure corrections, and selective style adjustments. Avoid copying mistakes across different light.",
    "summary": "Build a coherent portrait set with a reference image, individual exposure corrections, and selective style adjustments. Avoid copying mistakes across different light.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-7129664-4k.webp",
    "imageAlt": "Hands at a laptop displaying a set of portrait photographs",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imagePosition: "50% 50%",
    imageVariants: [{"src":"blog/pexels-7129664-480.webp","width":480},{"src":"blog/pexels-7129664-960.webp","width":960},{"src":"blog/pexels-7129664-1600.webp","width":1600},{"src":"blog/pexels-7129664-4k.webp","width":2560}],
    imageCredit: {"name":"Michael Burrows","url":"https://www.pexels.com/photo/photographer-working-on-laptop-at-workplace-7129664/"},
    "quickAnswer": "Choose a representative reference photo, correct each image's exposure and color balance, then apply a restrained shared style. Compare the set together and adjust outliers individually. Consistency means the pictures belong together; it does not mean every frame must use identical settings or make different skin tones look the same.",
    "sections": [
      {
        "id": "anchor",
        "title": "Choose an anchor that represents the set",
        "paragraphs": [
          "Pick a photo with readable skin, manageable highlights, and lighting typical of most of the session. A dramatically backlit exception is a poor anchor for a set mostly photographed in shade. Finish the basic corrections on the representative image before treating it as the target.",
          "Write down two or three characteristics you want to share: gentle contrast, restrained colors, or a slightly warm mood. This gives you a visual direction that can survive changes in the source light."
        ]
      },
      {
        "id": "workflow",
        "title": "Separate corrections from the shared treatment",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Group similar lighting.",
              "text": "Put window shots, outdoor shade, and flash images into small groups. Start by matching within a group rather than forcing the whole session into one correction."
            },
            {
              "title": "Correct each source.",
              "text": "Adjust basic brightness and unwanted color casts individually. A setting that fixes one dark photo may overexpose another."
            },
            {
              "title": "Copy only useful settings.",
              "text": "In editors that support selective copying, transfer the style controls you want to share. Review local masks and crops separately."
            },
            {
              "title": "Compare side by side.",
              "text": "Look for a face that suddenly appears too orange, a black garment that turns gray, or a background brighter than the rest. Adjust that image rather than moving the entire set."
            }
          ]
        }
      },
      {
        "id": "copy",
        "title": "Which changes deserve individual attention?",
        "table": {
          "headers": [
            "Adjustment",
            "Why review it per photo?"
          ],
          "rows": [
            [
              "Exposure and white balance",
              "The source light and camera response may differ."
            ],
            [
              "Crop",
              "Each expression and gesture needs its own framing."
            ],
            [
              "Local face correction",
              "The subject's position changes between frames."
            ],
            [
              "Shared color mood",
              "It can be reused as a starting point, then checked."
            ]
          ]
        },
        "paragraphs": [
          "Adobe's copy-and-paste documentation allows selecting which settings transfer. It supports a selective workflow rather than assuming every adjustment should be synchronized."
        ]
      },
      {
        "id": "finish",
        "title": "Judge the sequence at its delivery size",
        "paragraphs": [
          "View the whole set as thumbnails, then inspect the most different pairs. The jump between neighboring images can reveal an inconsistency that was invisible while editing each photo alone.",
          "Keep intentional differences. A flash image can remain harder than a window portrait and still belong to the same collection. Match the overall presentation without erasing what makes each moment distinct."
        ]
      }
    ],
    "faq": [
      {
        "question": "Should all photos use the same preset?",
        "answer": "A preset can be a starting point, but different lighting can produce different results from identical settings."
      },
      {
        "question": "Should skin colors match across different people?",
        "answer": "No. Preserve real differences. Look for coherent lighting and processing, not a single target skin color."
      },
      {
        "question": "What if one picture never fits?",
        "answer": "Keep it as an intentional contrast, edit it separately, or leave it out of the sequence if it distracts from the set's purpose."
      }
    ],
    "sources": [
      {
        "title": "Adobe Lightroom: copy and paste edits",
        "url": "https://helpx.adobe.com/lightroom/web/get-set-up/preferences-and-settings/copy-and-paste-edits.html",
        "note": "Selected settings can be copied without copying every adjustment."
      }
    ],
    "related": [
      "remove-color-cast-from-photos",
      "vibrance-vs-saturation-portraits",
      "edit-photos-without-losing-original"
    ]
  },
  {
    "slug": "why-saved-photos-lose-quality",
    "title": "Why edited photos lose quality when you save or share them",
    "description": "Trace lost photo quality through editing, export, messaging, and display. Check pixel dimensions and compression before applying more sharpening.",
    "summary": "Trace lost photo quality through editing, export, messaging, and display. Check pixel dimensions and compression before applying more sharpening.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-34225009-4k.webp",
    "imageAlt": "Photographer holding a memory card beside a card reader and laptop",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imagePosition: "60% 50%",
    imageVariants: [{"src":"blog/pexels-34225009-480.webp","width":480},{"src":"blog/pexels-34225009-960.webp","width":960},{"src":"blog/pexels-34225009-1600.webp","width":1600},{"src":"blog/pexels-34225009-4k.webp","width":3840}],
    imageCredit: {"name":"Julio Lopez","url":"https://www.pexels.com/photo/photographer-inserting-sd-card-into-laptop-for-editing-34225009/"},
    "quickAnswer": "Compare the original, the exported file, and the received copy. If the export is already smaller or damaged, inspect export dimensions and compression. If the export is good but the received image is worse, investigate the sharing path. Avoid repeatedly editing a compressed copy when an original or editable master is available.",
    "sections": [
      {
        "id": "trace",
        "title": "Find the stage where the change appears",
        "paragraphs": [
          "A small preview is not always the full file. Open or download the actual image before diagnosing it. Keep three versions clearly named: source, export, and received. Compare them at the same display size so a zoom difference does not look like a quality difference.",
          "JPEG uses lossy compression, as Adobe's format comparison explains. A fresh save can introduce a tradeoff between file size and detail, depending on the encoder and settings. Repeated exports are therefore a workflow to avoid when they are unnecessary."
        ]
      },
      {
        "id": "locate",
        "title": "Trace the loss instead of guessing",
        "table": {
          "headers": [
            "First bad version",
            "Check",
            "Try"
          ],
          "rows": [
            [
              "Edited preview",
              "Strong smoothing or a low-resolution source",
              "Compare the original with effects disabled."
            ],
            [
              "Saved export",
              "Pixel dimensions, quality, and format",
              "Export once from the working master at a suitable size."
            ],
            [
              "Received copy",
              "The sharing app's delivery options",
              "Try a file/original-quality option if available and compare."
            ],
            [
              "Only one viewer",
              "Preview loading, display scale, or color management",
              "Open the same file in another viewer."
            ]
          ]
        }
      },
      {
        "id": "routine",
        "title": "Use an original-to-delivery routine",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Keep the source.",
              "text": "Do not replace the only original with an export. Store an editable working version when your editor supports it."
            },
            {
              "title": "Choose dimensions deliberately.",
              "text": "Check the destination's current requirements if it specifies them. Avoid exporting a tiny image and enlarging it later."
            },
            {
              "title": "Export a candidate.",
              "text": "Inspect fine edges, skin, and smooth backgrounds in the actual saved file. A successful save message is not a visual check."
            },
            {
              "title": "Test the delivery.",
              "text": "Send or upload one representative photo, then inspect the received file. Confirm the method before transferring a whole set."
            }
          ]
        }
      },
      {
        "id": "avoid",
        "title": "Do not sharpen a delivery problem repeatedly",
        "paragraphs": [
          "If the received photo is damaged but your export is clean, a stronger edit is treating the wrong stage. Fix the transfer or delivery settings first. A screenshot may also include fewer image pixels than the source and adds another capture step.",
          "For important photos, keep a short note of the export settings and delivery method that worked. You can reuse that workflow while still checking new destinations, whose processing and limits may change."
        ]
      }
    ],
    "faq": [
      {
        "question": "Does every save reduce quality?",
        "answer": "No. It depends on the format and operation. Lossless saves, metadata changes, and some specialized JPEG operations differ from recompressing image pixels."
      },
      {
        "question": "Will PNG repair an already compressed JPEG?",
        "answer": "No. It can preserve the pixels it receives without further lossy compression, but it does not recover information already lost."
      },
      {
        "question": "Why does a photo look fine before I send it?",
        "answer": "The receiving copy or preview may differ. Compare actual files and dimensions to locate the change rather than assuming the editor caused it."
      }
    ],
    "sources": [
      {
        "title": "Adobe: JPEG and PNG compared",
        "url": "https://www.adobe.com/uk/creativecloud/file-types/image/comparison/jpeg-vs-png.html",
        "note": "Lossy JPEG, lossless PNG, transparency, and file-size tradeoffs."
      },
      {
        "title": "Adobe Photoshop: image size, resolution, and resampling",
        "url": "https://helpx.adobe.com/photoshop/desktop/crop-resize-transform/resize-adjust-resolution/image-size-resolution-and-resampling.html",
        "note": "Pixel dimensions and resampling; not proof of recovered scene detail."
      }
    ],
    "related": [
      "jpeg-heic-png-photo-formats",
      "photo-sharpening-vs-resolution",
      "why-photos-look-different-on-screens"
    ]
  },
  {
    "slug": "jpeg-heic-png-photo-formats",
    "title": "JPEG vs HEIC vs PNG: which format should you use for photos?",
    "description": "Choose a photo format for sharing, preserving an original, or keeping transparency. Compare compatibility and compression without assuming one format always wins.",
    "summary": "Choose a photo format for sharing, preserving an original, or keeping transparency. Compare compatibility and compression without assuming one format always wins.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-1203803-4k.webp",
    "imageAlt": "Silver and black camera on a pale background",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imagePosition: "50% 50%",
    imageVariants: [{"src":"blog/pexels-1203803-480.webp","width":480},{"src":"blog/pexels-1203803-960.webp","width":960},{"src":"blog/pexels-1203803-1600.webp","width":1600},{"src":"blog/pexels-1203803-4k.webp","width":3840}],
    imageCredit: {"name":"Alex Andrews","url":"https://www.pexels.com/photo/black-and-grey-camera-1203803/"},
    "quickAnswer": "JPEG is a practical sharing choice when broad compatibility matters. Keep an original HEIC file if it is your camera source and your workflow supports it; convert a copy when needed. PNG is useful for lossless image storage and transparency, but can be much larger for photographs. None of these choices restores detail already missing from a source.",
    "sections": [
      {
        "id": "job",
        "title": "Choose for the next step, not the extension alone",
        "paragraphs": [
          "A capture format, an editable project, and a delivery file have different jobs. You can keep a HEIC original, edit in an application's working format, and send a JPEG copy. Choosing one delivery format does not require deleting the others.",
          "Apple documents high-efficiency image compatibility and conversion options. Adobe's JPEG/PNG comparison explains their compression and transparency differences. Actual size and visual quality still depend on the image and encoding settings."
        ]
      },
      {
        "id": "compare",
        "title": "A practical format comparison",
        "table": {
          "headers": [
            "Format",
            "Useful for",
            "Watch for"
          ],
          "rows": [
            [
              "JPEG / JPG",
              "Photographic delivery to widely compatible destinations",
              "Lossy compression; no alpha transparency."
            ],
            [
              "HEIC",
              "Retaining a supported high-efficiency camera original",
              "Some editors or recipients need conversion."
            ],
            [
              "PNG",
              "Transparency and lossless raster image delivery",
              "Photographs can produce much larger files."
            ],
            [
              "Editor's working format",
              "Preserving supported layers or edit instructions",
              "The recipient may need the same application."
            ]
          ]
        }
      },
      {
        "id": "choose",
        "title": "Use a three-question decision",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "What does the destination accept?",
              "text": "Check its supported formats before exporting. Compatibility is more useful than a theoretical quality advantage the recipient cannot open."
            },
            {
              "title": "Do you need transparency?",
              "text": "If the background must remain transparent, choose a format and destination that preserve it; an ordinary JPEG will not."
            },
            {
              "title": "What should remain editable?",
              "text": "Keep the original and any project file separately. A flattened image usually does not preserve the editor's full adjustment history."
            }
          ]
        }
      },
      {
        "id": "conversion",
        "title": "Convert a copy and inspect it",
        "paragraphs": [
          "After converting, open the new file and check orientation, color, crop, and important detail. Confirm that the file actually opens in the destination application. Changing the filename extension is not format conversion.",
          "If a website rejects HEIC, export a JPEG copy using a tool that supports the source rather than taking a screenshot. Keep the original until you are satisfied with the converted file. This guide describes general formats, not a confirmed list of Meluvya's import or export support."
        ]
      }
    ],
    "faq": [
      {
        "question": "Are JPG and JPEG different formats?",
        "answer": "They are commonly used filename extensions for the same JPEG image format."
      },
      {
        "question": "Is PNG always the highest-quality choice?",
        "answer": "It can store its input pixels losslessly, but that does not improve an already damaged source. Size, transparency, compatibility, and workflow all matter."
      },
      {
        "question": "Can I delete HEIC after converting?",
        "answer": "Keep the original if you may need it later. A conversion can change image information or metadata depending on the tool and settings."
      }
    ],
    "sources": [
      {
        "title": "Adobe: JPEG and PNG compared",
        "url": "https://www.adobe.com/uk/creativecloud/file-types/image/comparison/jpeg-vs-png.html",
        "note": "Lossy JPEG, lossless PNG, transparency, and file-size tradeoffs."
      },
      {
        "title": "Apple: HEIF and HEVC media",
        "url": "https://support.apple.com/en-nz/116944",
        "note": "High-efficiency media, compatibility, and format conversion."
      }
    ],
    "related": [
      "why-saved-photos-lose-quality",
      "edit-photos-without-losing-original"
    ]
  },
  {
    "slug": "edit-photos-without-losing-original",
    "title": "How to edit photos without losing the original",
    "description": "Separate originals, editable working files, and exports. Understand what undo, revert, and cloud sync can—and cannot—preserve.",
    "summary": "Separate originals, editable working files, and exports. Understand what undo, revert, and cloud sync can—and cannot—preserve.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-29065464-4k.webp",
    "imageAlt": "Photographer using a laptop with a camera resting nearby",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imagePosition: "50% 50%",
    imageVariants: [{"src":"blog/pexels-29065464-480.webp","width":480},{"src":"blog/pexels-29065464-960.webp","width":960},{"src":"blog/pexels-29065464-1600.webp","width":1600},{"src":"blog/pexels-29065464-4k.webp","width":2560}],
    imageCredit: {"name":"Leticia Curvelo","url":"https://www.pexels.com/photo/photographer-editing-photos-on-laptop-29065464/"},
    "quickAnswer": "Keep the original capture, an editable working version when supported, and a separate delivery export. Before committing to an unfamiliar editor, test whether you can reopen and revise an edit. Undo history, a revert command, and an independent backup are different protections; do not assume one provides all three.",
    "sections": [
      {
        "id": "three-files",
        "title": "Give each version a clear job",
        "paragraphs": [
          "An original is the starting capture. A working file stores whatever adjustments the editor supports. An export is the image prepared for someone to view or use elsewhere. Keeping these roles separate prevents a social-media copy from quietly becoming your only source.",
          "Adobe's nondestructive-editing guidance describes approaches such as editable adjustments that preserve source pixels. The exact capabilities vary across applications, so verify the tool you use instead of relying on a generic promise of reversibility."
        ]
      },
      {
        "id": "versions",
        "title": "A simple file arrangement",
        "table": {
          "headers": [
            "Version",
            "Example name",
            "Purpose"
          ],
          "rows": [
            [
              "Original",
              "cafe-portrait-original",
              "Untouched source to return to."
            ],
            [
              "Working edit",
              "cafe-portrait-edit",
              "Supported editable settings or layers."
            ],
            [
              "Delivery",
              "cafe-portrait-share",
              "Final crop and size for a particular use."
            ]
          ]
        }
      },
      {
        "id": "test",
        "title": "Test reversibility on an unimportant copy",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Make one obvious adjustment.",
              "text": "Apply a visible crop or brightness change so it is easy to tell which state you are viewing."
            },
            {
              "title": "Save and close.",
              "text": "Reopen the image or project. Check whether the adjustment can still be changed rather than merely applied again."
            },
            {
              "title": "Try the documented revert process.",
              "text": "Confirm what it restores and whether it removes all edits. Do not experiment on the only version of a photo you care about."
            },
            {
              "title": "Export separately.",
              "text": "Open the export outside the editor and confirm it has the intended appearance. Keep the working version for future revisions."
            }
          ]
        }
      },
      {
        "id": "sync",
        "title": "Do not confuse synchronization with a backup",
        "paragraphs": [
          "Apple documents that edits in an iCloud Photos library can appear across devices. That is useful synchronization, but another device showing the same library is not necessarily an independent untouched copy.",
          "If you need a separate original, preserve it deliberately using your storage or backup workflow. Also check what happens when deleting an image or reverting an edit. A backup is useful only if it contains the version you need and you know how to retrieve it.",
          "Before a large edit session, confirm the location of one original and one working file. That small check is easier than reconstructing a folder full of ambiguous exports later."
        ]
      }
    ],
    "faq": [
      {
        "question": "Is duplicate the same as backup?",
        "answer": "Not necessarily. A duplicate in the same synchronized or vulnerable location can be affected by the same deletion or storage problem."
      },
      {
        "question": "Will undo still work after reopening?",
        "answer": "It depends on the application and file type. Test it rather than assuming an editing session's history is permanent."
      },
      {
        "question": "Can I remove a filter from an exported image?",
        "answer": "Not reliably if it was flattened into the pixels. An original or editable working file is the better starting point."
      }
    ],
    "sources": [
      {
        "title": "Adobe Photoshop: nondestructive editing",
        "url": "https://helpx.adobe.com/photoshop/desktop/create-manage-layers/create-layer-compositions/non-destructive-editing-techniques.html",
        "note": "Editable adjustments preserve flexibility without changing original pixels."
      },
      {
        "title": "Apple: undo and revert photo edits",
        "url": "https://support.apple.com/guide/iphone/undo-and-revert-photo-edits-iph2413db0ab/27/ios/27",
        "note": "Reverting in Apple Photos and synchronized edits; controls depend on software version."
      }
    ],
    "related": [
      "why-saved-photos-lose-quality",
      "consistent-editing-for-photo-set"
    ]
  },
  {
    "slug": "check-ai-portrait-details",
    "title": "What to check in an AI portrait before sharing it",
    "description": "Review likeness, hands, hair, accessories, text, and reflections against the source. Use a practical checklist without pretending visual inspection proves authenticity.",
    "summary": "Review likeness, hands, hair, accessories, text, and reflections against the source. Use a practical checklist without pretending visual inspection proves authenticity.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-30861211-4k.webp",
    "imageAlt": "Camera beside a laptop displaying photographs for review",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imagePosition: "50% 40%",
    imageVariants: [{"src":"blog/pexels-30861211-480.webp","width":480},{"src":"blog/pexels-30861211-960.webp","width":960},{"src":"blog/pexels-30861211-1600.webp","width":1600},{"src":"blog/pexels-30861211-4k.webp","width":2560}],
    imageCredit: {"name":"Ebahir","url":"https://www.pexels.com/photo/photographer-editing-photos-on-laptop-30861211/"},
    "quickAnswer": "Compare the generated portrait with its source, first at normal size and then in important details. Check recognizable features, hands, accessories, text, and the relationship between reflections and objects. Decide whether the changes fit your intended use. A convincing-looking image is not proof that every detail is accurate.",
    "sections": [
      {
        "id": "purpose",
        "title": "Start with what the picture is meant to represent",
        "paragraphs": [
          "A playful restyled portrait and a factual professional photograph have different expectations. Decide what must remain accurate before judging how attractive the output looks. If it represents another person, include that person in the selection.",
          "Adobe lists text and anatomy among known limitations of its Firefly system. That is evidence that plausible generation can contain mistakes, not a specification of how Meluvya behaves. Review the actual output rather than assuming every generator has the same strengths."
        ]
      },
      {
        "id": "review",
        "title": "Inspect the details that carry meaning",
        "table": {
          "headers": [
            "Area",
            "What to compare"
          ],
          "rows": [
            [
              "Face and hair",
              "Recognizable features, hairline, and changes the person did not intend."
            ],
            [
              "Hands and contact points",
              "Finger relationships and how hands meet clothing, objects, or another person."
            ],
            [
              "Accessories",
              "Glasses, earrings, straps, and repeated elements that should connect coherently."
            ],
            [
              "Text and symbols",
              "Readable words, logos, and signs that may have changed."
            ],
            [
              "Reflections and background",
              "Whether visible relationships make sense within the image."
            ]
          ]
        }
      },
      {
        "id": "decision",
        "title": "Use a keep, revise, or reject decision",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Review the whole image.",
              "text": "Check whether the pose, expression, and scene fit the purpose. Do not start by hunting for tiny flaws while ignoring a major change in likeness."
            },
            {
              "title": "Compare meaningful regions.",
              "text": "Place the source beside the output and inspect the details that matter to this portrait. Separate intentional restyling from accidental alteration."
            },
            {
              "title": "Choose the smallest next action.",
              "text": "A crop may remove irrelevant background text, but it cannot make a changed face accurate. Consider a different output or a clearer source."
            },
            {
              "title": "Check the final export.",
              "text": "Inspect the version you will actually share, including its crop and caption. Describe the image appropriately for its use."
            }
          ]
        }
      },
      {
        "id": "limits",
        "title": "A checklist is not an AI detector",
        "paragraphs": [
          "Real photographs can also contain blur, unusual reflections, and perspective effects. Conversely, a generated image can look coherent. These checks assess suitability and consistency; they do not prove the image's origin.",
          "For a portrait used to document something that happened, a generated scene is not a substitute for the original evidence. Keep the source and avoid presenting invented surroundings or details as a recorded event."
        ]
      }
    ],
    "faq": [
      {
        "question": "Does an odd hand prove a photo is AI-generated?",
        "answer": "No. A visual anomaly alone does not establish origin. Use the checklist to review the picture, not to make unsupported accusations."
      },
      {
        "question": "Should I reject every tiny imperfection?",
        "answer": "Prioritize details that affect meaning, likeness, or the intended display. A changed facial feature matters more than an irrelevant distant texture."
      },
      {
        "question": "Can a clearer source help?",
        "answer": "It can make comparison easier and reduce ambiguity in the input, but it does not guarantee a particular generated result."
      }
    ],
    "sources": [
      {
        "title": "Adobe Firefly: known limitations",
        "url": "https://helpx.adobe.com/uk/firefly/web/troubleshoot/known-limitations-in-firefly.html",
        "note": "One generator's documented text and anatomy limitations; not a Meluvya feature specification."
      }
    ],
    "related": [
      "choose-photo-for-ai-portraits",
      "ai-photo-effects-vs-filters",
      "why-edited-portraits-look-unnatural"
    ]
  },
  {
    "slug": "hdr-phone-photos-explained",
    "title": "What does HDR do in phone photos?",
    "description": "Understand HDR capture, bright backgrounds, movement, and HDR display. Learn what to inspect instead of assuming HDR always makes a better portrait.",
    "summary": "Understand HDR capture, bright backgrounds, movement, and HDR display. Learn what to inspect instead of assuming HDR always makes a better portrait.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-37728401-4k.webp",
    "imageAlt": "Close portrait of a man in warm outdoor light",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imagePosition: "50% 35%",
    imageVariants: [{"src":"blog/pexels-37728401-480.webp","width":480},{"src":"blog/pexels-37728401-960.webp","width":960},{"src":"blog/pexels-37728401-1600.webp","width":1600},{"src":"blog/pexels-37728401-4k.webp","width":3072}],
    imageCredit: {"name":"Alef Morais","url":"https://www.pexels.com/photo/golden-hour-portrait-of-young-man-outdoors-37728401/"},
    "quickAnswer": "HDR capture combines information from different exposures to retain more of a scene's bright and dark areas. It can help with a bright background and a darker face, but moving subjects and strong contrast still need checking. HDR display and HDR video are related terms with different controls; do not assume one setting governs them all.",
    "sections": [
      {
        "id": "capture",
        "title": "Why a phone combines exposures",
        "paragraphs": [
          "One exposure may keep the sky readable while another gives the face more brightness. Apple describes HDR photo capture as combining differently exposed images and notes that automatic behavior and manual controls vary by model.",
          "The result is a processed interpretation of the scene. More visible shadow detail is not automatically the best mood for a portrait; a silhouette or a darker background can be intentional."
        ]
      },
      {
        "id": "terms",
        "title": "Separate the HDR terms",
        "table": {
          "headers": [
            "Term",
            "What to investigate"
          ],
          "rows": [
            [
              "HDR photo capture",
              "How the camera combines exposure information when taking a still image."
            ],
            [
              "HDR viewing or display",
              "How a compatible screen and viewer present the saved image's brightness and color information."
            ],
            [
              "HDR video",
              "A separate recording and playback workflow, often with different settings."
            ]
          ]
        }
      },
      {
        "id": "check",
        "title": "Review an HDR portrait in the saved file",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Inspect the face.",
              "text": "Check whether the expression is clearer while the light still feels plausible. A balanced preview is not enough if fine details look wrong."
            },
            {
              "title": "Inspect movement.",
              "text": "Look at fingers, loose hair, and moving people nearby for doubled or inconsistent edges. Take a steadier comparison if needed."
            },
            {
              "title": "Inspect bright boundaries.",
              "text": "Check hair against sky and shoulders against a window. Decide whether the transition looks convincing at the final size."
            },
            {
              "title": "Inspect the delivery.",
              "text": "View the exported or shared copy on the destination when possible. A different viewer may present brightness differently."
            }
          ]
        }
      },
      {
        "id": "choice",
        "title": "Change the scene when processing is not enough",
        "paragraphs": [
          "If the portrait remains difficult, include less bright sky, move toward more even light, or take a still moment. These changes can make capture easier regardless of how the phone handles HDR.",
          "Check your phone's current documentation before looking for an HDR switch. Some models handle it automatically, and the available control can differ between photo and video modes. Avoid copying a tutorial's menu path without checking that it matches your device."
        ]
      }
    ],
    "faq": [
      {
        "question": "Should HDR always be on?",
        "answer": "There is no universal answer. It may be automatic on your device. Judge the result and use available controls only when they address a visible problem."
      },
      {
        "question": "Can HDR fix every overexposed photo?",
        "answer": "No. Capture processing and editing an already clipped file are different tasks."
      },
      {
        "question": "Why is an HDR photo brighter on another screen?",
        "answer": "Display capability, viewer behavior, and settings can change its presentation. Compare the same file under similar viewing conditions."
      }
    ],
    "sources": [
      {
        "title": "Apple: HDR camera settings",
        "url": "https://support.apple.com/guide/iphone/adjust-hdr-camera-settings-iph2cafe2ebc/27/ios/27",
        "note": "Combining exposures and model-dependent HDR controls."
      }
    ],
    "related": [
      "backlit-phone-portraits",
      "can-you-fix-overexposed-portraits",
      "why-photos-look-different-on-screens"
    ]
  },
  {
    "slug": "why-photos-look-different-on-screens",
    "title": "Why photos look different on different screens",
    "description": "Troubleshoot color and brightness differences using the same file, comparable display settings, and embedded profiles before changing the edit again.",
    "summary": "Troubleshoot color and brightness differences using the same file, comparable display settings, and embedded profiles before changing the edit again.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-16313502-4k.webp",
    "imageAlt": "Photo-editing workspace with a laptop, camera, and drawing tablet",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imagePosition: "50% 40%",
    imageVariants: [{"src":"blog/pexels-16313502-480.webp","width":480},{"src":"blog/pexels-16313502-960.webp","width":960},{"src":"blog/pexels-16313502-1600.webp","width":1600},{"src":"blog/pexels-16313502-4k.webp","width":2560}],
    imageCredit: {"name":"Kawê Rodrigues","url":"https://www.pexels.com/photo/woman-editing-photos-on-laptop-16313502/"},
    "quickAnswer": "The file, viewer, display, and room all affect how a photo appears. First confirm both screens are showing the same exported file. Then compare brightness and color-altering display settings, and inspect the export's color-profile options. Do not repeatedly change skin color until you have separated an editing problem from a viewing problem.",
    "sections": [
      {
        "id": "same-file",
        "title": "Start with an identical file",
        "paragraphs": [
          "A chat preview, a browser image, and the original in your editor may be different versions. Compare actual files with the same dimensions and edit state. If you compare a source on one device with a recompressed delivery copy on another, the screens are not the only variable.",
          "Adobe's color-management guidance explains that displays and other devices have different color capabilities and that profiles help translate color meaning. A profile can improve consistency, but it cannot make every screen and viewing condition identical."
        ]
      },
      {
        "id": "isolate",
        "title": "Isolate the difference",
        "table": {
          "headers": [
            "Comparison",
            "What it helps investigate"
          ],
          "rows": [
            [
              "Same file, two apps on one device",
              "Viewer or profile-handling differences."
            ],
            [
              "Same file, same app, two devices",
              "Display capability and settings."
            ],
            [
              "Original and export in one viewer",
              "Export conversion or processing."
            ],
            [
              "Same screen in different room light",
              "Viewing conditions and perceived brightness/color."
            ]
          ]
        }
      },
      {
        "id": "routine",
        "title": "Use a practical display check",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Set a comfortable brightness.",
              "text": "Avoid judging one image on a very dim screen beside another at maximum brightness. Exact matching requires more than this, but the comparison becomes less misleading."
            },
            {
              "title": "Review color-altering modes.",
              "text": "Temporarily compare with night or warm-display modes disabled if your device offers them. Restore your preferred settings afterward."
            },
            {
              "title": "Check export profiles.",
              "text": "For ordinary web delivery, an sRGB workflow with an embedded profile is a common compatibility choice when the editor offers it. Follow the destination's requirements."
            },
            {
              "title": "Compare the final file again.",
              "text": "Open it in a color-managed viewer and on the intended destination. Decide whether any remaining difference materially affects the portrait."
            }
          ]
        }
      },
      {
        "id": "limits",
        "title": "Avoid chasing one unverified screen",
        "paragraphs": [
          "Changing a whole batch because it looks orange on one device can introduce a cast everywhere else. If only that screen disagrees, investigate it before revising the master edit.",
          "Adobe's profile documentation distinguishes interpreting an existing profile from changing color-space handling. Do not randomly assign profiles until one looks pleasing. For demanding print or color-critical work, a managed and calibrated workflow is more appropriate than casual side-by-side guessing."
        ]
      }
    ],
    "faq": [
      {
        "question": "Does embedding a profile guarantee a match?",
        "answer": "No. The viewer must handle it appropriately, and screens differ in capability, settings, and condition."
      },
      {
        "question": "Should I make separate edits for every phone?",
        "answer": "Usually start with one well-managed master and a tested delivery file. Adapting to unverified screens can create inconsistent edits."
      },
      {
        "question": "Why does only the exported image change?",
        "answer": "Compare export conversion, profile, and dimensions with the working file in the same viewer before blaming the display."
      }
    ],
    "sources": [
      {
        "title": "Adobe Photoshop: color management",
        "url": "https://helpx.adobe.com/photoshop/desktop/adjust-color/color-profiles/color-management-in-photoshop.html",
        "note": "Display, gamut, profiles, and viewing-condition differences."
      },
      {
        "title": "Adobe Photoshop: profiles for imported images",
        "url": "https://helpx.adobe.com/photoshop/desktop/adjust-color/choose-colors/color-profiles/color-profiles-for-imported-images.html",
        "note": "Embedded color profiles and working-space interpretation."
      }
    ],
    "related": [
      "why-saved-photos-lose-quality",
      "remove-color-cast-from-photos",
      "hdr-phone-photos-explained"
    ]
  },
  {
    "slug": "self-timer-portraits-with-phone",
    "title": "How to take better self-timer portraits with your phone",
    "description": "Plan framing, focus, timing, and a safe camera position before stepping into the shot. A short test sequence makes solo portraits easier.",
    "summary": "Plan framing, focus, timing, and a safe camera position before stepping into the shot. A short test sequence makes solo portraits easier.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-13929353-4k.webp",
    "imageAlt": "Woman adjusting a phone mounted on a ring-light tripod",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imagePosition: "55% 40%",
    imageVariants: [{"src":"blog/pexels-13929353-480.webp","width":480},{"src":"blog/pexels-13929353-960.webp","width":960},{"src":"blog/pexels-13929353-1600.webp","width":1600},{"src":"blog/pexels-13929353-4k.webp","width":2560}],
    imageCredit: {"name":"Mizuno K","url":"https://www.pexels.com/photo/woman-fixing-a-smart-phone-on-a-tripod-13929353/"},
    "quickAnswer": "Put the phone on a stable support, frame your intended position, and take a test before committing to a pose. Choose a timer delay that gives you time to settle. Review focus and crop after each small set, changing one thing at a time rather than repeating the same setup unchecked.",
    "sections": [
      {
        "id": "setup",
        "title": "Prepare the photograph before entering it",
        "paragraphs": [
          "Choose where you will stand or sit and what the frame should include. Leave extra space around the intended position for small movement. Use a support that will not slide or tip when you touch the shutter, and keep the phone where you can retrieve it easily.",
          "Apple documents timer controls alongside camera grid and level tools. The available delays and menu paths depend on your device and software, so use the timer option actually present rather than assuming a tutorial's exact buttons will match."
        ]
      },
      {
        "id": "test",
        "title": "Make the first frame a setup test",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Mark the position discreetly.",
              "text": "Use a visible feature of the floor or another harmless reference so you return to the same camera distance."
            },
            {
              "title": "Check the frame with a stand-in.",
              "text": "A helper or an object near the intended face position can help estimate framing. It is not a guarantee of focus on your face, so verify the actual portrait."
            },
            {
              "title": "Choose enough delay.",
              "text": "Give yourself time to enter the frame and settle. A rushed pose can introduce movement or put you outside the intended position."
            },
            {
              "title": "Inspect the saved test.",
              "text": "Zoom in on the eyes, check the top and bottom crop, and look at the background. Correct the biggest problem before trying a new expression."
            }
          ]
        }
      },
      {
        "id": "sequence",
        "title": "Change one thing per short set",
        "table": {
          "headers": [
            "Set",
            "Keep fixed",
            "Experiment with"
          ],
          "rows": [
            [
              "Framing",
              "Light and expression",
              "Camera distance or orientation."
            ],
            [
              "Pose",
              "Camera and standing position",
              "Shoulder angle, hands, or seated posture."
            ],
            [
              "Expression",
              "Framing and light",
              "A relaxed look, eye direction, or a natural pause."
            ]
          ]
        }
      },
      {
        "id": "select",
        "title": "Review while you can still retake",
        "paragraphs": [
          "Choose one frame for expression and another for technical clarity, then see whether one photograph satisfies both. If not, repeat a small set with the better setup instead of hoping a later effect will fix the problem.",
          "Keep the pose simple enough to hold comfortably through the delay. For a two-person picture, allow both people to settle and check both faces. Once you have a reliable frame, you can experiment more freely with movement or a wider environment."
        ]
      }
    ],
    "faq": [
      {
        "question": "Can I use the rear camera for a timer selfie?",
        "answer": "Yes, if your camera app supports the timer there. The main challenge is checking framing and focus without watching the screen while posing."
      },
      {
        "question": "What timer delay is best?",
        "answer": "Use one that lets you arrive and settle comfortably. Available choices vary by phone and software."
      },
      {
        "question": "Why is the background sharp but my face soft?",
        "answer": "The camera may have focused at another distance or the subject may have moved. Recheck the setup and saved test before the next set."
      }
    ],
    "sources": [
      {
        "title": "Apple: advanced iPhone camera settings",
        "url": "https://support.apple.com/en-ie/guide/iphone/iph3dc593597/27/ios/27",
        "note": "Timer, grid, and level controls; availability depends on software."
      }
    ],
    "related": [
      "why-close-selfies-look-different",
      "take-couple-photos-with-phone",
      "choose-portrait-background"
    ]
  },
  {
    "slug": "portrait-mode-blur-mistakes",
    "title": "How to spot and reduce Portrait mode blur mistakes",
    "description": "Check hair, glasses, hands, and gaps for unwanted background blur. Learn when reducing the effect or keeping an ordinary photo produces a better portrait.",
    "summary": "Check hair, glasses, hands, and gaps for unwanted background blur. Learn when reducing the effect or keeping an ordinary photo produces a better portrait.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-10551192-4k.webp",
    "imageAlt": "Woman resting her face on her hand with blurred lights behind her",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imagePosition: "50% 45%",
    imageVariants: [{"src":"blog/pexels-10551192-480.webp","width":480},{"src":"blog/pexels-10551192-960.webp","width":960},{"src":"blog/pexels-10551192-1600.webp","width":1600},{"src":"blog/pexels-10551192-4k.webp","width":3840}],
    imageCredit: {"name":"Marlon Alves","url":"https://www.pexels.com/photo/portrait-of-a-woman-at-night-10551192/"},
    "quickAnswer": "Inspect the outline around hair, glasses, hands, and the spaces between limbs. If your phone lets you revise Portrait mode blur, reduce it and compare the result with the ordinary or unblurred version. For a new capture, simplify the background and take a normal-photo backup. Stronger blur is not automatically more convincing.",
    "sections": [
      {
        "id": "different-blur",
        "title": "Separate simulated blur from missed focus",
        "paragraphs": [
          "An image can have a sharp face but an odd blur boundary around hair or glasses. That is a different problem from a face that is soft everywhere because of movement or missed focus. Examine where the problem starts and stops before choosing a fix.",
          "Apple describes depth adjustments for supported Portrait mode photographs, including model-dependent editing after capture. Not every phone, mode, or exported file preserves the same adjustment options."
        ]
      },
      {
        "id": "inspect",
        "title": "Inspect the boundaries that reveal problems",
        "table": {
          "headers": [
            "Area",
            "Look for"
          ],
          "rows": [
            [
              "Loose hair",
              "Strands disappearing or a hard cutout boundary."
            ],
            [
              "Glasses",
              "Blurred frame edges or an inconsistent view through lenses."
            ],
            [
              "Hands and held objects",
              "An intended foreground item treated as background."
            ],
            [
              "Gaps between arms or people",
              "A patch that stays sharp while the surrounding background blurs."
            ],
            [
              "Shoulders against a busy setting",
              "Abrupt or uneven transitions."
            ]
          ]
        }
      },
      {
        "id": "adjust",
        "title": "Try the least aggressive correction",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Keep a reference.",
              "text": "Save or retain the original editable photo before changing the effect. Compare at the intended viewing size."
            },
            {
              "title": "Reduce the blur.",
              "text": "If a depth or blur-strength control is available, ease it back and inspect the same problem edge."
            },
            {
              "title": "Compare without the effect.",
              "text": "Where supported, turn the portrait effect off. A useful expression and composition may work better with an ordinary background."
            },
            {
              "title": "Choose a retake when needed.",
              "text": "For a new photo, try a simpler background, clearer separation of hands and body, and the camera's recommended capture distance. Take an ordinary-photo backup too."
            }
          ]
        }
      },
      {
        "id": "limits",
        "title": "Do not repair one edge by damaging the rest",
        "paragraphs": [
          "A local blur patch can create inconsistent sharpness elsewhere. If a correction is becoming more distracting than the original mistake, step back and compare a subtler version.",
          "An exported flattened image may not retain editable depth information. In that case, return to the original capture if you have it. Do not assume a generic sharpening control can reverse an incorrectly blurred strand or reconstruct the exact hidden detail."
        ]
      }
    ],
    "faq": [
      {
        "question": "Does background blur always use software?",
        "answer": "No. Optical depth of field can blur a background too. This guide concerns adjustable or computational portrait effects and their boundaries."
      },
      {
        "question": "Why can I edit blur on one photo but not another?",
        "answer": "Support depends on the device, capture mode, retained information, and software. Check the original rather than only a shared export."
      },
      {
        "question": "Should I avoid Portrait mode?",
        "answer": "No. Use it when the result suits the picture, but inspect edges and keep a normal-photo comparison when practical."
      }
    ],
    "sources": [
      {
        "title": "Apple: Portrait mode photos",
        "url": "https://support.apple.com/en-ie/guide/iphone/iphd7d3a91a2/27/ios/27",
        "note": "Portrait depth controls and model-dependent post-capture adjustments."
      }
    ],
    "related": [
      "why-night-phone-photos-are-blurry",
      "choose-portrait-background",
      "edit-photos-without-losing-original"
    ]
  },
  {
    "slug": "window-light-portraits-at-home",
    "title": "How to take window-light portraits at home",
    "description": "Make a simple portrait beside a window. Compare front and side light, soften harsh sun, choose a background, and check your photo before editing.",
    "summary": "One window, a clear background, and a few deliberate changes in position can give you a more useful starting photo.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-36627004-4k.webp",
    "imageAlt": "Woman standing beside a window in a softly lit room",
    "imagePosition": "50% 35%",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imageVariants: [{"src":"blog/pexels-36627004-480.webp","width":480},{"src":"blog/pexels-36627004-960.webp","width":960},{"src":"blog/pexels-36627004-1600.webp","width":1600},{"src":"blog/pexels-36627004-4k.webp","width":2555}],
    imageCredit: {"name":"Patricia Bozan","url":"https://www.pexels.com/photo/casual-portrait-of-a-woman-indoors-by-window-36627004/"},
    "quickAnswer": "Start beside a window with indirect daylight and turn off nearby room lights for a simpler setup. Photograph the face turned toward the window, then slightly away. Compare the shadows and eye detail before choosing your position. A sheer curtain can soften direct sun, but it also reduces the available light.",
    "sections": [
      {
        "id": "choose-the-window",
        "title": "Choose the light you actually have",
        "paragraphs": [
          "Look at the shadow beside your nose or on a hand held near your face. A sharp edge suggests a harder source; a gentler transition gives you a different portrait mood. Do this at the time you plan to take the photo. A window that works in the morning can look very different later.",
          "Adobe describes indirect window light and translucent curtains as accessible ways to create softer indoor light. There is no compass direction that works best in every location and season. Start with the visible light, rather than a rule about which wall your window should be on."
        ]
      },
      {
        "id": "simple-setup",
        "title": "Make the room easier to work with",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Simplify the light.",
              "text": "Switch off nearby ceiling lights and lamps for your first comparison. Nikon’s window-light advice uses this approach to make the relationship between light and shadow more deliberate."
            },
            {
              "title": "Pick a quiet background.",
              "text": "Look through the camera for doorframes, bright screens, and objects crossing the outline of the head. Move the camera or subject until the background supports the portrait."
            },
            {
              "title": "Start with a comfortable position.",
              "text": "Sit or stand beside the window with the face turned partly toward it. Leave room around the head and shoulders. Avoid choosing a pose that is difficult to hold while checking the photograph."
            },
            {
              "title": "Check the bright cheek.",
              "text": "Take a frame and inspect both sides of the face. If the lit side looks blank, adjust exposure if your camera permits, or change position. Keep some shadow if it helps show shape."
            }
          ]
        }
      },
      {
        "id": "compare-three-frames",
        "title": "Try a three-frame comparison",
        "paragraphs": [
          "Treat this as a small exercise, not a fixed lighting formula. Keep the same crop and expression while changing one thing. Save all three versions so you can compare them together."
        ],
        "table": {
          "headers": [
            "Frame",
            "Change to try",
            "Question to ask"
          ],
          "rows": [
            [
              "A: toward the window",
              "Turn the face more toward the light.",
              "Can you read both eyes without the face looking flat?"
            ],
            [
              "B: across the window",
              "Turn slightly so light travels across the face.",
              "Does the shadow add shape or hide an important feature?"
            ],
            [
              "C: a different distance",
              "Move closer to or farther from the window and repeat your preferred angle.",
              "Which position balances face brightness, background, and comfort?"
            ]
          ]
        }
      },
      {
        "id": "solve-common-problems",
        "title": "Solve the problem before adding a filter",
        "paragraphs": [
          "If a stripe of direct sun crosses the face, try another position or a sheer curtain. Check the result again after adding the curtain: less light may mean you need to hold steadier. If the shaded cheek disappears, turn toward the window a little rather than automatically brightening the entire photograph.",
          "For a useful selection process, score your three frames on four simple questions: are the eyes readable, does the expression feel comfortable, is the background distracting, and is the crop usable? Pick the frame with the fewest problems to solve. A photograph does not need perfectly even illumination to be worth keeping.",
          "Once you choose a frame, keep an untouched copy. You can then explore a different mood while comparing the result with the light and features that were present in the source."
        ]
      }
    ],
    "faq": [
      {
        "question": "Do I need a professional camera?",
        "answer": "This exercise is about the position of the face and light. You can try it with a phone; the exposure and focus controls available will depend on your device."
      },
      {
        "question": "Should the window be behind me?",
        "answer": "For this starting exercise, place it in front of or beside the face. A window behind the subject creates a different exposure problem and can turn the face into a silhouette."
      },
      {
        "question": "Does soft light mean no shadows?",
        "answer": "No. Look for a gentle transition at the shadow edge. You can still keep a darker side of the face to create shape."
      }
    ],
    "sources": [
      {
        "title": "Adobe: diffused light photography",
        "url": "https://www.adobe.com/uk/creativecloud/photography/technique/diffused-light.html",
        "note": "Background on indirect window light, diffusion, and the loss of light through diffusion material."
      },
      {
        "title": "Nikon: using shadows and light",
        "url": "https://www.nikonusa.com/learn-and-explore/c/tips-and-techniques/using-shadows-and-light-in-your-photographs",
        "note": "Window-only lighting as a deliberate portrait approach. The three-frame exercise is our editorial guidance."
      }
    ],
    "related": [
      "choose-photo-for-ai-portraits",
      "golden-hour-photo-editing"
    ]
  },
  {
    "slug": "why-night-phone-photos-are-blurry",
    "title": "Why your night phone photos are blurry—and what to try",
    "description": "Diagnose camera shake, moving subjects and missed focus in night phone photos. Use a simple comparison to choose a better capture before editing.",
    "summary": "A bright night photo can still be blurred. First find out whether the camera, the subject, or the focus caused the problem.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-29894331-4k.webp",
    "imageAlt": "Portrait beside glowing turquoise lights at night",
    "imagePosition": "50% 45%",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imageVariants: [{"src":"blog/pexels-29894331-480.webp","width":480},{"src":"blog/pexels-29894331-960.webp","width":960},{"src":"blog/pexels-29894331-1600.webp","width":1600},{"src":"blog/pexels-29894331-4k.webp","width":2560}],
    imageCredit: {"name":"Everton Silva","url":"https://www.pexels.com/photo/portrait-of-woman-with-neon-lights-at-night-29894331/"},
    "quickAnswer": "Compare a stationary edge in the background with the person’s face. Blur across both can suggest camera movement; a clearer background with a smeared person suggests subject movement. A sharp object at a different distance can point to missed focus. These are clues, not a certain diagnosis. Try a steadier phone, a still subject, and better light before reaching for sharpening.",
    "sections": [
      {
        "id": "read-the-blur",
        "title": "Use the blur pattern as a clue",
        "paragraphs": [
          "Look at the original file rather than a screenshot of a small preview. Inspect an eye, a fixed object, and a distant light. More than one cause can appear in the same image, so change one variable at a time."
        ],
        "table": {
          "headers": [
            "What you notice",
            "Possible cause",
            "Next comparison"
          ],
          "rows": [
            [
              "Similar streaks across the face and fixed objects",
              "Camera movement during capture",
              "Support the phone and repeat the same frame."
            ],
            [
              "A moving face or hand is smeared but fixed objects are clearer",
              "Subject movement",
              "Ask the person to pause and compare another capture."
            ],
            [
              "An object behind the person is sharper than the face",
              "Focus may be on a different distance",
              "Select the face for focus if the camera allows, then retake."
            ],
            [
              "Speckled color or softened texture without a clear streak",
              "Noise or processing may be involved",
              "Compare a capture in brighter light; do not assume every softness is motion."
            ]
          ]
        }
      },
      {
        "id": "why-night-is-different",
        "title": "Why the same technique struggles after dark",
        "paragraphs": [
          "Longer exposure gives movement more time to affect a photograph. Adobe’s explanation of shutter speed distinguishes movement of the camera from movement in the scene. Supporting the camera addresses one of those problems; it does not make a moving person stand still.",
          "Apple notes that a Night mode capture can take several seconds and recommends keeping the iPhone steady until it finishes. Availability and controls vary by model. Use the capture indicator on your phone instead of moving it as soon as you press the shutter."
        ]
      },
      {
        "id": "retake-sequence",
        "title": "Retake with one change at a time",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Choose a reference detail.",
              "text": "Pick an eye and a fixed edge in the same composition. Use those two details to judge every version rather than choosing whichever preview looks brightest."
            },
            {
              "title": "Support the phone.",
              "text": "Try a stable surface or a secure tripod position. Keep the framing similar, wait until the capture ends, and compare the fixed edge first."
            },
            {
              "title": "Give the subject a clear cue.",
              "text": "Explain when to pause and when the photograph has finished. A relaxed seated pose may be easier to repeat than a walking pose."
            },
            {
              "title": "Look for more useful light.",
              "text": "Try a nearby continuous light that illuminates the face. Adobe’s night-photography guidance emphasizes light, focus, and motion together. Recheck the background when you move."
            },
            {
              "title": "Compare the actual files.",
              "text": "Choose the version that keeps the expression and important details. A brighter result with indistinct eyes is not automatically the stronger portrait."
            }
          ]
        }
      },
      {
        "id": "editing-limits",
        "title": "Decide what editing can reasonably do",
        "paragraphs": [
          "If a favorite frame is only slightly soft, a restrained edit may make it more pleasant at a small sharing size. Preserve the original and compare at the size you intend to use. Stop if stronger edges make the face look outlined or skin texture becomes distracting.",
          "If an eye or expression is no longer readable, do not treat a plausible generated replacement as proof of what was there. When the person’s actual appearance matters, choose a clearer frame or retake it. For an intentionally dreamy photo, you may prefer to keep some blur and judge it as a creative choice."
        ]
      }
    ],
    "faq": [
      {
        "question": "Will a tripod fix a blurry person?",
        "answer": "It can reduce camera movement, but the person can still move during capture. Compare the face and a fixed background detail to see which problem remains."
      },
      {
        "question": "Should I always use the longest Night mode time?",
        "answer": "No single capture time fits every scene. A stationary scene and a moving person present different problems. Use the available controls and compare actual results."
      },
      {
        "question": "Can I use flash and Night mode together on an iPhone?",
        "answer": "Apple’s guidance says enabling flash deactivates Night mode. Treat a flash photo as a separate lighting choice and check the instructions for your device."
      }
    ],
    "sources": [
      {
        "title": "Apple: use Night mode on your iPhone",
        "url": "https://support.apple.com/en-ie/102519",
        "note": "Capture duration, steady support, and the interaction between Night mode and flash."
      },
      {
        "title": "Adobe: how to shoot a sharp photo",
        "url": "https://www.adobe.com/learn/photoshop/web/adjust-shutter-speed-for-sharp-photo",
        "note": "How shutter duration relates to camera and subject motion."
      },
      {
        "title": "Adobe: night photography",
        "url": "https://www.adobe.com/creativecloud/photography/type/night-photography.html",
        "note": "Background on balancing light, focus, stability, and subject movement. The comparison sequence is editorial guidance."
      }
    ],
    "related": [
      "digicam-photo-effect-on-phone",
      "choose-photo-for-ai-portraits"
    ]
  },
  {
    "slug": "reduce-glasses-glare-in-portraits",
    "title": "How to reduce glasses glare in portrait photos",
    "description": "Keep eyes visible in portraits with glasses. Learn what to change during capture, how to compare reflections, and when an existing photo needs a retake.",
    "summary": "Treat glare as a light-and-angle problem first. Small changes during capture can be easier to judge than rebuilding an eye afterward.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "blog/pexels-1338413-4k.webp",
    "imageAlt": "Side-lit portrait of a woman with reflections in her glasses",
    "imagePosition": "55% 45%",
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imageVariants: [{"src":"blog/pexels-1338413-480.webp","width":480},{"src":"blog/pexels-1338413-960.webp","width":960},{"src":"blog/pexels-1338413-1600.webp","width":1600},{"src":"blog/pexels-1338413-4k.webp","width":3840}],
    imageCredit: {"name":"Martin Kirigua","url":"https://www.pexels.com/photo/woman-standing-near-window-1338413/"},
    "quickAnswer": "Look at the glasses through the camera while changing the angle of the face, camera, or light in small steps. Choose a position that moves the bright reflection away from the eyes while keeping the pose comfortable. If glare already hides the eyes in a saved photo, a darker patch is not the same as recovered eye detail.",
    "sections": [
      {
        "id": "identify-the-reflection",
        "title": "Find the reflected light before changing the pose",
        "paragraphs": [
          "Adobe explains glasses glare as light reflected from the lenses. A window, lamp, or flash can therefore appear as a bright area even when the face is otherwise well exposed. Look at both lenses separately: the reflection does not have to cover them equally.",
          "For a quick diagnosis, take one reference frame and note where the reflection crosses an eye. Decide what would count as an improvement: a readable pupil, less distraction near the eyebrow, or simply a smaller bright patch. This keeps you from solving one problem while losing the expression you liked."
        ]
      },
      {
        "id": "adjust-at-capture",
        "title": "Try a small angle change",
        "paragraphs": [
          "In his portrait-photography guide, Erik Valind demonstrates changing the direction of the face so reflected light misses the camera. Use that principle as a starting point, not a promise that one angle will work for every pair of glasses."
        ],
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Keep the camera position for the first comparison.",
              "text": "Ask for a slight turn of the face, then inspect both eyes. Give one direction at a time so the change is easy to understand and repeat."
            },
            {
              "title": "Compare another camera angle.",
              "text": "Return to a comfortable pose and move the camera a little. Review the whole face as well as the lenses; a reflection-free view is not useful if the framing no longer works."
            },
            {
              "title": "Reconsider the light position.",
              "text": "If you can move the light or your position relative to a window, make a small change and take another reference. Avoid changing the face, camera, and light all at once."
            },
            {
              "title": "Choose together.",
              "text": "Show the person the alternatives. Keep the version that preserves their expression, visible eyes, and comfortable posture."
            }
          ]
        }
      },
      {
        "id": "saved-photo",
        "title": "For a saved photo, inspect what remains visible",
        "table": {
          "headers": [
            "What remains under the glare",
            "Reasonable next step"
          ],
          "rows": [
            [
              "The eye is still readable beneath a light veil",
              "Try a gentle local brightness or contrast adjustment in an editor that supports it."
            ],
            [
              "A small reflection covers an unimportant area",
              "Consider leaving it, or make a limited cleanup while checking nearby edges."
            ],
            [
              "A bright patch completely hides eye detail",
              "Look for another frame or retake. Reconstructed detail should be treated as an interpretation."
            ]
          ]
        },
        "paragraphs": [
          "Adobe documents local adjustments and cloning as ways to reduce glare in Photoshop. Those are examples of editing methods, not a claim that every photo app provides them. If you try a local correction, inspect the boundary around the glasses and compare the two eyes at the same zoom.",
          "Our practical stopping rule is to ask whether the correction changes the person more than the reflection distracts from them. A copied, mirrored, or generated eye can look tidy without matching the original expression. Keep the source so the decision remains reversible."
        ]
      },
      {
        "id": "final-comparison",
        "title": "Use a simple keep-or-retake check",
        "paragraphs": [
          "Look at the portrait first at its intended sharing size, then enlarge the eyes. Can you still read the expression? Are the frame edges intact? Does one lens look strangely darker or sharper than the other? If a correction makes any of those harder to judge, compare the untouched version again.",
          "A small reflection can be part of a natural portrait. The aim is to make the photograph work for the person wearing the glasses, rather than to erase every trace of reflective glass."
        ]
      }
    ],
    "faq": [
      {
        "question": "Do glasses have to come off for a portrait?",
        "answer": "No. Start by adjusting the light and angle while the person wears their glasses normally. Their comfort and preferred appearance matter."
      },
      {
        "question": "Will lowering the whole photo’s brightness remove glare?",
        "answer": "It also darkens the face and background. A smaller bright patch may become less noticeable, but reducing brightness does not recreate detail hidden by the reflection."
      },
      {
        "question": "Should I remove every reflection?",
        "answer": "Not necessarily. Prioritize visible eyes and a convincing expression. A small reflection away from important features may not need correction."
      }
    ],
    "sources": [
      {
        "title": "Erik Valind: Portrait Photography, publisher sample (PDF)",
        "url": "https://www.pearson.de/media/muster/ext/9780133579901.pdf",
        "note": "The section on minimizing glasses glare explains changing the face angle relative to the light and camera."
      },
      {
        "title": "Adobe: reducing glare from glasses",
        "url": "https://www.adobe.com/products/photoshop/remove-glasses-glare.html",
        "note": "Reflected-light explanation and examples of local editing methods. The decision checklist and stopping rule are editorial guidance."
      }
    ],
    "related": [
      "window-light-portraits-at-home",
      "choose-photo-for-ai-portraits"
    ]
  },
  {
    slug: "golden-hour-photo-editing",
    title: "How to give a photo a golden-hour look",
    description: "Give a photo a warmer golden-hour look while keeping natural skin tones. Learn what to adjust, what light cannot be fixed, and when to stop.",
    summary: "Warm light, believable skin, and shadows that still make sense. A practical guide to editing for a golden-hour feeling.",
    published: date, modified: date,
    image: "blog/pexels-33301143-4k.webp", imageAlt: "Man standing beneath a tree in warm golden light", imagePosition: "50% 50%", caption: "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imageVariants: [{"src":"blog/pexels-33301143-480.webp","width":480},{"src":"blog/pexels-33301143-960.webp","width":960},{"src":"blog/pexels-33301143-1600.webp","width":1600},{"src":"blog/pexels-33301143-4k.webp","width":2560}],
    imageCredit: {"name":"Mohammad Kashkooli","url":"https://www.pexels.com/photo/golden-hour-portrait-in-sundrenched-field-33301143/"},
    quickAnswer: "Start with a photo whose light already suits the mood. Balance brightness, add warmth gradually, and compare skin and neutral clothing with the original. A warmer color does not move the sun or change the direction of a shadow.",
    sections: [
      { id: "read-the-light", title: "Look at the light before the color", paragraphs: [
        "Golden hour is more than an orange tint. Adobe’s photography guide describes the warm, softer light found when the sun is low. In a convincing edit, the face, background, and shadows should appear to belong to the same scene.",
        "Before touching a control, find the brightest side of the face and the darkest shadow. Then inspect the sky or a pale shirt. Can you still see texture? A softly lit portrait gives you a different starting point from a midday photo with a hard shadow across both eyes. Choose the easier source when you have a choice."
      ] },
      { id: "editing-sequence", title: "Build the look in a deliberate order", list: { ordered: true, items: [
        { title: "Keep an untouched version.", text: "Work on a copy or use an editor that lets you revert. You need a reliable reference when your eyes get used to the new color." },
        { title: "Balance exposure first.", text: "Make the face readable before warming it. If your editor offers separate highlight and shadow controls, make small changes and watch both the face and sky." },
        { title: "Add warmth gradually.", text: "Move a temperature or warmth control a little, then compare. There is no universal value: a blue, shaded photo and a tungsten-lit room start in different places." },
        { title: "Check familiar colors.", text: "Look at skin, teeth, a white shirt, or a gray wall. Neutral objects can carry some warm light, but they should not all become the same orange." },
        { title: "Review the whole frame.", text: "Zoom out. Does the background still agree with the face? Keep the original shadow direction and resist brightening every dark area until the scene looks flat." }
      ] } },
      { id: "troubleshooting", title: "When the edit looks wrong", table: { headers: ["What you see", "What to check"], rows: [
        ["An orange face", "Reduce warmth or saturation first. If the face was already warm in the source, the background may need a different treatment."],
        ["Flat, gray shadows", "Undo some shadow lifting. Leave enough depth to show where the light comes from."],
        ["A blank, bright sky", "Lower highlights and inspect it. If texture never appears, the file may not contain that detail; more warmth will not recover it."],
        ["A glowing face in a cool scene", "Compare the subject and surroundings. Reduce the effect or choose a source with more compatible lighting."]
      ] } },
      { id: "edit-or-restyle", title: "Choose color editing or a new interpretation", paragraphs: [
        "Use ordinary color and tone adjustments when you like the actual scene and want it warmer. Consider generative restyling when you want to reinterpret the lighting or setting, knowing that details can change. Neither approach guarantees a believable sunset from every source.",
        "Judge the result at the size you will share it, then inspect the face closely. If one more adjustment makes the photo less recognizable or less coherent, return to the previous version. A gentle edit is often enough to communicate warmth."
      ] }
    ],
    faq: [
      { question: "Can a midday photo look like golden hour?", answer: "It can feel warmer, but hard overhead shadows can still reveal the original light. Aim for a warm daytime edit unless you intentionally want a generative reinterpretation." },
      { question: "Why does warming a photo turn skin orange?", answer: "You may be adding warmth to skin that is already warm, or increasing saturation too. Compare with the source and reduce one adjustment at a time." },
      { question: "Can color controls change the direction of light?", answer: "No. Global color controls alter color, not the geometry of shadows. Relighting or generation is a different kind of change and needs its own checks." }
    ],
    sources: [{ title: "Adobe: golden-hour photography", url: "https://www.adobe.com/creativecloud/photography/technique/golden-hour.html", note: "Background on low-angle light, exposure, and white balance. The editing checklist above is our practical editorial guidance." }],
    related: ["ai-photo-effects-vs-filters", "vintage-photo-effects-guide"]
  },
  {
    slug: "digicam-photo-effect-on-phone",
    title: "How to get a digicam-style photo on your phone",
    description: "Create a digicam-inspired phone photo with intentional flash, candid framing and restrained editing. Keep skin clear and avoid muddy colors or excessive texture.",
    summary: "The early-digital feeling comes from a combination of light, framing, and editing. It is not one magic filter.",
    published: date, modified: date,
    image: "blog/pexels-30753213-4k.webp", imageAlt: "Compact camera and accessories arranged on a tabletop", imagePosition: "50% 50%", caption: "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imageVariants: [{"src":"blog/pexels-30753213-480.webp","width":480},{"src":"blog/pexels-30753213-960.webp","width":960},{"src":"blog/pexels-30753213-1600.webp","width":1600},{"src":"blog/pexels-30753213-4k.webp","width":2880}],
    imageCredit: {"name":"Thanh Thiện Tô","url":"https://www.pexels.com/photo/vintage-camera-with-assorted-accessories-flat-lay-30753213/"},
    quickAnswer: "Try direct flash where appropriate, keep the subject distinct from the background, and use a casual frame. Then edit lightly: preserve face detail, choose a clear contrast direction, and avoid stacking grain, blur, and heavy color shifts.",
    sections: [
      { id: "define-the-look", title: "Choose the kind of digicam look you mean", paragraphs: [
        "Digicam describes digital cameras, not one consistent image treatment. A bright outdoor snapshot, a flash-lit party portrait, and a cool indoor image can all feel early-digital for different reasons. Pick a reference for its visible qualities instead of assuming a CCD label or a date guarantees a particular look.",
        "For a phone photo, separate what happens during capture from what you can change afterward. Framing and the relationship between subject and background are easier to choose while shooting. Color and contrast are easier to refine later."
      ] },
      { id: "six-steps", title: "Six steps to a considered phone edit", list: { ordered: true, items: [
        { title: "Name two qualities you want.", text: "For example, a bright face against a dark room, or crisp daylight with a casual crop. A specific target makes it easier to reject an effect that does too much." },
        { title: "Try flash deliberately.", text: "If your phone offers a flash control, compare a flash and non-flash capture. Adobe explains that flash adds light and can change shadows; it is not useful only at night. Avoid using it where it would disturb people." },
        { title: "Watch the background.", text: "Check for a distracting bright sign, mirror reflection, or object appearing to grow out of someone’s head. Move your position before relying on an edit to solve the frame." },
        { title: "Keep the capture readable.", text: "A candid frame can feel spontaneous without being so blurred that facial features disappear. Check the eyes and hold onto the clearest version." },
        { title: "Set contrast and color gently.", text: "Choose a brighter, crisp treatment or a darker flash mood. Do not automatically lower every highlight, crush every shadow, and add a color cast at once." },
        { title: "Remove an effect before adding another.", text: "If the image feels muddy, undo added blur or texture and compare again. A digicam-inspired photo does not need film grain, dust, light leaks, and a date stamp to communicate the idea." }
      ] } },
      { id: "phone-controls", title: "Use the controls your phone actually offers", paragraphs: [
        "Phone models and software versions differ. In Apple Photos, opening a photo and choosing Edit gives access to light and color adjustments; supported filter or style options depend on the device and settings. Start with a light adjustment and compare the result with your original.",
        "When editing an existing photo, start with what is already there. You can adjust the mood of soft daylight, but a contrast control will not turn it into a genuine direct-flash capture. A generated restyling may reinterpret the image instead, which calls for checking any changed details."
      ] },
      { id: "final-check", title: "Check before you save or share", list: { items: [
        { text: "Compare the face with the original. Look for lost texture, strange skin color, or sharpening around hair." },
        { text: "View the photo small as well as enlarged. Texture that looks subtle close up can look dirty in a small post." },
        { text: "Inspect the crop and background, then keep the original file alongside the finished version." }
      ] } }
    ],
    faq: [
      { question: "Do I need an old camera?", answer: "No. You can explore the visual language on a phone. That does not mean an app precisely emulates a particular camera’s lens, sensor, or processing." },
      { question: "Is digicam the same as film?", answer: "No. Digital-camera and film-inspired looks can overlap, but grain and faded prints are not defining requirements for every digicam image." },
      { question: "Can I edit a photo I already took?", answer: "Yes. Choose a compatible reference and work with its existing light. Use generative changes intentionally if you want a different scene or lighting treatment." }
    ],
    sources: [
      { title: "Adobe: flash photography basics", url: "https://www.adobe.com/creativecloud/photography/hub/guides/flash-photography-basics", note: "How added light interacts with a scene and its shadows." },
      { title: "Apple: edit photos and videos on iPhone", url: "https://support.apple.com/guide/iphone/edit-photos-and-videos-iphb08064d57/ios", note: "The ordinary editing workflow in Apple Photos; controls vary by device and settings." }
    ],
    related: ["vintage-photo-effects-guide", "golden-hour-photo-editing"]
  },
  {
    slug: "vintage-photo-effects-guide",
    title: "Vintage photo effects: choose the right retro look",
    description: "Compare warm film-inspired, crisp digicam and monochrome photobooth looks. Choose a vintage effect that fits your lighting, framing and intended mood.",
    summary: "Faded film, crisp flash, and a playful photobooth sequence tell different stories. Start by choosing the right one.",
    published: date, modified: date,
    image: "blog/pexels-12182725-4k.webp", imageAlt: "Black-and-white portrait beside glass with reflected lights", imagePosition: "50% 45%", caption: "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imageVariants: [{"src":"blog/pexels-12182725-480.webp","width":480},{"src":"blog/pexels-12182725-960.webp","width":960},{"src":"blog/pexels-12182725-1600.webp","width":1600},{"src":"blog/pexels-12182725-4k.webp","width":2560}],
    imageCredit: {"name":"Connor McManus","url":"https://www.pexels.com/photo/portrait-of-a-woman-at-night-12182725/"},
    quickAnswer: "Choose a retro direction before choosing an effect. Warm and faded can suggest an old print; crisp flash can suggest an early digital snapshot; consistent framing and a sequence of expressions can suggest a photobooth. Grain is optional, not a universal requirement.",
    sections: [
      { id: "compare-looks", title: "Three looks that are easy to confuse", paragraphs: [
        "Vintage is a broad description, so asking an editor to make a photo look old leaves many decisions unresolved. Decide which qualities you want to preserve: the color of a memory, the energy of a night out, or the expressions in a short portrait sequence."
      ], table: { headers: ["Direction", "Look for", "Useful starting point"], rows: [
        ["Warm, film-inspired", "Gentle contrast, a chosen color palette, optional fine texture", "A readable portrait with simple light and enough detail to soften selectively"],
        ["Crisp digicam / flash", "A direct, spontaneous frame and clear subject-background contrast", "A candid snapshot whose light already has the energy you want"],
        ["Monochrome photobooth", "Consistent crop, repeated setting, and a sequence of expressions", "Several portraits taken from the same distance against a simple background"]
      ] } },
      { id: "choose-a-direction", title: "Use a simple selection test", paragraphs: [
        "If color is the point of the photo—a warm room, a favorite jacket, the last light outside—start with a color treatment. If the energy comes from flash and an unplanned pose, try a crisp digital direction. If expressions are the story, think about a sequence rather than adding more texture.",
        "For a single portrait, ask whether monochrome improves the separation between face, clothes, and background. If those areas merge into a similar gray, try a different image or a gentler conversion. Black and white alone does not create a photobooth composition."
      ] },
      { id: "consistent-series", title: "Make a set feel connected", list: { ordered: true, items: [
        { title: "Choose an anchor image.", text: "Pick the clearest example of the mood. Finish it first so the remaining photos have a visual reference." },
        { title: "Match the intention, not every setting.", text: "A shaded frame may need a different adjustment from a sunlit one. Similar slider values can still produce very different colors." },
        { title: "Compare faces and neutrals.", text: "Check skin, pale clothing, and dark backgrounds across the set. Decide what should stay consistent and what reflects a real lighting change." },
        { title: "Review the sequence together.", text: "Use a consistent crop where it supports the story. For a photobooth-like sequence, vary the expressions while keeping framing recognizable; arranging a strip requires a tool that actually supports layouts." }
      ] } },
      { id: "avoid-three-mistakes", title: "Three mistakes that make retro edits less convincing", paragraphs: [
        "First, treating every retro look as faded. A punchy flash portrait may lose its character if you lift all the dark tones. Second, adding texture before deciding on the color and contrast. Grain can distract from an edit that has not yet found its direction.",
        "Third, mixing signals without a reason: heavy dust, strong blur, neon color, and a fake timestamp can compete with the face. Remove one treatment at a time. Adobe’s vintage guide discusses tone, contrast, and color as adjustable ingredients; use that flexibility rather than assuming one recipe fits every photograph."
      ] }
    ],
    faq: [
      { question: "Does black and white automatically make a photo vintage?", answer: "No. Lighting, clothing, framing, contrast, and context all affect the impression. Monochrome can be contemporary too." },
      { question: "How much grain should I add?", answer: "There is no universal amount. Start without it, then add only enough to serve your intended look. Check the image at its sharing size, especially around eyes and hair." },
      { question: "Can a color photo become a retro portrait?", answer: "Yes. Keep the original and choose a clear direction. You can explore color or monochrome, but the composition still matters more than a preset’s name." }
    ],
    sources: [{ title: "Adobe: creating a vintage aesthetic", url: "https://www.adobe.com/creativecloud/photography/discover/add-vintage-aesthetic.html", note: "Background on color, tone, and contrast in vintage-inspired edits. The comparison and selection process here are editorial guidance." }],
    related: ["digicam-photo-effect-on-phone", "golden-hour-photo-editing"]
  },
  {
    slug: "choose-photo-for-ai-portraits",
    title: "How to choose a photo for AI portrait edits",
    description: "Choose a clearer starting photo for AI portraits, avoid common input problems, and check likeness, details and lighting in the result.",
    summary: "Start with a photo you can actually read. Then judge the result with the same care you used to choose it.",
    published: date, modified: date,
    image: "blog/pexels-32644860-4k.webp", imageAlt: "Woman in a pink shirt and red cap leaning through an open window", imagePosition: "50% 40%", caption: "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imageVariants: [{"src":"blog/pexels-32644860-480.webp","width":480},{"src":"blog/pexels-32644860-960.webp","width":960},{"src":"blog/pexels-32644860-1600.webp","width":1600},{"src":"blog/pexels-32644860-4k.webp","width":3840}],
    imageCredit: {"name":"Muhammad-Taha Ibrahim","url":"https://www.pexels.com/photo/portrait-of-smiling-woman-at-window-in-abuja-32644860/"},
    quickAnswer: "Choose a sharp, unobstructed photo with visible facial features and enough room for your intended crop. Keep the original, avoid heavily filtered copies, and inspect the result for changes to likeness and small details. A stronger input is a sensible starting point, not a guarantee.",
    sections: [
      { id: "clear-starting-point", title: "Choose clarity over a dramatic source", paragraphs: [
        "A favorite photo is not always the easiest source for a portrait edit. Sunglasses, hair over an eye, a strong color cast, or motion blur may be part of its appeal, but they also make facial detail harder to evaluate. When you have several choices, compare them at a similar size.",
        "Generative tools can use an image as a reference for a new interpretation; Adobe Firefly is one documented example. This does not mean every tool uses references the same way or preserves every feature. Use the checklist below to compare your available photos before you begin."
      ] },
      { id: "input-checklist", title: "A practical input checklist", list: { items: [
        { title: "Readable features.", text: "Zoom in enough to see the eyes, nose, and mouth clearly. Choose the less blurred image when two otherwise similar photos are available." },
        { title: "Visible light.", text: "Prefer a face you can inspect without guessing what is hidden in deep shadow or a washed-out highlight. Even light is a useful baseline, though creative sources can work differently." },
        { title: "An unobstructed face.", text: "For a straightforward portrait, choose a frame without a hand, phone, or accessory hiding the features you want to preserve." },
        { title: "Room for the crop.", text: "Leave some space around the head and shoulders if that is the portrait you want. A tight crop cannot supply missing context as a factual record." },
        { title: "The original file.", text: "Use the saved photo rather than a screenshot of a social post or an already heavily filtered copy. Avoid unnecessary rounds of saving and compression." },
        { title: "Permission and an untouched copy.", text: "Use your own photo or one you have permission to edit. Keep the original separately so you can compare the result and start again." }
      ] } },
      { id: "compare-inputs", title: "Compare two candidates before creating", table: { headers: ["Easier to evaluate", "More difficult to evaluate"], rows: [
        ["Both eyes and the mouth are readable", "Blur or a strong filter obscures facial features"],
        ["The intended crop has enough space", "The head or shoulders are cut off at the edge"],
        ["The face has visible tone and texture", "Highlights are blank or shadows hide much of the face"]
      ] } },
      { id: "review-the-result", title: "Inspect the result, not just the mood", paragraphs: [
        "Compare the output directly with the source. Look at eye shape, teeth, earrings, glasses, the hairline, and where clothes meet skin. Check hands if they appear. Then zoom out: do the shadows, background, and face appear to share the same light?",
        "If likeness has drifted, try a clearer source or a different look. Do not assume another pass will necessarily fix it. For an image that must preserve exact appearance, conventional editing or a new photograph may be the better choice."
      ] },
      { id: "meluvya-workflow", title: "Where to start in Meluvya", paragraphs: [
        "Meluvya’s Explore screen has Effects and Templates. The Create screen provides Choose photo and Add your photo. Choose the image you want to work with and the look you want to explore; the Editor and My photos are separate parts of the app. Keep your original handy as a reference when you review a new look."
      ] }
    ],
    faq: [
      { question: "How many source photos do I need?", answer: "That depends on the tool. Follow its photo-selection instructions and choose the clearest suitable images." },
      { question: "Can I use an old photo?", answer: "Possibly, if it meets the tool’s requirements. Choose a clear original or good scan, keep it unchanged, and treat the output as an interpretation." },
      { question: "Can AI recover the true face from blur?", answer: "There is no guarantee. Generated detail can look plausible without being the detail that was actually present. A clearer source is preferable when accuracy matters." }
    ],
    sources: [{ title: "Adobe Firefly: AI portrait generation and image references", url: "https://www.adobe.com/products/firefly/features/ai-portrait-generator.html", note: "How an image reference can guide a generative portrait." }],
    related: ["ai-photo-effects-vs-filters", "golden-hour-photo-editing"]
  },
  {
    slug: "ai-photo-effects-vs-filters",
    title: "AI photo effects vs filters: which should you use?",
    description: "Understand color filters, AI-assisted editing and generative restyling. Choose the right approach for warmth, a new scene, or preserving exact appearance.",
    summary: "A filter, an assisted edit, and a generated scene can change a photo in very different ways. Choose based on what you want to keep.",
    published: date, modified: date,
    image: "blog/pexels-24601834-4k.webp", imageAlt: "Portrait of a woman illuminated by green and blue light at night", imagePosition: "50% 35%", caption: "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
    imageVariants: [{"src":"blog/pexels-24601834-480.webp","width":480},{"src":"blog/pexels-24601834-960.webp","width":960},{"src":"blog/pexels-24601834-1600.webp","width":1600},{"src":"blog/pexels-24601834-4k.webp","width":2560}],
    imageCredit: {"name":"Yusuf Çelik","url":"https://www.pexels.com/photo/portrait-of-woman-at-night-24601834/"},
    quickAnswer: "Use color and tone adjustments when you want to keep the photographed scene. Use AI-assisted tools for specific tasks, checking what each tool actually does. Choose generative restyling for a new interpretation, and inspect any details or features it may change.",
    sections: [
      { id: "three-approaches", title: "Three different meanings of a photo effect", paragraphs: [
        "A conventional filter usually changes color, tone, or contrast according to a preset treatment. It can make a photo warmer or more muted without intentionally creating a new face or setting. Apple Photos documents light and color adjustments alongside filter or style options, depending on the device.",
        "AI-assisted editing is a broader category. A tool may help select a subject, reduce noise, or adjust a region; the AI label alone does not tell you whether it regenerates content. Read the tool’s description and inspect the change.",
        "Generative restyling creates a new interpretation of an image or part of it. Adobe Firefly, for example, describes using a photo reference to guide an artistic portrait. New content can change objects, textures, lighting, and facial details. That is a different goal from applying a color preset."
      ] },
      { id: "comparison", title: "Match the approach to the job", table: { headers: ["Approach", "Useful for", "What to watch"], rows: [
        ["Color or tone filter", "A consistent palette or a warmer version of the existing scene", "Skin color, lost highlight detail, and excessive contrast"],
        ["AI-assisted adjustment", "A particular selection, cleanup, or enhancement task supported by the tool", "Edges, texture, and any unintended changes outside the intended area"],
        ["Generative restyling", "A different scene, artistic interpretation, or transformed portrait", "Likeness, small details, invented objects, and lighting consistency"]
      ] } },
      { id: "choose-for-your-photo", title: "Three decisions you can make before editing", list: { items: [
        { title: "I like the photo, but want it warmer.", text: "Start with ordinary warmth, color, and exposure adjustments. If that achieves the feeling, you do not need a new scene. Compare neutral clothing and skin before saving." },
        { title: "I want to explore a different setting.", text: "A generative interpretation may fit the goal better than a filter. Decide which features must stay recognizable, then inspect those features in every result." },
        { title: "I must preserve exactly how this person looked.", text: "Favor conservative edits and keep the original. Avoid assuming that a result with realistic texture is an accurate record of the person or moment." }
      ] } },
      { id: "compare-versions", title: "Keep a clear route back to the source", paragraphs: [
        "Save a version before making a substantial change. Compare at the same crop and display size so a bigger face or brighter screen does not distract you from the actual edit. Check the whole frame, then inspect important details up close.",
        "If a result disappoints, identify the problem before changing tools. Orange skin may need less warmth, not generation. An unwanted background may need a crop or a specific editing task, not another global filter. Choosing the smallest change that solves your problem makes the process easier to judge."
      ] },
      { id: "meluvya-modes", title: "How this relates to Meluvya", paragraphs: [
        "Meluvya presents Effects and Templates in Explore, photo selection in Create, an Editor, and My photos. Browse a look in Explore, choose your photo in Create, and use the Editor when you want to work on a favorite. Compare any result with your original to decide whether it keeps the details that matter to you."
      ] }
    ],
    faq: [
      { question: "Can I combine a filter with an AI edit?", answer: "Often you can edit a generated image in another compatible editor. Keep an intermediate version, then adjust gently rather than stacking effects until detail disappears." },
      { question: "Will AI effects change my face?", answer: "It depends on the tool and task. Generative transformations may alter features; a color adjustment has a different purpose. Compare the actual result rather than relying on the AI label." },
      { question: "Can I edit an image after generation?", answer: "Use the editing options available in the tool or save a compatible file for another editor. Do not assume every app exposes the same controls or reversible history." }
    ],
    sources: [
      { title: "Apple: ordinary photo adjustments and filters", url: "https://support.apple.com/guide/iphone/edit-photos-and-videos-iphb08064d57/ios", note: "An example of conventional light, color, and filter controls." },
      { title: "Adobe Firefly: generative portraits from references", url: "https://www.adobe.com/products/firefly/features/ai-portrait-generator.html", note: "An example of generating an artistic interpretation from an image reference." }
    ],
    related: ["choose-photo-for-ai-portraits", "golden-hour-photo-editing"]
  }
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function articleWordCount(article: Article) {
  const text = [article.summary, article.quickAnswer, ...article.sections.flatMap((section) => [section.title, ...(section.paragraphs ?? []), ...(section.list?.items.map((item) => `${item.title ?? ""} ${item.text}`) ?? []), ...(section.table?.rows.flat() ?? [])]), ...article.faq.flatMap((item) => [item.question, item.answer])].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

export function readingMinutes(article: Article) {
  return Math.max(1, Math.ceil(articleWordCount(article) / 200));
}
