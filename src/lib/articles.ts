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
  caption: string;
  quickAnswer: string;
  sections: ArticleSection[];
  faq: { question: string; answer: string }[];
  sources: { title: string; url: string; note: string }[];
  related: string[];
};

const date = "2026-10-19";
const illustration = "Illustrative style example.";

export const articles: Article[] = [
  {
    "slug": "window-light-portraits-at-home",
    "title": "How to take window-light portraits at home",
    "description": "Make a simple portrait beside a window. Compare front and side light, soften harsh sun, choose a background, and check your photo before editing.",
    "summary": "One window, a clear background, and a few deliberate changes in position can give you a more useful starting photo.",
    "published": "2026-10-20",
    "modified": "2026-10-20",
    "image": "canon_g7x_after.jpg",
    "imageAlt": "An indoor portrait of a woman resting her face on her hands at a restaurant table",
    "imagePosition": "50% 34%",
    "caption": "Illustrative portrait. The lighting setup described below is a separate exercise.",
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
    "image": "canon_pro_after.jpg",
    "imageAlt": "A portrait of a woman beside a balustrade with water and city lights behind her at night",
    "imagePosition": "50% 40%",
    "caption": "Illustrative night portrait; not a before-and-after sharpness test.",
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
    "image": "y2k_digicam_after.jpg",
    "imageAlt": "A woman in sunglasses and a baseball cap holding a drink on a city street",
    "imagePosition": "50% 30%",
    "caption": "Illustrative eyewear portrait. This image does not demonstrate clear-lens glare removal.",
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
    image: "golden_hour_after.jpg", imageAlt: "A portrait beside a wooden fence in warm sunset light", imagePosition: "50% 42%", caption: illustration,
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
    image: "y2k_digicam_after.jpg", imageAlt: "A candid street portrait with sunglasses and an early-digital camera aesthetic", imagePosition: "50% 38%", caption: illustration,
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
    image: "vintage_after.jpg", imageAlt: "Black-and-white photobooth-style portraits with a curtain background", imagePosition: "50% 35%", caption: illustration,
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
    image: "canon_g7x_after.jpg", imageAlt: "A clear portrait at a restaurant table with the face visible", imagePosition: "50% 34%", caption: illustration,
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
    image: "red_flash_after.jpg", imageAlt: "A portrait on concrete steps with a vivid red lighting treatment", imagePosition: "50% 40%", caption: illustration,
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
