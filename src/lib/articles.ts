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
  "slug": "google-photos-free-up-space-vs-delete",
  "title": "Google Photos: Free up space vs Delete, explained",
  "description": "Clear phone storage without confusing local removal with deleting your Google Photos library. Check backup status and the extra iCloud risk on iPhone.",
  "summary": "Choose the cleanup action that matches the storage you want to recover, and verify a separate copy before removing originals.",
  "published": "2026-10-25",
  "modified": "2026-10-25",
  "quickAnswer": "Free up space removes eligible device copies that Google Photos has backed up. Delete removes items from your Google Photos library and can also remove them from connected devices. Before either action, confirm the account and backup. On an iPhone using iCloud Photos, removing items from Apple Photos can also remove them from iCloud.",
  "sections": [
    {
      "id": "choose-storage",
      "title": "First decide which storage is full",
      "paragraphs": [
        "A full phone and a full Google Account are different problems. Google’s backup help says account storage is shared by Photos, Drive and Gmail. Removing local copies does not erase the cloud library or recover that cloud storage.",
        "Write down your goal before touching a cleanup button: “I need room on this phone, but want these pictures to remain in Google Photos.” That goal points to a different action from intentionally removing unwanted pictures everywhere."
      ],
      "table": {
        "headers": [
          "Action",
          "What you are choosing"
        ],
        "rows": [
          [
            "Free up space",
            "Remove eligible backed-up copies from the device."
          ],
          [
            "Delete in Google Photos",
            "Remove library items, with effects on connected devices and albums."
          ],
          [
            "Undo device backup",
            "Remove the device-backed-up set from Google Photos while keeping device copies; not a phone-space cleanup tool."
          ]
        ]
      }
    },
    {
      "id": "verify-backup",
      "title": "Verify the surviving copy before cleanup",
      "paragraphs": [
        "An image appearing in the mobile app is not enough for this decision. Confirm the intended Google Account, inspect backup status, and find the same important images at photos.google.com. Google’s backup documentation explains the account and per-item checks.",
        "For irreplaceable pictures, keep an additional copy outside the library you are cleaning. Open several files at that destination. Include a recent photo, an older favorite and any image imported from another app; a successful sample is useful evidence, but it does not verify every file.",
        "Also decide whether you need the original capture quality. Our related backup-quality guide explains Original quality and Storage saver. A smaller cloud copy cannot replace an original you later discover you needed."
      ]
    },
    {
      "id": "cleanup-steps",
      "title": "Use the named cleanup command deliberately",
      "list": {
        "ordered": true,
        "items": [
          {
            "text": "Open Google Photos and confirm the account under the profile picture or initial. Wait for any outstanding backup to complete."
          },
          {
            "text": "Choose Free up space on this device. Read the proposed removal before confirming; do not substitute the trash button."
          },
          {
            "text": "On iPhone, read the iCloud warning below first. Google’s procedure includes removing the same items from Apple Photos’ Recently Deleted area to reclaim space. Only do that once the remaining copies are verified."
          },
          {
            "text": "Afterward, confirm the photos remain accessible in Google Photos. Removed local copies may be unavailable offline or in your phone’s built-in gallery. Keep needed offline images separately."
          }
        ]
      }
    },
    {
      "id": "iphone-icloud",
      "title": "On iPhone, account for iCloud Photos too",
      "paragraphs": [
        "Apple documents that deleting an item from a library using iCloud Photos propagates that deletion to its other devices. Combining that behavior with Google’s device-cleanup instructions means you should not assume the Apple/iCloud copy will survive this cleanup. This is a cross-service consequence, not a promise made by Google’s backup badge.",
        "If keeping the iCloud library is your priority, review Apple’s Optimize Storage option instead of deleting library items. If you deliberately retain Google copies and remove Apple copies, verify the Google files first and understand that the services will no longer hold identical collections.",
        "For example, a family may want its shared Apple library intact even though one phone is nearly full. In that situation, stop before cleanup and choose a device-storage solution that preserves the family’s intended library. The quickest deletion is not always the right storage decision."
      ]
    }
  ],
  "faq": [
    {
      "question": "Will Free up space give me more Google Account storage?",
      "answer": "No. Its purpose is removing eligible local copies. Cloud account cleanup is a separate operation."
    },
    {
      "question": "Should I empty every item in Recently Deleted?",
      "answer": "Do not empty unrelated items as part of this process. Verify the surviving copies and follow the instructions for the same items you deliberately removed; permanent deletion removes that recovery option."
    }
  ],
  "sources": [
    {
      "title": "Google Photos: Free up space on your device",
      "url": "https://support.google.com/photos/answer/6128843?hl=en&co=GENIE.Platform%3DiOS",
      "note": "Device removal, the iPhone Recently Deleted step, and access after cleanup; use the platform selector for Android."
    },
    {
      "title": "Google Photos: Delete photos and videos",
      "url": "https://support.google.com/photos/answer/6128858?hl=en",
      "note": "Library deletion effects and the distinct Undo backup operation."
    },
    {
      "title": "Google Photos: Back up photos and videos",
      "url": "https://support.google.com/photos/answer/6193313?hl=en",
      "note": "Backup/account checks and shared Google Account storage."
    },
    {
      "title": "Apple: Set up and use iCloud Photos",
      "url": "https://support.apple.com/en-us/108782",
      "note": "Synchronized deletion and Optimize Storage. The cross-service warning is an inference from Apple and Google’s documented behavior."
    }
  ],
  "related": [
    "google-photos-original-vs-storage-saver",
    "icloud-photos-sync-vs-backup",
    "edit-photos-without-losing-original"
  ],
  "image": "blog/pexels-7129664-4k.webp",
  "imageAlt": "Hands at a laptop displaying a set of portrait photographs",
  "imagePosition": "50% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-7129664-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-7129664-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-7129664-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-7129664-4k.webp",
      "width": 2560
    }
  ],
  "imageCredit": {
    "name": "Michael Burrows",
    "url": "https://www.pexels.com/photo/photographer-working-on-laptop-at-workplace-7129664/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "icloud-photos-not-syncing",
  "title": "iCloud Photos not syncing? Check the status before changing settings",
  "description": "Find why iCloud Photos is paused, distinguish phone storage from cloud storage, and check one missing photo without restarting your entire library sync.",
  "summary": "Use the library’s actual status message to choose the next step and protect unsynced photos while you investigate.",
  "published": "2026-10-25",
  "modified": "2026-10-25",
  "quickAnswer": "Read Photos’ library status and follow its pause reason. Check the account, connection, power and cloud capacity. Apple advises against turning iCloud Photos off as a troubleshooting step. Track one identifiable photograph while investigating.",
  "sections": [
    {
      "id": "locate-status",
      "title": "Read the message on the device holding the original",
      "paragraphs": [
        "Look for library status under Photos’ profile button in Collections, or below All Photos on older layouts. Apple’s troubleshooting page documents the version-dependent location.",
        "Note the message and time before making a change. Choose one missing photo with a recognizable subject and capture date. Check whether it exists only on the phone, also on iCloud.com, or on another device. This creates a concrete test instead of repeatedly comparing total photo counts."
      ]
    },
    {
      "id": "pause-reason",
      "title": "Match the next step to the pause reason",
      "table": {
        "headers": [
          "Message or condition",
          "Next check"
        ],
        "rows": [
          [
            "Low Battery",
            "Connect power and let the phone charge."
          ],
          [
            "Low Power Mode or Low Data Mode",
            "Review that mode and whether you want to allow syncing now."
          ],
          [
            "Poor connection or optimization pause",
            "Use a reliable connection; use Sync Now if offered, or allow time."
          ],
          [
            "Device needs to cool down",
            "Allow the device to cool before retrying."
          ],
          [
            "iCloud storage full",
            "Review cloud capacity and what occupies it; local cleanup alone does not enlarge it."
          ]
        ]
      }
    },
    {
      "id": "account-view",
      "title": "Check account and library view separately",
      "paragraphs": [
        "Apple’s setup instructions require the same Apple Account on your own devices syncing your personal iCloud Photos library. Read the account identity rather than assuming that two devices belonging to you use the same one. Check that Photos synchronization is enabled for the intended library.",
        "If you use Shared Library, check that view too: Apple notes that moved photos no longer appear in Personal Library.",
        "For example, if the chosen image opens on iCloud.com but not on your tablet, the phone has already delivered that particular item to iCloud. Focus the next investigation on the tablet’s account, connection, status and view. This does not prove that every other phone item has finished uploading."
      ]
    },
    {
      "id": "two-storage-limits",
      "title": "Distinguish the two storage limits",
      "paragraphs": [
        "Apple separates device capacity from iCloud capacity. Check phone space under Settings, General, iPhone Storage; check cloud usage under Settings, your name, iCloud. A warning about one is not a measurement of the other.",
        "Optimize Storage manages the device copies while originals remain in iCloud. It is not an increase in cloud capacity. Before removing library photos to resolve storage pressure, remember that iCloud Photos synchronizes deletions too.",
        "Keep unsynced originals available while diagnosing the problem. Avoid a reset, account switch or bulk deletion simply to see whether it helps. If you need to preserve a separate copy, retrieve and open the files at that destination before relying on it."
      ]
    },
    {
      "id": "verify-progress",
      "title": "Verify progress and know when to escalate",
      "paragraphs": [
        "After addressing the condition, allow an uninterrupted session on power and reliable Wi-Fi. Apple recommends allowing overnight for some libraries. Record whether your chosen photo reaches the other device.",
        "If it does not, collect the device model, software version, exact message and whether other iCloud services work. Consult Apple’s guidance for persistent errors and any Unable to Upload album. A support request with those observations is more useful than another unexplained sync toggle."
      ]
    }
  ],
  "faq": [
    {
      "question": "Does a paused sync mean my photos are deleted?",
      "answer": "A pause describes synchronization status, not proof of deletion. Locate the original and check a specific item before taking recovery or cleanup steps."
    },
    {
      "question": "Why are totals different on two devices?",
      "answer": "First compare the same library view and one identifiable photo. Counts alone do not distinguish an incomplete transfer from a different account or view."
    }
  ],
  "sources": [
    {
      "title": "Apple: If your iCloud Photos are not syncing",
      "url": "https://support.apple.com/en-us/101559",
      "note": "Status locations, pause reasons, waiting, Shared Library views, and the warning against switching sync off."
    },
    {
      "title": "Apple: Set up and use iCloud Photos",
      "url": "https://support.apple.com/en-us/108782",
      "note": "Account setup, deletion behavior, and device optimization."
    },
    {
      "title": "Apple: Manage your photo and video storage",
      "url": "https://support.apple.com/en-us/105061",
      "note": "Separate device and iCloud capacity checks."
    },
    {
      "title": "Apple System Status",
      "url": "https://www.apple.com/support/systemstatus/",
      "note": "Check current outages when troubleshooting; this article does not assert an outage."
    }
  ],
  "related": [
    "icloud-photos-sync-vs-backup",
    "recover-deleted-iphone-photos",
    "airdrop-photos-original-data"
  ],
  "image": "blog/pexels-34225009-4k.webp",
  "imageAlt": "Photographer holding a memory card beside a card reader and laptop",
  "imagePosition": "60% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-34225009-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-34225009-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-34225009-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-34225009-4k.webp",
      "width": 3840
    }
  ],
  "imageCredit": {
    "name": "Julio Lopez",
    "url": "https://www.pexels.com/photo/photographer-inserting-sd-card-into-laptop-for-editing-34225009/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "apple-watch-camera-remote-photos",
  "title": "How to take iPhone photos with Apple Watch Camera Remote",
  "description": "Frame an iPhone photo from your wrist, choose the camera and timer, and review the result before moving your setup. Includes practical portrait checks.",
  "summary": "Use the watch as a remote viewfinder so you can stay in the frame and make small corrections between shots.",
  "published": "2026-10-25",
  "modified": "2026-10-25",
  "quickAnswer": "Open Camera Remote on your Apple Watch while your paired iPhone is nearby and supported securely. Frame the photograph in the watch preview and tap its shutter. Apple documents a default three-second timer, with camera and timer options under More. The photograph is saved on the iPhone.",
  "sections": [
    {
      "id": "prepare-position",
      "title": "Prepare the phone before stepping into the picture",
      "paragraphs": [
        "Choose the camera position for the photograph you want. For a standing portrait, leave enough space for your head, hands and feet; for a seated picture, check the chair edge and background. Put the phone somewhere stable and easy to retrieve.",
        "Make a trial frame with an object where you intend to stand. That gives you a visual reference for placement. If there are two people, ask one to remain in position while the other checks the framing, then use the remote for the final picture.",
        "Apple’s Camera Remote guide describes operation within normal Bluetooth range, approximately ten meters. Treat that as an approximate operating range rather than a guarantee through every wall or obstacle."
      ]
    },
    {
      "id": "watch-controls",
      "title": "Use the controls you need for a still photo",
      "table": {
        "headers": [
          "Control",
          "Documented action"
        ],
        "rows": [
          [
            "Preview",
            "Frame the scene; tap a key area to adjust exposure."
          ],
          [
            "Digital Crown",
            "Adjust zoom."
          ],
          [
            "Shutter",
            "Take a photo using the selected timer setting."
          ],
          [
            "More",
            "Choose front or rear camera; adjust timer, flash and Live Photo settings."
          ],
          [
            "Thumbnail",
            "Review captured shots on the watch."
          ]
        ]
      }
    },
    {
      "id": "portrait-routine",
      "title": "A short routine for a natural portrait",
      "list": {
        "ordered": true,
        "items": [
          {
            "text": "Check the preview once you are standing in the intended place. Look at the frame edges, not just your face."
          },
          {
            "text": "Use the delay to lower your wrist and look toward the phone lens. Avoid spending every exposure looking down at the watch."
          },
          {
            "text": "Take a small set while changing one detail, such as shoulder angle or hand position. Keep the phone fixed so the comparison is meaningful."
          },
          {
            "text": "Review the picture while you can still retake it. Check the full-size file on the iPhone for sharpness and expression before packing up."
          }
        ]
      }
    },
    {
      "id": "troubleshoot-remote",
      "title": "If the remote view is unavailable",
      "paragraphs": [
        "First bring the watch and phone close together and check their connection. Apple’s connection-support page uses the red iPhone or red X icon as a sign to investigate, and advises checking Airplane Mode, Bluetooth and Wi-Fi settings. Follow its troubleshooting order rather than immediately unpairing devices.",
        "If the preview works but the portrait disappoints, separate the two problems. A cut-off hand is a framing issue; a poor expression is a timing issue; visible shake may call for a more stable support. Reconnecting the watch is unlikely to solve an otherwise working camera setup.",
        "This guide concerns Apple’s Camera Remote and the iPhone camera. It does not establish remote-shutter support inside Meluvya or another camera app. Use the phone’s own camera controls or self-timer if your equipment does not offer the documented watch workflow."
      ]
    }
  ],
  "faq": [
    {
      "question": "Where do the photos appear?",
      "answer": "In Photos on the iPhone. The watch can review the capture, but the iPhone is the camera and storage destination."
    },
    {
      "question": "Do I need to buy a watch for self-portraits?",
      "answer": "No. If you already have a suitable paired watch, this is another way to control the shot. Our self-timer guide covers a workflow that does not depend on a watch."
    }
  ],
  "sources": [
    {
      "title": "Apple: Use Camera Remote on Apple Watch",
      "url": "https://support.apple.com/guide/watch/camera-remote-apda6e61c287/watchos",
      "note": "Remote controls, approximate range, three-second default timer and iPhone storage destination. The portrait routine is original editorial guidance."
    },
    {
      "title": "Apple: If your Apple Watch is not connected or paired",
      "url": "https://support.apple.com/en-us/108360",
      "note": "Connection-status indicators and a staged connection troubleshooting procedure."
    }
  ],
  "related": [
    "self-timer-portraits-with-phone",
    "take-couple-photos-with-phone",
    "group-photos-everyone-sharp"
  ],
  "image": "blog/pexels-13929353-4k.webp",
  "imageAlt": "Woman adjusting a phone mounted on a ring-light tripod",
  "imagePosition": "55% 40%",
  "imageVariants": [
    {
      "src": "blog/pexels-13929353-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-13929353-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-13929353-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-13929353-4k.webp",
      "width": 2560
    }
  ],
  "imageCredit": {
    "name": "Mizuno K",
    "url": "https://www.pexels.com/photo/woman-fixing-a-smart-phone-on-a-tripod-13929353/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "photograph-fireworks-with-phone",
  "title": "How to photograph fireworks with your phone",
  "description": "Keep fireworks colorful and your phone steady. Choose a framing strategy, compare exposure, and distinguish deliberate light trails from camera shake.",
  "summary": "Plan the first few frames as a test so you can adjust before the busiest part of the display.",
  "published": "2026-10-25",
  "modified": "2026-10-25",
  "quickAnswer": "Support the phone, turn flash off, leave space around the expected burst and review early photographs for lost color or shake. Try lowering exposure if the fireworks look washed out. Use only camera controls your phone actually provides; a dedicated-camera aperture or Bulb recipe does not automatically apply to a phone.",
  "sections": [
    {
      "id": "choose-frame",
      "title": "Choose a frame before the display begins",
      "paragraphs": [
        "Pick a permitted spectator position with a clear view and room to hold or support your phone without blocking others. Include a landmark if it helps explain the setting. Nikon’s fireworks guide recommends using foreground reference points and avoiding unnecessary movement at the shutter.",
        "Leave some empty space above and beside the first burst. A later burst may be larger or appear elsewhere. If every bright trail reaches the edge, widen the framing rather than trying to repair a cropped explosion afterward.",
        "Imagine two possible pictures: a single burst above a roofline, or several overlapping trails above a waterfront. Choose one as your first target. That decision makes it easier to tell whether a longer exposure is helping or merely filling the sky with clutter."
      ]
    },
    {
      "id": "start-simple",
      "title": "Start with the ordinary camera",
      "paragraphs": [
        "Turn flash off. Samsung’s phone-specific fireworks guidance explains that it cannot illuminate the distant display and recommends stabilizing the phone. Its article covers older Galaxy hardware, so use those general principles without copying its device-specific settings.",
        "Begin with a comfortable wide composition and take a few separate frames. Avoid chasing every burst with a large digital zoom change. Check the saved result: look for color in the trails, recognizable surroundings and whether fixed objects are sharp.",
        "On iPhone, Apple documents tapping the focus area and moving the exposure adjustment to change brightness. If a burst becomes a large white patch, try a slightly darker capture and compare the next similar burst. Changing the whole scene between tests makes the comparison less useful."
      ]
    },
    {
      "id": "read-result",
      "title": "Let the first results decide the next change",
      "table": {
        "headers": [
          "What you see",
          "Try next"
        ],
        "rows": [
          [
            "Fixed buildings and light trails both wobble",
            "Improve support and reduce movement when releasing the shutter."
          ],
          [
            "Buildings are sharp but trails stretch",
            "This may be the fireworks moving during the exposure; decide whether you like the effect."
          ],
          [
            "Large bursts lose their color",
            "Compare a darker exposure; some tiny bright cores may remain white."
          ],
          [
            "Too many overlapping streaks",
            "Capture a quieter part of the sequence or shorten exposure if your camera allows it."
          ]
        ]
      }
    },
    {
      "id": "long-exposure",
      "title": "Treat long exposure as an optional technique",
      "paragraphs": [
        "Nikon’s dedicated-camera method uses a stable camera and a controlled long exposure to collect the burst’s path. That explains why fireworks photographs can contain long lines, but it is not evidence that every phone offers the same shutter or aperture controls.",
        "If your camera app has manual shutter control, compare a shorter and longer setting from the same supported position. Watch the surrounding buildings as your stability reference. If the app only offers automatic processing, judge the saved output instead of assuming that a mode name guarantees a particular exposure.",
        "You do not have to record the entire display in one image. A clean, well-framed burst may communicate the scene better than a dense stack. Keep the original files and select for composition before applying color effects; editing cannot reliably recover detail that the capture never retained."
      ]
    }
  ],
  "faq": [
    {
      "question": "Should I always use the longest exposure?",
      "answer": "No. More time can add trails but also overlapping bursts, bright smoke and movement. Choose the effect from the recorded result."
    },
    {
      "question": "Are the example photos made by Meluvya?",
      "answer": "No. The credited image is an illustrative stock photograph, not an app result or a demonstration taken for this guide."
    }
  ],
  "sources": [
    {
      "title": "Nikon: Taking pictures of fireworks",
      "url": "https://www.nikonusa.com/learn-and-explore/c/tips-and-techniques/taking-pictures-of-fireworks",
      "note": "Framing, stable support and dedicated-camera long-exposure principles; those hardware settings are not presented as universal phone settings."
    },
    {
      "title": "Samsung: Firework pictures with Galaxy S8 and Note8",
      "url": "https://news.samsung.com/uk/how-to-capture-the-perfect-firework-picture-on-samsung-galaxy-s8-note8",
      "note": "Historical phone guidance on stability, flash and digital zoom. Model-specific exposure recommendations are not generalized."
    },
    {
      "title": "Apple: Set up your shot with iPhone camera tools",
      "url": "https://support.apple.com/guide/iphone/set-up-your-shot-iph3dc593597/26/ios/26",
      "note": "Documented focus and exposure adjustment; menu details depend on software version. The comparison table is editorial troubleshooting guidance."
    }
  ],
  "related": [
    "why-night-phone-photos-are-blurry",
    "iphone-ae-af-lock",
    "intentional-motion-blur-photography"
  ],
  "image": "blog/pexels-28704331-4k.webp",
  "imageAlt": "Fireworks illuminating the sky above a crowd at night",
  "imagePosition": "50% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-28704331-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-28704331-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-28704331-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-28704331-4k.webp",
      "width": 3840
    }
  ],
  "imageCredit": {
    "name": "Yevheniia Savchenko",
    "url": "https://www.pexels.com/photo/spectacular-night-fireworks-festival-in-reus-28704331/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "snow-photos-gray-or-blue",
  "title": "Why snow looks gray or blue in photos, and how to fix it",
  "description": "Separate exposure from white balance in winter photos. Brighten gray snow carefully, preserve texture and avoid turning naturally cool shadows orange.",
  "summary": "Use a small capture comparison to decide whether your snow photo needs more light, a color adjustment or both.",
  "published": "2026-10-25",
  "modified": "2026-10-25",
  "quickAnswer": "Gray-looking snow can result from an exposure that makes a bright scene too dark. Blue-looking snow can instead reflect cool illumination or white balance. Compare brightness and color separately: raise exposure cautiously when needed, then adjust color while preserving snow texture and believable shadows. One fixed setting will not suit every winter scene.",
  "sections": [
    {
      "id": "diagnose-tone",
      "title": "Decide whether the problem is brightness or color",
      "paragraphs": [
        "Look at a patch of snow with visible footprints or ridges. Is its detail present but dull? Is it bright enough yet strongly blue? Or is it featureless white? These observations suggest different adjustments, so do not start by moving every slider.",
        "Canon’s winter-photography guidance explains that a meter’s tendency toward middle gray can make a snow-dominated scene too dark. A positive exposure adjustment may be appropriate. This is a starting diagnosis, not a reason to make every snowy photograph brighter.",
        "A person in a dark coat surrounded by snow presents two priorities. You may want a readable face and bright snow without sacrificing either. Inspect both areas after each change; the coat does not have to become light gray for the photograph to work."
      ]
    },
    {
      "id": "capture-comparison",
      "title": "Make a small exposure comparison",
      "list": {
        "ordered": true,
        "items": [
          {
            "text": "Keep the framing consistent and choose a snow area whose texture you can recognize in each frame."
          },
          {
            "text": "Take one picture at the camera’s initial exposure, then another slightly brighter using the supported exposure control."
          },
          {
            "text": "Compare the saved images. Keep the brighter frame only if the snow still contains the important surface detail and any face remains usable."
          },
          {
            "text": "If the snow is already blank white, move in the darker direction instead. Retake while the scene is available rather than relying on an extreme repair later."
          }
        ]
      }
    },
    {
      "id": "phone-control",
      "title": "Use exposure controls rather than screen brightness",
      "paragraphs": [
        "Apple’s camera guide documents tapping a subject and dragging the exposure adjustment to brighten or darken the capture. Increasing your display brightness only changes how you view the picture; it is not a replacement for adjusting the photograph.",
        "An exact exposure-compensation number is less useful than checking the recorded result. A frame full of fresh snow and one containing mostly trees can lead the camera to different starting choices. Repeat the comparison if the composition changes substantially."
      ]
    },
    {
      "id": "white-balance",
      "title": "Handle blue snow after judging exposure",
      "paragraphs": [
        "Tamron’s winter guide discusses how white-balance choices can emphasize a cool or warm rendering. Use that as a creative decision rather than trying to remove every blue tone. Snow in shadow and snow in direct light do not have to look identical.",
        "If the whole scene looks unnaturally cold, compare a small warmer adjustment in your editor. Watch tree bark, clothing and skin as well as snow. Stop if these become orange or yellow while you are trying to neutralize the shaded ground.",
        "For a set of pictures, choose one reference image whose light matches the others. Compare the same areas after applying your edit. A sunrise frame and an overcast afternoon frame may deserve different treatment even when both contain white snow."
      ]
    },
    {
      "id": "editing-check",
      "title": "Finish with detail, then color",
      "table": {
        "headers": [
          "Symptom",
          "Useful check"
        ],
        "rows": [
          [
            "Dull gray snow with visible texture",
            "Try modest exposure adjustment and compare the bright areas."
          ],
          [
            "Blue shadows but believable sunlit snow",
            "Consider keeping the lighting difference rather than warming everything."
          ],
          [
            "Yellow snow and orange skin after editing",
            "Back off the warming adjustment and inspect the original."
          ],
          [
            "Featureless white area",
            "Check whether a darker source capture exists; do not assume editing can restore missing detail."
          ]
        ]
      }
    }
  ],
  "faq": [
    {
      "question": "Should snow always be pure white?",
      "answer": "No. Surface texture, shade and reflected light can create meaningful tonal and color variation. Judge whether the image looks coherent rather than making every patch identical."
    },
    {
      "question": "Does this require a special winter filter?",
      "answer": "No. Start with capture exposure and then assess color. An effect is an optional style choice, not a substitute for preserving important detail."
    }
  ],
  "sources": [
    {
      "title": "Canon: Cold-weather photography tips",
      "url": "https://www.canon.com.au/get-inspired/cold-weather-photography-tips",
      "note": "Snow metering, positive exposure correction and checking tonal detail."
    },
    {
      "title": "Tamron: Photographing snow and winter scenery",
      "url": "https://www.tamron.com/global/consumer/sp/impression/detail/article-how-to-shoot-snow-and-photos-unique-to-winter.html",
      "note": "Exposure and white-balance considerations; this guide avoids treating its example settings as universal."
    },
    {
      "title": "Apple: iPhone camera tools",
      "url": "https://support.apple.com/guide/iphone/set-up-your-shot-iph3dc593597/26/ios/26",
      "note": "Touchscreen exposure adjustment. The comparison routine and decision table are original editorial guidance."
    }
  ],
  "related": [
    "read-histogram-for-portraits",
    "remove-color-cast-from-photos",
    "can-you-fix-overexposed-portraits"
  ],
  "image": "blog/pexels-35861599-4k.webp",
  "imageAlt": "Snow-covered ground and trees in a winter landscape",
  "imagePosition": "50% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-35861599-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-35861599-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-35861599-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-35861599-4k.webp",
      "width": 3840
    }
  ],
  "imageCredit": {
    "name": "wal_ 172619",
    "url": "https://www.pexels.com/photo/snow-covered-winter-landscape-with-trees-35861599/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "stripes-in-photos-under-led-lights",
  "title": "Why photos have stripes under LED lights",
  "description": "Diagnose horizontal bands under artificial lighting, compare saved frames, and choose a lighting or camera adjustment before trying to edit the stripes away.",
  "summary": "Separate lighting flicker from gradient banding, then test the light and camera settings without assuming one shutter speed fixes every LED.",
  "published": "2026-10-25",
  "modified": "2026-10-25",
  "quickAnswer": "Horizontal dark or colored bands under artificial light can come from flicker interacting with the camera’s exposure timing. Check the saved photograph, then compare a frame under a different light. If your camera offers suitable flicker controls or manual shutter adjustment, test them and inspect the recorded result. No single setting is guaranteed for every LED or phone.",
  "sections": [
    {
      "id": "recognize-stripes",
      "title": "Check that the bands belong to the photograph",
      "paragraphs": [
        "Open a saved frame rather than judging only the camera preview. If you can, view that same file on another display. Stripes visible only on one screen need a different investigation from stripes recorded across a face, wall and clothing in the image itself.",
        "Sony’s explanation of flicker describes brightness or color bands in photographs taken under fluorescent or LED lighting. The light changes during the exposure process, so different parts of the image can record different illumination. This is a possible diagnosis, not proof that every line in a photo has that cause.",
        "Notice the shape of the problem. Steps following the gradual tones of an edited sky are gradient banding. False waves confined to a finely woven shirt may be moiré. A shadow cast by a railing belongs to the scene. Avoid applying a lighting-flicker fix just because all four can look like stripes."
      ]
    },
    {
      "id": "light-comparison",
      "title": "Make a controlled comparison before changing settings",
      "paragraphs": [
        "For a repeatable test, use a plain object with a visible edge, such as a book standing on a table. Keep the camera, framing and object steady. Make a few separate photographs under the troublesome light and compare the saved files. Note whether the bands move or change strength between frames.",
        "Next, photograph the object by a window in daylight with the suspect room light switched off, if you control it. This changes the lighting condition; it is not a laboratory measurement of the bulb. If the bands disappear, prioritize the light-and-camera combination before spending time on a repair edit.",
        "For a portrait you can retake, try moving the person into the more usable light and make a fresh test frame. At an event where you cannot change the lighting, check your camera’s supported options instead. Do not spend the whole session trusting a preview that you have not compared with a saved photograph."
      ]
    },
    {
      "id": "supported-controls",
      "title": "Use controls your camera actually provides",
      "paragraphs": [
        "Sony distinguishes ordinary anti-flicker shooting from finer shutter adjustment for supported cameras. Its standard anti-flicker function targets particular fluorescent-light frequencies; rapidly pulsing LEDs may need a different approach. The available control depends on the camera, shooting mode and shutter type.",
        "If your phone or camera exposes manual shutter speed, compare nearby settings while keeping the scene still. Judge both the stripes and the subject’s detail. A setting that reduces bands but introduces unacceptable motion blur is not a finished solution. If your app does not provide that control, changing the light or choosing another capture is a more useful next step than searching for a menu it does not have.",
        "Treat published shutter-speed examples as examples for their stated equipment and lighting. Do not assume a country’s mains frequency, or a camera’s anti-flicker label, identifies the behavior of every LED sign or dimmed lamp. These are camera troubleshooting options, not a claim that Meluvya provides manual capture controls."
      ]
    },
    {
      "id": "choose-response",
      "title": "Choose the next step from the comparison",
      "table": {
        "headers": [
          "What the comparison shows",
          "Useful next step"
        ],
        "rows": [
          [
            "Bands disappear under a different light",
            "Use that light for the important capture, or investigate the original fixture and supported camera controls."
          ],
          [
            "The preview improves but saved frames still show bands",
            "Judge the recorded file and try another supported setting; do not stop at a clean preview."
          ],
          [
            "One saved frame is much cleaner than the others",
            "Inspect that frame’s expression, focus and color before selecting it."
          ],
          [
            "The same lines remain across unrelated lighting conditions",
            "Reconsider the diagnosis and consult support for the device with representative original files."
          ]
        ]
      }
    },
    {
      "id": "editing-limits",
      "title": "Decide whether the saved image is worth repairing",
      "paragraphs": [
        "For an existing photograph, keep the original and judge what the stripe has obscured. A faint band on a simple wall is a different task from alternating dark and colored bands through a face. Try a modest local correction only if the remaining detail supports it, and compare the corrected area with its surroundings.",
        "Stop if the repair creates alternating skin tones, painted texture or visible seams. A cleaner neighboring frame or a retake may communicate the subject more accurately. Adding grain or a strong color effect can disguise a stripe, but that does not establish that the original detail was recovered."
      ]
    }
  ],
  "faq": [
    {
      "question": "Does banding mean my camera is broken?",
      "answer": "Not necessarily. Sony documents lighting flicker as a cause of bands without a camera malfunction. Compare different lighting conditions first; persistent lines across unrelated scenes deserve a separate device check."
    },
    {
      "question": "Will enabling anti-flicker remove every LED stripe?",
      "answer": "No. Flicker controls have equipment and lighting limits. Check your camera’s documentation and the actual saved photograph, rather than assuming a menu name guarantees a clean result."
    }
  ],
  "sources": [
    {
      "title": "Sony: why lighting flicker causes bands and color changes",
      "url": "https://www.sony.com/electronics/support/articles/00008839",
      "note": "Supports the artificial-light flicker mechanism and distinction between preview and recorded-image symptoms. Retrieved October 25, 2026."
    },
    {
      "title": "Sony: reducing camera flicker",
      "url": "https://www.sony.com/electronics/support/articles/00122281",
      "note": "Equipment-specific limits of anti-flicker shooting and variable shutter adjustment. Not evidence that every phone offers these controls. Retrieved October 25, 2026."
    }
  ],
  "related": [
    "fix-banding-in-sky-gradients",
    "reduce-moire-in-clothing-photos",
    "why-night-phone-photos-are-blurry"
  ],
  "image": "blog/pexels-29894331-4k.webp",
  "imageAlt": "Portrait beside glowing turquoise lights at night",
  "imagePosition": "50% 45%",
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
  "imageVariants": [
    {
      "src": "blog/pexels-29894331-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-29894331-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-29894331-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-29894331-4k.webp",
      "width": 2560
    }
  ],
  "imageCredit": {
    "name": "Everton Silva",
    "url": "https://www.pexels.com/photo/portrait-of-woman-with-neon-lights-at-night-29894331/"
  }
},
{
  "slug": "photos-upload-sideways-or-upside-down",
  "title": "Why photos upload sideways or upside down",
  "description": "Trace a sideways photo through its source, export and upload. Learn when to rotate it, when to test a fresh export, and how orientation metadata differs from mirroring.",
  "summary": "Find the first file or preview that turns sideways, then correct that stage without rotating a good original to compensate for one website.",
  "published": "2026-10-25",
  "modified": "2026-10-25",
  "quickAnswer": "If a photo is upright on your device but sideways after upload, compare the exact exported file with the destination’s thumbnail and full-size image. Orientation metadata and the way an app processes it can affect display. Rotate only a copy that is actually wrong, or test a fresh export of the correctly displayed edit. Verify the new upload before changing a whole set.",
  "sections": [
    {
      "id": "pixels-and-orientation",
      "title": "A photo’s stored pixels and display direction can differ",
      "paragraphs": [
        "A photo can carry EXIF orientation information telling software how to present its pixels. MDN’s image-orientation documentation shows that a browser can use that information to rotate the displayed image. A difference in how a viewer or upload pipeline handles orientation is therefore one possible explanation for a picture that looks upright in one place and sideways in another.",
        "That explanation is a hypothesis until you compare the files. A photo might also have been rotated during editing, or the upload may simply be a different version from the one you checked. Start with one picture whose top is obvious, such as a portrait beside a doorway or a book with readable lettering."
      ]
    },
    {
      "id": "find-first-change",
      "title": "Locate the first sideways version",
      "paragraphs": [
        "Keep the original, your intended export and a downloaded copy from the destination separate. Use clear filenames so you do not accidentally test the original twice. Open the actual image rather than relying on a small gallery thumbnail.",
        "A useful comparison has four checkpoints: the image in your photo library, the exported file opened separately, the destination’s thumbnail, and its full-size view. If only the thumbnail is wrong, report that difference instead of applying another rotation to every copy."
      ],
      "table": {
        "headers": [
          "First wrong view",
          "What to check next"
        ],
        "rows": [
          [
            "The source itself, in more than one viewer",
            "Correct a working copy’s rotation and keep the source preserved."
          ],
          [
            "The export, while the library version is upright",
            "Check that you exported the intended edited version and inspect a fresh candidate."
          ],
          [
            "The uploaded full-size image, while the same export is upright locally",
            "Test a fresh export and compare the destination’s processing; avoid altering the master to fit one failed upload."
          ],
          [
            "Only a thumbnail",
            "Compare the full-size view and downloaded file before deciding the image itself needs rotation."
          ]
        ]
      }
    },
    {
      "id": "rotate-a-copy",
      "title": "Rotate a copy when its direction is actually wrong",
      "paragraphs": [
        "In Apple’s iOS 26 Photos guide, the route is to open the photo, tap Edit, choose Crop and use Rotate for a quarter-turn. Tap Done when the direction is correct. Work on a preserved copy if you need to keep an independent version; iCloud Photos can synchronize edits across devices.",
        "Use the writing or another asymmetric feature as your check. Rotate changes which edge is at the top. Flip reverses left and right. If a word is backward but the scene is upright, repeated rotation is solving the wrong problem.",
        "If the photo already looks right in your library, leave that version alone while investigating the upload. Turning a correct master sideways to make one website display it upright creates a second problem for the next viewer or destination."
      ]
    },
    {
      "id": "fresh-export",
      "title": "Test a fresh export before repeating the upload",
      "paragraphs": [
        "Export a new delivery copy from the editor showing the correct orientation. Keep its dimensions suitable for the destination and avoid replacing the only original. A new filename helps you select the intended candidate; renaming by itself does not change its orientation.",
        "For example, Apple documents File → Export → Export [number] Photos in Photos on Mac, with JPEG available under Photo Kind. That is a concrete format-export route to test. It does not prove that every destination will interpret the result correctly, so open the exported JPEG separately and inspect the uploaded full-size version too.",
        "Apple’s developer guidance distinguishes an orientation change stored in metadata from an edited image whose intended direction is incorporated into its pixel data. This explains why a properly rendered export can help. It is not a promise that every app’s Save or Convert button performs the same operation. Do not strip metadata from the only original as a trial-and-error fix."
      ]
    },
    {
      "id": "verify-destination",
      "title": "Finish with a destination check",
      "paragraphs": [
        "Upload one test image before the rest of the set. Check the top edge, readable text, crop and any thumbnail used in the final layout. When the site allows it, download the uploaded image and reopen that file. Record which export and destination you actually checked.",
        "If a fresh candidate remains upright in local viewers but turns sideways only at one destination, give that service a representative sample and describe which stage changes. Avoid repeatedly rotating, compressing and uploading the whole library while the cause is still unclear. Keep the version that remains correct across the places you need to use it."
      ]
    }
  ],
  "faq": [
    {
      "question": "Will changing the filename fix the rotation?",
      "answer": "No. A name helps distinguish versions, but does not rotate pixels or correct orientation information. Verify the file itself and the destination’s full-size view."
    },
    {
      "question": "Should I take a screenshot of the upright photo?",
      "answer": "A screenshot can be a temporary visual reference, but it is a different image with the screen’s framing and dimensions. Prefer a checked export from the source for the version you intend to deliver."
    }
  ],
  "sources": [
    {
      "title": "MDN: image-orientation",
      "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/image-orientation",
      "note": "Explains display orientation based on EXIF information. It does not diagnose a particular upload service. Retrieved October 25, 2026."
    },
    {
      "title": "Apple: rotate and flip photos on iPhone — iOS 26",
      "url": "https://support.apple.com/guide/iphone/crop-rotate-flip-straighten-photos-videos-iph0f3ebb1dd/26/ios/26",
      "note": "Supports the Photos controls, quarter-turn versus horizontal flip, and iCloud edit synchronization. Retrieved October 25, 2026."
    },
    {
      "title": "Apple: export photos from Photos on Mac",
      "url": "https://support.apple.com/guide/photos/pht6e157c5f/mac",
      "note": "Supports the format-export command and JPEG choice; no universal orientation-fix guarantee. Retrieved October 25, 2026."
    },
    {
      "title": "Apple Developer: rendered edited photo content",
      "url": "https://developer.apple.com/documentation/photos/phcontenteditingoutput/renderedcontenturl",
      "note": "Explains incorporating intended orientation into edited pixel data while declaring upright orientation metadata. Retrieved October 25, 2026."
    }
  ],
  "related": [
    "why-iphone-selfies-flip",
    "jpeg-heic-png-photo-formats",
    "edit-photos-without-losing-original"
  ],
  "image": "blog/pexels-34225009-4k.webp",
  "imageAlt": "Photographer holding a memory card beside a card reader and laptop",
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
  "imagePosition": "60% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-34225009-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-34225009-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-34225009-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-34225009-4k.webp",
      "width": 3840
    }
  ],
  "imageCredit": {
    "name": "Julio Lopez",
    "url": "https://www.pexels.com/photo/photographer-inserting-sd-card-into-laptop-for-editing-34225009/"
  }
},
{
  "slug": "visual-look-up-iphone-photos",
  "title": "Use Visual Look Up on iPhone to identify a photo’s subject",
  "description": "Find Visual Look Up in iPhone Photos, inspect suggested objects or landmarks, and verify a result before attaching a confident name to your picture.",
  "summary": "Find a possible identity for a photographed object and check it against independent details.",
  "published": "2026-10-24",
  "modified": "2026-10-24",
  "quickAnswer": "Open the picture in Photos and look for the starred Info button. When Visual Look Up is available, use it to inspect the suggestion, then compare recognizable details with a reliable reference before naming the subject.",
  "sections": [
    {
      "id": "what-it-does",
      "title": "Start with a recognizable subject",
      "paragraphs": [
        "Apple’s iOS 26 guide describes Visual Look Up for subjects including landmarks, art, plants, pets and books. It is a starting point for identification, not a reason to label every photograph with the first result. Availability varies by language and region.",
        "Choose a frame in which the subject is easy to distinguish. A distant building behind several trees may offer less useful evidence than another frame showing its entrance and roof. Keep both the object and enough context to judge what the suggestion means."
      ]
    },
    {
      "id": "open-result",
      "title": "Open the result in Photos",
      "paragraphs": [
        "In Apple’s iOS 26 instructions, open the full photograph or pause the video on a frame. Tap the starred Info button, then Look Up at the top of the information panel. Other versions may present a subject icon in or below the picture.",
        "Apple says that a plain Info button without a star means the feature is not available for that photo. That does not establish that the subject is rare or impossible to identify. Try another clear view or use a conventional search with details you already know."
      ]
    },
    {
      "id": "verify",
      "title": "Separate a possible match from a confirmed name",
      "paragraphs": [
        "Apple’s support page says results can come from Siri Knowledge and the web. Open the underlying result and inspect what supports the match. A similar thumbnail is not enough to settle an identification.",
        "For a building from a holiday, compare its roofline, doorway, nearby features and known city. Then check the attraction’s own website or another authoritative local source. If a suggestion fits the building but conflicts with where the picture was taken, keep investigating rather than editing the location to fit the result."
      ],
      "table": {
        "headers": [
          "What you have",
          "Useful next step"
        ],
        "rows": [
          [
            "One plausible landmark name",
            "Compare distinctive architectural details and the known location"
          ],
          [
            "Several similar candidates",
            "Find another angle or a readable sign in your own photographs"
          ],
          [
            "A result with no supporting explanation",
            "Keep the label tentative and look for a direct source"
          ],
          [
            "No result",
            "Describe the visible features and search from those facts"
          ]
        ]
      }
    },
    {
      "id": "avoid-mixups",
      "title": "Keep recognition tasks separate",
      "paragraphs": [
        "If your aim is to transcribe a sign, use a text-extraction workflow. If you want to isolate the subject for a design, use a cutout workflow. Identification, copying words and removing a background solve different problems even when they begin with the same photograph.",
        "Do not use an uncertain object identification as the basis for a safety-sensitive decision. The practical goal here is finding a better caption or research lead, not certifying what an unknown object is."
      ]
    },
    {
      "id": "record",
      "title": "Keep a useful record of the answer",
      "paragraphs": [
        "Once a match is convincing, retain the supporting source and the detail that resolved your uncertainty. “North doorway matches the attraction’s visitor page” is more useful than “my phone said so.”",
        "For a family archive or travel journal, it is acceptable to write “possibly” and preserve the unresolved question. A cautious caption is easier to improve later than a confident wrong name repeated across an album."
      ]
    }
  ],
  "faq": [
    {
      "question": "Does no star mean the photo is unusable?",
      "answer": "No. It means this recognition feature is unavailable for that picture. The image may still be useful for manual research or a clearer crop for your own inspection."
    },
    {
      "question": "Should I change a photo’s location to match a suggestion?",
      "answer": "Verify the place first. A proposed identity should be checked against your travel history and visible evidence, not used to overwrite conflicting evidence."
    }
  ],
  "sources": [
    {
      "title": "Apple: Identify objects in your photos and videos — iOS 26",
      "url": "https://support.apple.com/guide/iphone/identify-objects-in-your-photos-and-videos-iph21c29a1cf/26/ios/26",
      "note": "Subjects, controls and availability."
    },
    {
      "title": "Apple: Look up what is in a photo",
      "url": "https://support.apple.com/en-us/104962",
      "note": "Star indicator and result sources."
    }
  ],
  "related": [
    "iphone-photo-cutout-background",
    "change-photo-date-time-iphone",
    "remove-location-from-iphone-photos"
  ],
  "image": "blog/pexels-35811832-4k.webp",
  "imageAlt": "Water droplet resting on the edge of a pink flower petal",
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
  "imagePosition": "50% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-35811832-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-35811832-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-35811832-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-35811832-4k.webp",
      "width": 2559
    }
  ],
  "imageCredit": {
    "name": "Robert Schwarz",
    "url": "https://www.pexels.com/photo/macro-shot-of-water-droplet-on-flower-petal-35811832/"
  }
},
{
  "slug": "jewelry-photos-with-phone",
  "title": "How to photograph jewelry with a phone without losing the detail",
  "description": "Use a controlled jewelry setup to separate distracting glare from useful shine, then record color, construction and scale clearly.",
  "summary": "Use a controlled jewelry setup to separate distracting glare from useful shine, then record color, construction and scale clearly.",
  "published": "2026-10-24",
  "modified": "2026-10-24",
  "quickAnswer": "Start with a stable phone, one consistent light source and an uncluttered surface. Compare the jewelry under softer light before adding a small highlight for sparkle. Make a clear record of the piece first; a dramatic sparkle shot should not be the only picture showing its color or construction.",
  "sections": [
    {
      "id": "goal",
      "title": "Decide what must be visible in this piece",
      "paragraphs": [
        "A ring can need several different views: its face, the height of the setting, the band and a mark or engraving. Write these down before moving the lights. If the purpose is documenting a personal piece, include the detail that makes it identifiable; if it is a listing, show features relevant to the item’s condition.",
        "For a two-tone ring, use the contrast between the metals as your check. If a lighting change makes them look identical, the photograph has lost useful information even if the stone looks more dramatic."
      ]
    },
    {
      "id": "prepare",
      "title": "Prepare a small, controllable workspace",
      "paragraphs": [
        "GIA recommends stable camera support and checking for fingerprints or dust before capture. Follow the piece’s own care instructions; photography is not a reason to polish an unfamiliar gemstone or apply a cleaning product. Place the item where you can turn it without repeatedly handling the visible surface.",
        "Keep the first arrangement simple enough to describe in one sentence, such as “ring on a neutral card, light at the left, phone fixed in front.” Change one part at a time and keep a reference photograph. This makes an improvement repeatable when you photograph the next view."
      ]
    },
    {
      "id": "light",
      "title": "Give shape and sparkle separate jobs",
      "paragraphs": [
        "GIA explains that diffused light can show gentle transitions on polished metal, while more direct light can introduce gemstone sparkle. It also advises avoiding mixed lighting colors. Start with an even, readable version rather than several competing light sources.",
        "broncolor’s ring demonstration uses a broad reflection and separate small highlight sources. You do not need its studio equipment to use the decision behind that setup: first judge the shape of the metal, then decide whether a localized accent adds anything.",
        "Try a modest experiment with a continuous light you can safely reposition. Keep the ring and phone still, move the light a little, and inspect the change. If the reflection crosses an engraving, return to the clearer version. Do not add a second light until you can name the missing feature it should reveal."
      ]
    },
    {
      "id": "diagnose",
      "title": "Read the problem before changing the whole setup",
      "paragraphs": [],
      "table": {
        "headers": [
          "Observation",
          "Next comparison"
        ],
        "rows": [
          [
            "A white patch hides metal detail",
            "Compare a softer or differently placed light while keeping the camera fixed."
          ],
          [
            "The stone is bright but its setting is unclear",
            "Make a separate construction view rather than forcing sparkle and documentation into one frame."
          ],
          [
            "A dark patch resembles a flaw",
            "Turn the piece slightly and see whether the patch moves with the reflection. Keep an honest condition image too."
          ],
          [
            "The close view is soft",
            "Increase the working distance and verify the saved file before attempting a tighter detail."
          ]
        ]
      }
    },
    {
      "id": "finish",
      "title": "Deliver a useful set, not just the most dramatic frame",
      "paragraphs": [
        "Put the overall view beside a detail view and a scale reference. Ask whether someone could recognize the same piece from each image. If a dramatic angle makes the ring look unusually thick or thin, let the straightforward view establish the shape.",
        "Keep edits conservative when documenting color or condition. A phone photograph is not a gemstone identification or grading report, and a bright display does not establish the stone’s appearance in every light. Separate artistic interpretations from the images used to represent the physical object."
      ]
    }
  ],
  "faq": [
    {
      "question": "Should I remove every reflection from metal?",
      "answer": "No. Decide whether a reflection helps describe the form or hides a feature. Completely flattening all tonal variation can make the surface less understandable."
    },
    {
      "question": "Can one photograph show both sparkle and accurate detail?",
      "answer": "Sometimes, but a second clearly labeled view is often more useful than compromising every feature to fit one image."
    }
  ],
  "sources": [
    {
      "title": "GIA: photographing gems and jewelry",
      "url": "https://www.gia.edu/gem-photography",
      "note": "Diffusion, metal surfaces and color-consistent lighting; 2015 article used for enduring technique, not current app recommendations. Retrieved October 23, 2026."
    },
    {
      "title": "broncolor: photographing rings",
      "url": "https://broncolor.swiss/news/how-to-photograph-jewelry-rings",
      "note": "Demonstrated separation of broad reflections and small highlight lights. Retrieved October 23, 2026."
    }
  ],
  "related": [
    "iphone-macro-close-up-focus",
    "clean-phone-camera-lens",
    "why-photos-look-different-on-screens"
  ],
  "image": "blog/pexels-16689780-4k.webp",
  "imageAlt": "Close view of a hand wearing a gold ring with a pearl",
  "imagePosition": "50% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-16689780-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-16689780-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-16689780-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-16689780-4k.webp",
      "width": 2560
    }
  ],
  "imageCredit": {
    "name": "cnrdmroglu",
    "url": "https://www.pexels.com/photo/gold-ring-on-hand-of-woman-16689780/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "add-text-arrows-iphone-photo",
  "title": "How to add readable text and arrows to an iPhone photo",
  "description": "Use iPhone Markup to label a photo with text and arrows, then check readability, placement and the saved result before sharing.",
  "summary": "Annotate a picture so a recipient can understand one clear instruction.",
  "published": "2026-10-24",
  "modified": "2026-10-24",
  "quickAnswer": "Open the photograph in Photos, choose Edit → Markup, and use its text and shape tools. Keep labels brief, point arrows precisely, then inspect the saved image at the size the recipient will see.",
  "sections": [
    {
      "id": "purpose",
      "title": "Write the instruction before decorating the image",
      "paragraphs": [
        "An annotation should help someone do or understand something: find the entrance, identify a detail, or compare two areas. Write that purpose in one sentence before adding labels. If the picture needs a paragraph of explanation, consider putting the longer explanation in the accompanying message.",
        "Work on a separate version when you need an unmarked photograph later. Keep the finished annotation easy to distinguish from the source so that the wrong version does not become your next edit."
      ]
    },
    {
      "id": "tools",
      "title": "Open Markup and add the label",
      "paragraphs": [
        "Apple’s support route is Photos → select photo → Edit → Markup. Use Add for text or shapes, then Done and Done again to save. Apple’s iOS 26 guide describes Add Text, a movable text box and formatting controls for size, font, alignment and color.",
        "For an arrow, use the shape tools where available. The guide also describes drawing a shape in one stroke and pausing at its end to replace it with a more regular version. Adjust its position and direction so that the tip identifies the intended detail. Compare the guide for your installed software if the controls differ."
      ]
    },
    {
      "id": "example",
      "title": "Example: show someone which entrance to use",
      "paragraphs": [
        "Imagine a building with two doors. Put “Use this entrance” in an uncluttered area and point one arrow to the correct doorway. Avoid covering the sign or distinguishing feature the visitor needs to recognize.",
        "If two instructions are necessary, use short labels such as “Entrance” and “Meeting point.” A second arrow should add information, not merely make the photograph look busier. Choose the label color against the actual background, including both its bright and dark areas."
      ]
    },
    {
      "id": "readability",
      "title": "Check three things before sending",
      "paragraphs": [],
      "list": {
        "ordered": false,
        "items": [
          {
            "title": "Readability",
            "text": "View the whole image at ordinary phone size. If you have to zoom to read a simple instruction, shorten or enlarge the text."
          },
          {
            "title": "Accuracy",
            "text": "Trace each arrow from its label to its tip. Make sure the point lands on the exact object rather than a neighboring feature."
          },
          {
            "title": "Context",
            "text": "Check whether a label or shape hides evidence that the recipient needs to orient themselves."
          }
        ]
      }
    },
    {
      "id": "limits",
      "title": "Annotation is not a secure-redaction workflow",
      "paragraphs": [
        "This guide adds visible explanation; it does not establish that covered information has been securely removed. If the source contains something the recipient should not receive, prepare a suitable sanitized file through a separate redaction process and verify that result.",
        "Also check the outgoing file after saving. A label that looked readable while zoomed in may be too small in a compressed message preview. Keep only the annotations that help the intended reader, and use the accompanying text for anything that does not belong on the image."
      ]
    }
  ],
  "faq": [
    {
      "question": "How much text should go on the photograph?",
      "answer": "Use the shortest label that makes the action clear. Move background explanation into the message so that the picture stays readable."
    },
    {
      "question": "Should I draw arrows over the subject?",
      "answer": "Place the arrow where its destination is unambiguous, but preserve the detail the recipient needs to recognize. If it obscures that detail, move the label or use a different crop."
    }
  ],
  "sources": [
    {
      "title": "Apple: Use Markup on iPhone",
      "url": "https://support.apple.com/en-us/119875",
      "note": "Photos entry and saving steps."
    },
    {
      "title": "Apple: Add text, shapes and more — iOS 26",
      "url": "https://support.apple.com/guide/iphone/add-text-shapes-stickers-and-more-iphcdb1d0bc7/26/ios/26",
      "note": "Text controls, shapes and drawing correction."
    }
  ],
  "related": [
    "edit-photos-without-losing-original",
    "how-to-crop-portrait-photos",
    "resize-vs-compress-photos-for-upload"
  ],
  "image": "blog/pexels-15758649-4k.webp",
  "imageAlt": "Photographer holding a camera in front of a mirror",
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
  "imagePosition": "50% 40%",
  "imageVariants": [
    {
      "src": "blog/pexels-15758649-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-15758649-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-15758649-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-15758649-4k.webp",
      "width": 2571
    }
  ],
  "imageCredit": {
    "name": "Elif Çöküç",
    "url": "https://www.pexels.com/photo/woman-taking-a-mirror-selfie-with-a-camera-15758649/"
  }
},
{
  "slug": "photograph-artwork-with-phone",
  "title": "How to photograph paintings and drawings faithfully with a phone",
  "description": "Record two-dimensional artwork with even light, straight geometry and a separate detail view, without turning the reproduction into a creative edit.",
  "summary": "Record two-dimensional artwork with even light, straight geometry and a separate detail view, without turning the reproduction into a creative edit.",
  "published": "2026-10-24",
  "modified": "2026-10-24",
  "quickAnswer": "Position the phone square to the artwork, illuminate the whole surface evenly and include all four edges in a reference frame. Check a center detail and the corners before moving anything. Make a faithful full-work photograph first, then separate detail images for texture, signatures or condition.",
  "sections": [
    {
      "id": "plan",
      "title": "Choose a record of the work before a styled photograph",
      "paragraphs": [
        "A portfolio image should let the viewer assess the artwork. A studio photograph may instead show the work, room and artist together. Make those different pictures intentionally. Do not use a dramatic room view as the only record of a painting whose colors and proportions matter.",
        "List the required files before setting up: full work, one texture detail and a signature or condition view if relevant. Record the title and dimensions in your notes so they remain associated with the correct files during editing."
      ]
    },
    {
      "id": "alignment",
      "title": "Align the phone with the work itself",
      "paragraphs": [
        "The University of Iowa recommends even light and aligning a two-dimensional work with the camera frame; larger work can be photographed on a neutral wall. Smith College advises centering the camera at the artwork’s midpoint. Keep the phone’s image plane parallel to the surface, including any tilt in the work.",
        "For a rectangular painting, compare opposite sides in your preview. If one side appears much shorter, adjust the camera position before cropping. Leave a small border in a reference image so you can verify the shape later. Avoid a very tight capture that conceals an accidentally missing corner."
      ]
    },
    {
      "id": "illumination",
      "title": "Check the full surface for glare and uneven light",
      "paragraphs": [
        "Iowa advises against the phone’s built-in flash for documenting artwork. If you use two lights, Smith College describes placing them to either side and adjusting their positions to avoid reflections. Its camera-specific aperture and lens settings are not universal phone settings.",
        "Inspect several points rather than judging the center alone: top, bottom, both sides and a region with subtle color. A bright patch that moves when the light moves is a capture problem to solve before editing. On glossy or framed work, try another lighting position instead of making the whole image darker.",
        "Do not unframe a fragile work or touch its surface just to remove glare. If you cannot make an acceptable record with a safe setup, use a specialist reproduction service or document the limitation alongside the image."
      ]
    },
    {
      "id": "sequence",
      "title": "Use a consistent capture and review sequence",
      "paragraphs": [],
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Full reference.",
            "text": "Include the entire work and a narrow surrounding border. Keep this frame even if the final submission requires a closer crop."
          },
          {
            "title": "Geometry check.",
            "text": "Compare straight edges and corners in the saved file. Correct the physical setup if a large adjustment would be needed."
          },
          {
            "title": "Detail check.",
            "text": "Inspect a fine mark in the center and near a corner. A sharp center alone is not enough for a faithful full-work reproduction."
          },
          {
            "title": "Separate detail image.",
            "text": "Photograph texture or a signature with its own framing. Keep its filename associated with the full-work image."
          }
        ]
      }
    },
    {
      "id": "editing",
      "title": "Edit to match the object, not a fashionable look",
      "paragraphs": [
        "Compare the capture with the work in a stable viewing situation. Do not increase saturation simply because the phone display makes the picture feel subdued. If a color is important to an application or print, a casual screen comparison is not a substitute for a controlled color workflow.",
        "Keep an untouched capture and a delivery copy. Record any perspective correction or significant color adjustment. Cropping a border is different from removing a mark that belongs to the work. For a submission, follow its actual file and framing requirements rather than assuming every portfolio wants the same format."
      ]
    }
  ],
  "faq": [
    {
      "question": "Is this the same as scanning an old printed photograph?",
      "answer": "No. A large painting or drawing requires attention to its plane, surface, illumination and faithful appearance. A detail view may need different light from the full-work record."
    },
    {
      "question": "Can I use Portrait mode to blur the wall?",
      "answer": "For a reproduction, start with a normal photograph that preserves the work’s boundaries. Make a separate styled image if you want a more decorative presentation."
    }
  ],
  "sources": [
    {
      "title": "University of Iowa: photographing artwork at home",
      "url": "https://art.uiowa.edu/sites/art.uiowa.edu/files/2024-02/photographing_artwork_at_home.pdf",
      "note": "Even light and alignment for two-dimensional work. Retrieved October 23, 2026."
    },
    {
      "title": "Smith College: documenting artwork",
      "url": "https://sites.smith.edu/ickb/documenting-your-artwork/documenting-your-artwork-scanning-cameras-lighting/",
      "note": "Camera centering and two-light placement; camera-specific settings are not transferred to phones. Retrieved October 23, 2026."
    }
  ],
  "related": [
    "fix-perspective-in-phone-photos",
    "srgb-vs-display-p3-photo-export",
    "scan-printed-photos-with-phone"
  ],
  "image": "blog/pexels-20511253-4k.webp",
  "imageAlt": "Artist working on a large abstract canvas in a studio",
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
  "imagePosition": "50% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-20511253-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-20511253-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-20511253-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-20511253-4k.webp",
      "width": 3840
    }
  ],
  "imageCredit": {
    "name": "Alina Rossoshanska",
    "url": "https://www.pexels.com/photo/man-painting-a-picture-on-a-canvas-in-a-studio-20511253/"
  }
},
{
  "slug": "fix-banding-in-sky-gradients",
  "title": "How to troubleshoot banding in sky gradients",
  "description": "Find where stepped sky gradients first appear, protect smooth tones during editing, and distinguish file damage from a preview or delivery issue.",
  "summary": "A source-to-delivery diagnosis for skies that show visible color steps instead of smooth transitions.",
  "quickAnswer": "Compare the original, the edited master and the delivered file to find where the bands first appear. Reduce the edit or export change that introduces them. Higher-bit-depth editing can reduce new posterization, but converting an already damaged picture does not recreate its missing tonal transitions.",
  "published": "2026-10-24",
  "modified": "2026-10-24",
  "image": "blog/pexels-23203338-4k.webp",
  "imageAlt": "Green mountain ridges beneath a blue sky",
  "imagePosition": "50% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-23203338-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-23203338-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-23203338-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-23203338-4k.webp",
      "width": 3840
    }
  ],
  "imageCredit": {
    "name": "Ella Ragasa",
    "url": "https://www.pexels.com/photo/panorama-of-a-mountain-landscape-23203338/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
  "sections": [
    {
      "id": "identify-banding",
      "title": "Make sure you are diagnosing a stepped gradient",
      "paragraphs": [
        "Look for broad, visible steps across an area that should change gradually, such as a clear sky. This guide concerns that kind of banding. Repeating stripes under artificial light, fine fabric patterns and stitching seams are different problems and deserve a different diagnosis.",
        "Use one clearly visible sky area as your reference. Mark its location mentally so you compare the same patch each time. A crop that excludes the difficult area can make a version look improved without resolving the actual issue."
      ]
    },
    {
      "id": "locate-stage",
      "title": "Find the first version that shows the bands",
      "paragraphs": [
        "Keep the same viewing size for the first comparison, then inspect the actual files rather than relying on message previews. This sequence is a diagnostic exercise, not evidence that a particular website or device damaged your photograph."
      ],
      "table": {
        "headers": [
          "First affected version",
          "Useful next experiment"
        ],
        "rows": [
          [
            "Original source",
            "Compare another capture if available; do not begin by blaming an export setting."
          ],
          [
            "Edited master",
            "Disable recent changes one at a time and watch the same sky patch."
          ],
          [
            "Export",
            "Export again from the master with one relevant setting changed."
          ],
          [
            "Uploaded or received copy",
            "Download that actual copy and compare it with your clean export."
          ],
          [
            "Only one viewer or display",
            "Check the same file elsewhere before altering the master to compensate."
          ]
        ]
      }
    },
    {
      "id": "editing-precision",
      "title": "Protect smooth transitions while editing",
      "paragraphs": [
        "Adobe’s bit-depth documentation explains that higher precision provides more tonal values for adjustment and can reduce posterization during editing. In a suitable Photoshop workflow, a 16-bit working document is therefore useful for substantial tonal changes. It is a prevention measure, not proof that every source or export will remain smooth.",
        "If the bands appear after a strong edit, try reducing the specific adjustment before replacing the sky or blurring the picture. Keep the version with the better transition beside the stronger version. Decide whether the extra drama is worth the visible steps.",
        "Changing an already posterized file to a higher-precision container does not tell the editor what the lost shades originally were. Return to the earlier source when possible. Keep the higher-quality working version rather than repeatedly rebuilding the edit from a finished delivery copy."
      ]
    },
    {
      "id": "gradient-vs-sky",
      "title": "Dithered artwork is a different case",
      "paragraphs": [
        "Photoshop includes a Dither option when creating gradients, which Adobe documents as a way to reduce banding. That is relevant when you are making a gradient background, overlay or graphic. It is not a one-click reconstruction tool for a photographed sky.",
        "For an invitation with a generated blue background, recreate the gradient with that option and inspect the export. For a sunset photograph, first investigate the source and adjustments. These two files may show similar-looking steps while requiring different work.",
        "Avoid adding heavy texture merely to hide a fault you have not located. A textured treatment can be an artistic choice, but it should not be confused with recovering the original smooth sky."
      ]
    },
    {
      "id": "delivery-check",
      "title": "Check the version people will actually see",
      "paragraphs": [
        "Open the exported image, then inspect the received or uploaded version if that is the intended destination. Compare the sky and any nearby fine detail so a smoother-looking result does not conceal a new loss elsewhere.",
        "If your clean master and export are satisfactory but a particular destination changes them, retain the clean files and troubleshoot that delivery path. Do not weaken every future edit to accommodate one unverified preview. Keep a short note of the settings and destination you actually checked."
      ]
    }
  ],
  "faq": [
    {
      "question": "Will changing an 8-bit file to 16-bit remove existing bands?",
      "answer": "It cannot infer the original shades that are already absent. A higher-precision working file can help with subsequent editing, but an earlier source is the better starting point when available."
    },
    {
      "question": "Should I blur the whole photo to fix the sky?",
      "answer": "First locate the stage that introduces the steps. A whole-image blur can sacrifice useful detail without resolving the cause; compare a less aggressive edit or a different export first."
    }
  ],
  "sources": [
    {
      "title": "Adobe: bit depth in Photoshop",
      "url": "https://helpx.adobe.com/photoshop/desktop/adjust-color/color-modes/bit-depth-in-photoshop.html",
      "note": "Higher-precision editing and reduced posterization risk. Checked October 23, 2026."
    },
    {
      "title": "Adobe: apply a gradient fill",
      "url": "https://helpx.adobe.com/photoshop/desktop/adjust-color/color-effects-techniques/apply-gradient-fill.html",
      "note": "Dither for newly created Photoshop gradients. Checked October 23, 2026."
    }
  ],
  "related": [
    "why-saved-photos-lose-quality",
    "why-photos-look-different-on-screens",
    "raw-vs-jpeg-phone-photography"
  ]
},
{
  "slug": "control-featured-photos-iphone",
  "title": "Control featured photos and photo memories on iPhone",
  "description": "Reduce a person’s appearances, turn off featured content, or remove a Photos widget without using deletion as a display preference.",
  "summary": "Choose what Photos surfaces automatically while keeping display preferences separate from access control.",
  "published": "2026-10-24",
  "modified": "2026-10-24",
  "quickAnswer": "Choose a person-specific preference, the featured-content control or widget removal according to the problem. Keep automatic display choices separate from deciding which photographs to delete.",
  "sections": [
    {
      "id": "choose-scope",
      "title": "Choose the narrowest display change",
      "paragraphs": [
        "A photo can be valuable in your library and unwelcome as an unexpected Home Screen reminder. You do not have to solve both questions in the same way. Start by identifying where the surprise appears and what you want to stop."
      ],
      "table": {
        "headers": [
          "Desired outcome",
          "Control to investigate"
        ],
        "rows": [
          [
            "Fewer suggestions involving one person",
            "Person-specific featuring preference"
          ],
          [
            "Stop automatic featured photos and memories",
            "Show Featured Content"
          ],
          [
            "Keep Photos preferences but remove a visible widget",
            "Remove that widget"
          ],
          [
            "Keep a picture out of ordinary browsing",
            "A separate hiding and authentication decision"
          ]
        ]
      }
    },
    {
      "id": "person",
      "title": "Change a person’s featuring preference",
      "paragraphs": [
        "On iOS 26, open a photo of the intended person. Use More → Don’t Feature a Person, select them if prompted, then choose Feature This Person Less or Never Feature This Person and confirm.",
        "Take care with group photographs. Before confirming, check whose preference you are changing. If your concern is one particular person, a broader change may remove suggestions you still enjoy."
      ]
    },
    {
      "id": "featured",
      "title": "Turn off automatic featured content",
      "paragraphs": [
        "Photos → Collections → your account contains Show Featured Content. Turn it off to stop automatic featured photos and memories.",
        "Choose the broader switch when the issue is automatic selection itself, rather than one person. For example, someone who wants a quiet phone during a busy work period may prefer to remove the stream of reminders instead of making dozens of individual decisions."
      ]
    },
    {
      "id": "widget",
      "title": "Remove the widget when the screen is the problem",
      "paragraphs": [
        "Apple’s widget guide uses touch and hold the widget → Remove Widget → Remove. If Photos is inside a Smart Stack, inspect the stack as well; its Edit Stack control includes Widget Suggestions, which governs suggested widgets.",
        "Check the actual screen where the photograph appeared. Removing one visible widget is not the same as reviewing every stack or Today View layout. This is a useful finishing check after changing your Home Screen design."
      ]
    },
    {
      "id": "limits",
      "title": "Do not mistake display preferences for privacy protection",
      "paragraphs": [
        "These controls answer “What should appear automatically?” Treat “Who can open this photograph?” as a separate question. If access is the concern, review the relevant hiding, authentication and app-permission controls rather than relying on a quieter widget.",
        "Keep the photographs you still want deliberately organized. A private shortlist for a future album can remain useful even when automatic reminders are unwelcome. Revisit the preference later if your goal changes; there is no need to settle every library decision while adjusting one display."
      ]
    }
  ],
  "faq": [
    {
      "question": "Should I delete a photo because it appears in a widget?",
      "answer": "First decide whether you dislike the photograph itself or only its automatic appearance. A display change is often the more precise response to the second problem."
    },
    {
      "question": "Why check Smart Stacks too?",
      "answer": "The place that displayed the picture may be a rotating stack rather than a standalone widget. Inspect the actual surface before concluding that the change failed."
    }
  ],
  "sources": [
    {
      "title": "Apple: Hide people, memories and holidays — iOS 26",
      "url": "https://support.apple.com/guide/iphone/hide-people-memories-and-holidays-iph10a9dd2a1/26/ios/26",
      "note": "Person preferences and featured-content controls."
    },
    {
      "title": "Apple: Add and edit widgets on iPhone",
      "url": "https://support.apple.com/en-us/118610",
      "note": "Widget removal and Smart Stack suggestions."
    }
  ],
  "related": [
    "iphone-burst-photos-select-best-frame",
    "icloud-photos-sync-vs-backup",
    "edit-photos-without-losing-original"
  ],
  "image": "blog/pexels-12182725-4k.webp",
  "imageAlt": "Black-and-white portrait beside glass with reflected lights",
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
  "imagePosition": "50% 45%",
  "imageVariants": [
    {
      "src": "blog/pexels-12182725-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-12182725-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-12182725-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-12182725-4k.webp",
      "width": 2560
    }
  ],
  "imageCredit": {
    "name": "Connor McManus",
    "url": "https://www.pexels.com/photo/portrait-of-a-woman-at-night-12182725/"
  }
},
{
  "slug": "reduce-moire-in-clothing-photos",
  "title": "How to reduce moiré in clothing photos",
  "description": "Identify false waves or colors in fabric, compare the source and export, and try a local correction without erasing the garment’s texture.",
  "summary": "A garment-first workflow for handling false repeating patterns while preserving real weave, seams and color.",
  "quickAnswer": "Check the garment in the original at 100% view and in the final-size export. If false waves or colors remain, try a local moiré adjustment where your editor provides one. Keep the correction confined to the affected fabric and compare seams and genuine colors before deciding it helped.",
  "published": "2026-10-24",
  "modified": "2026-10-24",
  "image": "blog/pexels-32644860-4k.webp",
  "imageAlt": "Woman in a pink shirt and red cap leaning through an open window",
  "imagePosition": "50% 40%",
  "imageVariants": [
    {
      "src": "blog/pexels-32644860-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-32644860-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-32644860-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-32644860-4k.webp",
      "width": 3840
    }
  ],
  "imageCredit": {
    "name": "Muhammad-Taha Ibrahim",
    "url": "https://www.pexels.com/photo/portrait-of-smiling-woman-at-window-in-abuja-32644860/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
  "sections": [
    {
      "id": "recognize",
      "title": "Recognize a false pattern in a real pattern",
      "paragraphs": [
        "Nikon explains moiré as a new pattern formed when a subject’s fine repeating detail interacts with the camera’s sampling pattern. Woven fabric is a common example. It can create distracting shapes or false color even when the garment itself does not contain them.",
        "Compare with what you know about the clothing. A rainbow-like patch on a plain fine weave deserves investigation; an actual printed stripe should not be removed just because it is repetitive. If you can check another frame or the garment itself, use that reference.",
        "Keep this separate from random speckles in a dark photograph. A noise-cleanup approach may not address the repeating structure that is bothering you."
      ]
    },
    {
      "id": "compare-versions",
      "title": "Compare source, preview and delivery",
      "paragraphs": [
        "Inspect the original at 100% magnification, as Nikon recommends for evaluating the artifact, and also look at the intended display size. Open the exported file separately. Do not decide solely from a small editing preview.",
        "If the troubling pattern changes dramatically between viewing sizes or appears only in the resized delivery, make a second export from the same clean master and compare the actual results. That observation helps locate the problem; it does not prove that the original contains no artifact.",
        "Keep the image content and edit consistent during this comparison. Changing the crop, detail settings and export dimensions together makes it difficult to know which decision helped."
      ]
    },
    {
      "id": "local-correction",
      "title": "Try a local correction on the cloth",
      "paragraphs": [
        "Adobe documents a Moiré control among Lightroom mobile’s local adjustment options. Availability and placement should be checked against the editor and version you use."
      ],
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Select the affected area.",
            "text": "Use a mask limited to the problematic fabric. Include the visible problem without unnecessarily covering skin, jewelry or surrounding objects."
          },
          {
            "title": "Make a restrained trial.",
            "text": "Increase the relevant correction gradually while watching the false pattern. Avoid treating the slider’s maximum as a target."
          },
          {
            "title": "Inspect real garment detail.",
            "text": "Compare seams, buttons, folds and any genuine color variation. Check that the apparent improvement has not turned the material into an indistinct patch."
          },
          {
            "title": "Reopen the final export.",
            "text": "Judge the delivered size as well as a close view. Save the editable version so a later delivery size can be assessed independently."
          }
        ]
      }
    },
    {
      "id": "alternate-capture",
      "title": "Use another capture when it is the better option",
      "paragraphs": [
        "For an important garment photograph, compare nearby frames before spending a long time repairing one. Nikon notes that changing the relationship between camera and subject, including angle or focal length, can alter the occurrence of moiré.",
        "A practical retake exercise is to preserve the garment’s pose and lighting while making a small viewpoint change, then compare the fabric carefully. For a portrait, keep the face usefully focused; sacrificing the whole subject’s clarity is not an attractive default solution to a shirt problem.",
        "For an online listing, the weave and color may be essential information. A cleaner alternate frame can be more honest and more useful than a heavily smoothed version of the troublesome one."
      ]
    },
    {
      "id": "limits",
      "title": "Accept the limits of a correction",
      "paragraphs": [
        "Look separately at the false color and the false pattern. A result can improve one while leaving the other noticeable. If acceptable correction requires removing the garment’s real character, choose another image or revise the capture.",
        "Keep the original and label the finished version clearly. Do not describe a reconstructed or strongly altered fabric as an accurate record of its texture when you cannot verify that claim."
      ]
    }
  ],
  "faq": [
    {
      "question": "Is moiré the same as digital noise?",
      "answer": "No. This guide concerns a false repeating pattern or color associated with fine detail. Random speckles and blotches require a separate diagnosis."
    },
    {
      "question": "Will desaturating the shirt fix every case?",
      "answer": "It may hide a colored symptom while leaving a false brightness pattern, and it can change the garment’s true color. Compare a dedicated local correction or another frame first."
    }
  ],
  "sources": [
    {
      "title": "Nikon: Moiré and false color",
      "url": "https://www.nikonusa.com/learn-and-explore/c/products-and-innovation/moire-false-color",
      "note": "Repeating-detail interference, close inspection and capture changes. Checked October 23, 2026."
    },
    {
      "title": "Adobe: Lightroom local adjustment controls",
      "url": "https://helpx.adobe.com/lightroom/mobile/masks-and-selective-adjustments/local-adjustment-controls.html",
      "note": "Availability of local Moiré adjustment. Checked October 23, 2026."
    }
  ],
  "related": [
    "photo-noise-vs-film-grain",
    "photo-sharpening-vs-resolution",
    "resize-vs-compress-photos-for-upload"
  ]
},
{
  "slug": "food-photos-with-phone",
  "title": "How to photograph food with your phone before it goes cold",
  "description": "Choose an angle and simple light for phone food photos, then capture a useful sequence before the dish changes.",
  "summary": "Choose an angle and simple light for phone food photos, then capture a useful sequence before the dish changes.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "quickAnswer": "Decide what makes the dish recognizable, choose an angle that shows it and prepare the frame before serving. Soft light from beside the table is a useful starting point. Make a clear overall photograph first, then a detail or action shot, so an elaborate setup does not cost you the best moment.",
  "sections": [
    {
      "id": "angle",
      "title": "Match the angle to the food you need to show",
      "paragraphs": [
        "Canon’s food guide distinguishes overhead, angled and straight-on views: the right choice depends on the food’s shape. A topping or arrangement can read from above; layers need a view that reveals their height.",
        "Try this with a bowl of noodles: make one high view that explains the ingredients and one lower view that shows the bowl and a lifted forkful. Choose the one that answers your purpose. A recipe record and a picture of dinner with friends need not use the same composition."
      ]
    },
    {
      "id": "light",
      "title": "Use one manageable lighting setup",
      "paragraphs": [
        "Adobe recommends diffused daylight and warns that household overhead lighting can add unwanted color. Put the plate near indirect window light when possible and switch off a conflicting room light if you control it. Keep direct sun from making the shiny sauce unreadable.",
        "In a restaurant, work with the table you have rather than turning the meal into a lighting production. Rotate the plate and compare two camera positions. If a reflection still covers the main ingredient, make the wider memory photograph and leave the detailed food study for another setting."
      ]
    },
    {
      "id": "sequence",
      "title": "Prepare before the food arrives",
      "paragraphs": [],
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Frame an empty plate.",
            "text": "Decide whether the picture includes the whole place setting or just the food. Remove a distracting receipt or charging cable now."
          },
          {
            "title": "Choose the important feature.",
            "text": "Name what must survive: the crisp edge, a filling, a sauce pattern or the shared table. This keeps the next decisions specific."
          },
          {
            "title": "Photograph the complete dish.",
            "text": "Capture a usable record before cutting, pouring or lifting anything."
          },
          {
            "title": "Make one planned variation.",
            "text": "Add the forkful, cut section or serving gesture you decided on. Stop when it explains something the first photograph did not."
          }
        ]
      }
    },
    {
      "id": "detail",
      "title": "Check food texture instead of chasing a bright screen",
      "paragraphs": [
        "Look at a small textured area, such as the surface of bread, alongside a glossy area. If brightening makes the glossy region featureless, try a different plate angle or lighting position before adding more exposure. The goal is readable food, not a uniformly bright rectangle.",
        "Canon highlights the need to plan around changing ingredients. Ice, foam and fresh toppings will not wait for a long composition experiment. For practice, use a dish that can sit while you learn, then keep the setup ready for the less forgiving subject."
      ]
    },
    {
      "id": "troubleshoot",
      "title": "Choose the next physical adjustment",
      "paragraphs": [],
      "table": {
        "headers": [
          "What distracts",
          "A useful next attempt"
        ],
        "rows": [
          [
            "Too much empty rim",
            "Try a tighter composition or an angle that makes the plate part of the setting."
          ],
          [
            "A tall garnish hides the filling",
            "Turn the plate and inspect which ingredient becomes visible."
          ],
          [
            "Everything looks orange",
            "Check the light sources before repeatedly cooling the entire edit."
          ],
          [
            "The food no longer resembles what was served",
            "Keep a faithful version; reserve dramatic restyling for clearly creative use."
          ]
        ]
      }
    }
  ],
  "faq": [
    {
      "question": "Do I need special food props?",
      "answer": "No. Begin with the real serving plate and one useful utensil. Additional props should explain scale, ingredients or the occasion."
    },
    {
      "question": "Should every food photo be overhead?",
      "answer": "No. Compare what the angle reveals and conceals. A useful picture of a layered sandwich may need a different viewpoint from a decorated tart."
    }
  ],
  "sources": [
    {
      "title": "Canon: tips for food photography",
      "url": "https://www.usa.canon.com/learning/training-articles/training-articles-list/cooking-with-the-camera-tips-for-amazing-food-photography",
      "note": "Camera angle and shape of food. Retrieved October 23, 2026."
    },
    {
      "title": "Adobe: food photography",
      "url": "https://www.adobe.com/creativecloud/photography/type/food-photography.html",
      "note": "Diffuse daylight and unwanted mixed-light color. Retrieved October 23, 2026."
    }
  ],
  "related": [
    "remove-color-cast-from-photos",
    "iphone-macro-close-up-focus",
    "iphone-ae-af-lock"
  ],
  "image": "blog/pexels-7791114-4k.webp",
  "imageAlt": "Overhead view of granola, blueberries and a bowl of yogurt on a dark table",
  "imagePosition": "50% 50%",
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
  "imageVariants": [
    {
      "src": "blog/pexels-7791114-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-7791114-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-7791114-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-7791114-4k.webp",
      "width": 3840
    }
  ],
  "imageCredit": {
    "name": "Ron Lach",
    "url": "https://www.pexels.com/photo/flat-lay-photography-of-a-person-preparing-granola-for-breakfast-on-black-surface-7791114/"
  }
},
{
  "slug": "iphone-photo-albums-vs-folders",
  "title": "iPhone photo albums vs folders: organize without losing pictures",
  "description": "Choose an album or folder in iPhone Photos, build a useful shortlist, and distinguish removing an item from deleting its library copy.",
  "summary": "Organize a photo library with albums for selections and folders for groups of albums.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "quickAnswer": "Use an album to collect photographs around a purpose, and a folder to group related albums. Plan the selection first: a folder named for a trip can contain separate albums for favorites, prints and pictures to send.",
  "sections": [
    {
      "id": "choose-structure",
      "title": "Choose a structure you will actually use",
      "paragraphs": [
        "A useful collection answers a question you ask repeatedly. “Which pictures should I send to my family?” is more actionable than “Where can I put everything?” Start with two or three selections rather than a complicated filing system."
      ],
      "table": {
        "headers": [
          "Your task",
          "Suggested structure"
        ],
        "rows": [
          [
            "A shortlist for printing",
            "One album named for the print project"
          ],
          [
            "Several selections from one holiday",
            "A trip folder containing separate albums"
          ],
          [
            "Finding an image by its subject or date",
            "Try library search before creating another container"
          ]
        ]
      }
    },
    {
      "id": "create",
      "title": "Create an album or folder in Photos",
      "paragraphs": [
        "Apple’s iOS 26 guide uses Photos → Collections → Albums → Add. Choose New Album, name it, add photographs and tap Create. For a group of albums, choose New Folder instead, then name it, add albums and tap Create. Check Apple’s version selector if your interface differs.",
        "Try a folder named “Coast weekend.” Inside it, make “Family picks” and “Print shortlist.” Give the two albums different jobs. A picture can be worth sending without being the one you want on a wall."
      ]
    },
    {
      "id": "add-and-remove",
      "title": "Add pictures, then practice a harmless removal",
      "paragraphs": [
        "Apple documents opening an album and tapping Add after its last photo. Select the pictures and finish with Done. To take one out of the album, touch and hold it and choose Remove from Album. Removing several uses Select → More → Remove from Album.",
        "Use a recognizable sample for your first cleanup. Remove it from the album, then find it in the main library. This small check helps you distinguish an organizational action from deleting a picture you still need."
      ]
    },
    {
      "id": "delete-album",
      "title": "Read the action before cleaning up",
      "paragraphs": [
        "Apple states that deleting an album leaves its pictures in the library and in other albums. That is different from selecting photographs and choosing a deletion action. Do not treat every trash or removal command as interchangeable.",
        "Before a large reorganization, write down the intended outcome: remove a shortlist, remove an album from a folder, or delete unwanted photographs. If the confirmation describes a different outcome, cancel and return to the correct collection. A few seconds here are more useful than recovering from a rushed cleanup."
      ]
    },
    {
      "id": "maintain",
      "title": "Keep the system small enough to maintain",
      "paragraphs": [
        "After finishing the print order, decide whether its shortlist still serves a purpose. Keep meaningful project names and avoid several nearly identical “Favorites 2” albums. If a folder has only one album and you never expect another, the extra layer may not help.",
        "Albums are an organization tool. For a separate preserved copy of important pictures, make a deliberate backup plan rather than relying on a tidy library."
      ]
    }
  ],
  "faq": [
    {
      "question": "Will creating more albums improve photo quality?",
      "answer": "Organization changes which pictures you can find together. It is not an editing or export step; choose the original file separately when quality matters."
    },
    {
      "question": "Should every event have a folder?",
      "answer": "Only when several albums belong together. A single useful album is often easier to maintain than an elaborate hierarchy."
    }
  ],
  "sources": [
    {
      "title": "Apple: Create and work with photo albums — iOS 26",
      "url": "https://support.apple.com/guide/iphone/create-and-work-with-photo-albums-iphc0fc668ab/26/ios/26",
      "note": "Album and folder creation; deleting an album."
    },
    {
      "title": "Apple: Add, delete, and find photos in albums — iOS 26",
      "url": "https://support.apple.com/guide/iphone/add-delete-find-photos-videos-albums-iphee7aff030/26/ios/26",
      "note": "Adding and removing album selections."
    }
  ],
  "related": [
    "merge-duplicate-iphone-photos",
    "icloud-photos-sync-vs-backup",
    "recover-deleted-iphone-photos"
  ],
  "image": "blog/pexels-7129664-4k.webp",
  "imageAlt": "Hands at a laptop displaying a set of portrait photographs",
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
  "imagePosition": "50% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-7129664-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-7129664-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-7129664-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-7129664-4k.webp",
      "width": 2560
    }
  ],
  "imageCredit": {
    "name": "Michael Burrows",
    "url": "https://www.pexels.com/photo/photographer-working-on-laptop-at-workplace-7129664/"
  }
},
{
  "slug": "tone-curves-vs-contrast",
  "title": "Tone curves vs Contrast: which should you use?",
  "description": "Choose between a Contrast slider and a tone curve, practice a controlled edit, and protect important shadow and highlight detail.",
  "summary": "A practical comparison for deciding when a simple contrast adjustment is enough and when a curve earns its complexity.",
  "quickAnswer": "Use Contrast for a broad change in tonal separation. Use a tone curve when one brightness range needs a different treatment from another. A curve targets tones throughout the image; it does not select a particular object unless you also use a mask.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "image": "blog/pexels-34806640-4k.webp",
  "imageAlt": "Portrait of a woman with bright light across one side of her face and deep shadows around her",
  "imagePosition": "50% 35%",
  "imageVariants": [
    {
      "src": "blog/pexels-34806640-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-34806640-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-34806640-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-34806640-4k.webp",
      "width": 2560
    }
  ],
  "imageCredit": {
    "name": "elif s.",
    "url": "https://www.pexels.com/photo/moody-portrait-of-woman-in-dramatic-lighting-34806640/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
  "sections": [
    {
      "id": "choose-tool",
      "title": "Choose the tool from the problem",
      "paragraphs": [
        "If the whole picture feels flat and a small Contrast adjustment improves it, there is no requirement to replace that adjustment with a curve. More controls do not automatically produce a better photograph. Keep the simplest version that solves the visible problem.",
        "A curve becomes useful when your sentence is more specific: “I want the middle tones to separate more, but I like the brighter fabric as it is.” Before editing, identify one area you want to change and two you want to protect. For a portrait, those might be a shaded jacket, a cheek and a pale sleeve."
      ]
    },
    {
      "id": "read-curve",
      "title": "Read a curve as brightness, not position",
      "paragraphs": [
        "Adobe’s Photoshop guide describes an RGB curve as input brightness across the horizontal axis and output brightness vertically. Raising a point lightens its tonal range; lowering it darkens that range. A steeper part of the curve increases contrast there, while a flatter part reduces it.",
        "The graph is not a little map of the photograph. Moving its left side does not edit the left side of the frame. If the jacket and a wall share similar tones, a global curve can change both. Decide whether that is acceptable before making the curve more complicated.",
        "Begin with the combined RGB curve for this exercise. Separate color-channel curves introduce another job and can make it harder to see whether the basic tonal decision helped."
      ]
    },
    {
      "id": "controlled-comparison",
      "title": "Try a comparison with one clear goal",
      "paragraphs": [
        "Use an editable version or a duplicate. This is a suggested exercise, not a tested recipe for the illustrative photograph."
      ],
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Make a simple version.",
            "text": "Adjust Contrast until the intended area improves. Stop when a protected area becomes less useful. Save that version for comparison."
          },
          {
            "title": "Return to the same starting point.",
            "text": "Reset the trial adjustment before trying the curve. Otherwise you will compare a simple edit with two edits stacked together."
          },
          {
            "title": "Make one small curve change.",
            "text": "Place a point in the brightness range you want to change. Move it a little, then check the two protected areas. Add a nearby anchor only if you can name what it should preserve."
          },
          {
            "title": "Compare the photograph.",
            "text": "Hide the controls and compare at the intended viewing size. Choose the version that meets your goal with the fewest visible compromises."
          }
        ]
      }
    },
    {
      "id": "troubleshoot",
      "title": "When the curve is doing too much",
      "paragraphs": [
        "Imagine a portrait with a dark jacket against a pale wall. Increasing separation may make the jacket look more defined, but losing every fold is not the same as improving it. Judge the jacket by recognizable fabric structure, not by how dramatic the graph looks.",
        "If a narrow change makes several parts of the picture jump abruptly in appearance, remove an unnecessary point and reassess. If the face is the only problem, a local adjustment may be more appropriate than forcing the entire image through an elaborate curve.",
        "Check the original when texture disappears. Neither method can prove that a blank area contains recoverable detail. A pleasing dark background can remain dark; the goal is not to reveal everything."
      ]
    },
    {
      "id": "finish",
      "title": "Keep the useful version easy to revisit",
      "paragraphs": [
        "Before exporting, write a short description of the decision, such as “stronger jacket separation, sleeve still textured.” That is more transferable to another photograph than copying an unexplained curve shape.",
        "Retain the editable version and inspect the exported result. If the simple Contrast version is equally good, use it. Save the curve for the situation where its extra control makes a visible difference."
      ]
    }
  ],
  "faq": [
    {
      "question": "Is an S-curve always the right curve?",
      "answer": "No. Start from the tonal problem in the actual photograph. A familiar shape can still make shadows or highlights less useful."
    },
    {
      "question": "Does a curve change only the selected point?",
      "answer": "Treat the point as a control over a range, not a single isolated pixel. Watch nearby tones and the rest of the image as you adjust."
    }
  ],
  "sources": [
    {
      "title": "Adobe: adjust color and tone with Curves",
      "url": "https://helpx.adobe.com/photoshop/desktop/adjust-color/color-corrections/adjust-color-and-tone-with-curves.html",
      "note": "RGB curve interpretation and tonal changes. Checked October 23, 2026."
    },
    {
      "title": "Adobe: adjust brightness and contrast",
      "url": "https://helpx.adobe.com/ph_fil/photoshop/how-to/adjust-contrast-brightness.html",
      "note": "Broad brightness and contrast controls. Checked October 23, 2026."
    }
  ],
  "related": [
    "read-histogram-for-portraits",
    "can-you-fix-overexposed-portraits",
    "edit-photos-without-losing-original"
  ]
},
{
  "slug": "pet-photos-with-phone",
  "title": "How to take better pet photos with your phone",
  "description": "Prepare a comfortable setting, work at your pet’s pace and choose a capture sequence for resting or moving subjects.",
  "summary": "Prepare a comfortable setting, work at your pet’s pace and choose a capture sequence for resting or moving subjects.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "quickAnswer": "Prepare the frame before calling your pet’s attention. Start with a familiar place, get the camera ready and make a short sequence while your pet is comfortable. For a resting portrait, inspect the eyes in the saved image; for play, leave room for movement and select the best moment afterward.",
  "sections": [
    {
      "id": "purpose",
      "title": "Choose a portrait or a moment of play",
      "paragraphs": [
        "A photograph of your dog resting by a window and a photograph of the same dog chasing a toy ask different things of the session. Choose one first. For the resting picture, prepare a quiet composition around where the dog already likes to sit. For play, organize the space before introducing the activity.",
        "Write down one detail you want to remember: a head tilt, a particular sleeping position or the way your pet carries a toy. This gives the photograph a purpose beyond getting an animal to imitate a formal human portrait."
      ]
    },
    {
      "id": "prepare",
      "title": "Finish the setup before asking for attention",
      "paragraphs": [
        "Canon’s pet guide recommends having the camera ready before using attention-getting cues and exploring different viewpoints. Start near the pet’s eye level if it gives a useful view, then inspect the background from that position. A room that looks tidy from standing height may look very different close to the floor.",
        "For a cat on a favorite chair, make an empty-chair test first. Remove a bright bag behind the chair and choose where you can comfortably hold the phone. When the cat arrives, you can concentrate on its behavior instead of moving furniture around it."
      ]
    },
    {
      "id": "resting",
      "title": "Make a short resting-portrait sequence",
      "paragraphs": [],
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Wait for a comfortable position.",
            "text": "Work with the place your pet has chosen when possible. The picture does not require a prescribed pose."
          },
          {
            "title": "Give one clear cue.",
            "text": "If a familiar toy attracts attention, let a helper hold it near the phone. Avoid multiple people competing for the same gaze."
          },
          {
            "title": "Capture, then pause.",
            "text": "Make a few photographs and let the pet relax. Inspect the saved image rather than assuming the brief preview was sharp."
          },
          {
            "title": "Check the intended detail.",
            "text": "Compare the eyes, expression and important marking. If your favorite detail is missing, change the framing before repeating the cue."
          }
        ]
      }
    },
    {
      "id": "moving",
      "title": "Leave space for an unpredictable subject",
      "paragraphs": [
        "Canon distinguishes action photographs from still portraits and recommends capturing a sequence for fleeting moments. A phone’s burst option can provide alternatives, but it does not guarantee sharp movement in weak light. Learn your phone’s control before starting play; the linked burst guide covers the iPhone workflow.",
        "Frame slightly wider for a moving pet so the next step does not immediately leave the picture. After one short attempt, compare whether the subject remained in view. If not, change your position or choose a different activity instead of repeating an unsuccessful setup."
      ]
    },
    {
      "id": "comfort",
      "title": "End the session before the picture becomes a struggle",
      "paragraphs": [
        "Petco recommends patience, a helper and keeping the experience comfortable. If your pet walks away or no longer engages, stop or return to an ordinary activity. Do not force a costume or restrain the animal just to reproduce a reference pose.",
        "Choose a frame that represents the moment honestly. Keep a slightly imperfect picture if it captures the detail you wanted, and discard a technically neat image that makes the session look more comfortable than it was. A familiar expression can matter more than a symmetrical composition."
      ]
    }
  ],
  "faq": [
    {
      "question": "Do I need a dedicated pet mode?",
      "answer": "No special mode is assumed here. Learn the ordinary photo and burst controls available on your phone, then judge the saved results."
    },
    {
      "question": "Why is the nose sharp but the eyes soft?",
      "answer": "Inspect where the phone focused and compare another capture with deliberate attention to the eyes. Moving closer is not automatically the solution; keep enough distance to frame the face clearly."
    }
  ],
  "sources": [
    {
      "title": "Canon: pet photography with Jenn Cooper",
      "url": "https://www.canon.com.au/get-inspired/pet-photography-tips-jenn-cooper",
      "note": "Prepared capture, changing perspective and action versus still poses. Retrieved October 23, 2026."
    },
    {
      "title": "Petco: photographing your pets",
      "url": "https://www.petco.com/pet-education/dog/pet-parenting/how-to-take-great-photos-of-your-pets",
      "note": "Short comfortable sessions and a helper; no dietary or clinical recommendations used. Retrieved October 23, 2026."
    }
  ],
  "related": [
    "iphone-burst-photos-select-best-frame",
    "why-night-phone-photos-are-blurry",
    "choose-portrait-background"
  ],
  "image": "blog/pexels-37427157-4k.webp",
  "imageAlt": "White dog photographed against a dark background",
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
  "imagePosition": "50% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-37427157-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-37427157-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-37427157-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-37427157-4k.webp",
      "width": 3072
    }
  ],
  "imageCredit": {
    "name": "Jay Brand",
    "url": "https://www.pexels.com/photo/cute-white-dog-portrait-on-black-backdrop-37427157/"
  }
},
{
  "slug": "copy-text-from-iphone-photo",
  "title": "How to copy text from a photo on iPhone with Live Text",
  "description": "Extract useful text from an iPhone photo with Live Text, check recognition errors, and troubleshoot missing controls without retyping everything.",
  "summary": "Copy image text into an editable note, then verify the details that matter.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "quickAnswer": "Open the picture in Photos, select its text with Live Text, copy the relevant passage and paste it into a note. Check numbers, spelling and reading order against the image before using the result.",
  "sections": [
    {
      "id": "requirements",
      "title": "Check support before troubleshooting the picture",
      "paragraphs": [
        "Apple requires iPhone XS, XR or later with iOS 15 or later for Live Text. Video text requires iOS 16 or later. Language and region availability vary; a supported phone does not guarantee every script will be recognized.",
        "If the control is missing, first establish whether the device and language qualify. Repeatedly enlarging a photograph cannot enable a feature the software does not support."
      ]
    },
    {
      "id": "copy",
      "title": "Select the useful passage",
      "paragraphs": [
        "In Apple’s iOS 26 guide, enable Live Text in Settings → General → Language & Region if needed. Open a photo, tap Detect Text, hold the text, adjust the selection handles and choose Copy Text. For video, pause on the frame first. The support article may label the command simply Copy.",
        "Paste into a temporary note before inserting the result into an important form. Select a paragraph or line deliberately instead of assuming Select All will give the reading order you want. This is particularly useful for posters that mix a title, date, address and small-print footer."
      ]
    },
    {
      "id": "check",
      "title": "Verify high-impact details first",
      "paragraphs": [
        "Imagine copying the venue and start time from an event poster. Compare the venue number, date, time and any booking code with the photograph before polishing punctuation. A beautifully formatted note with one wrong digit is still a bad result."
      ],
      "table": {
        "headers": [
          "Text type",
          "Check before using it"
        ],
        "rows": [
          [
            "Address or booking code",
            "Digits, spaces and similar-looking characters such as O and 0"
          ],
          [
            "Receipt or list",
            "Whether values stayed beside the correct labels"
          ],
          [
            "Paragraphs in columns",
            "Reading order rather than appearance alone"
          ],
          [
            "Website or email address",
            "The complete destination before opening or sending anything"
          ]
        ]
      }
    },
    {
      "id": "poor-image",
      "title": "Improve the source instead of correcting endless errors",
      "paragraphs": [
        "When you can take another picture, photograph the text squarely, keep the page still and avoid a reflection over the words. Compare the new capture at reading size before trying recognition again. A sharp photograph of the whole page may be less useful than a closer view of the small section you actually need.",
        "If you cannot retake it, work in short blocks and manually verify the unclear parts. Do not fill an illegible name or number with a plausible guess. Mark uncertainty in the note so that it does not become an apparently exact transcription later."
      ]
    },
    {
      "id": "keep-context",
      "title": "Keep enough context to understand the text later",
      "paragraphs": [
        "Save a reference to the original photograph beside your working note when context matters. A copied sentence may lose the heading, unit or footnote that explains it. For an expense record, for example, keep the receipt image even after extracting its total.",
        "This workflow concerns text extraction. Scanning a printed photograph for image quality is a different task, and an enlarged picture does not automatically supply clearer source letters."
      ]
    }
  ],
  "faq": [
    {
      "question": "Why does the copied text look out of order?",
      "answer": "Inspect how you selected a multi-column or mixed-layout image. Try copying one block at a time and arrange the blocks in the order you can verify."
    },
    {
      "question": "Can I trust a copied confirmation number?",
      "answer": "Treat it as a draft until you compare it character by character with the source. Do that before sharing or using the number."
    }
  ],
  "sources": [
    {
      "title": "Apple: Interact with text in a photo or video — iOS 26",
      "url": "https://support.apple.com/guide/iphone/interact-with-content-in-a-photo-or-video-iph37fdd714b/26/ios/26",
      "note": "Live Text setting and selection workflow."
    },
    {
      "title": "Apple: Copy and translate text from photos",
      "url": "https://support.apple.com/en-us/120004",
      "note": "Device and software requirements; copying text."
    }
  ],
  "related": [
    "scan-printed-photos-with-phone",
    "photo-sharpening-vs-resolution",
    "clean-phone-camera-lens"
  ],
  "image": "blog/pexels-16313502-4k.webp",
  "imageAlt": "Photo-editing workspace with a laptop, camera, and drawing tablet",
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
  "imagePosition": "50% 40%",
  "imageVariants": [
    {
      "src": "blog/pexels-16313502-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-16313502-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-16313502-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-16313502-4k.webp",
      "width": 2560
    }
  ],
  "imageCredit": {
    "name": "Kawê Rodrigues",
    "url": "https://www.pexels.com/photo/woman-editing-photos-on-laptop-16313502/"
  }
},
{
  "slug": "texture-clarity-dehaze-differences",
  "title": "Texture, Clarity and Dehaze: how to choose",
  "description": "Understand Lightroom’s Texture, Clarity and Dehaze controls and compare them without making skin, edges or skies look overprocessed.",
  "summary": "Choose a detail control by the visible problem, then test it on texture, edges and a smooth area.",
  "quickAnswer": "Texture emphasizes or softens surface detail, Clarity changes midtone edge contrast, and Dehaze addresses a hazy appearance. Try one control at a time and check areas that should remain quiet. None is a substitute for a well-focused source photo.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "image": "blog/pexels-9253767-4k.webp",
  "imageAlt": "Close-up portrait showing a woman's natural skin texture",
  "imagePosition": "50% 40%",
  "imageVariants": [
    {
      "src": "blog/pexels-9253767-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-9253767-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-9253767-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-9253767-4k.webp",
      "width": 2560
    }
  ],
  "imageCredit": {
    "name": "Ron Lach",
    "url": "https://www.pexels.com/photo/close-up-photo-of-woman-9253767/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
  "sections": [
    {
      "id": "name-problem",
      "title": "Name the problem before adding detail",
      "paragraphs": [
        "“Make it sharper” can mean several things. A knitted sleeve may look too smooth, a building may lack separation from its surroundings, or distant hills may disappear into haze. Applying every detail slider to all three is a poor way to find out what actually helps.",
        "Choose a photograph with one feature you want to emphasize. Also choose a feature that should stay gentle, such as skin or a plain wall. Those two priorities give the comparison a purpose."
      ]
    },
    {
      "id": "differences",
      "title": "What the controls are designed to change",
      "paragraphs": [
        "Adobe describes Texture as concentrating on medium-sized detail, Clarity as changing contrast around midtone edges, and Dehaze as reducing or adding a hazy appearance. These descriptions concern Lightroom; similarly named tools elsewhere may behave differently."
      ],
      "table": {
        "headers": [
          "Control",
          "Useful first question"
        ],
        "rows": [
          [
            "Texture",
            "Does the surface itself need more or less presence?"
          ],
          [
            "Clarity",
            "Do forms need stronger separation without changing the composition?"
          ],
          [
            "Dehaze",
            "Is a veil of haze part of the problem, or part of the atmosphere I want?"
          ]
        ]
      }
    },
    {
      "id": "three-patches",
      "title": "Run a three-patch trial",
      "paragraphs": [
        "For a portrait in a textured sweater, use the sweater, a cheek and a smooth background as your three watch areas. The following exercise is a way to judge your own file, not a preset or a claim about the stock image."
      ],
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Start clean.",
            "text": "Keep a reference version before these effects. If an existing preset contains several strong changes, compare with those changes disabled where possible."
          },
          {
            "title": "Try one slider.",
            "text": "Move only the control that best matches your goal. Compare the target area and the two watch areas before touching another control."
          },
          {
            "title": "Reset and compare.",
            "text": "Return to the same starting point for each alternative. Keep the viewing size consistent so zoom does not become another variable."
          },
          {
            "title": "Choose by tradeoff.",
            "text": "Keep the smallest useful change. If the sweater improves but the face becomes distracting, consider limiting the edit to the sweater instead of increasing a global effect."
          }
        ]
      }
    },
    {
      "id": "combine-carefully",
      "title": "Combine controls only for separate reasons",
      "paragraphs": [
        "A landscape might benefit from both clearer distant forms and more visible rock texture. That does not mean both controls need the same amount. Name the second problem after the first edit, then decide whether it still exists.",
        "For a misty morning scene, try a version that preserves some softness. If the hills become conspicuous but the picture loses the atmosphere you liked, the clearer version may be the less useful one. More visible detail is a choice, not an obligation.",
        "After changing Clarity or Dehaze, revisit the overall color and brightness. Adobe notes that these controls can affect more than the apparent detail. Avoid compensating with several unrelated edits before deciding whether the original adjustment was too strong."
      ]
    },
    {
      "id": "review",
      "title": "Review both the whole image and small edges",
      "paragraphs": [
        "At the size you plan to share, check whether the intended feature becomes easier to read. Then zoom in to inspect hair, glasses, clothing seams and smooth areas. Look for a new visual problem rather than rewarding the version that looks strongest for one second.",
        "If detail was never recorded clearly, stop trying to force it out with surface contrast. Return to another capture when you have one. Save the editable version so a treatment intended for a small post does not become the only version available for a larger display."
      ]
    }
  ],
  "faq": [
    {
      "question": "Should I increase all three controls together?",
      "answer": "Only if each solves a separate visible problem. A one-control trial makes unwanted changes easier to trace and undo."
    },
    {
      "question": "Can negative Texture fix every skin problem?",
      "answer": "No. Decide what you want to change and preserve recognizable features and surface character. Making every area equally smooth can create a new problem."
    }
  ],
  "sources": [
    {
      "title": "Adobe: enhance texture and details",
      "url": "https://helpx.adobe.com/ph_fil/lightroom-cc/how-to/enhance-texture-details.html",
      "note": "Distinct purposes of the three controls and their wider visual effects. Checked October 23, 2026."
    }
  ],
  "related": [
    "photo-sharpening-vs-resolution",
    "why-edited-portraits-look-unnatural",
    "photo-noise-vs-film-grain"
  ]
},
{
  "slug": "flat-lay-phone-photography",
  "title": "How to take flat-lay photos with your phone",
  "description": "Arrange and photograph an overhead scene without tilted objects, accidental shadows or a cluttered crop.",
  "summary": "Arrange and photograph an overhead scene without tilted objects, accidental shadows or a cluttered crop.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "quickAnswer": "Build a small arrangement on a flat surface, hold the phone parallel above it and check the whole frame before shooting. Start with one main object and add only details that explain it. Test the intended crop before spending time refining a scene that will not fit.",
  "sections": [
    {
      "id": "purpose",
      "title": "Give the arrangement one clear job",
      "paragraphs": [
        "Choose between an inventory and a story. An inventory should let someone identify each item; a story can include overlaps and traces of use. Trying to achieve both at once often creates a scene that is too crowded to read and too rigid to feel lived in.",
        "For a practical exercise, lay out a notebook, pencil and folded map to suggest planning a walk. First photograph only the notebook. Add the map if it contributes location, then the pencil if it contributes action. The exercise is about justifying each object, not meeting a rule about how many props a flat lay needs."
      ]
    },
    {
      "id": "setup",
      "title": "Make the overhead position repeatable",
      "paragraphs": [
        "Adobe’s flat-lay guide describes a top-down view and recommends steady, level support. Use a low surface you can reach comfortably or a properly secured overhead phone mount. Keep the phone parallel to the arrangement; avoid leaning across an unstable chair.",
        "Mark the outer limits of your intended composition with removable notes placed outside the final frame. Once the phone position works, adjust the objects rather than repeatedly changing the camera height. Keep a little spare border until you know the final output shape."
      ]
    },
    {
      "id": "light",
      "title": "Inspect the scene from the camera position",
      "paragraphs": [
        "Adobe suggests window light and a white board opposite it to redirect light into shadows. Begin without the board, take a reference, then add it only if the dark side hides an important object. A shadow is not automatically a mistake.",
        "Hold the phone where it will actually shoot before deciding the lighting is finished. Your hand or mount may be visible as a shadow. For the map example, compare whether a broad shadow adds useful shape or crosses the route you want the viewer to read."
      ]
    },
    {
      "id": "arrange",
      "title": "Refine the layout in a deliberate order",
      "paragraphs": [],
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Check geometry.",
            "text": "Use visible straight edges in the setup as a reference. Nikon notes that grid lines can help with alignment; do not force an object onto an intersection if it makes the picture less clear."
          },
          {
            "title": "Read the gaps.",
            "text": "Look for a sliver between objects that seems accidental. Either open the gap or make the overlap intentional."
          },
          {
            "title": "Test the crop.",
            "text": "Preview the final rectangle or square. Keep labels and important ends of objects clear of the boundary."
          }
        ]
      }
    },
    {
      "id": "review",
      "title": "Judge the picture before dismantling the setup",
      "paragraphs": [
        "Review a thumbnail for hierarchy, then inspect small text or texture that must remain legible. If the main object does not read first, change its position or simplify the surrounding items. More saturation will not solve a confusing arrangement."
      ]
    }
  ],
  "faq": [
    {
      "question": "Does a flat lay need a white background?",
      "answer": "No. Choose a surface that separates the objects and suits the intended story. A patterned surface should earn its place rather than competing with essential details."
    },
    {
      "question": "Should I use simulated background blur?",
      "answer": "Start with an ordinary photo and inspect all items. For an inventory, deliberately obscuring one object usually works against the purpose."
    }
  ],
  "sources": [
    {
      "title": "Adobe: flat lay photography",
      "url": "https://www.adobe.com/creativecloud/photography/type/flat-lay-photography.html",
      "note": "Overhead setup and light arrangement. Retrieved October 23, 2026."
    },
    {
      "title": "Nikon: five composition guidelines",
      "url": "https://www.nikonusa.com/learn-and-explore/c/tips-and-techniques/5-easy-composition-guidelines",
      "note": "Grid alignment and deliberate framing. Retrieved October 23, 2026."
    }
  ],
  "related": [
    "fix-perspective-in-phone-photos",
    "consistent-editing-for-photo-set",
    "self-timer-portraits-with-phone"
  ],
  "image": "blog/pexels-4992637-4k.webp",
  "imageAlt": "Film cameras, lenses, and film rolls on a wooden table",
  "imagePosition": "50% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-4992637-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-4992637-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-4992637-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-4992637-4k.webp",
      "width": 3840
    }
  ],
  "imageCredit": {
    "name": "Rachel Claire",
    "url": "https://www.pexels.com/photo/vintage-camera-near-lens-and-camera-roll-on-table-4992637/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "icloud-shared-albums-photo-quality",
  "title": "Does iCloud Shared Albums reduce photo quality? Check the version",
  "description": "Understand Shared Albums quality differences by creation version, save a received picture, and verify its dimensions before printing or editing.",
  "summary": "Decide whether a Shared Album copy is suitable for your intended use.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "quickAnswer": "The answer depends on the album’s creation version. Apple documents reduced-resolution behavior for albums created in version 26 or earlier, and full-resolution storage for albums created in version 27 or later on supported software. Verify the received file before relying on it.",
  "sections": [
    {
      "id": "version",
      "title": "Check the album, not just today’s phone version",
      "paragraphs": [
        "Apple’s current Shared Albums limits page distinguishes albums by the software version in which they were created. Do not assume that updating one device converts every older album. The documentation reviewed here does not establish that automatic conversion.",
        "Ask the owner how the album was created when a particular file matters. If that information is unavailable, examine an actual saved copy and compare it with the source instead of guessing from a crisp thumbnail."
      ]
    },
    {
      "id": "comparison",
      "title": "Compare the documented quality behavior",
      "paragraphs": [
        "These are Apple’s documented version conditions, not a claim that every device or region has identical feature availability."
      ],
      "table": {
        "headers": [
          "Album condition",
          "Documented behavior"
        ],
        "rows": [
          [
            "Created in version 26 or earlier",
            "Photos reduced to 2048 pixels on the long edge; panoramas can be up to 5400 pixels wide; video delivered at up to 720p"
          ],
          [
            "Created in version 27 or later, with supported software",
            "Photos and videos stored in their original formats at full resolution"
          ]
        ]
      }
    },
    {
      "id": "storage",
      "title": "Check storage and information separately",
      "paragraphs": [
        "Apple says ordinary version 27-or-later albums count toward the owner’s iCloud storage, including participant contributions; temporary shared albums are an exception. Version 26-or-earlier albums do not count toward that storage allowance.",
        "Apple’s file-type documentation also warns that older-version downloaded content may not contain the same information as the original. Pixel dimensions, editing flexibility and retained information are different things to check. A large-looking image should not be treated as proof that every property you need survived."
      ]
    },
    {
      "id": "save",
      "title": "Save a copy and inspect it",
      "paragraphs": [
        "Apple’s saving instructions use Photos → Collections → Shared Albums. Open the album and item, then Share → Save Image. Shared content is not automatically saved to your device, and comments or likes do not accompany the saved image.",
        "Choose one identifiable picture for the check. Compare the saved file’s dimensions with the source and inspect the part you intend to crop or print. If someone sent several similar frames, confirm that you are comparing the same frame. Do not delete the source while evaluating a substitute."
      ]
    },
    {
      "id": "choose-delivery",
      "title": "Choose delivery for the recipient’s task",
      "paragraphs": [
        "For a family conversation, a convenient viewing copy may be sufficient. For a large print, detailed crop or further editing, ask the recipient what they need before transferring the whole collection.",
        "For example, if a friend chooses one holiday portrait for a print, send that selected source through an appropriate original-file workflow and verify the received result. This avoids treating a shared browsing collection as a production handoff. Use the separate AirDrop guide for its transfer options.",
        "Keep your own preservation plan independent of the album. A shared collection is useful for collaboration, but its existence alone does not answer whether you have a separate recoverable copy."
      ]
    }
  ],
  "faq": [
    {
      "question": "Will updating my iPhone restore detail in an old downloaded copy?",
      "answer": "Do not assume that it will. Obtain the source again and compare the files; a software update is not evidence that an existing reduced copy gained missing detail."
    },
    {
      "question": "Can I judge quality from the album preview?",
      "answer": "Use the saved file and the intended output. A small preview does not establish the pixel dimensions or information available for a print or edit."
    }
  ],
  "sources": [
    {
      "title": "Apple: Shared Albums limits",
      "url": "https://support.apple.com/en-us/148868",
      "note": "Creation-version conditions, resolution and storage accounting."
    },
    {
      "title": "Apple: File types in Shared Albums",
      "url": "https://support.apple.com/en-us/148676",
      "note": "Older-version downloaded information and supported formats."
    },
    {
      "title": "Apple: Save photos from a shared album",
      "url": "https://support.apple.com/en-us/148570",
      "note": "Saving route and what is retained with the saved copy."
    }
  ],
  "related": [
    "airdrop-photos-original-data",
    "photo-print-size-pixels-ppi",
    "icloud-photos-sync-vs-backup"
  ],
  "image": "blog/pexels-30861211-4k.webp",
  "imageAlt": "Camera beside a laptop displaying photographs for review",
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
  "imagePosition": "50% 40%",
  "imageVariants": [
    {
      "src": "blog/pexels-30861211-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-30861211-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-30861211-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-30861211-4k.webp",
      "width": 2560
    }
  ],
  "imageCredit": {
    "name": "Ebahir",
    "url": "https://www.pexels.com/photo/photographer-editing-photos-on-laptop-30861211/"
  }
},
{
  "slug": "color-grading-vs-white-balance",
  "title": "Color grading vs white balance: correction and mood",
  "description": "Separate white balance from creative color grading, compare an ungraded baseline, and build a restrained look without losing believable color.",
  "summary": "A baseline-and-grade workflow for creating a color mood without confusing it with color correction.",
  "quickAnswer": "White balance adjusts the overall color interpretation of the lighting. Color grading adds a deliberate color treatment, often to shadows, midtones and highlights separately. Make a useful baseline first, then judge the creative grade against it instead of using one to hide problems in the other.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "image": "blog/pexels-24601834-4k.webp",
  "imageAlt": "Portrait of a woman illuminated by green and blue light at night",
  "imagePosition": "50% 35%",
  "imageVariants": [
    {
      "src": "blog/pexels-24601834-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-24601834-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-24601834-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-24601834-4k.webp",
      "width": 2560
    }
  ],
  "imageCredit": {
    "name": "Yusuf Çelik",
    "url": "https://www.pexels.com/photo/portrait-of-woman-at-night-24601834/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
  "sections": [
    {
      "id": "separate-decisions",
      "title": "Separate what seems wrong from what you want",
      "paragraphs": [
        "Write two short statements before editing: “The white cup looks greener than I want” and “I want the evening to feel warm and quiet.” The first describes a baseline color problem. The second describes an artistic direction. Keeping them separate makes a disappointing edit easier to repair.",
        "A baseline does not have to erase the lighting of the scene. A warm lamp can still feel warm. The useful question is whether you understand and like the color before adding a style on top."
      ]
    },
    {
      "id": "control-difference",
      "title": "The controls answer different questions",
      "paragraphs": [
        "Adobe’s Lightroom guidance uses white balance to shift an unwanted overall cast with temperature and tint. Its Color Grading controls add color by tonal range, with separate treatment for darker, middle and brighter areas. Blending and Balance adjust how those ranges interact.",
        "Tonal ranges are not object selections. A shadow treatment intended for a wall may also affect dark clothing or part of a face. If you want only one jacket to change color, a tonal grade is an imprecise way to ask for that.",
        "This guide uses Lightroom’s terminology to explain the choice. It does not imply that every photo editor exposes the same controls or processes them in an identical order."
      ]
    },
    {
      "id": "baseline-grade",
      "title": "Keep a baseline and a creative version",
      "paragraphs": [],
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Choose the reference areas.",
            "text": "Identify a familiar surface, the main subject and one background feature. Note which colors matter to the picture’s purpose."
          },
          {
            "title": "Make a usable baseline.",
            "text": "Resolve an unwanted overall cast before judging the style. Keep this version available even if the final look will be deliberately colored."
          },
          {
            "title": "State one grading intention.",
            "text": "For example, try a little warmth in the brighter parts while leaving the darker surroundings relatively quiet. Begin with one tonal range rather than three competing colors."
          },
          {
            "title": "Inspect the spillover.",
            "text": "Check every part of the image that shares the affected brightness range. Reduce or remove a treatment that makes a necessary color unconvincing."
          },
          {
            "title": "Compare without controls visible.",
            "text": "Choose whether the grade improves the picture’s mood enough to justify the changes it introduces."
          }
        ]
      }
    },
    {
      "id": "cafe-example",
      "title": "Work through a café portrait",
      "paragraphs": [
        "Imagine a friend beside a window, with a cream cup on the table and amber lamps behind them. A useful first version might preserve the window light on the face and the warmth in the background. Then make a second version with a modest warm highlight treatment.",
        "Inspect the cup, face and lamp together. If all three become the same heavy orange, the grade may be obscuring differences that made the scene interesting. Returning toward the baseline can be a stronger decision than adding a compensating cool treatment everywhere else.",
        "For a fashion or product image, accurate garment color may be more important than the mood. For an expressive personal portrait, a stronger departure may be intentional. Decide which photograph you are making before choosing the grade."
      ]
    },
    {
      "id": "apply-series",
      "title": "Carry the idea across a series",
      "paragraphs": [
        "Use the same description of the intended mood across a set, but review each image independently. A close portrait, a table detail and a wide interior put different subjects in the bright and dark ranges. Matching numbers does not establish that the colors work equally well.",
        "Keep the baseline when saving the final version. If the look later feels too strong, you can revise the creative decision without reconstructing the entire edit from a finished export."
      ]
    }
  ],
  "faq": [
    {
      "question": "Must I white-balance every photo to neutral gray?",
      "answer": "No. A useful baseline can retain the character of warm or colored light. The goal is a deliberate starting point, not identical neutrality in every scene."
    },
    {
      "question": "Is color grading the same as increasing saturation?",
      "answer": "No. Color intensity is a different decision from assigning a chosen color treatment to tonal ranges. Diagnose which change you actually want."
    }
  ],
  "sources": [
    {
      "title": "Adobe: adjust light and color",
      "url": "https://helpx.adobe.com/ph_fil/lightroom-cc/how-to/adjust-image-lighting-color-lightroom-cc.html",
      "note": "White balance and temperature/tint roles. Checked October 23, 2026."
    },
    {
      "title": "Adobe: adjust color in Lightroom on the web",
      "url": "https://helpx.adobe.com/lightroom/web/edit-photos/apply-effects/adjust-color.html",
      "note": "Color Grading tonal ranges and transition controls. Checked October 23, 2026."
    }
  ],
  "related": [
    "remove-color-cast-from-photos",
    "fix-mixed-lighting-in-portraits",
    "consistent-editing-for-photo-set"
  ]
},
{
  "slug": "group-photos-everyone-sharp",
  "title": "How to take group photos with everyone visible and sharp",
  "description": "Arrange rows, check faces systematically and capture a short group-photo sequence before anyone leaves.",
  "summary": "Arrange rows, check faces systematically and capture a short group-photo sequence before anyone leaves.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "quickAnswer": "Reduce unnecessary distance between rows, make every face visible and take a test before the final sequence. Inspect the nearest and farthest faces in the saved photo, then check the people at both edges. Several frames help with blinks, but they cannot compensate for an arrangement that hides someone or leaves a row out of focus.",
  "sections": [
    {
      "id": "roles",
      "title": "Organize the group before asking for a smile",
      "paragraphs": [
        "Name one person to give directions and ask everyone to look at the same camera. Competing phones can produce a picture in which half the group looks elsewhere. Decide whether the photograph must include everyone standing, or whether seats or an existing step can reduce the number of rows.",
        "For an eight-person family picture, try a compact arrangement with seated people in front and standing people behind. Before shooting, count the visible faces in the preview against the number of people present. This simple check catches someone hidden behind a shoulder without requiring them to study the screen."
      ]
    },
    {
      "id": "rows",
      "title": "Use height without adding excessive depth",
      "paragraphs": [
        "Canon’s posing guide recommends staggered faces and notes that keeping heads near a common plane helps when depth of field is limited. Offset people so their faces occupy gaps, while avoiding a back row far behind the front.",
        "Ask the group to settle comfortably instead of making everyone lean forward until the arrangement becomes unstable. Check where hands, bags and mobility aids fall in the frame. If someone needs more room, widen the composition or reorganize the group; fitting a preset pose is less important than including them well."
      ]
    },
    {
      "id": "focus",
      "title": "Verify the front and back before the final sequence",
      "paragraphs": [
        "Canon’s group-photo guidance says additional camera distance can help depth of field and explicitly warns that not everyone will necessarily be in focus. That is a reason to inspect a saved test, not to assume a named mode guarantees sharpness. On a phone, begin with its ordinary photo mode and a deliberate face focus check.",
        "Use a fixed review path: nearest face, farthest face, left edge, right edge. If the rear row is soft while the front is clear, reduce the spacing between rows or move the camera back and compare again. If everyone is smeared, improve light or steadiness before rearranging faces.",
        "Do not compensate for a poor test by collecting a long sequence with exactly the same problem. Resolve the visible failure first, then ask for the final expression."
      ]
    },
    {
      "id": "sequence",
      "title": "Capture expressions without losing the group’s attention",
      "paragraphs": [],
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Explain the sequence.",
            "text": "Say that you will make a few photographs and then check them. Give one clear direction at a time."
          },
          {
            "title": "Make the straightforward frame.",
            "text": "Ask everyone to look toward the chosen camera. Keep enough margin around the group for later cropping."
          },
          {
            "title": "Allow a reset.",
            "text": "Give people a moment to blink and relax, then make another short set. Canon recommends several frames because blinks happen."
          },
          {
            "title": "Review before release.",
            "text": "Check each person, not only the most central face. If one person needs another attempt, make it while the group is still assembled."
          }
        ]
      }
    },
    {
      "id": "selection",
      "title": "Choose the fairest complete frame",
      "paragraphs": [
        "Compare candidate pictures at the same size. Prioritize visible eyes, a comfortable expression and usable sharpness for every person over the single most dramatic background. If you are sharing with the group, let people flag a frame they are uncomfortable with.",
        "For a large gathering, keep an additional wider record in case a crop later reveals that a hand or important part of someone’s clothing was cut off. A second subgroup picture can be worthwhile, but label it as a subgroup rather than treating it as the complete event photograph."
      ]
    }
  ],
  "faq": [
    {
      "question": "Does Burst make everyone sharp?",
      "answer": "No. It offers different moments to choose from. The focus, light and arrangement still need to work."
    },
    {
      "question": "Should I focus on a fixed row every time?",
      "answer": "Do not rely on one row-number rule for every scene. Make a deliberate test and inspect the nearest and farthest faces in the actual arrangement."
    }
  ],
  "sources": [
    {
      "title": "Canon: posing for successful portraits",
      "url": "https://www.usa.canon.com/learning/training-articles/training-articles-list/posing-tips-for-successful-portraits",
      "note": "Group face arrangement and depth considerations. Retrieved October 23, 2026."
    },
    {
      "title": "Canon EOS R7 manual: group photographs",
      "url": "https://cam.start.canon/en/C005/manual/html/UG-02_BasicShooting_0050.html",
      "note": "Capture-distance and blink precautions; not a claim that phones have Canon Group Photo mode. Retrieved October 23, 2026."
    }
  ],
  "related": [
    "take-couple-photos-with-phone",
    "iphone-burst-photos-select-best-frame",
    "portrait-mode-blur-mistakes"
  ],
  "image": "blog/pexels-6210595-4k.webp",
  "imageAlt": "Four friends posing together outdoors for a photograph",
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
  "imagePosition": "50% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-6210595-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-6210595-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-6210595-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-6210595-4k.webp",
      "width": 3840
    }
  ],
  "imageCredit": {
    "name": "PICHA",
    "url": "https://www.pexels.com/photo/friends-getting-their-group-photo-taken-6210595/"
  }
},
{
  "slug": "hide-lock-iphone-photos",
  "title": "How to hide and lock photos on iPhone",
  "description": "Use the iPhone Hidden collection, keep its authentication enabled, conceal the collection if needed, and understand what hiding cannot protect.",
  "summary": "Move selected photographs out of ordinary browsing and verify how the Hidden collection is protected.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "quickAnswer": "Use Hide in Photos, then check that the Hidden collection requires authentication. Hiding pictures and hiding the collection itself are separate settings; neither should be treated as a way to recall copies already shared elsewhere.",
  "sections": [
    {
      "id": "purpose",
      "title": "Choose the protection you need",
      "paragraphs": [
        "A private portrait can be something you want to keep without displaying during casual photo browsing. That is different from wanting to delete it, stop a particular memory from appearing, or restrict another app’s access. Decide which problem you have before changing the library.",
        "For this task, start with one harmless sample rather than a large sensitive selection. Learn where it goes and how you will retrieve it before moving pictures that matter."
      ]
    },
    {
      "id": "hide",
      "title": "Move a picture to Hidden",
      "paragraphs": [
        "Apple’s iOS 26 route is Photos → open the picture → More → Hide. To find it again, use Collections → Hidden under Utilities → View Album and authenticate. Inside the collection, More → Unhide returns a selected item to ordinary library viewing.",
        "After the sample disappears from ordinary browsing, locate it through the Hidden collection. Check the action with a picture you recognize rather than assuming a missing thumbnail means successful protection."
      ]
    },
    {
      "id": "lock",
      "title": "Check authentication and visibility separately",
      "paragraphs": [
        "Apple says Hidden is locked by default, with Face ID, Touch ID or the device passcode used to unlock it. In Settings → Apps → Photos, keep the relevant authentication setting enabled. Turning off Show Hidden Album on the same settings page removes the collection from view.",
        "The device passcode remains part of this access model. Someone who can authenticate to the collection is not excluded simply because you concealed its entry. Avoid presenting this setting as a separate secret password vault.",
        "If you remove the entry from view, remember which setting you changed. A collection you cannot immediately see is not necessarily empty or deleted."
      ]
    },
    {
      "id": "copies",
      "title": "Account for other devices and earlier copies",
      "paragraphs": [
        "Apple states that hiding synchronizes across devices using the same iCloud Photos library. Review where the picture exists before drawing a wider privacy conclusion.",
        "Consider a portrait that you also exported to a messaging app and sent to a friend. Verify each destination separately; the Hidden setting is not a recall request to that friend or a deletion instruction for another service. If you need an external copy removed, handle that through the relevant app or recipient.",
        "Likewise, do not use a permission setting as proof that an earlier upload was erased. These are separate questions: where the original appears, who can unlock it, and where additional copies exist."
      ]
    },
    {
      "id": "finish",
      "title": "Run a small retrieval check",
      "paragraphs": [
        "Return to normal browsing, confirm the sample is where you expect, and check that opening Hidden asks for authentication under your current settings. If the behavior differs, review the controls before adding more pictures.",
        "This guide concerns hiding retained photographs. If you accidentally deleted a file, use the recovery workflow. If your goal is a separate backup, decide how to preserve that copy rather than using concealment as a substitute."
      ]
    }
  ],
  "faq": [
    {
      "question": "Do I have to delete a photo to stop seeing it in the main library?",
      "answer": "Choose the action that matches your intention. For a photograph you want to retain privately, check the hiding workflow before considering deletion."
    },
    {
      "question": "Does concealing the Hidden entry create a new password?",
      "answer": "No. Treat visibility and authentication as separate controls, and consider who can already unlock the device."
    }
  ],
  "sources": [
    {
      "title": "Apple: Delete or hide photos and videos — iOS 26",
      "url": "https://support.apple.com/guide/iphone/delete-or-hide-photos-and-videos-iphb4defbde9/26/ios/26",
      "note": "Hidden collection, authentication, visibility and iCloud behavior."
    },
    {
      "title": "Apple: Hide photos with the Hidden album",
      "url": "https://support.apple.com/en-us/104987",
      "note": "Hidden album authentication, visibility and cross-device hiding."
    }
  ],
  "related": [
    "recover-deleted-iphone-photos",
    "icloud-photos-sync-vs-backup",
    "google-photos-archive-vs-locked-folder"
  ],
  "image": "blog/pexels-17502436-4k.webp",
  "imageAlt": "Woman holding a phone in front of her face for a selfie",
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
  "imagePosition": "50% 35%",
  "imageVariants": [
    {
      "src": "blog/pexels-17502436-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-17502436-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-17502436-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-17502436-4k.webp",
      "width": 2560
    }
  ],
  "imageCredit": {
    "name": "olga Volkovitskaia",
    "url": "https://www.pexels.com/photo/a-woman-taking-a-selfie-with-her-phone-17502436/"
  }
},
{
  "slug": "remove-chromatic-aberration-photo-fringes",
  "title": "How to reduce colored fringes along photo edges",
  "description": "Diagnose purple or green fringes, try chromatic aberration correction, and protect real colors while using defringe controls.",
  "summary": "A restrained workflow for reducing distracting edge color without desaturating genuine clothing, foliage or light.",
  "quickAnswer": "Inspect the original at high magnification, then try the editor’s chromatic-aberration correction. If a narrow purple or green edge remains, use restrained defringe controls where available. Compare nearby genuine colors: removing a fringe should not also erase a purple garment or green leaf.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "image": "blog/pexels-1338413-4k.webp",
  "imageAlt": "Side-lit portrait of a woman with reflections in her glasses",
  "imagePosition": "55% 45%",
  "imageVariants": [
    {
      "src": "blog/pexels-1338413-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-1338413-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-1338413-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-1338413-4k.webp",
      "width": 3840
    }
  ],
  "imageCredit": {
    "name": "Martin Kirigua",
    "url": "https://www.pexels.com/photo/woman-standing-near-window-1338413/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
  "sections": [
    {
      "id": "identify",
      "title": "Identify the edge before correcting it",
      "paragraphs": [
        "A narrow colored outline around a high-contrast boundary is a reason to investigate chromatic aberration, not proof that every colored edge is an optical error. Compare the original with your edited version. A rim that appears only after a strong effect may require backing off that effect first.",
        "Choose a definite boundary, such as a dark branch against a pale sky, rather than judging a whole colorful scene at once. Also identify an area with real purple or green color that must remain intact. Keeping both visible makes accidental color loss easier to catch.",
        "Colored lighting, reflections and intentionally backlit hair can belong to the scene. An editor cannot determine your intention just from the presence of a bright outline."
      ]
    },
    {
      "id": "correct",
      "title": "Try the least disruptive correction first",
      "paragraphs": [
        "Adobe’s Lightroom Classic documentation separates automatic chromatic-aberration correction from purple and green defringe controls. The defringe eyedropper samples the problem hue; Amount and hue-range controls govern suppression. Adobe cautions that genuine purple or green objects can also be affected.",
        "Use the controls documented for your editor and version. A phone editor may expose a simple automatic option, a different set of controls, or no dedicated correction. Do not assume a general saturation slider is equivalent."
      ],
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Keep an untouched reference.",
            "text": "Compare with the original file rather than a screenshot of a preview."
          },
          {
            "title": "Test automatic correction.",
            "text": "Inspect the chosen boundary after applying the available correction. Stop if the improvement is sufficient."
          },
          {
            "title": "Target what remains.",
            "text": "If supported, sample the residual fringe and use a narrow, modest adjustment. Avoid widening the affected hue range merely to make every colored edge disappear."
          },
          {
            "title": "Check the protected area.",
            "text": "Compare the real colored object before and after. If it loses useful color, reduce the correction or restrict its area using supported local controls."
          }
        ]
      }
    },
    {
      "id": "portrait-example",
      "title": "Inspect a backlit portrait in three places",
      "paragraphs": [
        "Imagine a portrait with bright sky behind the hair, silver earrings and a purple scarf. The hair boundary is your problem area, the earring is a second difficult edge, and the scarf is your color safeguard. Review all three after each meaningful change.",
        "If the hair improves but the scarf becomes gray at its folds, the adjustment has exceeded its useful reach. A slightly imperfect hair edge may be preferable to a visibly damaged scarf. If an earring remains surrounded by a broad bright glow, avoid assuming a stronger defringe setting will solve that different shape of problem.",
        "Judge the result at normal viewing size as well. A minor edge visible only under extreme magnification may not deserve an edit that changes the appearance of the complete portrait."
      ]
    },
    {
      "id": "limits",
      "title": "Know when to stop",
      "paragraphs": [
        "The goal is a less distracting boundary, not an invented reconstruction of lost texture or color. If an edge is already badly blurred or a bright area is blank in the source, removing the colored outline does not restore the underlying detail.",
        "Preserve the original and compare the final export. For a recurring problem, keep notes about the capture and the edges affected. Another frame or a different shooting arrangement can be a better choice than forcing a damaged file through increasingly broad corrections."
      ]
    }
  ],
  "faq": [
    {
      "question": "Should I desaturate all purple to remove purple fringes?",
      "answer": "That risks changing actual purple objects throughout the picture. Prefer a dedicated, restrained correction and explicitly check colors you want to preserve."
    },
    {
      "question": "Does a white halo mean chromatic aberration?",
      "answer": "Not necessarily. Compare the unedited boundary and disable recent sharpening or contrast effects. Diagnose the visible change before choosing a color-specific correction."
    }
  ],
  "sources": [
    {
      "title": "Adobe: apply optics in Lightroom on the web",
      "url": "https://helpx.adobe.com/lightroom/web/edit-photos/apply-effects/apply-optics.html",
      "note": "Color-fringe appearance and the automatic chromatic-aberration option. Checked October 23, 2026."
    },
    {
      "title": "Adobe: retouch photos in Lightroom Classic",
      "url": "https://helpx.adobe.com/lightroom-classic/desktop/process-and-develop-photos/retouch-photos.html",
      "note": "Automatic correction, purple/green defringe and protection of genuine colors. Checked October 23, 2026."
    }
  ],
  "related": [
    "photo-sharpening-vs-resolution",
    "backlit-phone-portraits",
    "why-edited-portraits-look-unnatural"
  ]
},
{
  "slug": "product-photos-white-background",
  "title": "How to photograph small products on a white background",
  "description": "Build a simple phone product-photo setup, preserve light-colored edges and capture the details a buyer needs to see.",
  "summary": "Build a simple phone product-photo setup, preserve light-colored edges and capture the details a buyer needs to see.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "quickAnswer": "Use a clean white background, a stable phone position and soft light that still reveals the product’s edges. Photograph the item accurately before trying to make every background pixel pure white. Capture a main view, useful alternate views and any detail that changes what someone understands about the product.",
  "sections": [
    {
      "id": "brief",
      "title": "Write the questions your pictures must answer",
      "paragraphs": [
        "Before setting up, name the features a buyer cannot inspect in person. For a small ceramic mug, those might be the handle shape, inside glaze, base and a mark on the rim. A beautiful front view does not answer all four questions.",
        "Turn that list into a short capture plan. Mark one image as the main view and give every additional view a separate job. Adobe’s product guide recommends multiple angles and detail images; use that principle to reduce uncertainty rather than produce several nearly identical frames."
      ]
    },
    {
      "id": "background",
      "title": "Create a background you can reuse",
      "paragraphs": [
        "Shopify describes a table near a window and white poster board or a curved paper sweep. Let the background curve behind the item instead of creating a distracting corner. Support it securely and keep creases outside the useful frame.",
        "Place a small location marker outside the crop so you can return the product to the same position. Record the phone height with a quick setup photograph. If you photograph several items, these simple references help you resume after a break without guessing what changed."
      ]
    },
    {
      "id": "edges",
      "title": "Separate product detail from background brightness",
      "paragraphs": [
        "Take a plain reference before making the image brighter. Inspect the item’s lightest edge and any pale lettering. If those disappear, stop increasing overall brightness just to whiten the background. A slightly gray backdrop is easier to assess than missing product information.",
        "For the mug example, compare the lip against the background and the opening inside the handle. Try a small change of product angle or light direction. Choose the version that makes the shape understandable, even if it needs a modest background cleanup afterward."
      ]
    },
    {
      "id": "capture",
      "title": "Finish the useful views while the setup is in place",
      "paragraphs": [],
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Main view.",
            "text": "Show the complete item with enough margin for the intended crop. Check that it is upright and that the visible label is readable."
          },
          {
            "title": "Alternative view.",
            "text": "Rotate the product to reveal the feature hidden in the main view. Keep the phone position comparable unless the new view needs another angle."
          },
          {
            "title": "Detail.",
            "text": "Move to a deliberate detail setup and verify focus. Do not mistake a magnified preview for a sharp saved file."
          },
          {
            "title": "Condition record.",
            "text": "Include meaningful wear, variation or included accessories honestly. Do not edit away a feature someone needs in order to choose."
          }
        ]
      }
    },
    {
      "id": "finish",
      "title": "Check the destination requirements separately",
      "paragraphs": [
        "A white-looking photograph and a file that meets a marketplace’s exact background requirements are different things. Read the destination’s current image rules before export; there is no single rule shared by every store.",
        "Keep the source and make a delivery copy. Inspect that copy at listing size for edges and legibility, then compare it with the object under the same light. If you replace a background, check the handle opening, transparent parts and shadows rather than judging only the large empty area."
      ]
    }
  ],
  "faq": [
    {
      "question": "Must the product have no shadow?",
      "answer": "Not automatically. A restrained shadow may help explain contact and shape. Follow the destination requirements and keep the object easy to understand."
    },
    {
      "question": "Can I make every item the same size in the frame?",
      "answer": "Use consistent framing for a coherent listing, but include measurements or a clear scale reference where size matters. Similar image framing does not prove the objects are equally large."
    }
  ],
  "sources": [
    {
      "title": "Shopify: taking product photographs",
      "url": "https://help.shopify.com/en/manual/products/product-media/product-photography",
      "note": "Simple surface, background and stable setup. Retrieved October 23, 2026."
    },
    {
      "title": "Adobe: product photography for ecommerce",
      "url": "https://business.adobe.com/blog/basics/guide-effective-product-photography",
      "note": "Multiple useful views and consistent presentation. Retrieved October 23, 2026."
    }
  ],
  "related": [
    "resize-vs-compress-photos-for-upload",
    "jpeg-heic-png-photo-formats",
    "iphone-photo-cutout-background"
  ],
  "image": "blog/pexels-1203803-4k.webp",
  "imageAlt": "Silver and black camera on a pale background",
  "imagePosition": "50% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-1203803-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-1203803-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-1203803-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-1203803-4k.webp",
      "width": 3840
    }
  ],
  "imageCredit": {
    "name": "Alex Andrews",
    "url": "https://www.pexels.com/photo/black-and-grey-camera-1203803/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "share-live-photo-as-still-or-motion",
  "title": "Share an iPhone Live Photo as a still image or moving video",
  "description": "Choose a still, Live Photo or video before sharing from iPhone, and check that the recipient gets the motion and moment you intended.",
  "summary": "Choose and verify the delivery form of an existing Live Photo.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "quickAnswer": "Decide whether the recipient needs one frame or movement. For a still, switch off LIVE in the sharing view. For motion outside a Live Photo workflow, save a video and share that file. Check the received result rather than relying on its thumbnail.",
  "sections": [
    {
      "id": "choose",
      "title": "Choose the output for its destination",
      "paragraphs": [
        "A profile image, a printed portrait and a short moving clip have different delivery needs. Start with that purpose instead of sending the same item everywhere and hoping the destination interprets it correctly."
      ],
      "table": {
        "headers": [
          "Intended use",
          "Practical choice"
        ],
        "rows": [
          [
            "One expression for a static layout",
            "A deliberate still frame"
          ],
          [
            "An Apple recipient who wants the original Live Photo experience",
            "A supported Live Photo sharing path"
          ],
          [
            "Movement in a destination that expects video",
            "A video saved from the Live Photo"
          ]
        ]
      }
    },
    {
      "id": "still",
      "title": "Send the still deliberately",
      "paragraphs": [
        "Apple’s sharing instructions say to open the photograph, tap Share, then tap LIVE in the upper-left corner to send the still rather than the Live Photo. Choose the destination after setting that option. Apple also notes that Mail sends a Live Photo as a still image.",
        "Check the expression and frame before sending. If the default moment is not the one you want, use the separate key-photo workflow first. This guide concerns delivery; it does not require changing the creative effect or selecting a new moment every time."
      ]
    },
    {
      "id": "motion",
      "title": "Use a video when the destination needs one",
      "paragraphs": [
        "Apple’s video-conversion instructions use an opened Live Photo → More → Save as Video. The resulting video appears in Recently Saved, while the Live Photo remains available. Select the new video for the outgoing message or upload.",
        "For an Apple Messages recipient, Apple documents opening the received Live Photo and pressing and holding it to play. Do not generalize that behavior to every messaging or publishing app. Interface details can differ by installed version.",
        "Before sending movement, review the whole clip and its sound. The frame you liked may not represent everything recorded around it. Decide whether the surrounding moment belongs in the message too."
      ]
    },
    {
      "id": "verify",
      "title": "Check the received item, not the sender’s preview",
      "paragraphs": [
        "Send one trial through the actual destination when the format matters. On the receiving side, check whether it behaves as a still, Live Photo or video. A static thumbnail alone cannot tell you which experience arrived.",
        "For a birthday greeting, for example, the movement may be the point. If it arrives as a still, change the delivery form before sending the rest. For a professional portrait, the opposite may be true: a single carefully chosen expression is more useful than an unexpected moving clip."
      ]
    },
    {
      "id": "troubleshoot",
      "title": "Resolve the delivery mismatch",
      "paragraphs": [
        "If movement disappears, confirm that you selected the video or enabled Live Photo sharing, then check the receiving service’s own supported formats. If the wrong moment appears, inspect the source and chosen still rather than repeatedly forwarding the same attachment.",
        "Keep the source while you compare exports. Screenshots, converted videos and stills have different uses; name or organize the final choice clearly so that you do not send the wrong version later."
      ]
    }
  ],
  "faq": [
    {
      "question": "Why did an email recipient receive a still?",
      "answer": "Mail’s documented Live Photo sharing behavior is a still image. If the message needs movement, prepare a video and check the attachment before sending."
    },
    {
      "question": "Should I change the key photo to make a video?",
      "answer": "Only change the chosen moment if that is a separate creative goal. First establish which delivery format the recipient needs."
    }
  ],
  "sources": [
    {
      "title": "Apple: Take and edit Live Photos",
      "url": "https://support.apple.com/en-us/104966",
      "note": "Still-sharing control, Mail behavior and Messages playback."
    },
    {
      "title": "Apple: Turn a Live Photo into a video",
      "url": "https://support.apple.com/en-us/105029",
      "note": "Save as Video and separate saved output."
    }
  ],
  "related": [
    "change-live-photo-key-photo",
    "iphone-live-photo-long-exposure",
    "airdrop-photos-original-data"
  ],
  "image": "blog/pexels-39820803-4k.webp",
  "imageAlt": "Couple standing together beneath leafy trees",
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
  "imagePosition": "35% 55%",
  "imageVariants": [
    {
      "src": "blog/pexels-39820803-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-39820803-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-39820803-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-39820803-4k.webp",
      "width": 3840
    }
  ],
  "imageCredit": {
    "name": "Helena Jankovičová Kováčová",
    "url": "https://www.pexels.com/photo/romantic-outdoor-portrait-of-couple-in-nature-39820803/"
  }
},
{
  "slug": "lens-distortion-vs-perspective",
  "title": "Lens distortion vs perspective: fix the right problem",
  "description": "Distinguish bowed lines from converging lines, choose lens correction or geometry tools, and check the crop and proportions after correction.",
  "summary": "A line-shape diagnosis for avoiding the wrong correction on architecture, interiors and wide-angle photos.",
  "quickAnswer": "Lens distortion can make a straight edge curve; perspective can make straight, parallel edges converge in a photograph. Check curvature first, then convergence. Use a suitable lens profile for optical distortion and geometry controls for perspective, reviewing the crop and subject proportions after each change.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "image": "blog/pexels-31075395-4k.webp",
  "imageAlt": "Reflective glass buildings viewed from below",
  "imagePosition": "50% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-31075395-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-31075395-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-31075395-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-31075395-4k.webp",
      "width": 2880
    }
  ],
  "imageCredit": {
    "name": "Tom Schönmann",
    "url": "https://www.pexels.com/photo/modern-urban-architecture-with-glass-facades-31075395/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
  "sections": [
    {
      "id": "two-line-check",
      "title": "Use two edges to diagnose the shape",
      "paragraphs": [
        "Choose a doorway, shelf or building edge you know is straight. Follow the edge from end to end. Does it bow, or does it stay straight while leaning toward another edge? A photograph can contain both problems, so check more than one part of the frame.",
        "Adobe describes barrel distortion as outward bowing and pincushion distortion as inward bending. Its Lens Correction controls also distinguish those optical corrections from perspective adjustments. The names are useful only when you connect them to a visible line.",
        "Do not use a bent tree, fabric curtain or curved piece of furniture as proof of lens distortion. You need a trustworthy reference before trying to make the photograph geometrically tidy."
      ]
    },
    {
      "id": "match-profile",
      "title": "Match a correction to the actual file",
      "paragraphs": [
        "Photoshop’s Lens Correction filter can use a camera/lens profile identified from metadata, with manual selection when the match is unavailable or wrong. Review that match rather than choosing whichever familiar lens name happens to appear.",
        "For a processed phone photo or an exported file, the capture history may be less clear than it is for an original camera file. Compare before and after with extra care. If a previously straight reference bends after correction, undo the trial instead of assuming that enabling another option must be an improvement."
      ]
    },
    {
      "id": "sequence",
      "title": "Separate curvature from convergence",
      "paragraphs": [],
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Keep the starting version.",
            "text": "Work from the best original available and retain a reference without the new geometry changes."
          },
          {
            "title": "Inspect curvature first.",
            "text": "Use an appropriate profile or a restrained distortion adjustment. Watch several reliable edges, including one near the frame boundary."
          },
          {
            "title": "Reassess the straight lines.",
            "text": "Once their curvature is acceptable, decide whether the remaining convergence needs a perspective adjustment. Do not use that second adjustment to chase a curve."
          },
          {
            "title": "Review the new boundaries.",
            "text": "Look for empty areas, lost edge content and a changed crop. Decide what composition remains useful before exporting."
          }
        ]
      }
    },
    {
      "id": "interior-example",
      "title": "Check more than a perfect doorway",
      "paragraphs": [
        "Imagine a room photographed from near its entrance. The doorway can be a good reference, but the sofa, a round table and a person near the edge also matter. A version with tidier verticals is not automatically better if those subjects become awkwardly stretched or important context disappears.",
        "Compare a modest correction with a more aggressive one. Hide the grid when making the final choice so the photograph, rather than the guides, determines which version you keep. For a personal interior photo, an understandable room may matter more than architectural precision.",
        "If your main complaint is that a nearby face looks unusually prominent, do not expect a lens profile to make the camera viewpoint disappear. That is a different question from whether a straight shelf bows."
      ]
    },
    {
      "id": "limits",
      "title": "Keep the correction proportional to the purpose",
      "paragraphs": [
        "A wide view can intentionally emphasize scale or height. Leave convergence when it supports that purpose. For documentation where straight geometry matters, a retake from a more suitable position may leave fewer compromises than a large transformation.",
        "When you cannot identify the lens or verify the original edges, use a conservative visual correction and describe the result accordingly. Avoid treating a profile selection as evidence that the whole image now reproduces real-world dimensions accurately."
      ]
    }
  ],
  "faq": [
    {
      "question": "Can a photo have lens distortion and perspective issues together?",
      "answer": "Yes. Diagnose the curvature of individual edges separately from how those edges converge. Fixing one does not establish that the other is resolved."
    },
    {
      "question": "Should every building have perfectly parallel verticals?",
      "answer": "No. Choose the appearance that suits the photograph. Strong upward convergence can communicate height, while a more neutral view may suit architectural documentation."
    }
  ],
  "sources": [
    {
      "title": "Adobe: correct lens distortion and perspective",
      "url": "https://helpx.adobe.com/photoshop/desktop/effects-filters/artistic-stylize-filters/correct-lens-distortion-and-perspective.html",
      "note": "Optical distortion, profile matching, geometry controls and boundary changes. Checked October 23, 2026."
    }
  ],
  "related": [
    "fix-perspective-in-phone-photos",
    "why-close-selfies-look-different",
    "how-to-crop-portrait-photos"
  ]
},
{
  "slug": "photos-through-window-without-reflections",
  "title": "How to photograph through a window with fewer reflections",
  "description": "Reduce camera-side reflections before shooting through glass, then separate reflection, focus and surface problems.",
  "summary": "Reduce camera-side reflections before shooting through glass, then separate reflection, focus and surface problems.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "quickAnswer": "Look for light and bright objects on your side of the window, then change those conditions or your shooting position before taking the picture. Move the phone closer to the glass when permitted, without touching or obstructing it. Compare a reference frame after each change; a cleaner-looking live preview still needs a saved-photo check.",
  "sections": [
    {
      "id": "diagnose",
      "title": "Identify what is actually covering the view",
      "paragraphs": [
        "Adobe’s explanation of window reflections distinguishes the scene beyond the glass from the reflected scene on the camera side. Look for recognizable shapes such as a lamp, your shirt or a room behind you. A fuzzy patch from a smudge is a different problem from a recognizable indoor reflection.",
        "For a city view from a hotel room, note three things before adjusting anything: the building you want to show, the reflection crossing it and a fine detail beyond the window. Those become separate checks for composition, reflection and focus."
      ]
    },
    {
      "id": "room",
      "title": "Control the room before changing the edit",
      "paragraphs": [
        "Adobe recommends reducing light on the camera side and working closer to the window as practical capture measures. If you control the room, switch off a lamp or screen that appears in the glass. Take another frame from the same position so the comparison has a clear cause.",
        "If a bright sleeve remains visible, change your position or keep it outside the reflected area. Avoid surrounding the phone with improvised materials that could fall against the window or block other visitors. In a museum, vehicle or observation deck, follow the restrictions on equipment and contact with the glass."
      ]
    },
    {
      "id": "sequence",
      "title": "Use one-change comparisons",
      "paragraphs": [],
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Make a reference.",
            "text": "Capture the intended view with the current conditions. Remember the reflection’s position relative to one recognizable feature outside."
          },
          {
            "title": "Change one light source.",
            "text": "If you have control, turn off the lamp or screen most clearly visible in the glass. Compare the same part of the image."
          },
          {
            "title": "Try another position.",
            "text": "Move closer or sideways within the permitted area. Check whether the improvement hides a part of the outside view you need."
          },
          {
            "title": "Inspect the saved frame.",
            "text": "Look beyond the largest reflection: check fine detail and all four corners for a remaining bright patch or obstruction."
          }
        ]
      }
    },
    {
      "id": "filters",
      "title": "Treat a polarizer as an experiment, not a guarantee",
      "paragraphs": [
        "Canon’s polarizer guide describes angle-dependent reduction of reflections from glass and water. Rotating a compatible filter changes the effect, and the filter also reduces the light entering the camera. Compare it on the actual window; do not assume one attachment solves every scene.",
        "Before buying an accessory, try the changes available in the location. If the camera-side light is outside your control, another window or a different time may produce a better starting file. Keep an unfiltered reference if you do use a filter so you can assess the tradeoff afterward."
      ]
    },
    {
      "id": "limits",
      "title": "Know when to choose a different photograph",
      "paragraphs": [
        "A double image or a large persistent reflection may remain even after the available adjustments. Instead of spending the entire visit trying to remove it, consider a wider view that includes the window as part of the setting, or photograph another scene.",
        "Editing can be a separate creative step, but inspect any removed-reflection area for changed signs, architecture or repeated details. Preserve the original. For a record where the scene’s exact appearance matters, describe a major reconstruction rather than presenting it as untouched documentation."
      ]
    }
  ],
  "faq": [
    {
      "question": "Will cleaning the window remove a reflection?",
      "answer": "Cleaning an accessible surface can address dirt, but the reflected room is a lighting and geometry issue. Do not touch or clean glass you do not have permission to handle."
    },
    {
      "question": "Is this the same as glare on eyeglasses?",
      "answer": "The reflection principles overlap, but the workflow differs: this guide controls a camera-side room and a view through a large pane rather than the pose and lighting of a person."
    }
  ],
  "sources": [
    {
      "title": "Adobe: window-reflection physics and capture tips",
      "url": "https://blog.adobe.com/en/publish/2024/12/12/removing-window-reflections-adobe-camera-raw",
      "note": "Camera-side light and capture prevention; 2024 release status is not presented as current software availability. Retrieved October 23, 2026."
    },
    {
      "title": "Canon Academy: polarizing filters in practice",
      "url": "https://www.academy.canon-me.com/en/fundamentals/polarizing-filters-in-practice",
      "note": "Variable reduction of glass/water reflections and light loss. Retrieved October 23, 2026."
    }
  ],
  "related": [
    "iphone-ae-af-lock",
    "clean-phone-camera-lens",
    "reduce-glasses-glare-in-portraits"
  ],
  "image": "blog/pexels-4429463-4k.webp",
  "imageAlt": "Passenger holding a smartphone beside a car window",
  "imagePosition": "60% 45%",
  "imageVariants": [
    {
      "src": "blog/pexels-4429463-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-4429463-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-4429463-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-4429463-4k.webp",
      "width": 3840
    }
  ],
  "imageCredit": {
    "name": "Ketut Subiyanto",
    "url": "https://www.pexels.com/photo/anonymous-female-tourist-taking-photo-on-smartphone-sitting-in-car-4429463/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "iphone-camera-grid-level",
  "title": "Use the iPhone Camera grid and level for cleaner composition",
  "description": "Turn on iPhone Camera grid and level, use them to compare framing choices, and avoid treating every scene as a rigid rule-of-thirds exercise.",
  "summary": "Use the camera’s alignment aids while deciding what belongs in the frame.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "quickAnswer": "Turn on Grid and Level in Settings → Camera. Use them as visual checks while framing, then judge the photograph itself: the important subject, intentional horizon and clean frame edges matter more than rigidly following an overlay.",
  "sections": [
    {
      "id": "enable",
      "title": "Enable the alignment aids",
      "paragraphs": [
        "Apple’s iOS 26 Camera guide places Grid and Level in Settings → Camera. They are intended to help compose and straighten a shot. Return to Camera and check the controls in the mode and orientation you intend to use.",
        "Set this up before asking someone to pose. The useful habit is a brief framing check, not a long search through settings while a spontaneous expression disappears."
      ]
    },
    {
      "id": "practice",
      "title": "Try two compositions of the same scene",
      "paragraphs": [
        "Choose a calm subject with a visible horizon, such as a friend standing on a beach. Make one frame with the person near the middle and another with more space on the side they are looking toward. Keep the location and expression as similar as practical.",
        "Review both without assuming that the less centered version must be better. Ask which picture makes the person easiest to notice and whether the surrounding space adds useful context. The grid gives you reference positions for this comparison; it does not choose the answer for you."
      ]
    },
    {
      "id": "checks",
      "title": "Use a short before-the-shutter check",
      "paragraphs": [],
      "list": {
        "ordered": false,
        "items": [
          {
            "title": "Horizon",
            "text": "Decide whether it should look level or deliberately tilted. Avoid an accidental lean that adds nothing to the photograph."
          },
          {
            "title": "Subject",
            "text": "Check where the face, eyes or important object sit relative to the surrounding space. Keep enough room for the intended crop."
          },
          {
            "title": "Edges",
            "text": "Look for a cut-off hand, an awkward object entering the frame or background clutter near the subject."
          },
          {
            "title": "Background",
            "text": "Change your position if a pole or hard edge appears to run through the head. An overlay will not fix that relationship."
          }
        ]
      }
    },
    {
      "id": "limits",
      "title": "A level frame can still have perspective problems",
      "paragraphs": [
        "Imagine photographing a tall building from close below it. Keeping the phone from leaning sideways does not remove the effect of aiming upward. If the building’s shape is the concern, compare another camera position and use the separate perspective guide for that problem.",
        "For portraits, avoid moving the camera very close simply to force a face onto a preferred grid position. Choose a comfortable perspective first, then refine placement. Composition guides should support the photograph rather than lead you into a worse camera position."
      ]
    },
    {
      "id": "review",
      "title": "Review before making the setup a habit",
      "paragraphs": [
        "Pick the version that serves the picture’s purpose. A symmetrical doorway may suit central placement; a portrait that shows a destination may need more surrounding space. Those are creative choices, not settings a grid can validate.",
        "After the session, review a few frames for the same accidental problem. If the horizon repeatedly leans, make that your next capture check. If the edges are consistently cramped, leave more room. One specific improvement is easier to practice than watching every overlay at once."
      ]
    }
  ],
  "faq": [
    {
      "question": "Does the grid automatically make a portrait better?",
      "answer": "No. It supplies reference lines. Use them to compare positions, then judge attention, expression and context in the actual image."
    },
    {
      "question": "Should I always put the eyes on a grid line?",
      "answer": "Treat that as one possible starting point. The intended crop, headroom and background may support a different placement."
    }
  ],
  "sources": [
    {
      "title": "Apple: Set up your shot — iOS 26",
      "url": "https://support.apple.com/guide/iphone/set-up-your-shot-iph3dc593597/26/ios/26",
      "note": "Grid and Level setting and intended purpose."
    }
  ],
  "related": [
    "fix-perspective-in-phone-photos",
    "how-to-crop-portrait-photos",
    "why-close-selfies-look-different"
  ],
  "image": "blog/pexels-13929353-4k.webp",
  "imageAlt": "Woman adjusting a phone mounted on a ring-light tripod",
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
  "imagePosition": "55% 40%",
  "imageVariants": [
    {
      "src": "blog/pexels-13929353-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-13929353-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-13929353-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-13929353-4k.webp",
      "width": 2560
    }
  ],
  "imageCredit": {
    "name": "Mizuno K",
    "url": "https://www.pexels.com/photo/woman-fixing-a-smart-phone-on-a-tripod-13929353/"
  }
},
{
  "slug": "subtle-vignette-photo-editing",
  "title": "How to add a subtle vignette to a photo",
  "description": "Use a vignette to quiet competing edges, shape its transition, and check whether the effect helps an off-center subject or simply darkens the frame.",
  "summary": "A restrained edge-treatment workflow with a clear test for whether the vignette improves the composition.",
  "quickAnswer": "Add a vignette only when the frame edges compete with the subject. Start with a modest amount and a soft transition, then compare with the effect disabled. If it darkens an important face, hand or detail near the edge, reshape it, use a more selective adjustment or remove it.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "image": "blog/pexels-36627004-4k.webp",
  "imageAlt": "Woman standing beside a window in a softly lit room",
  "imagePosition": "50% 35%",
  "imageVariants": [
    {
      "src": "blog/pexels-36627004-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-36627004-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-36627004-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-36627004-4k.webp",
      "width": 2555
    }
  ],
  "imageCredit": {
    "name": "Patricia Bozan",
    "url": "https://www.pexels.com/photo/casual-portrait-of-a-woman-indoors-by-window-36627004/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
  "sections": [
    {
      "id": "purpose",
      "title": "Choose the edge that needs less attention",
      "paragraphs": [
        "Before opening the effect, name what is pulling your eye away: a bright corner, a pale wall, or an empty strip beside the subject. If you cannot identify a competing area, try leaving the image without a vignette.",
        "A centered portrait and an off-center portrait present different problems. In one, an even edge treatment may feel natural. In the other, the same treatment may darken the subject while leaving an empty center conspicuous. Decide what needs emphasis rather than assuming every picture needs dark corners."
      ]
    },
    {
      "id": "controls",
      "title": "Shape the transition instead of adding more darkness",
      "paragraphs": [
        "Adobe’s Lightroom web documentation describes Vignette as an edge-lightening or edge-darkening effect. Feather controls transition softness, Midpoint changes how far the treatment extends, and Roundness adjusts its shape. A Highlights control can help retain bright points when darkening the edges.",
        "Treat these as separate decisions. If you dislike a visible oval boundary, increasing the amount is unlikely to solve that shape problem. First decide where the transition should occur and which parts of the image it must avoid."
      ]
    },
    {
      "id": "exercise",
      "title": "Try the doorway portrait exercise",
      "paragraphs": [
        "Imagine a person beside a doorway, with one shoulder near the edge and a bright patch of wall in the opposite corner. Your goal is to make the wall less insistent while preserving the shoulder and the room’s sense of space. This is a suggested editing exercise, not a demonstration using the stock photo."
      ],
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Keep a no-vignette version.",
            "text": "Finish the main crop and basic edit, then retain a version without the new edge treatment."
          },
          {
            "title": "Add a modest trial.",
            "text": "Make the competing corner quieter and stop before the effect becomes the first thing you notice."
          },
          {
            "title": "Inspect the subject’s boundary.",
            "text": "Check the shoulder, hair, hands and any object close to the edge. Restore the earlier version if these become unnecessarily subdued."
          },
          {
            "title": "Compare with the controls hidden.",
            "text": "Ask whether you look at the intended subject sooner. If you only notice darker corners, reduce the treatment or remove it."
          }
        ]
      }
    },
    {
      "id": "off-center",
      "title": "Use a different shape for an off-center subject",
      "paragraphs": [
        "For uneven distractions, a movable oval mask may be more useful than an even edge treatment. Lightroom’s radial masks offer positioning and feathering for this purpose.",
        "Alternatively, adjust only the competing patch, crop it if the composition allows, or leave the surrounding light alone. The smaller change can preserve useful context that a broad vignette would hide.",
        "Watch an existing dark edge before adding another treatment. The intended result may already be present in the source. Adding a second dark boundary can turn a quiet composition into one that feels artificially enclosed."
      ]
    },
    {
      "id": "final-crop",
      "title": "Review after the final crop",
      "paragraphs": [
        "Look again whenever you change the framing or output aspect ratio. A face that was comfortably inside the photograph may now sit near an edge that receives the effect. The finished composition is the one to judge.",
        "Inspect a small preview and the larger export. A soft treatment that works in one presentation may seem heavy in another. Keep the editable version and the no-vignette alternative so you can choose deliberately instead of committing the same frame treatment to every use."
      ]
    }
  ],
  "faq": [
    {
      "question": "Does a vignette have to be dark?",
      "answer": "No. Some tools can lighten edges as well. Choose the direction that supports the photograph and check that it does not obscure important content."
    },
    {
      "question": "What is a good vignette amount?",
      "answer": "There is no useful universal number across photographs and editors. Compare with the effect disabled and keep only the amount that helps your specific composition."
    }
  ],
  "sources": [
    {
      "title": "Adobe: adjust effects in Lightroom on the web",
      "url": "https://helpx.adobe.com/lightroom/web/edit-photos/apply-effects/adjust-effects.html",
      "note": "Vignette amount, feather, midpoint, roundness and highlight handling. Checked October 23, 2026."
    },
    {
      "title": "Adobe: Lightroom masks",
      "url": "https://helpx.adobe.com/lightroom/mobile/masks-and-selective-adjustments/create-masks.html",
      "note": "Selection controls. Checked October 23, 2026."
    }
  ],
  "related": [
    "choose-portrait-background",
    "how-to-crop-portrait-photos",
    "vintage-photo-effects-guide"
  ]
},
{
  "slug": "silhouette-photos-with-phone",
  "title": "How to take silhouette photos with your phone",
  "description": "Create a readable dark outline against a brighter background without losing the subject’s shape or the scene’s color.",
  "summary": "Create a readable dark outline against a brighter background without losing the subject’s shape or the scene’s color.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "quickAnswer": "Place the subject in front of a brighter background and adjust the picture so that background retains the detail you want. Compose the subject as an outline: separate overlapping shapes and leave space around important features. A successful silhouette needs a readable edge more than visible facial detail.",
  "sections": [
    {
      "id": "intent",
      "title": "Choose what the outline needs to say",
      "paragraphs": [
        "Nikon’s silhouette guide describes exposing for a bright background so the foreground subject becomes dark. Decide whether your subject is a person, a tree or an object with a distinctive shape. If the outline alone does not explain it, choose another pose or viewpoint.",
        "For a musician holding a guitar, compare a front view with a slight turn that reveals the instrument’s neck. You do not need to show every detail. You do need enough separation to distinguish a person with an instrument from one unstructured dark mass."
      ]
    },
    {
      "id": "background",
      "title": "Find a background that supports the shape",
      "paragraphs": [
        "Look for a bright, relatively simple area behind the subject. Move the camera before moving the person so you can see which parts of the outline cross distracting objects. A roof edge passing through a head may be harder to notice in the moment than in the finished photograph.",
        "A silhouette does not need a sunset. A bright opening can also provide a useful setting. Keep the subject’s position comfortable and permitted; do not send someone onto an edge or a roadway just to isolate the outline."
      ]
    },
    {
      "id": "separation",
      "title": "Arrange gaps that remain visible at small size",
      "paragraphs": [
        "The New York Film Academy emphasizes clear outlines and separation between subjects. Leave deliberate gaps between an arm and torso or between two people when those gaps explain the pose. Check the image as a thumbnail: details that survive only when enlarged may not carry the composition.",
        "For two friends, try one frame shoulder to shoulder and one with a small gap between them. Decide which better expresses the relationship. Joining shapes can be intentional, but the viewer should not have to guess how many figures are present."
      ]
    },
    {
      "id": "capture",
      "title": "Compare brightness and focus separately",
      "paragraphs": [],
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Choose the framing.",
            "text": "Make the outline readable before adjusting the picture’s brightness. Keep enough border to preserve the head, feet or important object."
          },
          {
            "title": "Check the subject edge.",
            "text": "Nikon recommends focusing on the contrast around the silhouette. Inspect a saved frame for a clear boundary."
          },
          {
            "title": "Make a brightness comparison.",
            "text": "Capture the scene at the initial setting, then try a darker version while preserving the background detail you want. Choose by the saved photographs."
          },
          {
            "title": "Review the whole frame.",
            "text": "A strong central outline is not enough if a bright distraction or unintended overlap pulls attention elsewhere."
          }
        ]
      }
    },
    {
      "id": "finish",
      "title": "Keep the edit aligned with the intention",
      "paragraphs": [
        "If you want a dark outline, do not automatically lift shadows until every facial feature returns. That makes a different kind of backlit portrait. Compare the darker version at normal viewing size and check whether it still reads clearly.",
        "Likewise, a dramatic color treatment should not erase the background transition that made the silhouette work. Preserve a capture with the original scene colors. If you replace the background or substantially redraw the outline, treat that version as a creative interpretation rather than a direct record."
      ]
    }
  ],
  "faq": [
    {
      "question": "Should every part of a silhouette be completely black?",
      "answer": "No. Decide what supports the image. A trace of detail can work if the outline still reads and the exposure preserves the intended background."
    },
    {
      "question": "Why do two people look like one shape?",
      "answer": "Look for merged heads, shoulders or legs. Change their spacing or the camera viewpoint and judge the outline at thumbnail size before shooting again."
    }
  ],
  "sources": [
    {
      "title": "Nikon: shooting a silhouette",
      "url": "https://en.nikon.ca/learn-and-explore/c/tips-and-techniques/how-to-shoot-a-silhouette",
      "note": "Bright-background exposure and subject-edge focus. Retrieved October 23, 2026."
    },
    {
      "title": "New York Film Academy: silhouette guide",
      "url": "https://www.nyfa.edu/student-resources/guide-photographing-silhouettes/",
      "note": "Recognizable outlines and separation between figures. Retrieved October 23, 2026."
    }
  ],
  "related": [
    "backlit-phone-portraits",
    "iphone-ae-af-lock",
    "read-histogram-for-portraits"
  ],
  "image": "blog/pexels-37728399-4k.webp",
  "imageAlt": "Man seen from behind with warm sunlight outlining his hair",
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
  "imagePosition": "50% 40%",
  "imageVariants": [
    {
      "src": "blog/pexels-37728399-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-37728399-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-37728399-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-37728399-4k.webp",
      "width": 3072
    }
  ],
  "imageCredit": {
    "name": "Alef Morais",
    "url": "https://www.pexels.com/photo/back-view-portrait-in-golden-hour-light-37728399/"
  }
},
{
  "slug": "limit-app-photo-library-access-iphone",
  "title": "How to limit an app’s photo access on iPhone",
  "description": "Choose selected-photo access, review an app’s permission, and distinguish library access from pictures already imported or uploaded.",
  "summary": "Give a photo task the access it needs while checking what selection the app can use.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "quickAnswer": "Review the app under Settings → Privacy & Security → Photos and choose selected or limited access when offered. Add the particular picture you need rather than expanding access automatically. A system photo picker can also let you select an item without granting broad library access.",
  "sections": [
    {
      "id": "two-paths",
      "title": "Understand a picker and a library permission",
      "paragraphs": [
        "Apple’s developer guidance distinguishes a system photo picker from ongoing PhotoKit library access. The picker can supply selected items without a broad library permission. Limited library access lets the app work with the selection you allow.",
        "These paths can look similar because both begin with choosing a picture. Notice whether you are selecting an attachment for one task or deciding which portion of the library the app may browse. Do not infer the permission level just from seeing thumbnails."
      ]
    },
    {
      "id": "review",
      "title": "Review the permission and selection",
      "paragraphs": [
        "Apple’s iOS 26 privacy guide places information permissions under Settings → Privacy & Security. Open Photos, choose the app that requested access, and review the choices shown. For apps requesting library access, select the limited option and manage the allowed photographs. Labels vary with software and the type of access requested.",
        "Manage the selection in Settings or through the app’s own management control, if provided. You do not need to grant full access just to investigate why one intended picture is absent.",
        "Start with one or two recognizable, non-sensitive pictures. That makes it easier to tell whether you allowed the correct selection."
      ]
    },
    {
      "id": "missing",
      "title": "When a picture does not appear",
      "paragraphs": [
        "First check the file in Photos, then review whether it is included in the app’s allowed selection. Return to the app and try its import flow again. If it offers a system picker, select the intended item there.",
        "If the picture is still missing, consult that app’s own file-format and import requirements. A permissions problem and an unsupported-file problem can produce similar frustration. Repeatedly broadening access is not a useful diagnosis if the importer cannot use the file."
      ]
    },
    {
      "id": "verify",
      "title": "Use a small, observable task",
      "paragraphs": [
        "For a profile image, choose one trial photograph and complete the import. Check that the result is the correct file before repeating the process with the intended portrait. This verifies your task without requiring a bulk library grant.",
        "If an app needs to manage a whole library, consider that wider purpose explicitly. A one-picture posting task and a library-management task are different reasons for access. Decide based on the feature you plan to use, not merely the largest permission offered."
      ]
    },
    {
      "id": "earlier-copies",
      "title": "Keep earlier copies in the review",
      "paragraphs": [
        "Permission changes concern access to the library. Do not treat them as evidence that an image previously imported or uploaded was erased. Review the app’s own saved items and account-data controls separately.",
        "For example, after allowing a portrait and uploading it to a service, later limiting the selection is not a substitute for checking that service’s deletion options. Keep a simple record of where you sent important photographs. That makes future privacy decisions easier than trying to reconstruct every destination."
      ]
    }
  ],
  "faq": [
    {
      "question": "Should I allow the whole library to import one portrait?",
      "answer": "Try the smallest access choice that supports the task, including a system picker when available. If the app asks for more, understand what feature requires it before changing the setting."
    },
    {
      "question": "Why do different apps show different choices?",
      "answer": "Apps can use different photo-access approaches. Read the specific permission request and the settings offered instead of expecting an identical screen everywhere."
    }
  ],
  "sources": [
    {
      "title": "Apple: Control access to information in apps — iOS 26",
      "url": "https://support.apple.com/guide/iphone/control-access-to-information-in-apps-iph251e92810/26/ios/26",
      "note": "Permission review location and changing access."
    },
    {
      "title": "Apple Developer: Handle the Limited Photos Library in your app",
      "url": "https://developer.apple.com/videos/play/wwdc2020/10641/",
      "note": "Limited library selection, system-picker distinction and managing selection; historical API explanation, not a current UI screenshot."
    }
  ],
  "related": [
    "remove-location-from-iphone-photos",
    "google-photos-archive-vs-locked-folder",
    "choose-photo-for-ai-portraits"
  ],
  "image": "blog/pexels-34225009-4k.webp",
  "imageAlt": "Photographer holding a memory card beside a card reader and laptop",
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
  "imagePosition": "60% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-34225009-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-34225009-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-34225009-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-34225009-4k.webp",
      "width": 3840
    }
  ],
  "imageCredit": {
    "name": "Julio Lopez",
    "url": "https://www.pexels.com/photo/photographer-inserting-sd-card-into-laptop-for-editing-34225009/"
  }
},
{
  "slug": "local-masking-vs-global-photo-edits",
  "title": "Local masks vs global photo edits: which to use?",
  "description": "Decide when a whole-image adjustment is enough, choose a mask by its boundary, and check overlapping edits without building an unnecessary mask stack.",
  "summary": "A selection-first guide to local adjustments, with an interior example and a simple audit for overlapping masks.",
  "quickAnswer": "Start with a global edit. If it improves one part but harms another, try limiting the change with a mask.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "image": "blog/pexels-33507990-4k.webp",
  "imageAlt": "Woman raising her arms in sunlight beside a shaded wall",
  "imagePosition": "50% 35%",
  "imageVariants": [
    {
      "src": "blog/pexels-33507990-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-33507990-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-33507990-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-33507990-4k.webp",
      "width": 3840
    }
  ],
  "imageCredit": {
    "name": "Amar Preciado",
    "url": "https://www.pexels.com/photo/portrait-of-woman-in-sunlight-against-rustic-background-33507990/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
  "sections": [
    {
      "id": "scope",
      "title": "Decide where the change belongs",
      "paragraphs": [
        "Write the request as a sentence: “The whole room feels too dim” or “Only the bright curtain needs less attention.” The first suggests a global trial. The second suggests a local one. Do not build several masks before deciding whether a simpler adjustment solves the problem.",
        "A global control can still favor certain tones or colors; global does not mean every pixel must change equally. The useful distinction is whether you have defined a separate selection that limits where the adjustment is allowed to act."
      ]
    },
    {
      "id": "choose-selection",
      "title": "Choose a mask by its boundary",
      "paragraphs": [
        "Lightroom mobile offers painted, gradient and range-based masks, plus automatic selections you can refine. Choose a method that fits the target’s boundary, then inspect what it actually includes."
      ]
    },
    {
      "id": "room-example",
      "title": "Build a small, named set of adjustments",
      "paragraphs": [
        "Imagine an interior with a bright curtain, a textured chair and a person reading. You want a quieter curtain and a slightly more readable chair while leaving the person unchanged. That is a useful exercise because it gives every local edit a clear job."
      ],
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Establish the overall version.",
            "text": "Make a global trial first and keep the version that gives the room a useful starting balance."
          },
          {
            "title": "Create one selection.",
            "text": "Choose a mask for the curtain. Inspect the overlay or selection display before adjusting its appearance."
          },
          {
            "title": "Name the purpose.",
            "text": "Use a label such as “quiet curtain” where naming is supported, or note the purpose elsewhere. Avoid a stack of unnamed experiments you cannot explain."
          },
          {
            "title": "Add the next mask only if needed.",
            "text": "Check whether the chair still needs attention after the curtain change. Make that separate adjustment with its own purpose."
          },
          {
            "title": "Review the protected subject.",
            "text": "Toggle the local edits and inspect the reader. Make sure an adjustment intended elsewhere has not changed a face, hand or clothing edge."
          }
        ]
      }
    },
    {
      "id": "boundary-overlap",
      "title": "Inspect boundaries and overlapping areas",
      "paragraphs": [
        "A plausible adjustment can still look wrong at its boundary. Look for a bright rim, an abrupt patch or a strip that the selection missed. Refine the selection before repeatedly changing the effect strength; those are different problems.",
        "Inspect the whole frame, not just your intended target. A color selection for a blue curtain might include another blue object.",
        "Then disable each mask in turn. If two edits affect the same place, inspect that overlap with both enabled and separately. Keep both only when you can explain why their combined appearance is useful. More masks create more decisions to review, not automatic precision."
      ]
    },
    {
      "id": "keep-simple",
      "title": "Keep the version you can understand later",
      "paragraphs": [
        "Before export, remove experiments that no longer have a visible purpose. Save an editable master with enough organization to revisit the important choices. A note saying “curtain quieter, reader unchanged” is more useful than remembering only that there were several masks.",
        "For another photo, repeat the diagnosis rather than assuming the same selections still fit. A new pose, crop or light pattern can change which area needs help even when the overall look should remain consistent."
      ]
    }
  ],
  "faq": [
    {
      "question": "Are local edits always more professional?",
      "answer": "No. A global adjustment is preferable when it solves the problem cleanly. Local edits are useful when their limited reach creates a visible benefit."
    },
    {
      "question": "Does an automatic subject mask mean the edges are finished?",
      "answer": "Inspect the boundary before keeping the adjustment. Pay particular attention to hair and gaps between objects."
    }
  ],
  "sources": [
    {
      "title": "Adobe: Lightroom masks",
      "url": "https://helpx.adobe.com/lightroom/mobile/masks-and-selective-adjustments/create-masks.html",
      "note": "Selection controls. Checked October 23, 2026."
    }
  ],
  "related": [
    "brighten-dark-face-in-photo",
    "selective-color-photo-effect",
    "fix-mixed-lighting-in-portraits"
  ]
},
{
  "slug": "water-reflection-photos-with-phone",
  "title": "How to photograph water reflections with your phone",
  "description": "Find a useful viewpoint for puddles, ponds and still water, then decide whether symmetry or a fragment makes the stronger photograph.",
  "summary": "Find a useful viewpoint for puddles, ponds and still water, then decide whether symmetry or a fragment makes the stronger photograph.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "quickAnswer": "Choose a visible reflection, change the phone’s height to see how much of it enters the frame and wait for a moment that suits the water’s movement. Decide whether you want both the subject and its reflection or only a reflected fragment. Keep enough of a reference frame to understand the scene before experimenting with a tighter composition.",
  "sections": [
    {
      "id": "subject",
      "title": "Choose the reflected subject before the framing",
      "paragraphs": [
        "A reflective surface is not yet a complete subject. Name the element you want to show: a building, a tree, a colorful sign or an abstract patch of light. This helps you choose what to include when the water reflects more than you expected.",
        "For a building in a shallow puddle, first make a reference that includes the building, puddle and surrounding pavement. Then look for the reflected roofline. If that is the important shape, compose around it instead of keeping every part of the original scene."
      ]
    },
    {
      "id": "height",
      "title": "Explore height without committing to one formula",
      "paragraphs": [
        "Adobe’s reflection guide discusses changing camera position and shooting low around puddles. Compare a standing view with a lower one from a stable position. Watch what enters and leaves the water’s reflected area as the phone moves.",
        "Keep the phone above the water and remain on firm ground. You do not need to balance at the edge of a pond to make the comparison. If a low view is uncomfortable or inaccessible, use the standing viewpoint as a constraint and find a smaller reflected detail within it."
      ]
    },
    {
      "id": "movement",
      "title": "Work with the surface you actually have",
      "paragraphs": [
        "Adobe notes that wind and ripples affect reflected scenes. If you want a recognizable mirror image, observe the water before shooting and make a few frames as the surface changes. If it remains broken, choose whether the moving pattern is worth photographing on its own.",
        "For the puddle example, compare a clear roofline with the same roofline interrupted by a passing ripple. Neither has to win automatically. The first may describe the place; the second may communicate rain or movement. Select according to the image you intended, not a universal rule about perfect symmetry."
      ]
    },
    {
      "id": "composition",
      "title": "Compare the complete scene with a reflected fragment",
      "paragraphs": [
        "Adobe discusses both a subject with its reflection and a reflection-only view. Compare those options using the same scene."
      ],
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "The complete relationship.",
            "text": "Include the physical subject and the reflected version. Nikon notes that a centered horizon can work for symmetrical reflections; compare it rather than applying a grid rule mechanically."
          },
          {
            "title": "The reflected fragment.",
            "text": "Crop out the real subject and let the water carry the image. Inspect the edges for a stray shoe, drain or bright piece of litter."
          }
        ]
      }
    },
    {
      "id": "review",
      "title": "Preserve the reflection you came to photograph",
      "paragraphs": [
        "Canon’s polarizer guidance explains that the filter can reduce water reflections. If you already use one, compare its rotation or an unfiltered view before assuming a stronger effect is better. Removing the glare may also remove the reflected subject.",
        "Check the saved photograph for a recognizable focal feature, awkward edge crops and a distracting tilt. Keep the wider reference alongside an abstract crop so you can trace the result back to the scene. If you later rotate the image for a creative presentation, make that a deliberate viewing choice rather than an accidental orientation error."
      ]
    }
  ],
  "faq": [
    {
      "question": "Should I always place the dividing line in the center?",
      "answer": "No. Compare centered symmetry with a frame that gives more space to the important subject or its reflected version."
    }
  ],
  "sources": [
    {
      "title": "Adobe: reflection photography",
      "url": "https://www.adobe.com/creativecloud/photography/discover/reflection-photography.html",
      "note": "Viewpoint, water movement and complete-versus-reflection-only framing. Retrieved October 23, 2026."
    },
    {
      "title": "Nikon: five composition guidelines",
      "url": "https://www.nikonusa.com/learn-and-explore/c/tips-and-techniques/5-easy-composition-guidelines",
      "note": "Grid alignment and deliberate framing. Retrieved October 23, 2026."
    },
    {
      "title": "Canon Academy: polarizing filters in practice",
      "url": "https://www.academy.canon-me.com/en/fundamentals/polarizing-filters-in-practice",
      "note": "Variable reduction of glass/water reflections and light loss. Retrieved October 23, 2026."
    }
  ],
  "related": [
    "iphone-live-photo-long-exposure",
    "intentional-motion-blur-photography",
    "fix-perspective-in-phone-photos"
  ],
  "image": "blog/pexels-1121782-4k.webp",
  "imageAlt": "Historic street buildings reflected in a puddle",
  "imagePosition": "50% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-1121782-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-1121782-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-1121782-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-1121782-4k.webp",
      "width": 3840
    }
  ],
  "imageCredit": {
    "name": "Paweł L.",
    "url": "https://www.pexels.com/photo/reflection-of-buildings-on-body-of-water-1121782/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "remove-small-background-distractions",
  "title": "How to remove small distractions from a photo",
  "description": "Choose between healing, cloning and generative removal, repair a small background object, and inspect repeated patterns, seams and context afterward.",
  "summary": "A careful background-cleanup workflow that prioritizes believable structure and preserves an untouched original.",
  "quickAnswer": "For a small distraction, first consider a crop. If you need to keep the framing, use a healing or cloning tool that suits the surrounding surface, and inspect the repair closely. Generative removal creates replacement content, so judge it as an interpretation rather than proof of what was behind the object.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "image": "blog/pexels-19158754-4k.webp",
  "imageAlt": "Woman standing in sunlight against a darker outdoor background",
  "imagePosition": "50% 40%",
  "imageVariants": [
    {
      "src": "blog/pexels-19158754-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-19158754-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-19158754-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-19158754-4k.webp",
      "width": 2560
    }
  ],
  "imageCredit": {
    "name": "apertur 2.8",
    "url": "https://www.pexels.com/photo/young-woman-posing-outside-in-sunlight-19158754/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
  "sections": [
    {
      "id": "choose-change",
      "title": "Choose what should actually disappear",
      "paragraphs": [
        "A stray wrapper on an otherwise clear floor is different from a person who was part of the event. Decide what the photograph is meant to communicate before cleaning it up. A personal creative portrait allows different choices from a record intended to document what happened.",
        "Check whether a small crop removes the distraction without losing something important. If you need the original framing, keep an untouched version and identify the smallest repair that would help. Do not begin by removing every irregularity from a real place."
      ]
    },
    {
      "id": "choose-tool",
      "title": "Match the tool to the surrounding surface",
      "paragraphs": [
        "Adobe distinguishes healing, which blends sampled material with its surroundings, from cloning, which copies source pixels. Its tutorial suggests trying Clone when healing produces a smear near a high-contrast boundary. Lightroom’s Generative Remove instead creates replacement content with Adobe Firefly."
      ],
      "table": {
        "headers": [
          "Situation",
          "Starting decision"
        ],
        "rows": [
          [
            "A small mark on an even surface",
            "Try healing and inspect the texture continuity."
          ],
          [
            "A repair beside a clear line or repeated structure",
            "Consider a carefully chosen clone source and check alignment."
          ],
          [
            "No useful nearby source for a more complex gap",
            "Consider a creative reconstruction only if invented content is acceptable."
          ],
          [
            "An important documentary detail",
            "Keep the detail or use a different photograph rather than silently changing the record."
          ]
        ]
      }
    },
    {
      "id": "small-repair",
      "title": "Repair one object before attempting a larger cleanup",
      "paragraphs": [
        "Imagine a portrait beside a tiled wall with a small sticker behind the subject. You want to remove the sticker while keeping the tile joints believable. This exercise gives the repair a clear boundary and a structure you can inspect."
      ],
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Identify the whole distraction.",
            "text": "Include any relevant trace such as its small shadow, while avoiding an unnecessarily large selection."
          },
          {
            "title": "Inspect the candidate source.",
            "text": "For a sampled repair, choose material that suits the local surface, light and pattern. Do not copy a tile joint into a place where no joint should exist."
          },
          {
            "title": "Make one repair.",
            "text": "Review the result before adding more. If it creates a smear or a broken line, undo or revise the source instead of hiding the fault with repeated overlapping repairs."
          },
          {
            "title": "Check both sides of the boundary.",
            "text": "Follow the nearby tile joints through the repaired area. Compare the wall’s brightness and texture inside and outside it."
          },
          {
            "title": "Zoom back out.",
            "text": "Make sure the cleanup improves the portrait as a whole. An invisible sticker repair has little value if the subject or composition is still not working."
          }
        ]
      }
    },
    {
      "id": "audit",
      "title": "Look for clues left by the replacement",
      "paragraphs": [
        "Inspect repeated details: the same chip in two tiles, an identical leaf in two places, or a wall pattern that suddenly changes direction. Then check shadow continuity and the edge of the subject. The repair should not steal a strand of hair or alter a nearby hand.",
        "With generative removal, review every candidate carefully. A plausible result can still invent geometry, text or objects that were never present. For a recognizable location or a meaningful background, compare with your original and decide whether that invention changes the story.",
        "If several attempts make the area more conspicuous, keep the best earlier version or leave the distraction. A small real imperfection can be less noticeable than a complicated artificial patch."
      ]
    },
    {
      "id": "save-original",
      "title": "Keep the original and describe the result honestly",
      "paragraphs": [
        "Save the edited result separately or retain a reversible edit. Preserve the source so you can later choose a faithful version or make a different crop without rebuilding missing content.",
        "If the photograph is used as evidence of a place, event or item’s condition, do not present removed or generated details as an untouched record. For creative use, check the final delivery size as well as a close view and keep only the changes that serve the picture."
      ]
    }
  ],
  "faq": [
    {
      "question": "Is healing always better than cloning?",
      "answer": "No. Blending can help on one surface and smear another. Choose by the boundary and texture you need to preserve, then inspect the actual repair."
    },
    {
      "question": "Does generative removal reveal what was behind an object?",
      "answer": "No. It produces replacement content. A convincing result does not establish that the hidden scene looked that way."
    }
  ],
  "sources": [
    {
      "title": "Adobe: remove distracting objects from a photo",
      "url": "https://helpx.adobe.com/ph_fil/lightroom-cc/how-to/remove-objects-from-photo.html",
      "note": "Healing versus cloning, source selection and high-contrast smearing. Checked October 23, 2026."
    },
    {
      "title": "Adobe: remove objects with generative AI",
      "url": "https://helpx.adobe.com/lightroom/web/edit-photos/remove-objects/remove-objects-with-gen-ai.html",
      "note": "Generated replacement content and selection refinement. Checked October 23, 2026."
    }
  ],
  "related": [
    "choose-portrait-background",
    "how-to-crop-portrait-photos",
    "edit-photos-without-losing-original"
  ]
},
{
  "slug": "copy-paste-photo-edits-iphone",
  "title": "How to copy and paste photo edits on iPhone",
  "description": "Transfer an iPhone photo edit to a batch, check the result, preserve an earlier version and troubleshoot an unwanted change.",
  "summary": "A practical trial-and-review workflow for transferring an edit in iPhone Photos.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "image": "blog/pexels-7129664-4k.webp",
  "imageAlt": "Hands at a laptop displaying a set of portrait photographs",
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
  "imagePosition": "50% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-7129664-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-7129664-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-7129664-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-7129664-4k.webp",
      "width": 2560
    }
  ],
  "imageCredit": {
    "name": "Michael Burrows",
    "url": "https://www.pexels.com/photo/photographer-working-on-laptop-at-workplace-7129664/"
  },
  "quickAnswer": "Use Copy Edits and Paste Edits in iPhone Photos to transfer selected adjustments. Try one destination before a batch, and preserve an existing finished edit before experimenting.",
  "sections": [
    {
      "id": "prepare",
      "title": "Keep a previous version before trying a batch",
      "paragraphs": [
        "Start with a finished source image and one destination you can easily identify. Avoid selecting a whole holiday or event before checking what transfers. If the destination already has an edit you like, preserve that version first.",
        "Apple distinguishes Duplicate, which creates another library item, from Copy, which places the picture into another document. To retain a working alternative, open the destination and choose More → Duplicate. Copy Edits is a separate command for adjustments.",
        "A useful trial uses two visibly different files: the source and a destination with a recognizable expression or background. This reduces the chance of mistaking the source for the pasted result. Keep your trial selection small enough to inspect every picture."
      ]
    },
    {
      "id": "copy-paste",
      "title": "Transfer the edits in Photos",
      "paragraphs": [
        "The command paths follow Apple’s iOS 27 guide; select your installed version there if it differs."
      ],
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Choose the source.",
            "text": "Open the edited picture. Use More → Copy Edits, deselect unwanted adjustments and tap Copy."
          },
          {
            "title": "Try one destination.",
            "text": "Open the trial picture. Use More → Paste Edits."
          },
          {
            "title": "Expand after checking.",
            "text": "In the library, tap Select, mark the destinations and use More → Paste Edits."
          }
        ]
      }
    },
    {
      "id": "check-transfer",
      "title": "Check what changed before expanding the selection",
      "paragraphs": [
        "Apple says Photos adapts exposure and white balance when matching. Do not expect identical numeric settings everywhere.",
        "For the trial, choose one visible goal: a less intense color treatment, softer contrast, or a preferred filter. Compare that feature before checking the rest of the picture. A result that meets the color goal but loses useful context through an unwanted composition change is not ready for the batch.",
        "For example, imagine editing several pictures of a friend holding a red umbrella. Inspect the umbrella, the face and the frame edges in the trial. Then examine the brightest and darkest pictures in the selection. Those checks test whether the transfer is useful; they do not require every photograph to become visually identical."
      ]
    },
    {
      "id": "troubleshoot",
      "title": "Solve the immediate problem without repeating the whole batch",
      "paragraphs": [],
      "table": {
        "headers": [
          "Problem",
          "Next check"
        ],
        "rows": [
          [
            "The expected command is missing",
            "Check the source file and compare your screen with the Apple guide for your installed version."
          ],
          [
            "Only some adjustments are useful",
            "Narrow the intended change and repeat the single-picture trial before expanding it."
          ],
          [
            "One destination looks wrong",
            "Set it aside for individual correction instead of changing every acceptable picture again."
          ],
          [
            "You cannot tell whether anything changed",
            "Use a clearly identifiable trial image and compare the feature you intended to transfer."
          ]
        ]
      }
    },
    {
      "id": "undo",
      "title": "Revert only when you want the original back",
      "paragraphs": [
        "Apple’s iOS 27 undo guide uses More → Revert to Original for a saved edit. During editing, Undo and Redo can step through changes. Reverting restores the original; it is not a promise to recover a particular earlier finished version.",
        "If you need to preserve the work that existed before this experiment, use the duplicate you made at the start. Keep the acceptable version clearly identified before cleaning up trial copies. With iCloud Photos, edits synchronize to your other devices, so another device should not be treated as an untouched alternative."
      ]
    }
  ],
  "faq": [
    {
      "question": "Is copying edits the same as copying the photo?",
      "answer": "No. Adjustment transfer, a new library version and placing an image into a document are different jobs. Choose the command for the job you intend."
    },
    {
      "question": "Should I select every photo from the event?",
      "answer": "Start with one trial, then a manageable group. Review a few difficult examples before expanding; a successful transfer on one picture does not establish that every destination looks right."
    },
    {
      "question": "Can I use this to transfer a look from a screenshot?",
      "answer": "A screenshot is a rendered picture, not a supplied set of editable adjustments. Ask for the editing settings or an appropriate editable source instead of treating its appearance as a copyable recipe."
    }
  ],
  "sources": [
    {
      "title": "Apple: edit photos and videos — iOS 27",
      "url": "https://support.apple.com/en-gb/guide/iphone/iphb08064d57/27/ios/27",
      "note": "Copy/Paste Edits controls and automatic matching. Checked October 23, 2026."
    },
    {
      "title": "Apple: duplicate and copy photos — iOS 27",
      "url": "https://support.apple.com/en-ie/guide/iphone/iph1d6b0a5cf/27/ios/27",
      "note": "Separate library versions versus copying an image. Checked October 23, 2026."
    },
    {
      "title": "Apple: undo and revert photo edits — iOS 27",
      "url": "https://support.apple.com/en-gb/guide/iphone/iph2413db0ab/27/ios/27",
      "note": "Saved-edit reversion, undo and iCloud synchronization. Checked October 23, 2026."
    }
  ],
  "related": [
    "consistent-editing-for-photo-set",
    "edit-photos-without-losing-original",
    "icloud-photos-sync-vs-backup"
  ]
},
{
  "slug": "edit-portrait-focus-depth-iphone",
  "title": "How to change Portrait focus and background blur on iPhone",
  "description": "Choose what you want a portrait to emphasize, find the appropriate iPhone controls, and compare the result before keeping the edit.",
  "summary": "Decide what the picture should emphasize, then review one change at a time.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "image": "blog/pexels-10551192-4k.webp",
  "imageAlt": "Woman resting her face on her hand with blurred lights behind her",
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique.",
  "imagePosition": "50% 45%",
  "imageVariants": [
    {
      "src": "blog/pexels-10551192-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-10551192-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-10551192-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-10551192-4k.webp",
      "width": 3840
    }
  ],
  "imageCredit": {
    "name": "Marlon Alves",
    "url": "https://www.pexels.com/photo/portrait-of-a-woman-at-night-10551192/"
  },
  "quickAnswer": "Open the original portrait in Photos and tap Edit. Check which controls the image offers before changing the subject or blur.",
  "sections": [
    {
      "id": "check-support",
      "title": "Separate three different Portrait capabilities",
      "paragraphs": [
        "The instructions here follow Apple’s iOS 27 documentation. Use the version selector in its guide for an older installation. A phone’s ability to capture portraits does not establish that every received image has the same editing options."
      ]
    },
    {
      "id": "change-focus",
      "title": "Choose the subject before choosing blur strength",
      "paragraphs": [
        "Apple lists focus-point editing for iPhone 13 or later. In Photos, open the portrait, tap Edit, then tap the intended new subject. Inspect the change before tapping Done. Avoid choosing a subject that is already blurred or too distant.",
        "For example, consider a picture with one person near the camera and a friend behind them. Decide whose expression the photo should emphasize. Try the other person, then compare at the same viewing size. If their face remains smeared, do not interpret a moved selection as proof of recovered detail.",
        "Judge the whole story as well as the face. A different focus choice may turn a conversation into a portrait of one participant. Keep the version that communicates your intention, rather than choosing a subject simply because the interface lets you tap it."
      ]
    },
    {
      "id": "adjust-depth",
      "title": "Adjust depth as a separate decision",
      "paragraphs": [
        "Use the Depth Control slider in the portrait’s Edit view, then save with Done. The original depth position is marked with a black dot.",
        "Begin with the subject choice settled. Compare a restrained blur with a stronger version while keeping the crop and color unchanged. This makes the effect easier to evaluate without a new crop or brighter face distracting you.",
        "Try a simple viewing check: read the picture as a small thumbnail, then examine the subject at a larger size. Does the background still explain where the person is? Does a recognizable place matter to the memory? There is no reason to erase useful context just because a stronger effect is available."
      ]
    },
    {
      "id": "photo-mode",
      "title": "Check eligibility before converting a Photo-mode image",
      "paragraphs": [
        "Apple’s separate Photo-mode list includes the iPhone 15 family; iPhone 16, 16 Plus, 16 Pro and 16 Pro Max; and the listed newer models. It does not list iPhone 16e. Check your exact model in the linked list rather than assuming every newer phone has the same capability.",
        "For an eligible image, choose Edit → Portrait, enable Portrait at the top, adjust the effect and save. The Portrait option must be available for that photo.",
        "Apple’s capture guide ties later portrait editing to captured depth information, indicated by the Depth control in Camera. For a new attempt, inspect the saved photo while the scene is still available. Take a deliberate Portrait-mode alternative when appropriate instead of planning to convert an unverified file later."
      ]
    },
    {
      "id": "missing-controls",
      "title": "When a control is missing, check the source first",
      "paragraphs": [
        "Open the camera-library original if you have it. If someone sent the picture, ask which phone and mode captured it and whether they can provide the original editable file. This is a more useful first step than repeatedly saving or converting the received picture.",
        "Keep a note of what you actually see: no Portrait option, a working depth slider but no useful subject change, or a different result after transfer. Those are different problems and give support a clearer starting point than “Portrait does not work.”",
        "If you prefer the ordinary rendering, Apple’s capture guide explains turning the Portrait effect off in Photos editing. Keep that comparison separate from resetting all your color and crop work. For a complete reset, Apple documents Revert to Original; preserve an earlier finished version before using it."
      ]
    }
  ],
  "faq": [
    {
      "question": "Can changing the focus point repair camera shake?",
      "answer": "Do not use it as a motion-repair plan. Choose another frame or retake if the intended face lacks usable detail in the original."
    },
    {
      "question": "Do I need the strongest blur for a portrait?",
      "answer": "No. Choose an amount that supports the person while retaining any setting that matters. A travel portrait can benefit from a readable landmark."
    },
    {
      "question": "Why does a photo look better with the effect off?",
      "answer": "The original scene may already separate the person well, or the effect may distract from important detail. Keeping the simpler version is a valid editing decision."
    }
  ],
  "sources": [
    {
      "title": "Apple: edit Portrait mode photos — iOS 27",
      "url": "https://support.apple.com/en-gb/guide/iphone/iph310a9a220/27/ios/27",
      "note": "Depth, subject selection and eligible Photo-mode editing. Checked October 23, 2026."
    },
    {
      "title": "Apple: models supporting portrait capture in Photo mode",
      "url": "https://support.apple.com/en-gb/guide/iphone/aside/iphde3d86c94/27/ios/27",
      "note": "Separate compatibility list for Photo-mode depth capture. Checked October 23, 2026."
    },
    {
      "title": "Apple: take portraits — iOS 27",
      "url": "https://support.apple.com/en-ie/guide/iphone/iphd7d3a91a2/27/ios/27",
      "note": "Capture eligibility and effect toggle. Checked October 23, 2026."
    },
    {
      "title": "Apple: undo and revert photo edits — iOS 27",
      "url": "https://support.apple.com/en-gb/guide/iphone/iph2413db0ab/27/ios/27",
      "note": "Full reset differs from changing an individual effect. Checked October 23, 2026."
    }
  ],
  "related": [
    "portrait-mode-blur-mistakes",
    "airdrop-photos-original-data",
    "edit-photos-without-losing-original"
  ]
},
{
  "slug": "merge-duplicate-iphone-photos",
  "title": "How to merge duplicate iPhone photos without losing a version you want",
  "description": "Review duplicate sets in iPhone Photos, understand what merging keeps, and check the result before clearing deleted copies or processing a larger batch.",
  "summary": "Use the Duplicates collection to review redundant copies while keeping intentional versions separate.",
  "quickAnswer": "In iPhone Photos, open Collections → Utilities → Duplicates. Review a set, tap Merge, then confirm Merge [number] Items. Start with one set and inspect the surviving picture before processing more. If Duplicates is missing, allow the phone time to finish detection while locked and charging.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "sections": [
    {
      "id": "review-before-merge",
      "title": "Decide whether the copies are actually redundant",
      "paragraphs": [
        "The menu route in this guide follows Apple’s iOS 26 documentation. Before touching Merge, decide what you want to retain. Two pictures of the same person can serve different purposes: one may be your source, another the crop chosen for a profile picture. Do not make a cleanup decision from tiny thumbnails alone.",
        "For an important set, open the candidates and look at the expression, framing and any visible editing. If you deliberately need separate versions, preserve them before continuing. The goal is a useful library, not the lowest possible photo count."
      ]
    },
    {
      "id": "merge-one-set",
      "title": "Merge one reviewed set first",
      "paragraphs": [
        "Apple’s duplicate guide gives the Collections → Utilities route. Older releases can group the same controls differently; use the guide for your installed version if the screen does not match."
      ],
      "list": {
        "ordered": true,
        "items": [
          {
            "text": "Open Duplicates and choose one set you recognize. Compare the pictures before confirming anything."
          },
          {
            "text": "Tap that set’s Merge control, read the confirmation and choose Merge [number] Items."
          },
          {
            "text": "Open the remaining photograph in your library. Inspect the details that made this set worth keeping."
          },
          {
            "text": "Continue with another small group only when the result matches your intention. Avoid starting with every detected set at once."
          }
        ]
      }
    },
    {
      "id": "what-merge-keeps",
      "title": "Understand what Apple says merging retains",
      "paragraphs": [
        "Apple says Photos combines the highest image quality and relevant data into one retained picture; the other duplicates move to Recently Deleted. That describes how the merge handles the detected set. It does not decide which expression, crop or treatment you personally prefer.",
        "For your review, pick three concrete details before merging: for example, the full frame, a readable sign and the version with the intended color. Check those same details afterward. This is a suggested verification routine, not a claim that we tested every file combination.",
        "Leave Recently Deleted alone while you check the outcome. Apple provides a recovery period of up to 30 days unless you permanently delete the items sooner. Our recovery guide below covers restoring a removed copy. With iCloud Photos, deletion affects the synchronized library across devices; a second device showing the same library is not your separate safety copy."
      ]
    },
    {
      "id": "duplicates-missing",
      "title": "If the Duplicates collection does not appear",
      "paragraphs": [
        "Apple says detection requires the iPhone to be locked and connected to power. Indexing and duplicate detection can take a few days, depending on library size and background activity. The collection appears when eligible duplicates have been identified.",
        "After a large import, give that process time rather than repeatedly importing the same files to make a collection appear. Check Photos for an indexing status, then leave the phone charging and locked when convenient. An absent collection does not establish that you personally want to keep every similar-looking picture.",
        "If your goal is choosing the best expression from a series, use a deliberate photo-selection workflow. Duplicate detection and judging a set of different moments are different jobs."
      ]
    },
    {
      "id": "cleanup-boundary",
      "title": "Set a stopping point for the cleanup",
      "paragraphs": [
        "Work through one recognizable event or import at a time. Keep a short note of the batch you reviewed, especially if the library contains someone else’s family pictures. Stop when you reach versions whose purpose you cannot identify.",
        "Before a large cleanup, verify that your independent saved copies open and contain what you expect. Do not assume fewer thumbnails prove that every important version survived. A small reviewed batch gives you a clearer result to check than a whole-library action followed by uncertainty."
      ]
    }
  ],
  "faq": [
    {
      "question": "Can I merge several duplicate sets at once?",
      "answer": "Yes. Apple documents Select, followed by selecting sets or Select All, then Merge. Review the candidates first; using the broadest selection is optional."
    },
    {
      "question": "Will merging improve a blurry original?",
      "answer": "Do not use duplicate cleanup as an image-restoration tool. Inspect the retained picture for the detail you need; a tidier library is not evidence of newly captured detail."
    }
  ],
  "sources": [
    {
      "title": "Apple: merge duplicate photos, iOS 26 guide",
      "url": "https://support.apple.com/guide/iphone/merge-duplicate-photos-and-videos-iph1978d9c23/26/ios/26",
      "note": "Version-specific collection route and merge confirmation. Retrieved October 23, 2026."
    },
    {
      "title": "Apple: delete photos on iPhone or iPad",
      "url": "https://support.apple.com/en-us/104967",
      "note": "What merging retains, batch selection, Recently Deleted and synchronized deletion. Retrieved October 23, 2026."
    },
    {
      "title": "Apple: if the Duplicates album is missing",
      "url": "https://support.apple.com/en-us/102260",
      "note": "Indexing, charging/locking requirements and detection timing. Retrieved October 23, 2026."
    }
  ],
  "related": [
    "recover-deleted-iphone-photos",
    "icloud-photos-sync-vs-backup",
    "iphone-burst-photos-select-best-frame"
  ],
  "image": "blog/pexels-30861211-4k.webp",
  "imageAlt": "Camera beside a laptop displaying photographs for review",
  "imagePosition": "50% 40%",
  "imageVariants": [
    {
      "src": "blog/pexels-30861211-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-30861211-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-30861211-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-30861211-4k.webp",
      "width": 2560
    }
  ],
  "imageCredit": {
    "name": "Ebahir",
    "url": "https://www.pexels.com/photo/photographer-editing-photos-on-laptop-30861211/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "change-photo-date-time-iphone",
  "title": "How to change a photo’s date and time on iPhone",
  "description": "Correct a saved photo’s capture date, check the library sort order, and verify a small batch before changing a larger collection on iPhone.",
  "summary": "Fix the stored date when you have a reliable reference, and check the viewing order before assuming the correction failed.",
  "quickAnswer": "In Photos, open the picture and choose More → Adjust Date & Time. Set the date and time, then tap Adjust. Verify the information afterward; sorting is a separate choice.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "sections": [
    {
      "id": "check-the-reference",
      "title": "Establish the date before changing it",
      "paragraphs": [
        "Begin with a reference you can explain: a calendar entry, a message sent during the event, or a clearly dated original. Record what the photo currently shows and what you intend to change. This makes an accidental correction easier to spot.",
        "For a travel picture, distinguish the day at the photographed location from the day at home. A flight across midnight can make a remembered date ambiguous. Do not apply one guessed correction to an entire trip just because one picture looks out of order.",
        "For an old scanned print, you may know the year but not the precise day. Avoid presenting an invented exact time as historical evidence. Keep the uncertainty in your notes; a convenient library position and an established capture date are different things."
      ]
    },
    {
      "id": "correct-one-photo",
      "title": "Correct and verify one picture",
      "paragraphs": [
        "These controls follow Apple’s iOS 26 guide. On another release, check its matching documentation if the menus differ."
      ],
      "list": {
        "ordered": true,
        "items": [
          {
            "text": "Open the intended picture in Photos. Confirm the scene, rather than choosing a similar thumbnail."
          },
          {
            "text": "Open More, select Adjust Date & Time, update the calendar and clock, then tap Adjust."
          },
          {
            "text": "Swipe up on the photo or open Info to inspect the stored date again."
          },
          {
            "text": "Compare it with your reference and check neighboring pictures from the same event. Stop if the new sequence no longer makes sense."
          }
        ]
      }
    },
    {
      "id": "sort-order",
      "title": "A changed date may not change the view you are checking",
      "paragraphs": [
        "Apple’s iOS 26 sorting guide distinguishes Recently Added from Date Captured. The former organizes by arrival in the library; the latter uses when the photo was taken. Open the library’s Sort and Filter control and choose Sort by Date Captured when checking a chronological correction.",
        "Consider a photograph from an older holiday that you imported today. Its recent arrival and its older capture date can both be correct. If your only aim is seeing older pictures in their chronological place, check the sort option before rewriting any dates."
      ],
      "table": {
        "headers": [
          "What you observe",
          "Next check"
        ],
        "rows": [
          [
            "The information panel shows the intended date, but the picture remains near new imports",
            "Check whether you are viewing Recently Added."
          ],
          [
            "Only one photo seems wrong within an otherwise sensible sequence",
            "Compare that item with your reference before selecting the whole event."
          ],
          [
            "A received copy has a different date from your library item",
            "Inspect the actual delivered file and the sharing route separately."
          ]
        ]
      }
    },
    {
      "id": "small-batch",
      "title": "Handle batches and reversals deliberately",
      "paragraphs": [
        "Apple supports selecting multiple photos before using Adjust Date & Time. Its guide also documents restoring an item’s original value through More → Adjust Date & Time → Revert.",
        "Before changing many pictures, try two unimportant examples with different recorded times. Note both original values, make the intended adjustment, then inspect each result. This proposed rehearsal checks your actual interface without assuming that every selection should receive one identical timestamp.",
        "For a mixed collection, separate pictures by the correction they need. An incorrect camera clock, an undated scan and a downloaded screenshot do not share the same evidence. Keep uncertain items out of a batch whose dates you can establish confidently."
      ]
    },
    {
      "id": "record-and-share",
      "title": "Keep context and check the copy you deliver",
      "paragraphs": [
        "Apple’s information panel includes a caption field. A note such as “Date corrected from the event invitation” can preserve the reason for your decision. Avoid adding private details to a caption you may later share.",
        "Apple says iCloud Photos keeps library changes up to date across devices. Treat a metadata correction as a library change to review, rather than assuming it stays on one phone. Our sync guide explains the separate-backup question.",
        "If another person needs the corrected information, send a harmless example through the intended route and inspect the received copy. A corrected display in your library does not verify what another application received. Retain the original and your reference when accurate chronology matters."
      ]
    }
  ],
  "faq": [
    {
      "question": "Does this remove a date printed visibly on the picture?",
      "answer": "No. This workflow adjusts stored photo information. Numbers visible within the image are a separate image-editing task; changing the information panel does not erase them."
    },
    {
      "question": "Does a corrected timestamp prove when a photo was taken?",
      "answer": "No. It records an adjustment, not independent proof of the event. Keep the source of the correction and distinguish confirmed information from an estimate."
    }
  ],
  "sources": [
    {
      "title": "Apple: photo and video information, iOS 26 guide",
      "url": "https://support.apple.com/guide/iphone/see-photo-and-video-information-iph0edb9c18f/26/ios/26",
      "note": "Metadata controls, iOS 26. Retrieved October 23, 2026."
    },
    {
      "title": "Apple: sort and filter the library, iOS 26 guide",
      "url": "https://support.apple.com/guide/iphone/sort-and-filter-the-photo-library-iph2e66e2f2c/26/ios/26",
      "note": "Recently Added versus Date Captured and the sorting control. Retrieved October 23, 2026."
    },
    {
      "title": "Apple: set up and use iCloud Photos",
      "url": "https://support.apple.com/en-us/108782",
      "note": "General synchronization of library changes; this guide does not claim that every export preserves adjusted timestamps. Retrieved October 23, 2026."
    }
  ],
  "related": [
    "remove-location-from-iphone-photos",
    "icloud-photos-sync-vs-backup",
    "airdrop-photos-original-data"
  ],
  "image": "blog/pexels-23203338-4k.webp",
  "imageAlt": "Green mountain ridges beneath a blue sky",
  "imagePosition": "50% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-23203338-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-23203338-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-23203338-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-23203338-4k.webp",
      "width": 3840
    }
  ],
  "imageCredit": {
    "name": "Ella Ragasa",
    "url": "https://www.pexels.com/photo/panorama-of-a-mountain-landscape-23203338/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "google-photos-archive-vs-locked-folder",
  "title": "Google Photos Archive vs Locked Folder: which should you use?",
  "description": "Choose between decluttering and restricted access in Google Photos. Check backup, separate copies and your next editing step before moving pictures.",
  "summary": "Choose a place for your photos based on whether you want a cleaner library view, restricted access or a reliable recovery copy.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "quickAnswer": "Use Archive to tidy the main Photos view while keeping pictures accessible in search and existing albums. Use Locked Folder when access should require authentication. Neither choice replaces a deliberate backup decision. Before moving important images, check which copies exist and how you will retrieve them.",
  "sections": [
    {
      "id": "pick-the-job",
      "title": "Decide what problem you are solving",
      "paragraphs": [
        "Start with a sentence such as “I want receipts out of my everyday photo grid” or “I want this portrait behind an access check.” These are different goals. Making a grid look tidier does not establish that a picture is private or independently backed up."
      ],
      "table": {
        "headers": [
          "Your goal",
          "Start with",
          "Check before proceeding"
        ],
        "rows": [
          [
            "Less clutter during everyday browsing",
            "Archive",
            "Will you remember where to find the picture later?"
          ],
          [
            "An authentication step before viewing",
            "Locked Folder",
            "Who can unlock your device or account, and is the folder backed up?"
          ],
          [
            "Protection from accidental loss",
            "A verified preservation plan",
            "Is there a usable copy outside the workflow you may change?"
          ]
        ]
      }
    },
    {
      "id": "archive",
      "title": "Archive is organization, not a private vault",
      "paragraphs": [
        "Google documents that archived pictures remain available in search, existing albums and device folders. Archiving also does not remove their storage usage. It is useful for material you want to keep without repeatedly browsing past it.",
        "In the Google Photos Android app, select the picture and choose More → Archive. Find it again under Collections → Archive; select it and use More → Unarchive to return it. Check the platform selector in Google’s linked instructions if your layout differs.",
        "Try this first with an unimportant screenshot. Locate it again before reorganizing a large set. That small rehearsal helps you decide whether Archive matches your browsing habits without making your important pictures the experiment."
      ]
    },
    {
      "id": "locked-folder",
      "title": "Check access, backup and copies before using Locked Folder",
      "paragraphs": [
        "Google’s Locked Folder documentation describes authenticated access and exclusion from the ordinary grid, search and albums. You must move an item out to edit or share it. Anyone with the relevant unlock credentials may still be able to access it.",
        "Backup deserves a separate check: Google warns that unbacked-up Locked Folder items can be lost if the device is lost or the Google Photos app is uninstalled. On iPhone, moving an item with Locked Folder backup off removes its Google Photos backup. Review the setting before moving an important picture.",
        "Moving one item does not also move its edited copies or copies already saved by recipients. Check those locations separately. These limits are why a single “move” action should not be your entire privacy or preservation plan."
      ]
    },
    {
      "id": "small-rehearsal",
      "title": "Use a harmless sample to check your workflow",
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Name the version you need.",
            "text": "Decide whether you are organizing the camera original, an edited portrait or an export. Give yourself a way to distinguish them before acting."
          },
          {
            "title": "Read the current backup state.",
            "text": "Pause if you cannot tell whether your chosen destination is backed up. Use the official instructions below for your device; do not infer it from another folder’s status."
          },
          {
            "title": "Verify retrieval.",
            "text": "Use a non-sensitive sample to rehearse finding and reopening the picture after moving it. Confirm you are viewing the intended version."
          },
          {
            "title": "Plan the next edit.",
            "text": "Decide where an editor will save its result and where you will keep the finished version. Repeat your access and backup checks for that new file."
          }
        ]
      },
      "paragraphs": []
    },
    {
      "id": "editorial-example",
      "title": "Example: an original portrait and two exports",
      "paragraphs": [
        "Suppose you keep a full portrait, a square profile crop and a smaller copy sent to a friend. Treat them as three separate records in your checklist. Record where each is stored, why you kept it and which version you intend to use next. This is a suggested organizing exercise, not a report of a device test.",
        "If the purpose is simply reducing visual clutter, start with the least disruptive arrangement. If access restrictions matter, assess all three locations instead of judging the whole collection from one protected thumbnail. If recovery matters most, verify the retained file before undertaking a cleanup."
      ]
    }
  ],
  "faq": [
    {
      "question": "Does Archive free up Google Photos storage?",
      "answer": "No. Google says archived items still count toward storage. Treat archiving as a browsing choice, then review storage separately if space is the problem."
    },
    {
      "question": "What should I check before switching phones?",
      "answer": "Make a list of the locations holding photos you care about and verify their backup and retrieval status. Do this before removing apps, clearing data or resetting the old device."
    }
  ],
  "sources": [
    {
      "title": "Google Photos: move photos to archive",
      "url": "https://support.google.com/photos/answer/7362432?co=GENIE.Platform%3DAndroid&hl=en",
      "note": "Archive visibility, storage use, Android steps and unarchiving. Retrieved October 23, 2026."
    },
    {
      "title": "Google Photos: Locked Folder on iPhone and iPad",
      "url": "https://support.google.com/photos/answer/10694388?co=GENIE.Platform%3DiOS&hl=en",
      "note": "Authentication, backup warnings, sharing/editing limits and separate copies. Use the page’s platform selector for other devices; retrieved October 23, 2026."
    }
  ],
  "related": [
    "google-photos-original-vs-storage-saver",
    "edit-photos-without-losing-original",
    "remove-location-from-iphone-photos"
  ],
  "image": "blog/pexels-16313502-4k.webp",
  "imageAlt": "Photo-editing workspace with a laptop, camera, and drawing tablet",
  "imagePosition": "50% 40%",
  "imageVariants": [
    {
      "src": "blog/pexels-16313502-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-16313502-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-16313502-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-16313502-4k.webp",
      "width": 2560
    }
  ],
  "imageCredit": {
    "name": "Kawê Rodrigues",
    "url": "https://www.pexels.com/photo/woman-editing-photos-on-laptop-16313502/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "recover-deleted-iphone-photos",
  "title": "How to recover deleted or missing photos on iPhone",
  "description": "Check Recently Deleted, Hidden and Recovered in the right order. Learn the recovery limits and why an iCloud device backup may not contain your photos.",
  "summary": "Find out whether a missing photo was deleted, hidden, stored outside the library or only saved in another location.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "quickAnswer": "Check Recently Deleted in Photos first. Unlock it, select the picture, choose Recover and confirm. Apple keeps deleted items there for up to 30 days unless you permanently delete them sooner. If the picture is absent, check Hidden, your library view and any separate saved copies before assuming it is gone.",
  "sections": [
    {
      "id": "recover-in-photos",
      "title": "Recover a photo from Recently Deleted",
      "paragraphs": [
        "The following route follows Apple’s iOS 26 guide; older versions may put Utilities directly in the Photos view rather than behind Collections."
      ],
      "list": {
        "ordered": true,
        "items": [
          {
            "text": "Open Photos, tap Collections and find Recently Deleted under Utilities."
          },
          {
            "text": "Choose View Album and authenticate when asked."
          },
          {
            "text": "Tap Select and choose the pictures you need. Open More, choose Recover and confirm the recovery."
          },
          {
            "text": "Return to the library and open the recovered image. Check that it is the intended photograph and version before continuing your cleanup."
          }
        ]
      }
    },
    {
      "id": "missing-is-not-always-deleted",
      "title": "If it is not there, identify what is missing",
      "paragraphs": [
        "Apple’s missing-photo guidance distinguishes deletion from hidden photos, library views and synchronization. Use the table to choose your next check. Avoid changing several account settings at once: it becomes harder to tell which change affected the result."
      ],
      "table": {
        "headers": [
          "What you notice",
          "What to check",
          "What it tells you"
        ],
        "rows": [
          [
            "A photo disappeared after you hid it",
            "Hidden under Utilities; enable Show Hidden Album in Photos settings if needed",
            "A hidden picture is still in the library. Select it and use More → Unhide."
          ],
          [
            "You use an iCloud Shared Photo Library",
            "Whether Photos is showing Personal Library, Shared Library or Both Libraries",
            "The selected view can exclude a picture that still exists."
          ],
          [
            "Pictures appear on one device but not another",
            "The Apple Account, iCloud Photos setting and current sync status",
            "Different accounts or unfinished syncing are different problems from deletion."
          ],
          [
            "The image was made or downloaded in another app",
            "That app’s own saved files, exports or drafts",
            "Check whether a copy was ever saved to Photos before looking for a Photos recovery option."
          ]
        ]
      }
    },
    {
      "id": "recovered-is-different",
      "title": "Check Recovered when it appears",
      "paragraphs": [
        "Apple introduced the Recovered album with iOS 18. It can contain image files still on the device that are no longer part of the photo library, such as a picture that did not save correctly. It appears only when Photos finds eligible items; an absent album does not mean you missed a setting.",
        "If Recovered appears under Utilities, unlock it, select the picture and choose Restore to Library. Do not choose Permanently Delete while investigating: Apple says that action is immediate and does not send the item to Recently Deleted. This album is not a general way to reverse every permanent deletion."
      ]
    },
    {
      "id": "when-the-window-has-ended",
      "title": "After permanent deletion, look for a separate copy",
      "paragraphs": [
        "Apple says an item permanently removed from Recently Deleted cannot be recovered through that album. If you previously exported it, sent it to someone or saved it in another service, investigate that separate location. A shared copy may be smaller or edited, so compare it with the version you need.",
        "For an iCloud Photos library, you can also inspect Recently Deleted in Photos on iCloud.com. It is another way to reach the synchronized library, not an extra recovery period.",
        "Do not erase and restore your phone on the assumption that an iCloud device backup contains the missing picture. Apple’s backup documentation says photos already synchronized with iCloud Photos are not also included in the daily device backup. If iCloud Photos was off, the backup may contain photos; first establish what was saved and when."
      ]
    },
    {
      "id": "keep-a-recovery-note",
      "title": "Keep a short record before trying more steps",
      "paragraphs": [
        "Write down the approximate capture date, the last place you saw the picture, whether you deleted or merely edited it, and the locations already checked. For example: “Portrait taken on Sunday; sent in a message; missing from Photos after cleanup.” That points to two concrete places to investigate instead of an open-ended hunt.",
        "If the photo still exists but has the wrong crop or filter, you are dealing with an editing problem. Use the guide to preserving and reverting originals below. Recovering a deleted library item and undoing an edit are different tasks.",
        "Once you find the version you want, preserve an independent copy and verify that you can open it. Keep your library intact while doing that check. These are documentation-based recovery steps and suggested safeguards, not a guarantee that a particular missing file can be restored."
      ]
    }
  ],
  "faq": [
    {
      "question": "Will a recovery app definitely bring back permanently deleted pictures?",
      "answer": "Do not treat a promise as evidence that your file still exists. This guide verifies Apple’s built-in recovery routes. A separately retained original or export is a different source; its availability depends on what you actually saved."
    },
    {
      "question": "Should I recover every deleted photo at once?",
      "answer": "Select the pictures you need first so you can verify the result. If you restore a larger group, check several examples before deleting anything else."
    }
  ],
  "sources": [
    {
      "title": "Apple: recover deleted photos",
      "url": "https://support.apple.com/en-us/124460",
      "note": "Recently Deleted retention, recovery and the iCloud.com route. Retrieved October 23, 2026."
    },
    {
      "title": "Apple: delete or hide photos, iOS 26 guide",
      "url": "https://support.apple.com/guide/iphone/delete-or-hide-photos-and-videos-iphb4defbde9/26/ios/26",
      "note": "Collections, authentication, selection and recovery controls. Labels vary with the installed version."
    },
    {
      "title": "Apple: missing photos or videos",
      "url": "https://support.apple.com/en-us/118558",
      "note": "Hidden photos, library views, account and synchronization checks. Retrieved October 23, 2026."
    },
    {
      "title": "Apple: the Recovered album",
      "url": "https://support.apple.com/en-us/120347",
      "note": "Conditional appearance, Restore to Library and immediate permanent deletion. Retrieved October 23, 2026."
    },
    {
      "title": "Apple: what iCloud backs up",
      "url": "https://support.apple.com/en-us/108770",
      "note": "Photos already synced with iCloud Photos are excluded from daily device backup. Retrieved October 23, 2026."
    }
  ],
  "related": [
    "icloud-photos-sync-vs-backup",
    "edit-photos-without-losing-original",
    "airdrop-photos-original-data"
  ],
  "image": "blog/pexels-7129664-4k.webp",
  "imageAlt": "Hands at a laptop displaying a set of portrait photographs",
  "imagePosition": "50% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-7129664-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-7129664-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-7129664-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-7129664-4k.webp",
      "width": 2560
    }
  ],
  "imageCredit": {
    "name": "Michael Burrows",
    "url": "https://www.pexels.com/photo/photographer-working-on-laptop-at-workplace-7129664/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "iphone-photo-cutout-background",
  "title": "How to make an iPhone photo cutout and check its edges",
  "description": "Lift a subject from an iPhone photo, copy or share it, and check the result. Understand transparent exports, stickers and background replacement.",
  "summary": "Separate a subject for a note, sticker or composition, then inspect the edges and destination before sharing.",
  "published": "2026-10-23",
  "modified": "2026-10-23",
  "quickAnswer": "Open a photo full screen and touch and hold the subject until an outline appears. Release, then choose Copy or Share. Apple supports photo cutouts on iPhone XS, iPhone XR and later with iOS 16 or later. Inspect the selected outline: lifting a subject is not the same as producing a finished background replacement.",
  "sections": [
    {
      "id": "make-the-cutout",
      "title": "Lift the subject and choose a destination",
      "paragraphs": [
        "Apple’s cutout instructions describe the long-press gesture in Photos and other supported apps. Its iOS 26 guide also allows lifting a subject from a paused video frame. Start with a still photo while learning the gesture."
      ],
      "list": {
        "ordered": true,
        "items": [
          {
            "text": "Open the picture full screen. Touch and hold the person, pet or object you want to isolate."
          },
          {
            "text": "When an outline appears, release your finger to reveal the available actions. Check which subject the outline includes."
          },
          {
            "text": "Choose Copy and paste into a compatible destination such as a note, or choose Share and select an available destination. Add Sticker creates a sticker for supported uses."
          },
          {
            "text": "Inspect the result where you will use it. Confirm that the expected subject and its important details arrived."
          }
        ]
      }
    },
    {
      "id": "choose-the-right-task",
      "title": "Choose between a cutout, a sticker and a new background",
      "paragraphs": [
        "The Copy action lifts the selection; it does not by itself assemble a new photograph. Apple’s support article specifically distinguishes this from pasting a subject onto another photo. If your aim is a composition, choose an editor with documented image placement or layer controls and follow that editor’s instructions.",
        "Think about the destination before spending time refining edges. A small sticker in a message and a large portrait on a poster need different levels of detail. Keep the original photograph so you can start again if the selection is unsuitable. This guide does not claim that Meluvya offers manual cutout or layer tools."
      ]
    },
    {
      "id": "inspect-the-edges",
      "title": "Review the outline in four places",
      "paragraphs": [
        "Use this editorial checklist on the actual saved or pasted result. It is a suggested inspection method, not a measured test of Apple’s selection accuracy."
      ],
      "table": {
        "headers": [
          "Area",
          "Look for",
          "If it matters"
        ],
        "rows": [
          [
            "Hair or fur",
            "Missing strands, holes or pieces of the former background",
            "Compare at the intended display size. Use a tool with mask refinement if the automatic edge is unacceptable."
          ],
          [
            "Hands and held objects",
            "A missing finger, strap or object that should stay with the person",
            "Return to the original and compare the complete silhouette."
          ],
          [
            "Spaces inside the outline",
            "Background left between an arm and the body",
            "Check those gaps as well as the outside edge."
          ],
          [
            "Feet and contact points",
            "An abrupt edge or a subject that appears to float in a composition",
            "Reconsider placement and the relationship to the new surface."
          ]
        ]
      }
    },
    {
      "id": "background-or-preview",
      "title": "A white preview does not settle whether it is transparent",
      "paragraphs": [
        "Check the file in a destination that can display transparency over a contrasting background. A viewer’s white canvas and white pixels baked into a file can look similar. For a composition, place the cutout over both a light and a dark background if your editor supports that check.",
        "Adobe’s format documentation says PNG supports transparency and JPEG does not. When exporting from an editor, choose a format and settings that preserve transparency if you need it. Do not assume every sharing destination preserves the same data, and do not rename a JPG extension to PNG as a substitute for conversion.",
        "A screenshot records the displayed appearance. It is not a reliable way to preserve an isolated subject for later placement. Keep a suitable exported cutout or editable project alongside the original, then reopen the exported file to check the result."
      ]
    },
    {
      "id": "when-it-does-not-work",
      "title": "If the outline never appears or looks wrong",
      "paragraphs": [
        "First compare your model and software with Apple’s compatibility requirements, then use a full-screen photo in a supported app. If one image fails, try a different photo with a clear subject as a diagnostic comparison. That can help separate an image-specific selection problem from a device or app limitation; it is not a guaranteed fix.",
        "For example, compare a portrait against a plain wall with one where hair overlaps leaves. Inspect what was retained in each before choosing which source to use. You do not need to publish the trial results.",
        "If a meaningful part remains missing, use an editor that lets you refine the selection, choose another source, or keep the original background. A deliberate crop may be enough for the intended use. Avoid endlessly exporting the same incomplete edge and expecting the next format to repair it."
      ]
    }
  ],
  "faq": [
    {
      "question": "Does copying a cutout delete the original background?",
      "answer": "The lift-and-copy workflow creates something to paste or share. Keep the source photograph; deleting or replacing that original is a separate action."
    },
    {
      "question": "Will a cutout automatically look natural on a different background?",
      "answer": "No. Check perspective, relative size, lighting and contact with the ground. A clean outline alone does not make two different scenes fit together."
    }
  ],
  "sources": [
    {
      "title": "Apple: create and share photo cutouts",
      "url": "https://support.apple.com/en-us/102460",
      "note": "Gesture, supported devices/software, sharing and the direct-paste limitation. Retrieved October 23, 2026."
    },
    {
      "title": "Apple: lift a subject, iOS 26 guide",
      "url": "https://support.apple.com/guide/iphone/lift-a-subject-from-the-photo-background-iphfe4809658/26/ios/26",
      "note": "Copy, Share, Add Sticker and paused-video-frame options. Documentation-based guidance; no device testing claimed."
    },
    {
      "title": "Adobe: supported image file formats",
      "url": "https://helpx.adobe.com/photoshop/desktop/save-and-export/export-files-to-different-formats/image-file-formats-supported-in-photoshop.html",
      "note": "PNG transparency and JPEG limitations. Edge and destination checks are original editorial guidance."
    }
  ],
  "related": [
    "jpeg-heic-png-photo-formats",
    "choose-portrait-background",
    "edit-photos-without-losing-original"
  ],
  "image": "blog/pexels-32644860-4k.webp",
  "imageAlt": "Woman in a pink shirt and red cap leaning through an open window",
  "imagePosition": "50% 40%",
  "imageVariants": [
    {
      "src": "blog/pexels-32644860-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-32644860-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-32644860-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-32644860-4k.webp",
      "width": 3840
    }
  ],
  "imageCredit": {
    "name": "Muhammad-Taha Ibrahim",
    "url": "https://www.pexels.com/photo/portrait-of-smiling-woman-at-window-in-abuja-32644860/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "iphone-ae-af-lock",
  "title": "How to use AE/AF Lock on iPhone for steadier photo settings",
  "description": "Learn when to lock iPhone focus and exposure, when to reset them, and why AE/AF Lock cannot keep a moving subject sharp.",
  "summary": "Learn when to lock iPhone focus and exposure, when to reset them, and why AE/AF Lock cannot keep a moving subject sharp.",
  "quickAnswer": "Touch and hold your subject in the iPhone Camera preview until AE/AF Lock appears. Adjust brightness with the control beside the focus area, then take the picture. Tap the preview to unlock. Use the lock when the subject distance and lighting stay similar; refocus when either changes.",
  "published": "2026-10-22",
  "modified": "2026-10-22",
  "sections": [
    {
      "id": "what-the-lock-does",
      "title": "What you are holding steady",
      "paragraphs": [
        "AE refers to automatic exposure and AF to autofocus. Apple documents the touchscreen lock as a way to hold focus and exposure settings for subsequent photographs. It gives you a repeatable starting point when you take several pictures of the same setup.",
        "Think of a seated person beside a window. You might want to compare a relaxed expression with a smile without also changing the camera’s selected focus area. That is a useful situation for a lock. A person walking toward the phone presents a different task because their distance keeps changing."
      ]
    },
    {
      "id": "set-and-check",
      "title": "Set the lock, then inspect a saved picture",
      "list": {
        "ordered": true,
        "items": [
          {
            "text": "Compose first. Decide which face or object is important and keep the phone at the distance you intend to use."
          },
          {
            "text": "Touch and hold that area until the AE/AF Lock indicator appears. Use the nearby brightness control if the preview needs adjustment."
          },
          {
            "text": "Take one picture before starting the full sequence. Enlarge the important detail in Photos and check bright areas as well as the overall appearance."
          },
          {
            "text": "Keep the setup similar for the next frames. If you change seats, move closer, or turn toward a different light, release the lock and establish it again."
          }
        ]
      }
    },
    {
      "id": "three-shot-exercise",
      "title": "Try a three-shot exercise at a table",
      "paragraphs": [
        "Place a mug with lettering beside a window and frame it against the room. Make the lettering your reference detail. Photograph it once with your chosen lock, then make a second frame with a small composition change while keeping the camera-to-mug distance similar.",
        "For the third frame, move closer and set focus again before photographing. Compare the lettering across the three saved files. The purpose is to learn when your setup needs refreshing, not to prove that locking is always better than automatic operation.",
        "Use a stationary object for this practice so facial movement does not complicate the comparison. Once the gesture feels familiar, repeat it with a willing seated subject and review the eyes instead of the mug. These are suggested exercises, not reported device tests."
      ]
    },
    {
      "id": "when-to-unlock",
      "title": "When the lock becomes the problem",
      "paragraphs": [
        "A locked setting can remain inappropriate after the scene changes. If a face becomes soft while the background looks clear, check whether the person or camera moved before reaching for an editing tool. If a cloud passes or someone turns away from the window, reconsider the brightness setting too.",
        "Locking also does not remove camera shake or subject motion during an exposure. For a night portrait, keep the phone supported and the subject comfortably still; use the separate night-photo guide if motion is the main issue. Do not mistake an AE/AF indicator for a guarantee that the photograph will be sharp."
      ]
    },
    {
      "id": "different-controls",
      "title": "Distinguish the touchscreen lock from other controls",
      "paragraphs": [
        "Apple also documents an Exposure control and a Preserve Settings option for retaining an exposure adjustment. That preference is not a promise to preserve focus on a person after you reopen Camera.",
        "On supported iPhones, Camera Control has its own Lock Focus and Exposure setting. With it enabled, a light press and hold maintains the lock; releasing the control ends it. This differs from leaving a touchscreen lock active. Follow the instructions for the control you actually use, and check the visible indicator rather than assuming both gestures behave alike."
      ]
    }
  ],
  "faq": [
    {
      "question": "Should I leave AE/AF Lock on for every photo?",
      "answer": "Use it for a stable setup that benefits from repeated settings. Reconsider it when distance, framing, or illumination changes; automatic focusing may suit a changing scene better."
    },
    {
      "question": "Will it fix a photo that is already blurry?",
      "answer": "No. This is a capture control. It cannot restore detail missing from an existing photograph."
    },
    {
      "question": "Why do the controls look different on my phone?",
      "answer": "The cited touchscreen instructions follow Apple’s iOS 26 guide. Camera layout and hardware controls depend on your software and model; use the corresponding version of Apple’s guide."
    }
  ],
  "sources": [
    {
      "title": "Apple: iPhone camera tools and exposure lock",
      "url": "https://support.apple.com/guide/iphone/set-up-your-shot-iph3dc593597/26/ios/26",
      "note": "Touchscreen focus/exposure lock, brightness adjustment, and the separate exposure-preservation control."
    },
    {
      "title": "Apple: Camera Control focus and exposure lock",
      "url": "https://support.apple.com/en-afri/guide/iphone/iph0c397b154/26/ios/26",
      "note": "Supported hardware uses a light press-and-hold lock that ends when released. The table exercise is original editorial guidance."
    }
  ],
  "related": [
    "backlit-phone-portraits",
    "why-night-phone-photos-are-blurry",
    "self-timer-portraits-with-phone"
  ],
  "image": "blog/pexels-4429463-4k.webp",
  "imageAlt": "Passenger holding a smartphone beside a car window",
  "imagePosition": "60% 45%",
  "imageVariants": [
    {
      "src": "blog/pexels-4429463-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-4429463-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-4429463-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-4429463-4k.webp",
      "width": 3840
    }
  ],
  "imageCredit": {
    "name": "Ketut Subiyanto",
    "url": "https://www.pexels.com/photo/anonymous-female-tourist-taking-photo-on-smartphone-sitting-in-car-4429463/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "change-live-photo-key-photo",
  "title": "How to choose a better key photo from an iPhone Live Photo",
  "description": "Find a better expression inside a Live Photo, compare frame clarity, and understand the portrait-effect tradeoff before saving.",
  "summary": "Find a better expression inside a Live Photo, compare frame clarity, and understand the portrait-effect tradeoff before saving.",
  "quickAnswer": "Open the Live Photo in Photos, choose Edit, then the Live Photo control. Move through its frames, choose Make Key Photo for the moment you prefer, and tap Done. Compare the selected moment at your intended display size before keeping it; a better expression can still be a softer frame.",
  "published": "2026-10-22",
  "modified": "2026-10-22",
  "sections": [
    {
      "id": "check-the-source",
      "title": "Start with a Live Photo, not a screenshot",
      "paragraphs": [
        "A key photo is the still moment that represents a Live Photo. Apple’s capture guide explains that Live Photos include movement and sound around the shutter press. A screenshot or ordinary still image does not contain that extra sequence, so there may be no nearby moment to select.",
        "Open the picture you actually captured and try playing it. If all you have is a downloaded copy, do not assume it retains the original moving component. Return to the capture in your library when possible before deciding the feature is unavailable."
      ]
    },
    {
      "id": "choose-a-frame",
      "title": "Choose a moment for a specific reason",
      "list": {
        "ordered": true,
        "items": [
          {
            "text": "Watch the short sequence once without editing. Identify what you want to improve: open eyes, a less awkward hand, or a moment before someone turns away."
          },
          {
            "text": "Open Edit and the Live Photo control. Scrub to that moment, choose Make Key Photo, and save with Done."
          },
          {
            "text": "Inspect the selected picture as a still. Look at the eyes, mouth, hands, and the background behind the face."
          },
          {
            "text": "Compare the candidate with the original key moment. Keep the change only if it improves the picture for its intended use."
          }
        ]
      }
    },
    {
      "id": "expression-and-detail",
      "title": "Judge expression and detail separately",
      "paragraphs": [
        "Imagine a group picture with a blink at the main moment. A neighboring frame may show open eyes but also a hand moving across another person. Review every important face before treating the first open-eyed frame as a solution.",
        "For a candid portrait, narrow the choice to two or three moments. First compare expression at normal viewing size. Then enlarge the same eye or piece of clothing in each candidate to look for smearing. Finally return to normal size and decide whether the difference matters for the place you will share it.",
        "This selection routine avoids a common trap: choosing an expressive thumbnail without noticing its weaker detail. It is a proposed review method, not a claim that we measured the resolution or processing of every Live Photo frame. If none of the recorded moments is good, the feature cannot create an unrecorded expression."
      ]
    },
    {
      "id": "portrait-and-editing",
      "title": "Check effects before committing to a new key moment",
      "paragraphs": [
        "Apple warns that changing the key photo of a Live Photo with a portrait effect, taken on iPhone 15 or later, removes that portrait effect. Decide whether the new expression is worth that change before replacing your favorite version.",
        "Also keep editing and exporting separate. A picture can look correct inside Photos but arrive elsewhere as a different kind of file. Before a substantial edit or a third-party workflow, retain the original Live Photo and inspect a saved or shared copy. Our guide to keeping originals explains why a working version and a delivery copy serve different purposes."
      ]
    },
    {
      "id": "capture-for-options",
      "title": "Give yourself better choices next time",
      "paragraphs": [
        "Try capturing a quiet pause as well as a lively moment. For the quiet version, ask the person to settle before you press the shutter and wait before lowering the phone. For the lively version, let the movement happen without assuming every instant will make a flattering still.",
        "Afterward, compare what each sequence offers. If you need many still frames of a deliberate action, consider Burst mode instead. If you want the surrounding sound and movement as a memory, a Live Photo may be the more useful starting point. Neither replaces checking that the main photograph is worth keeping."
      ]
    }
  ],
  "faq": [
    {
      "question": "Can I select a moment outside the Live Photo?",
      "answer": "No. The frame chooser only offers the sequence that was captured. For an expression outside that sequence, use another photograph or retake it."
    },
    {
      "question": "Is changing the key photo the same as trimming?",
      "answer": "No. Choosing a key moment changes the representative still. Trimming changes the portion that plays; they answer different needs."
    },
    {
      "question": "Should I delete the original after choosing a frame?",
      "answer": "Keep the original while deciding how to edit and share. Inspect the delivered version before removing anything you may need to revisit."
    }
  ],
  "sources": [
    {
      "title": "Apple: edit Live Photos",
      "url": "https://support.apple.com/en-euro/guide/iphone/iphd8dbb3291/27/ios/27",
      "note": "Key-photo editing and the loss of a portrait effect when changing the key frame on the specified devices."
    },
    {
      "title": "Apple: take and edit Live Photos",
      "url": "https://support.apple.com/en-ph/104966",
      "note": "Explains the captured sequence and sharing behavior. The frame-comparison checklist is editorial guidance."
    }
  ],
  "related": [
    "iphone-burst-photos-select-best-frame",
    "edit-photos-without-losing-original",
    "take-couple-photos-with-phone"
  ],
  "image": "blog/pexels-17502436-4k.webp",
  "imageAlt": "Woman holding a phone in front of her face for a selfie",
  "imagePosition": "50% 35%",
  "imageVariants": [
    {
      "src": "blog/pexels-17502436-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-17502436-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-17502436-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-17502436-4k.webp",
      "width": 2560
    }
  ],
  "imageCredit": {
    "name": "olga Volkovitskaia",
    "url": "https://www.pexels.com/photo/a-woman-taking-a-selfie-with-her-phone-17502436/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "iphone-burst-photos-select-best-frame",
  "title": "How to take iPhone Burst photos and choose the best frame",
  "description": "Capture a short action sequence with iPhone Burst mode, then select frames for expression, timing, and clarity without keeping every near-duplicate.",
  "summary": "Capture a short action sequence with iPhone Burst mode, then select frames for expression, timing, and clarity without keeping every near-duplicate.",
  "quickAnswer": "In the iPhone Camera app, slide the shutter button left and hold to capture a Burst, then lift your finger to stop. Open the Burst thumbnail and its frame selector to mark the pictures you want to save. Choose with a clear priority—expression, action, or sharpness—instead of keeping every similar frame.",
  "published": "2026-10-22",
  "modified": "2026-10-22",
  "sections": [
    {
      "id": "choose-a-moment",
      "title": "Use a Burst when the timing is uncertain",
      "paragraphs": [
        "Burst mode gives you a sequence of still photographs to choose from. Apple documents it for moving subjects and other situations where a range of frames helps. It is useful when a smile, jump, or turning head changes faster than you can confidently time one tap.",
        "Choose the event before starting. For a person walking across a scene, decide whether you want the beginning of a step, an upright pause, or a glance toward the camera. That decision gives the sequence a purpose and makes editing faster afterward."
      ]
    },
    {
      "id": "capture",
      "title": "Capture a short, deliberate sequence",
      "list": {
        "ordered": true,
        "items": [
          {
            "text": "Use Photo mode and frame with a little room for movement. Start while you can still see the whole action you want."
          },
          {
            "text": "Slide the on-screen shutter left and keep holding it. Release once the useful moment has passed."
          },
          {
            "text": "If that gesture is awkward, Apple offers Settings → Camera → Use Volume Up for Burst. Enable it and try holding the volume-up button."
          },
          {
            "text": "Open the Burst thumbnail. In Apple’s iOS 26 guide, the selector is labeled Burst followed by the frame count. Mark chosen frames and tap Done."
          }
        ]
      }
    },
    {
      "id": "selection-passes",
      "title": "Make three selection passes",
      "paragraphs": [
        "First, reject pictures that miss the intended action: the person is out of frame, a hand hides their face, or the pose has not developed yet. Do not spend time comparing tiny sharpness differences in pictures you would never use.",
        "Next, compare expression and body shape among the remaining candidates. A technically clear frame may still show an uncomfortable blink or a distracting gesture. For a group, check each face; one strong expression does not compensate for another person being obscured.",
        "Finally, enlarge the important detail in the small shortlist. Compare the same area in each frame at the same size. Keep a main choice and an alternative only when they offer meaningfully different expressions or compositions. Apple’s suggested-frame dots can be a starting point, but your intended story decides the final selection."
      ]
    },
    {
      "id": "blur",
      "title": "When every frame looks soft",
      "paragraphs": [
        "A rapid sequence and a short exposure are different things. Adobe’s sharp-photo guidance explains that both camera and subject movement can cause blur during capture. Taking more frames does not guarantee that any one of them freezes a fast-moving hand.",
        "Compare a fixed background edge with the person. If both look streaked, support the phone and try again. If the background is clear but the person is blurred, ask for a slower movement or move to more useful light. Change one factor, capture another short sequence, and inspect it before continuing.",
        "For an expressive picture intended for a small display, slight motion may be acceptable. For a close crop of a face, it may not be. Make that decision with the actual saved file instead of assuming a Burst label implies superior quality."
      ]
    },
    {
      "id": "keep-and-share",
      "title": "Keep the selection organized",
      "paragraphs": [
        "Check that the chosen images appear as the individual photos you expect before deleting an unwanted sequence. Read any keep-or-delete prompt carefully, especially when the moment cannot be repeated.",
        "For a simple practice session, ask a friend to look away and slowly turn toward you. Capture one Burst, select a single favorite, then explain your choice in one sentence. If you cannot distinguish your five favorites beyond tiny shifts, keep fewer. The exercise trains selection as well as shutter timing; it is not a benchmark or a guaranteed keeper rate."
      ]
    }
  ],
  "faq": [
    {
      "question": "Does Burst guarantee a sharp action photo?",
      "answer": "No. Timing, focus, available light, camera movement, and subject motion still matter. Review the actual frames."
    },
    {
      "question": "Should I choose every suggested frame?",
      "answer": "No. Suggestions can help you begin, but they do not know which expression or moment matters to you."
    },
    {
      "question": "Is a Burst the same as a Live Photo?",
      "answer": "No. A Burst is a set of still photos to select from. A Live Photo preserves a short surrounding sequence with sound and has a separate key-photo editing workflow."
    }
  ],
  "sources": [
    {
      "title": "Apple: capture action shots with Burst mode",
      "url": "https://support.apple.com/guide/iphone/take-burst-mode-shots-ipha42c55cd0/26/ios/26",
      "note": "Capture gesture, optional volume-up shortcut, frame selection, and suggested-frame dots; labels follow iOS 26."
    },
    {
      "title": "Adobe: how to shoot a sharp photo",
      "url": "https://www.adobe.com/learn/photoshop/web/adjust-shutter-speed-for-sharp-photo",
      "note": "Explains movement and exposure duration. Selection passes and the turning exercise are original editorial suggestions."
    }
  ],
  "related": [
    "change-live-photo-key-photo",
    "why-night-phone-photos-are-blurry",
    "take-couple-photos-with-phone"
  ],
  "image": "blog/pexels-39820803-4k.webp",
  "imageAlt": "Couple standing together beneath leafy trees",
  "imagePosition": "35% 55%",
  "imageVariants": [
    {
      "src": "blog/pexels-39820803-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-39820803-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-39820803-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-39820803-4k.webp",
      "width": 3840
    }
  ],
  "imageCredit": {
    "name": "Helena Jankovičová Kováčová",
    "url": "https://www.pexels.com/photo/romantic-outdoor-portrait-of-couple-in-nature-39820803/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "iphone-macro-close-up-focus",
  "title": "Why iPhone close-up photos lose focus and how to improve them",
  "description": "Understand iPhone macro switching, find a usable camera distance, and separate close-focus limits from movement and lighting problems.",
  "summary": "Understand iPhone macro switching, find a usable camera distance, and separate close-focus limits from movement and lighting problems.",
  "quickAnswer": "If a close-up looks blurry, move the phone back slightly and let focus settle. On supported iPhones, Camera can switch to the Ultra Wide camera for macro capture; the flower control manages that automatic switch. Start with a still subject in good light and inspect the saved detail before moving closer again.",
  "published": "2026-10-22",
  "modified": "2026-10-22",
  "sections": [
    {
      "id": "distance-first",
      "title": "Find focus before filling the frame",
      "paragraphs": [
        "A larger object on the screen is not useful if its important detail has become soft. Start farther away than your intended crop, focus on a clear feature, and approach slowly. Stop at the last position where that feature remains clear rather than insisting on the closest possible view.",
        "Apple documents macro capture on supported models using the Ultra Wide camera, at distances as close as two centimeters. That is a supported capability, not a requirement to place every subject exactly two centimeters away. The best working distance for your composition may be farther back."
      ]
    },
    {
      "id": "macro-control",
      "title": "Understand the flower control",
      "paragraphs": [
        "When an eligible iPhone enters close-up range, Camera can switch cameras automatically. Apple’s macro guide describes the on-screen flower control for disabling or re-enabling that switch. If turning it off leaves the image blurry, Apple suggests backing up or switching to 0.5x.",
        "The Macro Control setting and its Preserve Settings option affect this behavior on supported devices. They do not add macro hardware to a phone that lacks it. If your controls differ, check your model’s guide rather than following an accessory advertisement that promises to unlock a missing built-in feature."
      ]
    },
    {
      "id": "flat-subject",
      "title": "Practice with a flat subject",
      "list": {
        "ordered": true,
        "items": [
          {
            "text": "Choose a stationary object with visible texture: a leaf on a table, fabric, or a printed label. Begin with enough light to inspect the detail clearly."
          },
          {
            "text": "Keep the phone approximately parallel to the part you want sharp. Avoid making one edge much closer to the camera than the other."
          },
          {
            "text": "Take a frame from a comfortable distance, then a slightly closer frame. Let the focus settle after each move."
          },
          {
            "text": "Compare the same small detail in the saved photographs. Choose the clearer capture and crop modestly if needed; do not judge by the biggest preview alone."
          }
        ]
      }
    },
    {
      "id": "separate-causes",
      "title": "Separate a focus problem from a motion problem",
      "paragraphs": [
        "If one thin slice of the subject is sharp while nearer or farther areas are soft, the issue may be depth of field. Nikon’s close-up guidance explains why the zone of acceptable sharpness is important in macro work and why aligning a flat subject with the camera helps. Its interchangeable-lens aperture settings are not instructions for an iPhone.",
        "If the whole image shifts or smears, repeat with the phone braced on a stable support and the subject still. A flower moving in a breeze is a harder starting point than a leaf resting on a table. Changing distance will not by itself stop that movement.",
        "If every camera view remains hazy, check the lens surface. Apple recommends cleaning camera lenses with a microfiber cloth and removing accessories that block or interfere with the camera when troubleshooting image-quality problems. Avoid piling on sharpening before ruling out a dirty lens or obstruction."
      ]
    },
    {
      "id": "compose-small",
      "title": "Give the close-up a clear subject",
      "paragraphs": [
        "Choose which feature deserves attention: the weave in a sleeve, a petal edge, or a small engraved mark. Reposition until the rest of the frame supports that detail. A close-up that shows several unrelated textures can be harder to read than a slightly wider picture with one clear subject.",
        "Watch for the phone’s own shadow as you approach. Try moving the object or changing your angle before using a stronger edit to brighten it. Keep living subjects comfortable and undisturbed; a still household object is enough for learning the technique.",
        "After a successful practice capture, change only one challenge—closer distance, a curved surface, or slight movement. That makes it easier to identify what caused the next problem without treating every soft result as a broken camera."
      ]
    }
  ],
  "faq": [
    {
      "question": "Why does the picture jump when I move closer?",
      "answer": "On a supported iPhone, automatic macro switching can change the active camera and framing. Watch the macro control and compare the saved result before deciding whether to disable it."
    },
    {
      "question": "Will digital zoom make a blurry close-up sharp?",
      "answer": "No. Enlarging the view does not solve missed focus. Find a clear capture distance first."
    },
    {
      "question": "Do I need an extra macro lens?",
      "answer": "First check what your phone already supports and practice at a usable distance. An accessory is a separate optical system with its own limits; it is not required to learn close-up composition."
    }
  ],
  "sources": [
    {
      "title": "Apple: macro photos and automatic camera switching",
      "url": "https://support.apple.com/guide/iphone/take-macro-photos-and-videos-iphfaacf2eb0/26/ios/26",
      "note": "Supported Ultra Wide macro capture, close-focus distance, flower control, and suggested remedies."
    },
    {
      "title": "Nikon: creative photography at home",
      "url": "https://www.nikonusa.com/learn-and-explore/c/tips-and-techniques/creative-photography-you-can-do-at-home",
      "note": "Explains close-up composition, depth of field, and camera alignment. Camera-specific aperture advice is not transferred to iPhone."
    },
    {
      "title": "Apple: camera image-quality troubleshooting",
      "url": "https://support.apple.com/en-us/102514",
      "note": "Lens cleaning and removal of interfering accessories."
    }
  ],
  "related": [
    "photo-sharpening-vs-resolution",
    "iphone-ae-af-lock",
    "choose-portrait-background"
  ],
  "image": "blog/pexels-35811832-4k.webp",
  "imageAlt": "Water droplet resting on the edge of a pink flower petal",
  "imagePosition": "50% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-35811832-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-35811832-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-35811832-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-35811832-4k.webp",
      "width": 2559
    }
  ],
  "imageCredit": {
    "name": "Robert Schwarz",
    "url": "https://www.pexels.com/photo/macro-shot-of-water-droplet-on-flower-petal-35811832/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "iphone-photographic-styles-vs-filters",
  "title": "iPhone Photographic Styles vs filters: what can you change later?",
  "description": "Check which iPhone style controls apply to your model and photo, then compare a subtle style with a filter without assuming every edit is reversible.",
  "summary": "Check which iPhone style controls apply to your model and photo, then compare a subtle style with a filter without assuming every edit is reversible.",
  "quickAnswer": "Photographic Styles are Apple’s capture treatments that can adjust selected colors and tone; filters are a separate editing treatment. Whether you can revise a Style after capture depends on the iPhone generation and the photo’s capture format. Check those requirements before assuming a look can always be removed later.",
  "published": "2026-10-22",
  "modified": "2026-10-22",
  "sections": [
    {
      "id": "start-with-file",
      "title": "Start with the phone and photo you actually have",
      "paragraphs": [
        "Apple distinguishes ordinary Photographic Styles support from support for its newer generation of Styles. The iOS 26 compatibility list includes iPhone 16, 16 Plus, 16 Pro, 16 Pro Max, iPhone 17, 17 Pro, 17 Pro Max, and iPhone Air. Do not extend that list to a similarly named model without checking.",
        "For eligible later editing, Apple requires High Efficiency capture, selected under Settings → Camera → Formats. Changing that setting today is not a promise that an older exported JPEG will gain editable Style information. Inspect the specific photo in Photos rather than relying only on the phone’s model name."
      ]
    },
    {
      "id": "difference",
      "title": "Choose based on the change you need",
      "paragraphs": [
        "Apple describes Styles as adjustments that respond to different parts and colors of a photograph. Its Photos documentation separately provides filters and ordinary light/color adjustments. These are different controls, and their availability depends on the device and image. Apple’s iOS 26 guide says filters on iPhone 16 models and later are available when Photographic Styles have not been enabled. If Filters is missing, check that condition and the guide for your software version.",
        "If your aim is simply to make one saved picture a little warmer, begin with the ordinary editing controls available for that file. If you want a preferred starting treatment for new captures, explore Styles in Camera. Neither choice requires claiming that every style is more natural or that a filter is inherently worse."
      ],
      "table": {
        "headers": [
          "Your aim",
          "Useful starting point",
          "What to inspect"
        ],
        "rows": [
          [
            "Choose a mood before capture",
            "Available Camera Styles",
            "Face, neutral clothing, and bright details"
          ],
          [
            "Revise an eligible captured Style",
            "Photos → Edit → Styles",
            "Whether the Style control exists for this photo"
          ],
          [
            "Adjust an imported picture",
            "Available photo adjustments or filters",
            "Whether the result solves the intended problem"
          ]
        ]
      }
    },
    {
      "id": "make-a-fair-comparison",
      "title": "Make a comparison you can actually judge",
      "list": {
        "ordered": true,
        "items": [
          {
            "text": "Choose a scene with a face or familiar object, some neutral material, and a colored background. Avoid changing location halfway through the comparison."
          },
          {
            "text": "Capture a restrained version and a stronger interpretation using the controls available on your phone. Keep the framing and subject position as similar as practical."
          },
          {
            "text": "Compare at the same screen brightness and size. Look first at the subject, then the background; a dramatic background is not helpful if it makes the main subject unpleasant."
          },
          {
            "text": "For a photo with an editable Style, reopen it in Photos and confirm the adjustments you expect are actually available. Keep your original before testing another app or export workflow."
          }
        ]
      }
    },
    {
      "id": "editing-later",
      "title": "Understand the limit of editing later",
      "paragraphs": [
        "On eligible photos, Apple’s Photos guide lets you open Edit, choose Styles, and revise the available style controls. It also describes filter controls where supported. Do not use a screenshot of someone else’s editing screen as evidence that your imported file has the same options.",
        "For a practical check, create one unimportant sample using your current capture settings. Reopen it, inspect the tools, and make a small change. Then compare a shared copy separately. A plain image delivered to another app should be treated as its own file, not assumed to carry every adjustable component of the library original.",
        "This guidance is based on the linked documentation, with no hands-on device or sharing tests claimed. Menu names and supported combinations can change; the linked model list and the version selector in Apple’s guide are the reference points for your device."
      ]
    },
    {
      "id": "avoid-overediting",
      "title": "Stop when the treatment supports the picture",
      "paragraphs": [
        "Before stacking another effect, name the remaining problem. Is a white shirt tinted, does a face lack detail, or does the whole scene feel too contrasty? A specific problem deserves a specific adjustment. Another broad treatment may complicate it.",
        "For a set of portraits, choose one image to establish the intended mood, then check the rest individually. A look that suits a shaded café picture may need restraint on a sunlit face. Use our consistency guide for that comparison instead of trying to make every photograph share identical settings."
      ]
    }
  ],
  "faq": [
    {
      "question": "Can I change every Photographic Style after taking the photo?",
      "answer": "Do not assume so. Apple ties the later-editing workflow to supported generations and High Efficiency capture. Verify the controls on the actual photo."
    },
    {
      "question": "Are Styles the same as AI portrait generation?",
      "answer": "No. These Apple controls concern photographic appearance. Generative portrait tools can create or replace visual content, which is a different editing task."
    },
    {
      "question": "Which style is best for skin?",
      "answer": "There is no single choice for every face, lighting setup, or preference. Compare a restrained treatment against your starting picture and keep the version that fits your intent."
    }
  ],
  "sources": [
    {
      "title": "Apple: use Photographic Styles",
      "url": "https://support.apple.com/guide/iphone/use-photographic-styles-iph629d2cd37/26/ios/26",
      "note": "Styles behavior, model-dependent controls, and the High Efficiency requirement for later editing."
    },
    {
      "title": "Apple: models supporting newer Photographic Styles",
      "url": "https://support.apple.com/guide/iphone/aside/iph2c22a8a5e/26/ios/26",
      "note": "Explicit iOS 26 model list; not generalized to every device with a similar name."
    },
    {
      "title": "Apple: edit photos and videos",
      "url": "https://support.apple.com/guide/iphone/edit-photos-and-videos-iphb08064d57/26/ios/26",
      "note": "Style and filter editing workflows on eligible photos; available options vary."
    }
  ],
  "related": [
    "ai-photo-effects-vs-filters",
    "consistent-editing-for-photo-set",
    "edit-photos-without-losing-original"
  ],
  "image": "blog/pexels-33301143-4k.webp",
  "imageAlt": "Man standing beneath a tree in warm golden light",
  "imagePosition": "50% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-33301143-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-33301143-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-33301143-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-33301143-4k.webp",
      "width": 2560
    }
  ],
  "imageCredit": {
    "name": "Mohammad Kashkooli",
    "url": "https://www.pexels.com/photo/golden-hour-portrait-in-sundrenched-field-33301143/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "iphone-live-photo-long-exposure",
  "title": "How to make a Live Photo long exposure on iPhone",
  "description": "Use a Live Photo to soften moving water, keep fixed details clear, and understand the limits of Apple’s simulated Long Exposure effect.",
  "summary": "Use a Live Photo to soften moving water, keep fixed details clear, and understand the limits of Apple’s simulated Long Exposure effect.",
  "quickAnswer": "Capture moving water as a Live Photo while holding the iPhone steady. Open it in Photos, tap the Live menu, and choose Long Exposure. Apple describes this as a simulated long-exposure effect that blurs motion; it is not the same as choosing a manual shutter duration in the Camera app.",
  "published": "2026-10-22",
  "modified": "2026-10-22",
  "sections": [
    {
      "id": "choose-motion",
      "title": "Choose what should move and what should stay clear",
      "paragraphs": [
        "A waterfall beside a fixed rock gives the effect a clear job: soften the water while keeping the setting recognizable. A frame filled entirely with moving water gives you fewer fixed details to judge whether the whole picture has become messy.",
        "Adobe’s motion-blur guidance distinguishes motion in the scene from camera shake and recommends stable support when the background should remain clear. Apply that idea to the composition, but do not copy DSLR shutter and aperture instructions into the Live Photo menu. The phone effect offers a different workflow."
      ]
    },
    {
      "id": "capture-and-apply",
      "title": "Capture and apply the effect",
      "list": {
        "ordered": true,
        "items": [
          {
            "text": "Find a stable, dry position with a view of the water and a stationary edge. Keep the phone secure and stay away from slippery edges."
          },
          {
            "text": "In Camera’s Photo mode, make sure Live Photo is enabled. Apple’s capture guide notes that Live Photos are unavailable while ProRAW or HEIF Max is enabled."
          },
          {
            "text": "Compose, pause, and take the picture without immediately lowering the phone. Keep the same framing through the surrounding moment."
          },
          {
            "text": "Open the saved Live Photo in Photos, use its Live menu, and select Long Exposure. Inspect both the water and the fixed edge in the result."
          }
        ]
      }
    },
    {
      "id": "review-the-result",
      "title": "Review the effect in three places",
      "paragraphs": [
        "First inspect the main moving area. Does the water read as a deliberate soft flow, or has the texture become an indistinct white patch? A softer treatment is not automatically better if it removes the feature that attracted you to the scene.",
        "Next inspect a stationary object such as a stone, wall, or bridge. If it looks doubled or smeared, repeat the capture with better support and a simpler composition. Compare the files before adding sharpening, which may make unwanted edges more noticeable.",
        "Finally check boundaries where motion crosses still objects. Leaves waving in front of a waterfall, a person stepping through the frame, or spray crossing a dark rock can make the effect less tidy. Try a viewpoint that reduces those intersections rather than expecting every moving detail to blend neatly."
      ]
    },
    {
      "id": "controlled-practice",
      "title": "Try a modest fountain comparison",
      "paragraphs": [
        "Choose a small fountain you can photograph safely from a fixed position. Make one frame with a large amount of surrounding architecture and another focused more tightly on the falling water. Apply the effect to each and compare which version still explains the place.",
        "Keep the better composition and make a second capture with improved support. Judge whether the fixed edges improved while the water retained the movement you wanted. This is a suggested exercise; no success rate, ideal shutter time, or device comparison has been measured here.",
        "If the effect still looks awkward, keep the ordinary photograph. A visible splash can tell a clearer story than a smooth stream, and a quiet pool may not contain enough movement to produce the result you imagined."
      ]
    },
    {
      "id": "sharing-and-limits",
      "title": "Keep the source and check the shared result",
      "paragraphs": [
        "Preserve the Live Photo while choosing your final treatment. Apple cautions that third-party editing can lose Live Photo effects, so check the result when you move between apps rather than assuming the presentation will remain identical.",
        "Before posting, open the delivered copy or preview and confirm that it shows the intended effect. Avoid treating a thumbnail in the original library as proof of what another person receives.",
        "If you need exact control over exposure duration, a longer recording window, or a repeatable technical capture, this simple effect may not be enough. Start by identifying that requirement; adding heavier blur afterward does not turn this workflow into a measured manual exposure."
      ]
    }
  ],
  "faq": [
    {
      "question": "Can I apply this to an ordinary still photo?",
      "answer": "This workflow needs a Live Photo with its motion component. A still image does not contain the surrounding recorded movement."
    },
    {
      "question": "Does the effect make a blurry photograph sharp?",
      "answer": "No. Its purpose is to portray motion. Poorly defined fixed objects remain a reason to improve capture or choose another frame."
    },
    {
      "question": "Must I photograph water?",
      "answer": "No. Water is a useful practice subject because its motion is easy to recognize. Other moving subjects may work, but inspect fixed details and motion boundaries in each result."
    }
  ],
  "sources": [
    {
      "title": "Apple: edit Live Photos and apply effects",
      "url": "https://support.apple.com/en-euro/guide/iphone/iphd8dbb3291/27/ios/27",
      "note": "Documents Long Exposure as a simulation and where to select it."
    },
    {
      "title": "Apple: capture Live Photos",
      "url": "https://support.apple.com/en-euro/guide/iphone/iph17471d6de/26/ios/26",
      "note": "Capture workflow and incompatibility with ProRAW or HEIF Max."
    },
    {
      "title": "Adobe: motion blur photography",
      "url": "https://www.adobe.com/creativecloud/photography/technique/motion-blur.html",
      "note": "General distinction between intentional scene motion and camera shake; not evidence of an iPhone benchmark."
    },
    {
      "title": "Apple: Live Photo editing and sharing",
      "url": "https://support.apple.com/en-ph/104966",
      "note": "Third-party editing can lose Live Photo effects. The fountain exercise is editorial guidance."
    }
  ],
  "related": [
    "change-live-photo-key-photo",
    "why-night-phone-photos-are-blurry",
    "edit-photos-without-losing-original"
  ],
  "image": "blog/pexels-10047127-4k.webp",
  "imageAlt": "Water flowing over a forest waterfall with soft motion trails",
  "imagePosition": "50% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-10047127-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-10047127-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-10047127-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-10047127-4k.webp",
      "width": 3840
    }
  ],
  "imageCredit": {
    "name": "Jeremy Wong",
    "url": "https://www.pexels.com/photo/a-long-exposure-shot-of-a-waterfall-10047127/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "phone-panorama-stitching-tips",
  "title": "Phone panorama tips: avoid broken lines and duplicated people",
  "description": "Plan a shorter panorama, keep the camera position steady, and inspect seams before leaving the scene. Includes the iPhone Pano workflow.",
  "summary": "Plan a shorter panorama, keep the camera position steady, and inspect seams before leaving the scene. Includes the iPhone Pano workflow.",
  "quickAnswer": "For a cleaner phone panorama, choose a mostly still scene, pan smoothly from one position, and stop once the useful composition is complete. On iPhone, use Pano mode and keep the arrow on its guide line. Inspect railings, horizons, and moving people in the saved image for stitching mistakes.",
  "published": "2026-10-22",
  "modified": "2026-10-22",
  "sections": [
    {
      "id": "plan-the-frame",
      "title": "Decide where the photograph should begin and end",
      "paragraphs": [
        "A panorama should include something a normal frame cannot communicate well: a long landscape, the relationship between buildings, or a tall interior. It does not have to cover the widest angle the phone will accept.",
        "Before capturing, sweep your gaze across the proposed view. Pick a beginning that introduces the scene and an end that closes it. Check whether a bright doorway, nearby railing, or passing crowd makes part of the sweep harder than the rest. A shorter composition can be more convincing than a broad image with obvious errors."
      ]
    },
    {
      "id": "iphone-steps",
      "title": "Make an iPhone Pano capture",
      "list": {
        "ordered": true,
        "items": [
          {
            "text": "Open Camera and choose Pano. Aim at your intended starting point before pressing the shutter."
          },
          {
            "text": "Pan slowly in the arrow’s direction and keep the arrow on the center guide. Avoid walking sideways while sweeping."
          },
          {
            "text": "Press the shutter again when you reach your planned ending. You do not need to include empty space just to continue the motion."
          },
          {
            "text": "To reverse the capture direction, tap the arrow. Apple also documents vertical panoramas: hold the phone in landscape orientation and pan vertically."
          }
        ]
      }
    },
    {
      "id": "position",
      "title": "Keep the camera position consistent",
      "paragraphs": [
        "A panorama joins different views of a scene. Adobe’s Camera Raw team explains that alignment becomes more difficult when nearby objects shift relative to distant ones as the camera position changes. This is parallax, and it matters particularly with close foreground objects.",
        "For a handheld phone capture, aim for a smooth turn around a steady position rather than a large sideways arc. Step away from a nearby fence or table when possible, or remove it from the composition. These practical choices reduce a difficult alignment situation; they do not guarantee perfect stitching.",
        "A dedicated camera panorama head offers more precise control, but buying one is not the first step for a casual phone photograph. Start with a distant, static scene and a modest sweep. Add a close foreground only after you can recognize how it changes the result."
      ]
    },
    {
      "id": "motion-and-seams",
      "title": "Check the parts most likely to reveal a seam",
      "paragraphs": [
        "A person who moves during the sweep can appear differently across the captured views. Treat busy pedestrian areas as a difficult subject. Wait for a quieter interval, change your framing, or take a normal photo when an accurate record of people matters."
      ],
      "table": {
        "headers": [
          "Inspect",
          "Look for",
          "Next capture to try"
        ],
        "rows": [
          [
            "Railings and roof edges",
            "A break, jump, or doubled segment",
            "Keep position steadier or exclude very near objects"
          ],
          [
            "People and vehicles",
            "Repeated or incomplete shapes",
            "Wait for less movement or use a single frame"
          ],
          [
            "Horizon and image edges",
            "A rising line or uncomfortable crop",
            "Follow the guide more evenly and shorten the sweep"
          ],
          [
            "Bright and dark ends",
            "A distracting difference across the scene",
            "Choose a more even view or a different time"
          ]
        ]
      }
    },
    {
      "id": "practice-and-finish",
      "title": "Practice with a shorter version before editing",
      "paragraphs": [
        "At a viewpoint, make one panorama covering only the central subject and another covering a wider span. Inspect both at full width, then enlarge the same architectural edges or horizon details. Choose the version whose extra coverage adds useful context.",
        "This comparison separates two decisions: whether the composition needs more width and whether the capture can support it cleanly. Do not assume the longer file wins because it contains more scene.",
        "Crop unwanted empty edges if needed, but inspect the important geometry before applying a strong look. A color treatment cannot reliably repair a missing section of railing. If a seam cuts through the main subject, retaking while you are still there is often the clearest option.",
        "For another phone brand, use its own panorama instructions. The smooth movement and seam review are general photographic guidance; the arrow controls and vertical-panorama gesture above specifically follow Apple’s iOS 26 guide."
      ]
    }
  ],
  "faq": [
    {
      "question": "Why does someone appear twice in my panorama?",
      "answer": "The scene is captured across time while you pan. A moving person can enter more than one part of the sequence. Try a quieter moment or a single-frame photograph."
    },
    {
      "question": "Can I make a vertical panorama?",
      "answer": "Apple documents this by rotating the phone to landscape orientation and panning vertically in Pano mode. Check the instructions for your device if using another camera app."
    },
    {
      "question": "Can a crop fix a stitching error?",
      "answer": "It can remove an unwanted edge if the error is outside the part you need. It cannot restore an important object that was stitched incorrectly inside the composition."
    }
  ],
  "sources": [
    {
      "title": "Apple: take panoramic photos",
      "url": "https://support.apple.com/en-asia/guide/iphone/iph7e06402b4/26/ios/26",
      "note": "Pano capture, arrow guide, reversed direction, and vertical capture."
    },
    {
      "title": "Adobe Camera Raw team: merge to panorama",
      "url": "https://blog.adobe.com/en/publish/2020/01/16/from-the-acr-team-merge-to-panorama",
      "note": "Explains fixed-position capture and foreground/background parallax. Its desktop merge controls are not presented as phone features."
    }
  ],
  "related": [
    "choose-portrait-background",
    "how-to-crop-portrait-photos",
    "iphone-ae-af-lock"
  ],
  "image": "blog/pexels-23203338-4k.webp",
  "imageAlt": "Green mountain ridges beneath a blue sky",
  "imagePosition": "50% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-23203338-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-23203338-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-23203338-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-23203338-4k.webp",
      "width": 3840
    }
  ],
  "imageCredit": {
    "name": "Ella Ragasa",
    "url": "https://www.pexels.com/photo/panorama-of-a-mountain-landscape-23203338/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "raw-vs-jpeg-phone-photography",
  "title": "RAW vs JPEG on a phone: when is RAW worth keeping?",
  "description": "Choose RAW for editing flexibility or JPEG for a simpler workflow. Understand ProRAW, storage tradeoffs, and what a RAW file cannot repair.",
  "summary": "Choose the capture format around the edit you plan to make, then keep a separate file for sharing.",
  "quickAnswer": "Use RAW when you need room to adjust exposure and white balance and have an editor that supports your phone’s files. Choose JPEG, or your phone’s normal HEIF mode, when a ready-to-share result and smaller files matter more. RAW is a capture and editing choice; it does not fix missed focus or guarantee recoverable highlights.",
  "sections": [
    {
      "id": "different-jobs",
      "title": "Separate capture from delivery",
      "paragraphs": [
        "A camera-produced JPEG already has a rendered appearance. A RAW workflow gives an editor more of the capture information to interpret before making a finished image. Adobe demonstrates the difference with exposure and white-balance adjustments. That flexibility is useful only if you intend to do something with it.",
        "Consider two portraits: a quick lunch picture you want to send immediately, and a carefully framed window portrait you plan to refine later. The lunch picture may need no additional capture complexity. The window portrait may justify a RAW original if the bright window and shaded face need careful tonal decisions.",
        "Keeping RAW does not mean sending RAW to everyone. The working source and the finished sharing copy can have different formats. Our JPEG, HEIC and PNG guide covers that delivery decision; this guide covers whether to capture and retain a RAW source."
      ]
    },
    {
      "id": "decision",
      "title": "Match the format to the job",
      "table": {
        "headers": [
          "Situation",
          "Practical starting point",
          "Check"
        ],
        "rows": [
          [
            "Quick everyday sharing",
            "Normal JPEG or HEIF capture",
            "Review the camera result before sending."
          ],
          [
            "Substantial color or exposure adjustment",
            "RAW in a supported workflow",
            "Keep the source and export a finished copy."
          ],
          [
            "A large batch with limited storage",
            "Use RAW selectively",
            "Test file sizes before committing to the entire session."
          ],
          [
            "A recipient who only needs the finished picture",
            "A compatible rendered export",
            "Keep RAW separately for future revisions."
          ]
        ]
      }
    },
    {
      "id": "proraw",
      "title": "Apple ProRAW is a particular RAW workflow",
      "paragraphs": [
        "Apple says ProRAW combines standard RAW information with iPhone processing. It uses DNG files and needs a compatible device and application. Do not assume every phone, lens setting, camera mode, or editor has the same support.",
        "The presence of a DNG filename does not promise identical rendering in every application. Apple notes that an app without ProRAW support may display the file differently. Before an important session, open one sample in the editor you actually intend to use and confirm that you can export it successfully.",
        "This is not a list of Meluvya import capabilities. RAW support has not been verified for Meluvya, so prepare an appropriate supported input rather than assuming a DNG will work."
      ]
    },
    {
      "id": "practice",
      "title": "Try one controlled comparison before changing your habit",
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Choose a repeatable scene.",
            "text": "Use a still subject with a bright area and a darker area. Keep the viewpoint and lighting stable so you are not comparing entirely different photographs."
          },
          {
            "title": "Capture the available formats.",
            "text": "Use RAW plus JPEG if your camera offers it, or take separate examples while noting that differences in timing and processing can affect the comparison."
          },
          {
            "title": "Make the edit you actually need.",
            "text": "Try a modest brightness and white-balance correction. Compare the final rendered exports at equal dimensions, not a RAW preview against a full-size JPEG."
          },
          {
            "title": "Count the storage cost.",
            "text": "Inspect the file sizes from your device. Estimate a session from those samples, and include backup space. A manufacturer’s example size is not a guarantee for your scene."
          }
        ]
      }
    },
    {
      "id": "limits",
      "title": "Decide what is worth retaining",
      "paragraphs": [
        "A softer preview does not by itself mean the RAW capture failed. Judge the edited result in a compatible application. Conversely, a larger file is not evidence of sharper eyes, better timing, or better light. Those decisions still happen while photographing.",
        "RAW also has limits. If a highlight contains no recoverable capture information, moving a slider cannot reveal the original texture. If the subject moved during the exposure, a different file extension does not undo that movement.",
        "For a useful portrait, retain the original source, your editable adjustments where supported, and a finished export. For routine pictures where the normal camera result already meets your needs, a simpler workflow can be the sensible choice."
      ]
    }
  ],
  "faq": [
    {
      "question": "Can I turn a JPEG into a real RAW capture?",
      "answer": "Saving a JPEG inside a different container cannot recreate capture information that the JPEG no longer contains. Keep the original RAW at capture time if you need it."
    },
    {
      "question": "Does RAW always look better straight from the camera?",
      "answer": "No. Rendering, processing and viewing software affect the preview. Compare finished edits for your intended use instead of treating the first preview as a quality ranking."
    }
  ],
  "sources": [
    {
      "title": "Adobe: benefits of shooting in RAW",
      "url": "https://www.adobe.com/learn/lightroom-classic/web/raw-photography",
      "note": "Demonstrates editing latitude and a RAW-to-JPEG delivery workflow; retrieved October 22, 2026."
    },
    {
      "title": "Apple: About Apple ProRAW",
      "url": "https://support.apple.com/en-us/119916",
      "note": "ProRAW processing, DNG compatibility and storage considerations; retrieved October 22, 2026."
    }
  ],
  "related": [
    "jpeg-heic-png-photo-formats",
    "can-you-fix-overexposed-portraits",
    "edit-photos-without-losing-original"
  ],
  "published": "2026-10-22",
  "modified": "2026-10-22",
  "image": "blog/pexels-15558373-4k.webp",
  "imageAlt": "Photographer working beside a laptop, drawing tablet, and camera",
  "imagePosition": "50% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-15558373-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-15558373-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-15558373-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-15558373-4k.webp",
      "width": 2560
    }
  ],
  "imageCredit": {
    "name": "Kawê Rodrigues",
    "url": "https://www.pexels.com/photo/man-editing-photos-with-use-of-laptop-and-tablet-15558373/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "photo-print-size-pixels-ppi",
  "title": "How large can you print a photo? Pixels, inches and PPI",
  "description": "Calculate print size from pixel dimensions, check the crop, and understand why changing a PPI label does not create missing detail.",
  "summary": "A useful print-size estimate starts with the pixels remaining after the crop, followed by the printer’s requirements.",
  "quickAnswer": "Divide each pixel dimension by the intended print dimension in inches to calculate pixels per inch. For example, 3000 × 2400 pixels printed at 10 × 8 inches gives 300 PPI. Use the printer or lab’s requested resolution, check the crop, and judge a proof; pixel count alone cannot guarantee a sharp print.",
  "sections": [
    {
      "id": "three-measurements",
      "title": "Read the three measurements separately",
      "paragraphs": [
        "Pixel dimensions describe the image grid, such as 3000 × 2400 pixels. Print dimensions describe its size on paper. PPI describes how many image pixels fit into each printed inch. Adobe’s print-resolution documentation distinguishes those measurements from one another.",
        "A file’s megabyte size is not a substitute for its dimensions. A heavily compressed image and a lightly compressed image can share the same width and height while looking different. Find the dimensions of the actual file you will upload, not the camera’s advertised megapixel count.",
        "Printer DPI is another measurement: it concerns the printer’s output dots. You do not need one image pixel for every ink dot. Ask for the lab’s image-resolution requirement rather than copying a large DPI number from a printer specification."
      ]
    },
    {
      "id": "calculate",
      "title": "Use the calculation on your final crop",
      "paragraphs": [
        "At a chosen PPI, required pixels equal print inches multiplied by PPI. The examples below use 300 PPI as a planning value, not a universal quality cutoff. Your lab may request another value, particularly for a large print viewed from farther away.",
        "For measurements in centimeters, divide by 2.54 to get inches first. A 20.32 × 25.4 cm print is 8 × 10 inches; the order simply depends on orientation."
      ],
      "table": {
        "headers": [
          "Print size",
          "Pixels at 300 PPI",
          "Long-side to short-side ratio"
        ],
        "rows": [
          [
            "4 × 6 in",
            "1200 × 1800 px",
            "3:2"
          ],
          [
            "5 × 7 in",
            "1500 × 2100 px",
            "7:5"
          ],
          [
            "8 × 10 in",
            "2400 × 3000 px",
            "5:4"
          ],
          [
            "12 × 18 in",
            "3600 × 5400 px",
            "3:2"
          ]
        ]
      }
    },
    {
      "id": "crop",
      "title": "Check the shape before counting pixels",
      "paragraphs": [
        "A 4000 × 3000 image has a 4:3 shape. An 8 × 10 print has a 5:4 shape. Filling the paper without stretching requires a crop. In landscape orientation, a 3750 × 3000 crop fits a 10 × 8 print and supplies 375 PPI. These figures are arithmetic examples, not measured print results.",
        "Preview the crop around hair, hands and shoulders before ordering. If the crop removes something important, choose borders or a differently shaped print. Stretching the picture to fit can change facial proportions.",
        "Recalculate using the cropped dimensions. A large original does not help if the version you intend to print is a small crop or a downloaded preview."
      ]
    },
    {
      "id": "resampling",
      "title": "A resolution label cannot create captured detail",
      "paragraphs": [
        "Adobe explains that changing physical size and PPI without resampling leaves the pixel count alone. A 1500-pixel edge at 150 PPI is ten inches long; at 300 PPI it is five inches long. The image has not gained detail.",
        "Resampling changes the pixel grid. Enlarging may be necessary for a printer’s submission requirements, but inspect the result rather than assuming the larger numbers prove an improvement. Return to a higher-resolution source when one exists.",
        "For an AI-upscaled portrait, compare facial features and accessories with the source before printing. A plausible-looking added texture is not necessarily detail the camera captured."
      ]
    },
    {
      "id": "proof",
      "title": "Make a small proof when the picture matters",
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Start with the correct source.",
            "text": "Use the final edited file at its intended crop, with the lab’s requested format and color settings."
          },
          {
            "title": "Inspect detail and artifacts.",
            "text": "Look at eyes, hair, smooth backgrounds and sharp edges. Obvious blur or compression damage can remain even when the pixel dimensions satisfy the upload form."
          },
          {
            "title": "Check the order preview.",
            "text": "Confirm orientation, borders, automatic crop and any optional automatic corrections before submitting."
          },
          {
            "title": "Evaluate a proof.",
            "text": "For an important enlargement, consider a small sample of the image at the intended reproduction scale. Inspect it in the light and at the distance where the final print will be viewed."
          }
        ]
      }
    }
  ],
  "faq": [
    {
      "question": "Is 300 PPI compulsory for every photo print?",
      "answer": "No. It is a common planning value, but the print process, viewing distance and source quality matter. Follow the lab’s requirements and use a proof for uncertain enlargements."
    },
    {
      "question": "Why does my photo say 72 PPI?",
      "answer": "That label alone does not tell you how much detail the file contains. Check its pixel dimensions and calculate PPI at your intended print size."
    }
  ],
  "sources": [
    {
      "title": "Adobe: printed image resolution",
      "url": "https://helpx.adobe.com/photoshop/desktop/crop-resize-transform/resize-adjust-resolution/printed-image-resolution.html",
      "note": "Relationship between pixel dimensions, physical size and PPI; retrieved October 22, 2026."
    },
    {
      "title": "Adobe: printer resolution",
      "url": "https://helpx.adobe.com/photoshop/desktop/crop-resize-transform/resize-adjust-resolution/printer-resolution.html",
      "note": "Distinguishes printer DPI from image PPI and recommends checking the output process; retrieved October 22, 2026."
    },
    {
      "title": "Adobe: changing print dimensions and resolution",
      "url": "https://helpx.adobe.com/photoshop/desktop/crop-resize-transform/resize-adjust-resolution/change-print-dimensions-and-resolution.html",
      "note": "Changing print size without resampling and using printer-specific requirements; retrieved October 22, 2026."
    }
  ],
  "related": [
    "how-to-crop-portrait-photos",
    "photo-sharpening-vs-resolution",
    "why-saved-photos-lose-quality"
  ],
  "published": "2026-10-22",
  "modified": "2026-10-22",
  "image": "blog/pexels-4992637-4k.webp",
  "imageAlt": "Film cameras, lenses, and film rolls on a wooden table",
  "imagePosition": "50% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-4992637-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-4992637-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-4992637-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-4992637-4k.webp",
      "width": 3840
    }
  ],
  "imageCredit": {
    "name": "Rachel Claire",
    "url": "https://www.pexels.com/photo/vintage-camera-near-lens-and-camera-roll-on-table-4992637/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "resize-vs-compress-photos-for-upload",
  "title": "Resize or compress a photo? How to meet an upload limit",
  "description": "Separate pixel limits from file-size limits, make a suitable export, and check quality before uploading your photo.",
  "summary": "A smaller file is not always a smaller picture. Use the upload requirement to choose which export control to change.",
  "quickAnswer": "Resize when you need different pixel dimensions; adjust compression when you need fewer file bytes. Many upload limits require both. Read the accepted format, minimum dimensions and maximum file size first, then export a copy and inspect it. Reducing a PPI label is not a dependable way to meet a web upload limit.",
  "sections": [
    {
      "id": "requirements",
      "title": "Write down the actual rejection",
      "paragraphs": [
        "“Image too large” can mean several things: too many pixels, too many megabytes, or even the wrong file format. Copy the exact requirement before changing your photo. Reducing the wrong property can make the image worse without fixing the problem.",
        "For a hypothetical form that requires JPEG, a long edge of at least 1600 pixels and a file below 2 MB, all three conditions must be satisfied. A tiny 800-pixel file is not acceptable just because it falls below the byte limit. These example values describe a made-up form, not a platform recommendation.",
        "Use a copy so each attempt starts from the same full-quality source. Our guide to saved-photo quality explains why an export can deteriorate; this guide is about choosing an efficient sequence when an upload has specific limits."
      ]
    },
    {
      "id": "controls",
      "title": "Match each control to what it changes",
      "table": {
        "headers": [
          "Control",
          "Main effect",
          "Use it"
        ],
        "rows": [
          [
            "Pixel resizing",
            "Width and height of the image grid",
            "When the destination requests dimensions or needs a smaller image."
          ],
          [
            "JPEG quality/compression",
            "How much detail is retained in the encoded file",
            "When the picture has suitable dimensions but too many bytes."
          ],
          [
            "Format conversion",
            "The encoding and compatibility",
            "When the destination rejects the original format."
          ],
          [
            "Crop",
            "The composition and aspect ratio",
            "When the required shape differs; review the face and edges."
          ]
        ]
      }
    },
    {
      "id": "example",
      "title": "Why halving the sides is a major reduction",
      "paragraphs": [
        "A 4000 × 3000 image contains 12 million pixels. A 2000 × 1500 version contains 3 million. Halving both sides leaves one quarter of the pixel count, not one half. This is simple dimension arithmetic; it does not predict an exact reduction in megabytes.",
        "Adobe describes resampling as adding or removing pixels. Its JPEG documentation separately describes quality settings that trade file size against detail. Because these are different controls, two exports with equal dimensions can have different byte sizes and visible artifacts.",
        "Do not keep reducing dimensions once you approach the destination’s minimum. At that point, a supported compression adjustment or a different permitted format may be the relevant choice."
      ]
    },
    {
      "id": "routine",
      "title": "Export in a deliberate order",
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Finish the composition.",
            "text": "Set the required aspect ratio and confirm the crop. Avoid resizing a picture that you will heavily crop afterward."
          },
          {
            "title": "Set useful pixel dimensions.",
            "text": "Meet the destination’s dimensions without making a needless enormous copy. Keep the aspect ratio locked unless you deliberately want distortion."
          },
          {
            "title": "Choose an accepted format.",
            "text": "A different filename extension is not a conversion. Use an export function that actually writes the required format."
          },
          {
            "title": "Adjust compression and inspect.",
            "text": "Begin with a good-quality export, check the resulting bytes, then reduce quality only as necessary. Re-export from the working source each time."
          },
          {
            "title": "Open the saved file.",
            "text": "Check the actual file, not the editor preview. Confirm dimensions, size, orientation and appearance before submitting."
          }
        ]
      }
    },
    {
      "id": "failure",
      "title": "If it still fails, stop guessing",
      "paragraphs": [
        "Inspect the filename and file type as well as the dimensions and bytes. A form might accept JPEG but reject a HEIC image that was simply renamed. If the message is vague, consult its documented requirements or support information.",
        "If the file is only just below a limit, a slightly smaller copy can provide room for differences in how an uploader calculates or reports size. Do not remove necessary image detail merely to produce the smallest possible file.",
        "Pay attention to skin gradients, fine hair, lettering and high-contrast edges when choosing compression. Judge both at a useful viewing size and close up. The acceptable tradeoff depends on what the image must communicate.",
        "For a private photo, use a trusted local editor where practical. An unfamiliar online compressor adds another place you are sending the image; it is not required just to change dimensions or export quality."
      ]
    }
  ],
  "faq": [
    {
      "question": "Will changing 300 PPI to 72 PPI make a web upload smaller?",
      "answer": "Not reliably. If the pixel grid is unchanged, you have not reduced the picture’s dimensions. Check pixels, encoding and file bytes instead."
    },
    {
      "question": "Should every portrait use the same JPEG quality percentage?",
      "answer": "No. Quality scales and image content vary. Use the destination’s requirements and inspect the actual output rather than treating a percentage as a universal standard."
    }
  ],
  "sources": [
    {
      "title": "Adobe: image size, resolution and resampling",
      "url": "https://helpx.adobe.com/photoshop/desktop/crop-resize-transform/resize-adjust-resolution/image-size-resolution-and-resampling.html",
      "note": "Pixel dimensions, resampling and screen versus print measurements; retrieved October 22, 2026."
    },
    {
      "title": "Adobe: save images in JPEG format",
      "url": "https://helpx.adobe.com/photoshop/desktop/save-and-export/save-files/save-in-jpeg-format.html",
      "note": "JPEG quality and file-size tradeoffs; retrieved October 22, 2026."
    }
  ],
  "related": [
    "why-saved-photos-lose-quality",
    "jpeg-heic-png-photo-formats",
    "how-to-crop-portrait-photos"
  ],
  "published": "2026-10-22",
  "modified": "2026-10-22",
  "image": "blog/pexels-29065464-4k.webp",
  "imageAlt": "Photographer using a laptop with a camera resting nearby",
  "imagePosition": "50% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-29065464-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-29065464-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-29065464-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-29065464-4k.webp",
      "width": 2560
    }
  ],
  "imageCredit": {
    "name": "Leticia Curvelo",
    "url": "https://www.pexels.com/photo/photographer-editing-photos-on-laptop-29065464/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "srgb-vs-display-p3-photo-export",
  "title": "sRGB or Display P3: which should you export for photos?",
  "description": "Choose a color profile for the destination, convert instead of randomly assigning, and check an exported portrait before sharing.",
  "summary": "The right export profile depends on where the photo will be viewed and whether the whole delivery path handles it correctly.",
  "quickAnswer": "Use an embedded sRGB profile as a practical default for general web sharing unless the destination specifies otherwise. Keep Display P3 when a supported workflow benefits from its wider color range and you have checked the result. Convert a delivery copy; do not randomly assign a different profile or overwrite the working master.",
  "sections": [
    {
      "id": "meaning",
      "title": "The profile describes the color, not a style",
      "paragraphs": [
        "A color profile helps software interpret the numbers in an image. Apple describes Display P3 as a wider color space than sRGB, useful on compatible displays. That does not mean a portrait needs a P3 export to look good, or that P3 should make every skin tone more saturated.",
        "Profiles are not filters. Choosing a profile because its name sounds more professional can create an unnecessary compatibility problem. Start by asking where the picture will go, whether that service preserves or converts color information, and what its documentation requests.",
        "This guide covers the export decision. If the same file already looks different on two screens, our separate screen-comparison guide helps isolate viewer, display and room-light differences."
      ]
    },
    {
      "id": "destination",
      "title": "Choose for the delivery path",
      "table": {
        "headers": [
          "Destination",
          "Starting choice",
          "Important check"
        ],
        "rows": [
          [
            "General web sharing with no stated preference",
            "sRGB with its profile included",
            "Open the delivered result, not just your local export."
          ],
          [
            "A known color-managed P3 workflow",
            "Display P3 if it benefits the image",
            "Check on compatible hardware and in the receiving software."
          ],
          [
            "A print lab with supplied instructions",
            "The profile or process the lab requests",
            "Do not substitute a screen profile for the lab’s directions."
          ],
          [
            "An editable master",
            "Preserve its deliberate working setup",
            "Make separate delivery copies rather than repeatedly changing the master."
          ]
        ]
      }
    },
    {
      "id": "convert",
      "title": "Convert to the destination profile",
      "paragraphs": [
        "Adobe distinguishes assigning a profile from converting to one. Assignment changes how existing numbers are interpreted. Conversion changes numbers to preserve appearance as closely as the destination color space permits. Using Assign Profile as an export shortcut can therefore create an unwanted color shift.",
        "In Photoshop, the relevant conversion command is Edit → Convert to Profile. Work on a delivery copy, choose the intended destination, review the preview, and save with the profile embedded where the format supports it. Other applications may put the same decision in export settings.",
        "Colors outside the destination’s range cannot all be retained exactly. If a vivid red garment changes during P3-to-sRGB conversion, review that garment and nearby skin together. Do not compensate by increasing saturation across the whole portrait before understanding the conversion."
      ]
    },
    {
      "id": "check",
      "title": "Use a small comparison to choose a repeatable export",
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Pick a representative photo.",
            "text": "Choose one with skin and any important saturated clothing or background colors. A neutral scene may not expose the difference you care about."
          },
          {
            "title": "Prepare two labelled copies if needed.",
            "text": "Export sRGB and P3 only when your editor offers them. Hold the dimensions, edit and compression constant so the comparison has a clear purpose."
          },
          {
            "title": "Inspect the actual destination.",
            "text": "Use a draft or private viewing route where available. A service may process uploaded files, so the local export is only part of the workflow."
          },
          {
            "title": "Record the successful settings.",
            "text": "Keep the profile, format and destination in a short export note. Review that note if software or destination behavior changes."
          }
        ]
      }
    },
    {
      "id": "limits",
      "title": "What an export profile cannot solve",
      "paragraphs": [
        "Embedding a profile supplies color information; it does not make every display identical. Brightness, display settings, software handling and viewing conditions can still change the appearance. Adobe recommends sRGB for ordinary online work while acknowledging the range of screens involved.",
        "Display P3 also does not automatically mean HDR. Color range and the handling of bright highlights are different decisions. If your editor offers HDR output, evaluate that separately rather than assuming the P3 label selects it.",
        "For an everyday portrait, choose the simplest delivery file that looks correct in the intended destination. Preserve your better source for later. There is little value in an elaborate export choice if you never check what the viewer receives."
      ]
    }
  ],
  "faq": [
    {
      "question": "Does converting an sRGB photo to P3 add missing colors?",
      "answer": "It does not recreate capture information that is absent. A wider container alone is not a color-quality upgrade."
    },
    {
      "question": "Should I remove the profile to make the file smaller?",
      "answer": "Removing color interpretation information can make delivery less predictable. Use supported size and compression controls first, and keep the profile when the workflow supports it."
    }
  ],
  "sources": [
    {
      "title": "Apple: Get Started with Display P3",
      "url": "https://developer.apple.com/videos/play/wwdc2017/821/",
      "note": "Explains the wider Display P3 color space and need for profile-aware viewing; retrieved October 22, 2026. Device examples are historical."
    },
    {
      "title": "Adobe: change a document’s color profile",
      "url": "https://helpx.adobe.com/photoshop/desktop/adjust-color/color-profiles/change-a-documents-color-profile.html",
      "note": "Assigning versus converting and embedding the destination profile; retrieved October 22, 2026."
    },
    {
      "title": "Adobe: colors for online viewing",
      "url": "https://helpx.adobe.com/photoshop/desktop/adjust-color/color-profiles/manage-documents-colors-for-online-viewing.html",
      "note": "sRGB conversion for general online delivery; retrieved October 22, 2026."
    }
  ],
  "related": [
    "why-photos-look-different-on-screens",
    "hdr-phone-photos-explained",
    "jpeg-heic-png-photo-formats"
  ],
  "published": "2026-10-22",
  "modified": "2026-10-22",
  "image": "blog/pexels-16313502-4k.webp",
  "imageAlt": "Photo-editing workspace with a laptop, camera, and drawing tablet",
  "imagePosition": "50% 40%",
  "imageVariants": [
    {
      "src": "blog/pexels-16313502-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-16313502-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-16313502-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-16313502-4k.webp",
      "width": 2560
    }
  ],
  "imageCredit": {
    "name": "Kawê Rodrigues",
    "url": "https://www.pexels.com/photo/woman-editing-photos-on-laptop-16313502/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "google-photos-original-vs-storage-saver",
  "title": "Google Photos Original quality vs Storage saver: what changes?",
  "description": "Understand Google Photos backup quality, check a photo’s actual status, and keep originals before converting existing backups.",
  "summary": "Choose backup quality around your future editing and printing needs, then verify individual files rather than relying on the setting alone.",
  "quickAnswer": "Original quality preserves the capture’s resolution and quality according to Google. Storage saver compresses eligible files and resizes photos above 16 MP to 16 MP; videos above 1080p are reduced to 1080p. Choose Original quality when retaining the captured file’s detail matters, and keep a separate original before converting existing backups.",
  "sections": [
    {
      "id": "tradeoff",
      "title": "Choose around the version you may need later",
      "paragraphs": [
        "An image that looks fine in a small phone preview may still be useful later as a tighter crop, a larger print, or the starting point for a new edit. Decide whether Google Photos will hold your only copy or one of several copies before choosing a storage-saving setting.",
        "For example, a traveler might keep full-resolution originals on separate storage and use a smaller cloud library for everyday browsing. Someone whose cloud library is the only surviving source has a different tradeoff. Neither decision should be based only on how a thumbnail looks today.",
        "This guide addresses Google Photos backup quality. It does not describe a setting in Meluvya, and it does not establish which formats Meluvya accepts."
      ]
    },
    {
      "id": "compare",
      "title": "What Google says each option does",
      "table": {
        "headers": [
          "Option or case",
          "Result",
          "Watch for"
        ],
        "rows": [
          [
            "Original quality",
            "Same resolution and quality as capture",
            "Uses Google Account storage."
          ],
          [
            "Storage saver",
            "Compression; eligible photos above 16 MP resized to 16 MP",
            "New backups generally count toward storage too."
          ],
          [
            "Files ineligible for compression",
            "May remain at original file size",
            "Inspect the item’s backup details rather than assuming failure."
          ]
        ]
      }
    },
    {
      "id": "check-item",
      "title": "Check the account and the individual photo",
      "paragraphs": [
        "Use Google Photos on the web to confirm the active account and backup-quality setting. Then open an actual photo, select Info, and inspect its backup details. The current preference alone does not tell you the quality of every previously uploaded item.",
        "Google’s Android help also documents a per-item check through the photo’s More menu, About and Details. Interfaces differ between platforms and versions, so use the relevant Google help page if your labels differ.",
        "Before a large change, choose a few recognizable samples: one recent portrait, one older image and one especially high-resolution capture. Record their dates and dimensions so you can identify them again. Confirm they are backed up rather than only visible locally in the app."
      ]
    },
    {
      "id": "existing",
      "title": "Future uploads and existing backups are different decisions",
      "paragraphs": [
        "Google documents a separate storage-recovery action that converts existing backed-up items to Storage saver. That action does not change the quality selected for future uploads. Do not confuse checking a setting with intentionally converting a library.",
        "Before using recovery, preserve the originals you would miss and verify that those copies open. If compression or resizing discards information, choosing Original quality afterward cannot manufacture that information from the reduced copy.",
        "A useful decision note is: “I kept the original vacation files in this separate location, opened these sample images, and chose the cloud quality for this reason.” This is more reliable than remembering that a backup toggle was once enabled."
      ]
    },
    {
      "id": "compare-download",
      "title": "Inspect a downloaded sample before deleting anything",
      "paragraphs": [
        "Backup quality is also separate from the meaning of Delete or Free up space. Do not use a deletion command as an improvised quality test. Consult Google’s instructions for the exact device and action before removing anything."
      ],
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Keep the source available.",
            "text": "Retain the local original while checking. Do not begin the experiment by removing your only full-resolution copy."
          },
          {
            "title": "Identify the cloud item.",
            "text": "Check its account, date and backup details so you are comparing the intended picture."
          },
          {
            "title": "Compare a saved copy.",
            "text": "Inspect dimensions and important portrait detail in the downloaded file, at the same viewing scale as the source."
          },
          {
            "title": "Decide what you need to preserve.",
            "text": "If later cropping, printing or editing matters, keep the version that supports those uses. A successful small-preview comparison is not proof that the files are identical."
          }
        ]
      }
    }
  ],
  "faq": [
    {
      "question": "Is Storage saver still unlimited free storage?",
      "answer": "Do not assume that. Google says Storage saver backups count toward storage, with an exception for qualifying older High quality backups made before June 1, 2021."
    },
    {
      "question": "Why is one Storage saver file still large?",
      "answer": "Google documents exceptions where a file cannot be compressed. Check the item’s details for its actual backup quality and eligibility rather than relying only on size."
    }
  ],
  "sources": [
    {
      "title": "Google Photos: choose backup quality",
      "url": "https://support.google.com/photos/answer/6220791?hl=en",
      "note": "Quality settings, size thresholds, storage accounting, existing-file conversion and exceptions; retrieved October 22, 2026."
    },
    {
      "title": "Google Photos: back up photos and videos",
      "url": "https://support.google.com/photos/answer/6193313?co=GENIE.Platform%3DAndroid&oco=1",
      "note": "Per-item backup status and account workflow; retrieved October 22, 2026."
    },
    {
      "title": "Google: Photos storage policy change",
      "url": "https://blog.google/products-and-platforms/products/photos/4-things-know-about-google-photos-storage-policy-change/",
      "note": "Historical June 1, 2021 storage-policy threshold; retrieved October 22, 2026."
    }
  ],
  "related": [
    "why-saved-photos-lose-quality",
    "edit-photos-without-losing-original",
    "photo-print-size-pixels-ppi"
  ],
  "published": "2026-10-22",
  "modified": "2026-10-22",
  "image": "blog/pexels-7129664-4k.webp",
  "imageAlt": "Hands at a laptop displaying a set of portrait photographs",
  "imagePosition": "50% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-7129664-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-7129664-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-7129664-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-7129664-4k.webp",
      "width": 2560
    }
  ],
  "imageCredit": {
    "name": "Michael Burrows",
    "url": "https://www.pexels.com/photo/photographer-working-on-laptop-at-workplace-7129664/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "icloud-photos-sync-vs-backup",
  "title": "Is iCloud Photos a backup? Understand sync before deleting",
  "description": "Learn what iCloud Photos synchronizes, why device backup is separate, and how to preserve an independent copy before deleting library photos.",
  "summary": "A second device displaying your library is convenient access, but it does not automatically protect a photo from a synchronized deletion.",
  "quickAnswer": "iCloud Photos synchronizes a library: edits and deletions can appear on every device using it. Apple says those photos are not duplicated in iCloud Backup. Keep a separate, verified copy of important originals before deleting from the synchronized library. If the goal is saving phone space, review Optimize Storage rather than deleting photos you want to keep.",
  "sections": [
    {
      "id": "three-services",
      "title": "Separate the three jobs",
      "paragraphs": [
        "“It is in iCloud” can mean different things. A synchronized photo library, a device backup, and a separately exported file have different purposes. Apple’s iCloud Backup documentation says the device backup covers information that is not already synchronized to iCloud.",
        "Imagine the same portrait appearing on your phone and laptop. If both show the same synchronized library, deleting the portrait from one can remove it from the other. Two visible thumbnails are not necessarily two independent recovery options."
      ],
      "table": {
        "headers": [
          "What you have",
          "Its job",
          "Important limit"
        ],
        "rows": [
          [
            "iCloud Photos",
            "Keeps the photo library up to date across devices",
            "A deletion can propagate."
          ],
          [
            "iCloud Backup",
            "Backs up eligible device information not already synced",
            "Do not assume it separately includes an iCloud Photos library."
          ],
          [
            "Separate exported copy",
            "Preserves a version outside that library",
            "Verify its location, completeness and recovery process."
          ]
        ]
      }
    },
    {
      "id": "deletion",
      "title": "What happens when you delete",
      "paragraphs": [
        "Apple documents that deleting a photo on one device deletes it wherever you use iCloud Photos. It also documents a 30-day Recently Deleted recovery period before permanent deletion. Do not treat that temporary recovery area as your long-term archive.",
        "If you deleted something accidentally, look for it in Recently Deleted promptly and avoid further cleanup while investigating. A guide cannot guarantee recovery of a file that is already permanently deleted or that was never stored in the library.",
        "If someone else manages a shared library or another backup product is involved, check that service’s rules as well. This article addresses the basic iCloud Photos relationship, not every shared-library or third-party retention policy."
      ]
    },
    {
      "id": "space",
      "title": "If you only need more phone space",
      "paragraphs": [
        "Apple’s Optimize Storage option keeps space-saving versions on the device while full-resolution originals remain in iCloud Photos. That is different from deleting a library item. Review available device space, cloud space and synchronization status before deciding what to remove.",
        "An optimized preview is not evidence that a full original has already been copied to another disk. Before exporting a large collection, allow the required originals to download and confirm there is enough storage at the destination.",
        "Do not switch synchronization settings at random to stop an unwanted deletion. First understand which copies currently exist and what the proposed setting change will do."
      ]
    },
    {
      "id": "export",
      "title": "Make a separate copy deliberately",
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Choose the photos and version you need.",
            "text": "For source preservation, use Apple’s documented Export Unmodified Originals workflow. If you also need the finished edit, preserve an appropriate edited export separately."
          },
          {
            "title": "Choose the destination carefully.",
            "text": "Apple notes that Files may open to iCloud Drive by default. Select the intended location, such as suitable external storage, rather than assuming the default is an independent offline copy."
          },
          {
            "title": "Wait for completion.",
            "text": "Do not unplug storage or start deleting the library while the export is still working. Keep the original library intact during verification."
          },
          {
            "title": "Open exported samples.",
            "text": "Check older and newer photos, orientations and any special formats you care about. Review the folder contents and dimensions; a folder name alone proves nothing about its files."
          }
        ]
      }
    },
    {
      "id": "recovery",
      "title": "Test retrieval without deleting the source",
      "paragraphs": [
        "A safe rehearsal is to close Photos, open the separate destination, and retrieve a harmless sample from there. Confirm which application opens it and whether it contains the expected unedited or finished version. You do not need to erase the library to prove that the copy can be read.",
        "Document the destination and when it was last refreshed. If the separate copy is on the same device, consider what happens if that device fails or is lost. Independence from library synchronization and protection from hardware loss are related but different questions.",
        "For an ongoing library, create a repeatable backup routine rather than a one-time export that becomes outdated. Keep copies you can actually retrieve; convenience and recovery should both be part of the plan."
      ]
    }
  ],
  "faq": [
    {
      "question": "Does my iPhone’s iCloud Backup contain another copy of iCloud Photos?",
      "answer": "Apple says photos synchronized through iCloud Photos are not duplicated in the device’s iCloud Backup. Confirm your actual settings rather than assuming both services save the same library."
    },
    {
      "question": "Can I delete from my phone while keeping the same photo in iCloud Photos?",
      "answer": "Deleting from the synchronized Photos library is not a local-space cleanup. Review Optimize Storage if you want the library retained while reducing device storage."
    }
  ],
  "sources": [
    {
      "title": "Apple: set up and use iCloud Photos",
      "url": "https://support.apple.com/en-us/108782",
      "note": "Synchronization, deletion, Recently Deleted and Optimize Storage; retrieved October 22, 2026."
    },
    {
      "title": "Apple: what iCloud backs up",
      "url": "https://support.apple.com/en-us/108770",
      "note": "Distinguishes synchronized data from device backup; retrieved October 22, 2026."
    },
    {
      "title": "Apple: download iCloud photos and videos",
      "url": "https://support.apple.com/en-us/111762",
      "note": "Unmodified-original exports, destination selection and downloading originals; retrieved October 22, 2026."
    }
  ],
  "related": [
    "edit-photos-without-losing-original",
    "jpeg-heic-png-photo-formats",
    "airdrop-photos-original-data"
  ],
  "published": "2026-10-22",
  "modified": "2026-10-22",
  "image": "blog/pexels-34225009-4k.webp",
  "imageAlt": "Photographer holding a memory card beside a card reader and laptop",
  "imagePosition": "60% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-34225009-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-34225009-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-34225009-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-34225009-4k.webp",
      "width": 3840
    }
  ],
  "imageCredit": {
    "name": "Julio Lopez",
    "url": "https://www.pexels.com/photo/photographer-inserting-sd-card-into-laptop-for-editing-34225009/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "airdrop-photos-original-data",
  "title": "How to AirDrop photos with the original file and edit history",
  "description": "Choose the right Photos sharing options for an editable handoff or a finished picture, then verify what arrived on the receiving device.",
  "summary": "AirDrop is the transfer method. The file format and extra photo information depend on the sharing options you choose.",
  "quickAnswer": "For an editable handoff from iPhone Photos, open Share → Options and enable All Photos Data before using AirDrop. Apple says this includes the original file, edit history and metadata. Use Current when you need to prevent format conversion. If the recipient only needs a finished picture, choose a suitable delivery copy instead of automatically sending extra original data.",
  "sections": [
    {
      "id": "goal",
      "title": "Decide what the recipient actually needs",
      "paragraphs": [
        "A friend posting your finished portrait and a collaborator continuing the edit need different things. The friend may need only a compatible rendered image. The collaborator may need the original source and information that allows supported edits to remain adjustable.",
        "AirDrop alone does not describe which version you chose to send. Start with the source application and its sharing options. Apple’s Photos guide distinguishes the file-format choice from All Photos Data; that distinction is the main reason to inspect Options before transferring.",
        "This guide concerns a Photos-to-Apple-device handoff. It does not promise that another editor, a social network or an Android device will interpret Apple Photos edit history."
      ]
    },
    {
      "id": "options",
      "title": "Choose the option that matches the job",
      "table": {
        "headers": [
          "Photos option",
          "Apple’s documented behavior",
          "Decision"
        ],
        "rows": [
          [
            "All Photos Data",
            "Shares the original with edit history and metadata",
            "Use for an intended editable handoff; review privacy implications."
          ],
          [
            "Current",
            "Prevents a format conversion",
            "The recipient still needs software that understands the format."
          ],
          [
            "Most Compatible",
            "May convert photos to JPEG and videos to MOV",
            "Useful when a compatible delivery format matters more than preserving the original format."
          ],
          [
            "Automatic",
            "Chooses a format for the destination",
            "Verify the received result when format preservation matters."
          ]
        ]
      }
    },
    {
      "id": "send",
      "title": "Prepare and send the selected pictures",
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Open the intended items in Photos.",
            "text": "Select the originals or edits you mean to hand over. Avoid selecting a screenshot or a small saved preview by mistake."
          },
          {
            "title": "Review Share → Options.",
            "text": "Choose the file-format behavior and whether All Photos Data is necessary, then return to the sharing options. Labels can vary by software version."
          },
          {
            "title": "Choose the receiving device deliberately.",
            "text": "Select AirDrop and confirm the recipient. Apple’s setup guidance calls for nearby devices with Wi-Fi and Bluetooth enabled and Personal Hotspot disconnected."
          },
          {
            "title": "Let the recipient accept and finish.",
            "text": "For a first-time or unfamiliar transfer, stay with the recipient until they can locate the received picture and open it. Do not use successful sending as the only check."
          }
        ]
      }
    },
    {
      "id": "verify",
      "title": "Check the handoff in the receiving application",
      "paragraphs": [
        "Ask the recipient to confirm the image’s dimensions, orientation, crop and intended appearance. If preserving the original format mattered, inspect the received file’s format too. If editability mattered, check the actual editing behavior rather than assuming a visible finished picture proves it.",
        "A useful rehearsal is a harmless photo with an obvious crop. Transfer it with the chosen settings and ask the recipient to inspect whether the supported original and edit information are available. This is a suggested test, not a claim that we tested every device or software combination.",
        "For a ProRAW source, Apple separately documents that DNG-compatible applications can open the file but apps without ProRAW support may show it differently. A successful transfer cannot provide capabilities the receiving editor lacks."
      ]
    },
    {
      "id": "privacy",
      "title": "Original information can be more than the visible picture",
      "paragraphs": [
        "All Photos Data includes metadata as well as edit history. Treat that as an intentional information handoff. For a casual public sharing workflow, consider whether the recipient needs those details at all.",
        "If location or other sensitive information is a concern, inspect the relevant controls for your software version and verify the delivered copy. Our location-removal guide addresses that separate task. Do not assume a beautiful final crop hides everything in an original file.",
        "Keep your own source until the recipient confirms what arrived. Once received, later changes in your library should not be treated as a way to recall their independent copy. Send only what you intend them to retain.",
        "The cited Apple guides were checked on October 22, 2026. The unversioned Photos guide currently presents iOS 27; choose the matching version in Apple’s guide when your device shows different controls."
      ]
    }
  ],
  "faq": [
    {
      "question": "Does Current mean All Photos Data is enabled?",
      "answer": "No. Apple lists them as different controls: Current concerns format conversion, while All Photos Data concerns original, edit-history and metadata information."
    },
    {
      "question": "Will an AirDropped photo remain editable in every app?",
      "answer": "No. The receiving software must understand the file and any supplied edit information. Verify the intended workflow before transferring a large or important batch."
    }
  ],
  "sources": [
    {
      "title": "Apple: share photos and videos on iPhone",
      "url": "https://support.apple.com/guide/iphone/share-photos-and-videos-iphf28f17237/ios",
      "note": "Current, Most Compatible and All Photos Data options; iOS 27 guide retrieved October 22, 2026."
    },
    {
      "title": "Apple: use AirDrop on iPhone and iPad",
      "url": "https://support.apple.com/en-us/119857",
      "note": "Device preparation, recipient selection and acceptance; retrieved October 22, 2026."
    },
    {
      "title": "Apple: About Apple ProRAW",
      "url": "https://support.apple.com/en-us/119916",
      "note": "DNG and ProRAW application compatibility; retrieved October 22, 2026."
    }
  ],
  "related": [
    "remove-location-from-iphone-photos",
    "edit-photos-without-losing-original",
    "jpeg-heic-png-photo-formats"
  ],
  "published": "2026-10-22",
  "modified": "2026-10-22",
  "image": "blog/pexels-30861211-4k.webp",
  "imageAlt": "Camera beside a laptop displaying photographs for review",
  "imagePosition": "50% 40%",
  "imageVariants": [
    {
      "src": "blog/pexels-30861211-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-30861211-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-30861211-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-30861211-4k.webp",
      "width": 2560
    }
  ],
  "imageCredit": {
    "name": "Ebahir",
    "url": "https://www.pexels.com/photo/photographer-editing-photos-on-laptop-30861211/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "scan-printed-photos-with-phone",
  "title": "How to scan printed photos with your phone",
  "description": "Digitize a printed photo with PhotoScan, check glare and missing edges, and keep an unedited capture alongside any restored version.",
  "summary": "Turn a physical print into a useful digital copy without losing its edges, written context, or original appearance.",
  "quickAnswer": "Place an undamaged print on a flat, contrasting surface and keep the phone parallel to it. In Google PhotoScan, take the initial picture, then move the on-screen circle over the four dots. Review the completed image for glare, sharpness and cropped edges before moving to the next print. Keep a faithful capture before making a restoration or creative edit.",
  "published": "2026-10-22",
  "modified": "2026-10-22",
  "sections": [
    {
      "id": "protect-print",
      "title": "Check the print before setting up",
      "paragraphs": [
        "This workflow is for ordinary printed photographs that can be handled safely. The Library of Congress recommends a clean, dry workspace and avoiding contact with the image surface. Handle prints by their edges or protective housing. Its digitization guidance cautions against forcing bound material flat or placing glass on originals to flatten them.",
        "If a photograph is stuck to an album page, cracked, flaking or valuable, do not pull it free just to improve a scan. Ask a photograph conservator about safe handling. A convenient phone workflow is not a reason to risk the physical item.",
        "Before starting a family album, choose one unimportant print as a trial. Give it a temporary identifier such as album-02-photo-07. Use the same identifier for any separate picture of the back or an adjacent handwritten caption, so the context stays connected."
      ]
    },
    {
      "id": "capture",
      "title": "Capture with Google PhotoScan",
      "paragraphs": [
        "Google documents PhotoScan as a separate app for printed photos. You can open it through Google Photos under Create, Import from other places, then PhotoScan. Menus may vary by app version.",
        "Keep the phone above the print without tilting it. Match the phone orientation to the print and follow the four-dot capture sequence. Open the processed thumbnail to inspect the crop and adjust corners or rotation.",
        "For PhotoScan specifically, Google recommends flash to help with residual glare and shadows. If glare remains excessive, it suggests moving to a less brightly lit spot. Turning off Glare removal skips the movement sequence but also gives up that correction. These are PhotoScan instructions, not a rule for every scanning app."
      ]
    },
    {
      "id": "review",
      "title": "Review the scan before putting the print away",
      "paragraphs": [
        "Use the physical photograph as your reference. The following review is a suggested quality check, not a claim that this phone method meets an archival scanning standard."
      ],
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Check the whole boundary.",
            "text": "Look for a missing person at an edge, a trimmed date or a border you wanted to preserve. Automatic corner detection should be reviewed, not accepted automatically."
          },
          {
            "title": "Inspect two different details.",
            "text": "Compare a face and a small background feature. If both look soft in the saved file, make another capture before trying sharpening."
          },
          {
            "title": "Look across dark and light areas.",
            "text": "A reflection can be obvious over a dark coat but easy to miss in a pale sky. Move the display view around the image rather than checking only the center."
          },
          {
            "title": "Confirm orientation and context.",
            "text": "Check which way the print belongs and whether a handwritten note refers to this image. Record uncertainty instead of guessing a person, location or date."
          }
        ]
      }
    },
    {
      "id": "keep-record",
      "title": "Separate the capture from the restoration",
      "paragraphs": [
        "Keep the best faithful scan and create an additional copy for edits. For example, album-02-photo-07-capture and album-02-photo-07-restored make the relationship easier to understand than two files both called final.",
        "A black-and-white conversion, repaired scratch or generated facial detail can make a pleasing family keepsake, but it changes the record. If a tool invents detail that was not readable in the print, describe the result as an interpretation rather than recovered evidence.",
        "Copy the capture and its notes into your usual backup workflow. Then open a backed-up file to check that it is readable. A successful thumbnail in a scanning app is not a complete preservation plan."
      ]
    },
    {
      "id": "choose-next",
      "title": "Decide when to try a different capture method",
      "paragraphs": [
        "If repeated scans still lose small faces, inscriptions or textured detail, compare another method before editing harder. A suitably operated flatbed scanner or a professional service may be more appropriate for the intended output; the print’s condition determines what equipment is safe.",
        "For a small family message, a clean phone copy may serve the purpose. For a large reproduction or a valuable collection, decide the required detail and handling method first. Do not discard the original print because a digital version looks acceptable on a phone."
      ]
    }
  ],
  "faq": [
    {
      "question": "Can I scan a photograph without PhotoScan?",
      "answer": "Yes. A camera or another scanning tool can make a digital copy. The four-dot capture and glare instructions above belong to PhotoScan; check another tool’s own controls and inspect its saved result."
    },
    {
      "question": "Should I remove every photo from its album?",
      "answer": "Only when it can be removed safely. Google suggests removing sleeves or albums for capture quality, but an attached or fragile photograph needs handling care first. Leave a resistant print in place and seek appropriate conservation advice."
    },
    {
      "question": "Will scanning repair fading or scratches?",
      "answer": "Capture and restoration are separate tasks. Save a faithful copy first, then make any correction on a separate version. The scan does not guarantee recovery of information missing from the physical photograph."
    }
  ],
  "sources": [
    {
      "title": "Google Photos Help: Scan your photos",
      "url": "https://support.google.com/photos/answer/7177983?hl=en",
      "note": "PhotoScan capture sequence, glare controls and setup advice; retrieved October 22, 2026."
    },
    {
      "title": "Library of Congress: Care, Handling, and Storage of Photographs",
      "url": "https://www.loc.gov/preservation/care/photo",
      "note": "Physical handling and preservation context for prints."
    },
    {
      "title": "Library of Congress: Preservation Guidelines for Digitizing Library Materials",
      "url": "https://www.loc.gov/preservation/care/scan.html",
      "note": "Explains handling risks and limits of flattening fragile items during digitization."
    }
  ],
  "related": [
    "edit-photos-without-losing-original",
    "photo-sharpening-vs-resolution",
    "jpeg-heic-png-photo-formats"
  ],
  "image": "blog/pexels-1203803-4k.webp",
  "imageAlt": "Silver and black camera on a pale background",
  "imagePosition": "50% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-1203803-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-1203803-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-1203803-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-1203803-4k.webp",
      "width": 3840
    }
  ],
  "imageCredit": {
    "name": "Alex Andrews",
    "url": "https://www.pexels.com/photo/black-and-grey-camera-1203803/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "clean-phone-camera-lens",
  "title": "How to clean a phone camera lens when photos look hazy",
  "description": "Use a gentle lens-cleaning routine, compare a repeat photo, and separate smudges from focus problems, accessory interference and camera damage.",
  "summary": "A careful wipe and a controlled repeat picture can help identify an external smudge before you change editing settings.",
  "quickAnswer": "For an ordinary fingerprint or smudge, power down and unplug the phone, then gently wipe the exposed camera glass with a clean, soft microfiber cloth. Avoid pressure, abrasives, compressed air and liquid sprayed onto the phone. Follow your model’s cleaning instructions for stubborn residue. Repeat a photo from the same position afterward to check whether the haze actually changed.",
  "published": "2026-10-22",
  "modified": "2026-10-22",
  "sections": [
    {
      "id": "identify",
      "title": "Check what is covering the camera",
      "paragraphs": [
        "Apple recommends microfiber cleaning for blurry iPhone pictures and removing accessories that may block the camera or flash. Samsung likewise identifies fingerprints and smudges on the camera as a cause of poor image quality. An external mark is worth checking, but softness alone does not prove the lens is dirty.",
        "Look at the camera glass in ordinary room light before wiping. Check for a fingerprint, obvious residue or a case edge crossing the lens. If you use an added lens protector or attachment, follow its maker’s removal guidance rather than prying at the phone’s built-in glass.",
        "Choose a stationary subject with readable detail, such as the lettering on a box. Take a reference photo in decent light from a distance the camera can focus at. Use this same subject after cleaning; comparing two unrelated scenes makes the cause harder to judge."
      ]
    },
    {
      "id": "clean",
      "title": "Use a gentle cleaning sequence",
      "paragraphs": [
        "The following sequence combines the manufacturers’ basic surface-care advice. Consult the instructions for your specific device if the contamination is more than an ordinary smudge."
      ],
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Disconnect and power down.",
            "text": "Remove charging cables and stop using the phone while cleaning. Take off a removable case if it blocks access to the camera area."
          },
          {
            "title": "Check the cloth.",
            "text": "Use clean, soft, lint-free microfiber. If the cloth has visible grit or dirt, replace it before it touches the glass."
          },
          {
            "title": "Wipe lightly.",
            "text": "Gently clear the exposed front and rear camera glass. Do not press harder to chase a mark that stays in the same place."
          },
          {
            "title": "Handle stubborn residue cautiously.",
            "text": "Apple and Samsung allow limited moisture on a cloth in their device-cleaning guidance. Follow the model instructions, keep moisture away from openings, and do not spray the phone or soak the camera area."
          },
          {
            "title": "Inspect before retesting.",
            "text": "Confirm that the surface is clear and dry, then turn the phone on and repeat the reference picture."
          }
        ]
      }
    },
    {
      "id": "avoid",
      "title": "Avoid turning a smudge into a bigger problem",
      "paragraphs": [
        "Apple cautions against abrasives, household cleaners and compressed air; Samsung also says not to use compressed air or apply liquid directly. Disinfecting guidance is a separate set of instructions, not a reason to apply a strong cleaner for a simple fingerprint.",
        "Do not scrape an apparent scratch, insert a tool beside the camera cover or attempt to clean underneath sealed glass. If a persistent mark might be damage or moisture inside the assembly, surface wiping will not establish what needs repair. Stop and use the manufacturer’s support route.",
        "Keep cleaning materials away from the print, screen or other object you were photographing. The phone’s approved cleaning method does not automatically apply to another material."
      ]
    },
    {
      "id": "compare",
      "title": "Read the before-and-after comparison",
      "paragraphs": [
        "Treat your repeat picture as a troubleshooting clue. It is not a laboratory test, and the camera may change its automatic processing between frames."
      ],
      "table": {
        "headers": [
          "Observation",
          "What to try next"
        ],
        "rows": [
          [
            "The same scene looks clearer after a gentle wipe",
            "Keep the new capture; a surface smudge may have contributed."
          ],
          [
            "The background is sharp but the subject is soft",
            "Check focus and camera-to-subject distance instead of wiping repeatedly."
          ],
          [
            "Only moving objects are streaked",
            "Try a still subject or more light; lens cleaning does not stop movement."
          ],
          [
            "One camera stays poor while another looks normal",
            "Record which camera fails and follow device troubleshooting or service advice."
          ]
        ]
      }
    },
    {
      "id": "keep-it-simple",
      "title": "Build a small pre-photo check",
      "paragraphs": [
        "Before a picture that matters, glance at the exposed glass, check the case position and make one sample frame. Carrying a clean cloth gives you a repeatable option when sunscreen or a fingerprint reaches the camera.",
        "If the problem continues, save an example and note the camera, lighting and accessory used. Apple’s troubleshooting sequence includes restarting, updating and testing both front and rear cameras before service. Follow your device’s own support instructions; more sharpening cannot explain a persistent hardware problem."
      ]
    }
  ],
  "faq": [
    {
      "question": "Can I use my shirt to wipe the lens?",
      "answer": "A clean microfiber lens cloth is the more controlled choice because you can keep it separate from grit and pocket residue. The manufacturers cited here recommend soft, lint-free cloths; avoid rubbing with an unknown dirty fabric."
    },
    {
      "question": "Will cleaning remove lens flare completely?",
      "answer": "No. A clean exterior removes one possible contributor to poor image quality, but bright-light reflections and other capture issues can remain. Compare the same scene and change the camera-to-light angle separately."
    },
    {
      "question": "Does this work for every Android phone?",
      "answer": "The gentle microfiber approach is documented by Samsung, but liquid and material instructions should come from your phone manufacturer. Do not assume all coatings, accessories and devices share the same cleaning guidance."
    }
  ],
  "sources": [
    {
      "title": "Apple: If the camera or flash is not working",
      "url": "https://support.apple.com/en-am/102514",
      "note": "Camera troubleshooting includes microfiber cleaning, accessory removal and testing front and rear cameras."
    },
    {
      "title": "Apple: Cleaning your iPhone",
      "url": "https://support.apple.com/en-gb/108765",
      "note": "Device cleaning, moisture and abrasive-product restrictions; retrieved October 22, 2026."
    },
    {
      "title": "Samsung: Keep your Galaxy phone clean",
      "url": "https://www.samsung.com/us/support/answer/ANS10003416/",
      "note": "Gentle microfiber cleaning, limited cloth moisture and no direct liquid application."
    },
    {
      "title": "Samsung: Fix blurry or poor photo and video quality",
      "url": "https://www.samsung.com/us/support/troubleshoot/TSG10004888/",
      "note": "Distinguishes movement, focusing distance and lens contamination as possible causes."
    }
  ],
  "related": [
    "why-night-phone-photos-are-blurry",
    "photo-sharpening-vs-resolution",
    "why-saved-photos-lose-quality"
  ],
  "image": "blog/pexels-30753213-4k.webp",
  "imageAlt": "Compact camera and accessories arranged on a tabletop",
  "imagePosition": "50% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-30753213-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-30753213-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-30753213-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-30753213-4k.webp",
      "width": 2880
    }
  ],
  "imageCredit": {
    "name": "Thanh Thiện Tô",
    "url": "https://www.pexels.com/photo/vintage-camera-with-assorted-accessories-flat-lay-30753213/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "remove-red-eye-from-photos",
  "title": "How to remove red-eye from photos without flattening the eyes",
  "description": "Understand flash red-eye, use a targeted correction, and check pupil size and remaining reflections before saving a natural-looking portrait.",
  "summary": "Correct a flash reflection locally while keeping the shape and expression that make the eyes recognizable.",
  "quickAnswer": "Use a dedicated red-eye correction on a copy of the photograph, targeting the red pupil rather than darkening the whole eye. Start with automatic correction if your editor offers it, then adjust the correction size or strength where supported. Compare both eyes at close view and normal portrait size. A red-eye tool is for a flash artifact, not for diagnosing an eye’s appearance.",
  "published": "2026-10-22",
  "modified": "2026-10-22",
  "sections": [
    {
      "id": "cause",
      "title": "Why flash can make pupils look red",
      "paragraphs": [
        "Adobe explains red-eye as flash light reflecting from the retina, especially in low-light settings. It is a different problem from a warm color cast across the entire face. Reducing global saturation to fix two pupils can remove useful color from the rest of the portrait.",
        "First inspect the unedited photo. Is the unwanted red confined to the pupil, or is a colored light affecting the face, clothing and background together? Use a red-eye tool for the former. For the latter, review the lighting and color balance before treating the eyes as an isolated defect.",
        "This guide concerns a photographic flash effect. It does not establish the cause of an unusual eye appearance outside that context, and retouching a photograph is not a health assessment."
      ]
    },
    {
      "id": "apple",
      "title": "Example: red-eye correction in Photos on Mac",
      "paragraphs": [
        "Apple documents a dedicated correction in Photos on Mac: open a photo, choose Edit, then Adjust and Red-Eye. Try Auto first. For a remaining red pupil, adjust the Size control to match the red area and click that pupil. Repeat where needed.",
        "These are Mac controls, not a promise that the same menu appears on iPhone or in another editor. Apple also notes that this tool cannot remove red-eye from video and is not intended for the differently colored flash reflections seen in animal eyes.",
        "For a group picture, review each face rather than assuming an automatic pass found everyone. Make a simple left-to-right check across the frame. Keep the original visible nearby so a small correction does not become an unintended change to the whole expression."
      ]
    },
    {
      "id": "photoshop",
      "title": "Example: correction size and darkness in Photoshop",
      "paragraphs": [
        "Adobe’s Photoshop instructions use the Red Eye tool with Pupil Size and Darken Amount controls. Apply the tool to the affected pupil and adjust those settings if the corrected area is too broad or too dark. This is a documented Photoshop workflow; availability in other software varies.",
        "Treat darkness as a restraint control. A pupil that becomes a solid oversized dot may distract more than a subtle residual reflection. Undo an unconvincing attempt and apply a smaller correction instead of stacking repeated corrections on top.",
        "If the source is a tiny compressed group shot, there may not be enough visible detail for precise work. Try to obtain the original file before spending time painting at high magnification."
      ]
    },
    {
      "id": "review",
      "title": "Check the correction at two sizes",
      "paragraphs": [
        "The following checks are practical editorial judgments for the finished portrait. They are not a claim that a tool can reconstruct eye detail hidden by the flash."
      ],
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Inspect the boundary.",
            "text": "At a close view, check whether the correction spills onto the iris, eyelid or lashes. The treated shape should follow the affected area."
          },
          {
            "title": "Compare the two eyes.",
            "text": "Different lighting angles can make their reflections unequal. Do not force identical dark circles onto both eyes just for symmetry."
          },
          {
            "title": "Keep plausible highlights.",
            "text": "Look for a small natural reflection that gives the eye shape. If the correction removes every tonal difference, reduce it or use another frame."
          },
          {
            "title": "Return to portrait size.",
            "text": "Judge the expression at the size people will actually see. Avoid accepting an edit solely because it looks neat while heavily zoomed in."
          },
          {
            "title": "Reopen the export.",
            "text": "Check the saved copy rather than relying only on the editor preview, and retain the unedited photograph."
          }
        ]
      }
    },
    {
      "id": "prevent",
      "title": "Reduce the chance in the next photograph",
      "paragraphs": [
        "Adobe recommends a camera’s red-eye reduction feature or positioning a separate flash farther from the lens. Those options depend on the equipment; a phone’s built-in flash cannot simply be moved independently.",
        "For a phone portrait, compare a comfortable position with more available light and a flash-off frame when appropriate. Check whether the expression is clear and motion is controlled before deciding that flash is necessary. Do not trade a readable flash portrait for a blurred no-flash picture without reviewing the result.",
        "If another frame already has a good expression and no distracting pupil reflection, selecting it may be simpler than aggressive repair. Choose the photograph first and the correction second."
      ]
    }
  ],
  "faq": [
    {
      "question": "Will lowering saturation remove red-eye?",
      "answer": "It can reduce the red, but a global adjustment also changes the rest of the photograph. A local red-eye correction gives you a more specific area to review."
    },
    {
      "question": "Why did the corrected pupil turn too black?",
      "answer": "The correction may be too strong or cover too much area. Undo it, reduce the size or darkness where your editor supports those controls, and compare the full portrait again."
    },
    {
      "question": "Can I use the same tool for a pet’s green or yellow eyes?",
      "answer": "Not necessarily. Apple explicitly says its Mac red-eye tool does not handle those animal-eye reflections. Use a tool documented for that situation and check its result separately."
    }
  ],
  "sources": [
    {
      "title": "Adobe: Remove red eye in flash photos",
      "url": "https://helpx.adobe.com/in/photoshop/desktop/repair-retouch/clean-restore-images/remove-red-eye-in-flash-photos.html",
      "note": "Explains the flash reflection and documents Pupil Size and Darken Amount."
    },
    {
      "title": "Apple: Remove red-eye from photos on Mac",
      "url": "https://support.apple.com/en-ie/guide/photos/phte0ee9e101/mac",
      "note": "Auto and manual red-eye correction, with video and animal-eye limitations; retrieved October 22, 2026."
    }
  ],
  "related": [
    "direct-flash-portrait-tips",
    "remove-color-cast-from-photos",
    "edit-photos-without-losing-original"
  ],
  "image": "blog/pexels-19723159-4k.webp",
  "imageAlt": "Woman with her hands near her face, brightly lit against a dark background",
  "imagePosition": "50% 45%",
  "imageVariants": [
    {
      "src": "blog/pexels-19723159-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-19723159-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-19723159-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-19723159-4k.webp",
      "width": 2560
    }
  ],
  "imageCredit": {
    "name": "Tolga Aslantürk",
    "url": "https://www.pexels.com/photo/beautiful-brunette-woman-in-flashlight-19723159/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "fix-perspective-in-phone-photos",
  "title": "How to fix leaning buildings and perspective in phone photos",
  "description": "Separate a tilted horizon from converging building lines, apply restrained perspective correction, and check cropping and stretched shapes.",
  "summary": "A building that leans inward needs a different adjustment from a horizon that slopes. Diagnose the geometry before moving sliders.",
  "quickAnswer": "Use rotation for an overall tilted frame, and a vertical or guided perspective adjustment for building edges that converge because the camera points upward or downward. Start with a small correction, compare believable proportions, and crop any empty borders afterward. Keep the original: straightening perspective can remove image area and change the appearance of objects near the edges.",
  "published": "2026-10-22",
  "modified": "2026-10-22",
  "sections": [
    {
      "id": "diagnose",
      "title": "Decide which geometry is wrong",
      "paragraphs": [
        "Choose a reference that should actually be level or vertical. A sloping road, an angled roof or a building seen around a corner may legitimately contain diagonal lines. Making every visible edge straight would misrepresent the scene.",
        "Adobe’s Lightroom mobile guide distinguishes Level, Vertical, Full and Guided corrections. This is useful because simple rotation and perspective correction solve different problems."
      ],
      "table": {
        "headers": [
          "What you see",
          "Starting adjustment",
          "What to watch"
        ],
        "rows": [
          [
            "The whole scene leans the same way",
            "Rotate or straighten",
            "Use a believable horizontal or vertical reference."
          ],
          [
            "Upright walls narrow toward the top",
            "Vertical perspective",
            "Check that people and windows do not become stretched."
          ],
          [
            "The subject is skewed in more than one direction",
            "Guided correction",
            "Use real architectural reference lines."
          ],
          [
            "A straight edge looks bowed",
            "Lens-distortion control, if available",
            "Do not expect rotation alone to remove curvature."
          ]
        ]
      }
    },
    {
      "id": "capture",
      "title": "Leave room for the correction when shooting",
      "paragraphs": [
        "If you can retake the picture, compare a more level phone position before committing to a large edit. For a building, stepping farther away may let you include more of the structure without pointing the camera as steeply upward. Only change position where it is safe and permitted.",
        "Leave some space around important edges when you anticipate correction. A doorway that already touches the edge has little room to survive a later crop. This is a framing suggestion, not a fixed percentage: check the actual picture and how much surrounding space you can afford.",
        "For interiors, choose a small number of useful anchors, such as a door frame and a wall corner. Furniture can be angled or irregular, so it is often a poor guide for deciding whether the room itself is upright."
      ]
    },
    {
      "id": "adjust",
      "title": "Use a documented geometry control",
      "paragraphs": [
        "In Lightroom on mobile, Adobe places Geometry inside the Crop and geometry panel. Try Vertical for leaning uprights or Guided to indicate reference lines yourself. Compare the automatic result with the original rather than treating it as an objective measurement of the room.",
        "Adobe’s Guided Upright guidance describes drawing reference guides for the correction. Follow the current interface in your app version; feature access can vary by version and plan. Other editors may call similar controls Perspective, Transform or Keystone.",
        "Begin with the smallest adjustment that solves the distracting lean. Then inspect the center and both outer edges. A convincing doorway with an oddly widened chair beside it is a reason to reduce the correction or choose a less ambitious crop."
      ]
    },
    {
      "id": "crop",
      "title": "Check the crop and proportions together",
      "paragraphs": [
        "Adobe warns that geometric corrections can leave empty areas at the image boundary; Constrain Crop can crop those away. Cropping is not free extra image content. Make sure the missing border does not contain a roof detail, hand or sign that matters.",
        "Imagine an interior photograph with a person beside a door. A fully upright door is not automatically worth an elongated face. Compare three versions: the original, a restrained correction and the strongest correction you would consider. Pick the version that serves the photograph’s purpose, not the one with the straightest possible grid.",
        "Inspect circular objects, repeating windows and people after the edit. This comparison is a visual plausibility check rather than an architectural survey. A single photo does not provide reliable dimensions simply because its lines have been corrected."
      ]
    },
    {
      "id": "intent",
      "title": "Keep perspective when it is part of the picture",
      "paragraphs": [
        "A view looking up between tall buildings can use convergence deliberately. If that sense of height is the point, correcting it completely may weaken the image. The useful question is whether the geometry distracts from the subject or contributes to it.",
        "Keep an editable version where the software allows, and export a separate delivery copy. Reopen that copy to inspect the final edges. If too much of the scene has vanished, return to the original or retake with more surrounding space instead of repeatedly stretching the export."
      ]
    }
  ],
  "faq": [
    {
      "question": "Can cropping alone fix a leaning building?",
      "answer": "Cropping changes the visible boundary. A rotation can correct tilt, but converging uprights usually require a perspective transformation. Check which problem you have before choosing the tool."
    },
    {
      "question": "Why did blank triangles appear around the photo?",
      "answer": "The transformation can move image edges away from the original rectangular boundary. Crop those empty areas, or reduce the adjustment if the resulting crop removes too much."
    },
    {
      "question": "Should every building photo have parallel verticals?",
      "answer": "No. Convergence can communicate height or viewpoint intentionally. Choose a correction based on the photograph’s purpose and believable proportions rather than forcing a universal rule."
    }
  ],
  "sources": [
    {
      "title": "Adobe: Fix geometric perspective in Lightroom on mobile",
      "url": "https://helpx.adobe.com/lightroom/mobile/crop-and-transform/fix-geometric-perspective-in-lightroom-on-mobile.html",
      "note": "Documents Geometry modes and cropping after perspective correction."
    },
    {
      "title": "Adobe: Correct perspective with Guided Upright",
      "url": "https://helpx.adobe.com/lightroom/mobile/crop-and-transform/correct-perspective-with-guided-upright.html",
      "note": "Guided reference-line correction and crop limitations."
    },
    {
      "title": "Adobe: Straighten, flip, and rotate photos",
      "url": "https://helpx.adobe.com/lightroom/mobile/crop-and-transform/straighten-flip-and-rotate-photos.html",
      "note": "Distinguishes basic orientation controls from geometry correction; retrieved October 22, 2026."
    }
  ],
  "related": [
    "how-to-crop-portrait-photos",
    "choose-portrait-background",
    "edit-photos-without-losing-original"
  ],
  "image": "blog/pexels-31075395-4k.webp",
  "imageAlt": "Reflective glass buildings viewed from below",
  "imagePosition": "50% 50%",
  "imageVariants": [
    {
      "src": "blog/pexels-31075395-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-31075395-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-31075395-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-31075395-4k.webp",
      "width": 2880
    }
  ],
  "imageCredit": {
    "name": "Tom Schönmann",
    "url": "https://www.pexels.com/photo/modern-urban-architecture-with-glass-facades-31075395/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "intentional-motion-blur-photography",
  "title": "How to make intentional motion blur look deliberate",
  "description": "Choose between panning and a stationary-camera blur, plan a recognizable subject, and compare frames without relying on a universal shutter speed.",
  "summary": "Give the blur a job: show movement while retaining enough structure for the viewer to understand the photograph.",
  "quickAnswer": "Decide what should stay readable before slowing the exposure. For panning, track a moving subject smoothly so some of it remains recognizable while the background streaks. For a stationary-camera effect, support the camera and let moving subjects blur through a stable scene. Review several attempts; a slow shutter alone does not make movement look intentional.",
  "published": "2026-10-22",
  "modified": "2026-10-22",
  "sections": [
    {
      "id": "choose",
      "title": "Choose which part should move",
      "paragraphs": [
        "Nikon describes panning as following a subject during a relatively slow exposure. The tracking can leave part of the subject clearer while the background becomes blurred. Holding the camera still produces a different relationship: fixed surroundings can remain readable while moving elements smear.",
        "Choose one relationship before taking the picture. A person moving past a quiet wall suggests panning. People moving through a recognizable station interior may suit a fixed viewpoint. These are suggested compositions, not tests or promises of particular results.",
        "Pick an anchor detail for judging the result. It might be the outline of a cyclist’s torso, a seated person surrounded by moving commuters, or the shape of a building behind light trails. An abstract image can work without a sharp anchor, but it asks the viewer to read color and movement instead of a literal subject."
      ]
    },
    {
      "id": "controls",
      "title": "Find out what your camera can control",
      "paragraphs": [
        "A camera or app with shutter-speed control gives you a direct way to vary movement during capture. Automatic phone processing may choose or combine exposures in ways you cannot control, so do not assume a dedicated-camera recipe will transfer unchanged.",
        "Nikon’s panning guide discusses starting around 1/30 or 1/20 second, then adapting to subject speed and the desired effect. Those values are practice starting points, not required settings. If the whole subject disappears into streaks, try a shorter exposure or a slower, easier-to-follow subject.",
        "If your phone does not expose a manual shutter control, start by learning what its documented motion or long-exposure mode actually does. A mode name alone does not establish that it records movement in the same way as a single long exposure."
      ]
    },
    {
      "id": "pan",
      "title": "Practice a smooth pan on an easy subject",
      "paragraphs": [
        "Choose a predictable moving subject in a safe open space, with permission if you are directing someone. Stay out of traffic and away from an active path; the photograph does not justify a risky position."
      ],
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Set the framing before the pass.",
            "text": "Allow room for the subject to move through the frame. Choose a background whose streaks will add shape instead of a distracting bright block."
          },
          {
            "title": "Begin tracking early.",
            "text": "Nikon recommends moving with the subject before pressing the shutter and continuing afterward. Avoid a sudden stop at the moment of capture."
          },
          {
            "title": "Review a short series.",
            "text": "Compare the same anchor detail in each frame. Keep the ones with readable subject structure, not simply the longest streaks."
          },
          {
            "title": "Change one variable.",
            "text": "Try a different exposure time, easier subject speed or another background. Keep the other choices similar so you can see what changed."
          }
        ]
      }
    },
    {
      "id": "stationary",
      "title": "Try a stationary viewpoint for a different effect",
      "paragraphs": [
        "For a fixed-camera image, use a secure support and compose the unmoving scene first. Decide where a person or other moving subject should cross it. Nikon’s motion guide explains how long exposures can record moving lights while other moving objects are less visible.",
        "As a simple practice idea, photograph someone walking through a room while the camera remains securely supported. Compare a shorter and a longer capture if your equipment allows. Judge whether the room still reads clearly and the person’s movement contributes something understandable.",
        "This is a proposed exercise. The available light, clothing, movement and camera processing will determine the result. Do not expect a specific amount of blur from a mode label or a copied exposure time."
      ]
    },
    {
      "id": "select",
      "title": "Select the frame before adding effects",
      "paragraphs": [
        "View the candidates as small photographs first. Can you tell what is moving and why it matters? Then look closer for an anchor detail, distracting doubled features or streaks crossing an important face.",
        "If a portrait was meant to show a clear expression and that expression is unreadable, calling the blur artistic does not recover it. Choose another frame for that purpose. Keep an intentionally blurred version when its movement is the story.",
        "Apply any color or grain treatment only after selecting the frame. A strong filter can make a weak candidate more dramatic without making its subject easier to understand. Save the capture separately so you can compare the movement without the styling."
      ]
    }
  ],
  "faq": [
    {
      "question": "Is panning the same as camera shake?",
      "answer": "Both involve camera movement, but panning deliberately follows a subject through its path. Uncontrolled movement may smear every part of the frame without that subject-background relationship."
    },
    {
      "question": "What shutter speed always works?",
      "answer": "There is no universal value. Subject speed, distance, tracking and the desired result all matter. Treat a suggested starting speed as an experiment and review actual frames."
    },
    {
      "question": "Can an editor add the effect afterward?",
      "answer": "A blur effect can create a stylized interpretation, but it does not document the subject’s actual movement during capture. Keep that difference clear when the photograph is intended as a record."
    }
  ],
  "sources": [
    {
      "title": "Nikon: Capturing or Freezing Motion in Photos",
      "url": "https://www.nikonusa.com/learn-and-explore/c/tips-and-techniques/capturing-or-freezing-motion-in-photos",
      "note": "Explains moving-subject blur, panning and long-exposure light trails."
    },
    {
      "title": "Nikon: 10 Tips for Better Camera Panning",
      "url": "https://www.nikonusa.com/learn-and-explore/c/tips-and-techniques/10-tips-for-better-camera-panning",
      "note": "Documents adaptable shutter choices, following through and repeated practice; retrieved October 22, 2026."
    }
  ],
  "related": [
    "why-night-phone-photos-are-blurry",
    "photo-noise-vs-film-grain",
    "self-timer-portraits-with-phone"
  ],
  "image": "blog/pexels-29894331-4k.webp",
  "imageAlt": "Portrait beside glowing turquoise lights at night",
  "imagePosition": "50% 45%",
  "imageVariants": [
    {
      "src": "blog/pexels-29894331-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-29894331-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-29894331-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-29894331-4k.webp",
      "width": 2560
    }
  ],
  "imageCredit": {
    "name": "Everton Silva",
    "url": "https://www.pexels.com/photo/portrait-of-woman-with-neon-lights-at-night-29894331/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
{
  "slug": "selective-color-photo-effect",
  "title": "How to make a selective color photo with one colored subject",
  "description": "Keep one subject in color against a monochrome scene using an editable mask, then inspect shared colors, edges and skin for unwanted changes.",
  "summary": "Make a color accent deliberate by choosing what should stay colored and controlling where the monochrome edit applies.",
  "quickAnswer": "Create a monochrome adjustment on a copy, then mask that adjustment away from the subject you want to keep in color. Review the selection edges and similar colors elsewhere in the image before export. A color-based selection can help, but it is not the same as choosing one object. Photoshop’s tool named Selective Color is a separate color-adjustment feature.",
  "published": "2026-10-22",
  "modified": "2026-10-22",
  "sections": [
    {
      "id": "choose",
      "title": "Decide whether you mean one hue or one object",
      "paragraphs": [
        "A red umbrella and a red sign can share a hue while telling different stories. If the umbrella alone should attract attention, a global color selection may keep both. Decide whether the effect should preserve a color everywhere or isolate one particular subject.",
        "Try a simple photograph first: one clearly outlined object against a relatively uncluttered background. Fine hair, transparent fabric, reflections and several overlapping objects make the edge decisions more involved. This is a practical starting choice, not a limitation shared by every editing tool.",
        "Before editing, view the whole picture briefly in monochrome. If the important object disappears into the background in tone, choose whether that stronger separation through color is the point. The effect works best when the accent has a clear role in the composition."
      ]
    },
    {
      "id": "method",
      "title": "Build an editable monochrome adjustment",
      "paragraphs": [
        "Adobe documents a Hue/Saturation adjustment layer with Saturation set to -100 as one way to remove color while preserving the underlying image. Using an adjustment layer gives you a place to control where that change is visible.",
        "Add or use the adjustment’s mask. Adobe describes layer-mask behavior as white revealing an adjustment, black hiding it and gray applying it partially. With a white mask on the monochrome adjustment, painting black over the chosen object reveals the original color beneath.",
        "These are Photoshop concepts and controls. Another editor may offer a color-splash brush, a subject mask or a local saturation tool instead. Check that its adjustments can be revised before applying them to the only copy of a photograph."
      ]
    },
    {
      "id": "edges",
      "title": "Work from the center toward the edges",
      "paragraphs": [
        "Use the image’s structure to make your mask easier to review. The following order is a proposed workflow for an editable mask, not a claim that an automatic selection will always succeed."
      ],
      "list": {
        "ordered": true,
        "items": [
          {
            "title": "Protect the main interior.",
            "text": "Start inside the subject, away from the boundary, so the main color area is easy to identify. Confirm that you selected the mask rather than painting on the photograph."
          },
          {
            "title": "Inspect the border close up.",
            "text": "Move around the edge in sections. Look for an uncolored strip inside the object or an accidental colored fringe outside it."
          },
          {
            "title": "Check holes and overlaps.",
            "text": "The space inside a handle, between fingers or through a loose strap may belong to the background. Do not assume the entire outer outline should stay colored."
          },
          {
            "title": "Review partial edges.",
            "text": "A translucent edge may need a gradual transition rather than a hard boundary. Compare with the original before choosing how much color to preserve."
          },
          {
            "title": "Zoom out.",
            "text": "Check whether the subject still looks integrated into the scene. A technically precise mask can still look too cut out for the intended style."
          }
        ]
      }
    },
    {
      "id": "color-range",
      "title": "Use color selection as a starting point",
      "paragraphs": [
        "Adobe’s mask documentation also describes sampling a color range and changing how many similar colors are included. This can speed up an initial mask when the target is distinctive, but it still needs a spatial review.",
        "Imagine keeping a red scarf while removing the rest of the color from a portrait. A color selection may also affect lips, skin or a distant sign. Inspect those areas explicitly instead of assuming the tool understands the scarf as an object.",
        "Do not confuse this effect with Photoshop’s adjustment called Selective Color. Adobe documents that control as changing color components within color families. It can alter a range of colors, but its name does not mean that it automatically creates a monochrome picture with one colored object."
      ]
    },
    {
      "id": "finish",
      "title": "Judge the accent at the final viewing size",
      "paragraphs": [
        "Compare the original, the all-monochrome version and the selective version. Does the colored object deserve the attention it now receives? If a small accessory distracts from a person’s expression, consider preserving less color or choosing another photograph.",
        "Check skin carefully in portraits. A few colored fragments around the lips or fingers can look accidental if the rest of the person is gray. Choose a consistent treatment rather than leaving whatever the first selection happened to produce.",
        "Keep an editable file with its mask and export a separate sharing copy. Reopen the export at ordinary viewing size and check the outline once more. If a later crop changes what matters in the scene, return to the mask rather than repeatedly repainting a flattened copy."
      ]
    }
  ],
  "faq": [
    {
      "question": "Do I need Photoshop for this effect?",
      "answer": "No. The method requires a way to control color locally, such as a mask or a color-splash brush. The named controls here are verified Photoshop examples; another app’s available tools and export behavior may differ."
    },
    {
      "question": "Why did several red objects stay colored?",
      "answer": "A color-based selection groups similar colors, even when they belong to different objects. Refine the mask spatially if only one object should remain colored."
    },
    {
      "question": "Should the remaining color be highly saturated?",
      "answer": "Not necessarily. Removing surrounding color already changes the emphasis. Compare the original intensity before increasing saturation, especially when the chosen area includes skin."
    }
  ],
  "sources": [
    {
      "title": "Adobe: Apply special color effects to images",
      "url": "https://helpx.adobe.com/photoshop/desktop/adjust-color/color-effects-techniques/apply-special-color-effects-to-images.html",
      "note": "Documents nondestructive desaturation using a Hue/Saturation adjustment layer."
    },
    {
      "title": "Adobe: Use layer masks for targeted adjustments",
      "url": "https://helpx.adobe.com/photoshop/desktop/create-manage-layers/color-adjustment-fill-layers/use-layer-masks-to-target-adjustment-or-fill-layers.html",
      "note": "Mask visibility behavior and color-range selections."
    },
    {
      "title": "Adobe: Make selective color adjustments",
      "url": "https://helpx.adobe.com/photoshop/desktop/adjust-color/selective-color-adjustments/make-selective-color-adjustments.html",
      "note": "Defines the distinct Photoshop Selective Color adjustment, preventing a tool-name ambiguity."
    }
  ],
  "related": [
    "black-and-white-portrait-editing",
    "vibrance-vs-saturation-portraits",
    "edit-photos-without-losing-original"
  ],
  "image": "blog/pexels-31544926-4k.webp",
  "imageAlt": "Woman holding flowers against a pink studio backdrop",
  "imagePosition": "50% 40%",
  "imageVariants": [
    {
      "src": "blog/pexels-31544926-480.webp",
      "width": 480
    },
    {
      "src": "blog/pexels-31544926-960.webp",
      "width": 960
    },
    {
      "src": "blog/pexels-31544926-1600.webp",
      "width": 1600
    },
    {
      "src": "blog/pexels-31544926-4k.webp",
      "width": 3840
    }
  ],
  "imageCredit": {
    "name": "frank minjarez",
    "url": "https://www.pexels.com/photo/young-woman-holding-bouquet-on-pink-background-31544926/"
  },
  "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
},
  {
    "slug": "remove-location-from-iphone-photos",
    "title": "How to remove location data from iPhone photos before sharing",
    "description": "Choose between hiding location for a share, removing a photo's saved location, and stopping future geotags. Check the copy you actually send.",
    "summary": "A photo's location can travel separately from what you see in the picture. Choose the right control, then review the version you plan to share.",
    "published": "2026-10-21",
    "modified": "2026-10-21",
    "quickAnswer": "For a share from iPhone Photos, select the picture, tap Share, open Options, and switch Location off before choosing the destination. This is different from changing the location attached to the library photo or disabling location access for future pictures. Review the outgoing copy and the visible scene as separate checks.",
    "sections": [
      {
        "id": "choose-control",
        "title": "Choose what you want to change",
        "paragraphs": [
          "Apple documents separate controls for a photo's saved location, location in a share, and Camera's access to Location Services. Pick the one that matches your goal. You do not have to remove a useful travel memory from your own library just to leave its coordinates out of one message."
        ],
        "table": {
          "headers": [
            "Your goal",
            "Where to start",
            "What to check afterward"
          ],
          "rows": [
            [
              "Share a picture without its location",
              "Photos → Share → Options → Location off",
              "The copy delivered through that sharing route"
            ],
            [
              "Remove a library photo's location",
              "Photo's More menu → Adjust Location → No Location",
              "The photo's information panel"
            ],
            [
              "Stop Camera recording future locations",
              "Settings → Privacy & Security → Location Services → Camera → Never",
              "A new test picture, not an old one"
            ]
          ]
        }
      },
      {
        "id": "share",
        "title": "Turn off location for the share you are making",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Select the intended pictures in Photos.",
              "text": "Start from the library so you can review the outgoing options before picking a destination."
            },
            {
              "title": "Open Share, then Options.",
              "text": "Switch Location off and tap Done. Apple's sharing guide documents this control separately from file-format choices."
            },
            {
              "title": "Choose how to send the pictures.",
              "text": "Use the method you intended, such as Messages or Mail. Do not assume a different app's upload picker applies the same Photos share options."
            },
            {
              "title": "Avoid sending extra original data unintentionally.",
              "text": "Apple's All Photos Data option shares the original with edit history and metadata through supported methods. Leave it off when that extra information is not part of what you intend to send."
            }
          ]
        },
        "paragraphs": [
          "These share-sheet paths follow Apple's iOS 26 guide. Menu labels can differ on other versions. If Location is absent, review the saved-location controls below and check your version's documentation before assuming the outgoing file has no location."
        ]
      },
      {
        "id": "library-and-camera",
        "title": "Change a saved location or future capture settings",
        "paragraphs": [
          "For an existing picture, open it in Photos and use the More menu to find Adjust Location, then choose No Location. Some iOS versions place this under Adjust Info. To inspect the result, swipe up on the picture or open its Info panel.",
          "To stop Apple's Camera app collecting location for future captures, set its Location Services permission to Never. That setting does not retroactively remove locations from old pictures. A different camera app has its own permissions; check it separately if you use one."
        ]
      },
      {
        "id": "verify-copy",
        "title": "Use a harmless practice picture to check your workflow",
        "paragraphs": [
          "Before relying on a sharing routine for a sensitive picture, try it with an unimportant photo. Send it only to a destination you control using the same route you will use later. Download or save the delivered file and inspect that file's information, rather than reopening the original beside it.",
          "Write down which route you checked: for example, Photos share sheet to email, followed by saving the attachment. An app update, a different export option, or selecting the original again can change the workflow. One successful check is evidence about that copy, not a guarantee about every future upload.",
          "If the receiving app does not expose enough information to inspect location metadata, treat the result as unverified. Do not upload a private image to an unfamiliar online checker just to find out. Changing your library today also does not recall independent copies someone already saved."
        ]
      },
      {
        "id": "visible-clues",
        "title": "Review the scene and caption too",
        "paragraphs": [
          "A location toggle changes data associated with the photo; it does not erase what the camera saw. Before posting, make a separate visual pass. These are suggested review questions, not a claim that every location can be hidden."
        ],
        "list": {
          "items": [
            {
              "text": "Can a street sign, house number, school name, or distinctive landmark identify the place?"
            },
            {
              "text": "Does a window or mirror reveal a detail you missed in the main subject?"
            },
            {
              "text": "Does the post's caption, location tag, or surrounding story give away the information you meant to omit?"
            },
            {
              "text": "Would a tighter crop or a different photograph communicate the same moment with less unwanted context?"
            }
          ]
        }
      }
    ],
    "faq": [
      {
        "question": "Does switching Location off remove every kind of metadata?",
        "answer": "No. Location is one category. Apple's sharing guide also describes date, time, device information, and captions. Do not treat the Location switch as a complete metadata scrubber."
      },
      {
        "question": "Will turning off Camera location change my older photos?",
        "answer": "No. Review older pictures separately and use the saved-location controls when needed."
      },
      {
        "question": "Do these steps apply to Android too?",
        "answer": "These menu paths are for Apple's Camera and Photos on iPhone. For Android or another photo app, use that app's current documentation and verify a delivered copy; the names and behavior may differ."
      }
    ],
    "sources": [
      {
        "title": "Apple: Manage location metadata in Photos",
        "url": "https://support.apple.com/en-ie/guide/personal-safety/ips0d7a5df82/web",
        "note": "Documents saved-location removal and Camera location permissions. Menu grouping can vary by software version."
      },
      {
        "title": "Apple: Share photos and videos on iPhone (iOS 26)",
        "url": "https://support.apple.com/guide/iphone/share-photos-and-videos-iphf28f17237/26/ios/26",
        "note": "Explains Location and All Photos Data sharing options. The practice-copy and visual review checklists are editorial guidance."
      },
      {
        "title": "Apple: See photo and video information on iPhone",
        "url": "https://support.apple.com/guide/iphone/see-photo-and-video-information-iph0edb9c18f/27/ios/27",
        "note": "Describes inspecting stored photo information and adjusting its location."
      }
    ],
    "related": [
      "edit-photos-without-losing-original",
      "how-to-crop-portrait-photos",
      "why-saved-photos-lose-quality"
    ],
    "image": "blog/pexels-4429463-4k.webp",
    "imageAlt": "Passenger holding a smartphone beside a car window",
    "imagePosition": "60% 45%",
    "imageVariants": [
      {
        "src": "blog/pexels-4429463-480.webp",
        "width": 480
      },
      {
        "src": "blog/pexels-4429463-960.webp",
        "width": 960
      },
      {
        "src": "blog/pexels-4429463-1600.webp",
        "width": 1600
      },
      {
        "src": "blog/pexels-4429463-4k.webp",
        "width": 3840
      }
    ],
    "imageCredit": {
      "name": "Ketut Subiyanto",
      "url": "https://www.pexels.com/photo/anonymous-female-tourist-taking-photo-on-smartphone-sitting-in-car-4429463/"
    },
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
  },
  {
    "slug": "why-iphone-selfies-flip",
    "title": "Why iPhone selfies flip and how to keep the mirrored view",
    "description": "Make saved iPhone selfies match the front-camera preview, flip an existing picture, and distinguish a reversed image from perspective changes.",
    "summary": "If the saved selfie looks reversed, check mirroring before changing your pose. A quick lettering test makes the difference easy to spot.",
    "published": "2026-10-21",
    "modified": "2026-10-21",
    "quickAnswer": "To keep the mirrored front-camera view in a saved iPhone selfie, go to Settings → Camera and turn on Mirror Front Camera. For a picture already taken, open it in Photos, choose Edit → Crop, use Flip, and tap Done. Flipping reverses the picture horizontally; it does not change the viewpoint or undo close-camera perspective.",
    "sections": [
      {
        "id": "check-reversal",
        "title": "Check whether the picture is actually reversed",
        "paragraphs": [
          "A hair part moving to the opposite side between preview and saved photo can be distracting. Instead of judging from a face alone, compare something that has a clear direction: lettering on a shirt, a book cover, or a sign. Reversed letters are a more useful clue than deciding that one face looks unfamiliar.",
          "Mirroring is a horizontal reversal of the entire image. A tighter crop, a different expression, brighter skin, or a change in the relative size of facial features is a different issue. Those changes can happen alongside a flip, which makes a simple before-and-after glance misleading."
        ],
        "table": {
          "headers": [
            "What you notice",
            "What to investigate"
          ],
          "rows": [
            [
              "Letters and every left/right detail are reversed",
              "Mirroring or a horizontal flip"
            ],
            [
              "The scene is sideways or upside down",
              "Rotation rather than mirroring"
            ],
            [
              "The face fills more of the frame but letters read the same",
              "Framing, crop, or zoom"
            ],
            [
              "Nearer features look larger relative to the rest of the face",
              "Camera distance and viewpoint"
            ]
          ]
        }
      },
      {
        "id": "future-selfies",
        "title": "Make future iPhone Camera selfies match the preview",
        "paragraphs": [
          "Apple documents Mirror Front Camera in Settings → Camera. Turn it on to save the front-camera shot as shown in the camera frame. This is a setting for future captures in Apple's Camera app; it is not an instruction to rewrite your existing library.",
          "After changing the setting, take one new test selfie and open the saved result. If you take selfies inside a social or messaging app, check that app's own camera settings and saved output. Do not assume Apple's setting controls every app that uses the front camera."
        ]
      },
      {
        "id": "existing-photo",
        "title": "Flip a photo you already saved",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Open the picture in Photos and choose Edit.",
              "text": "Use the saved image you intend to keep, rather than a screenshot of its preview."
            },
            {
              "title": "Choose Crop, then Flip.",
              "text": "Apple's Flip control reverses the image horizontally. The nearby Rotate control performs a different operation."
            },
            {
              "title": "Review the whole frame before tapping Done.",
              "text": "Check text, clothing details, and background signs as well as your face. Choose Cancel if the reversal does not suit the picture."
            }
          ]
        },
        "paragraphs": [
          "For a straightforward correction, change orientation first and leave your color treatment alone. That makes the comparison easier to understand and avoids accidentally using an exposure change as evidence that mirroring helped."
        ]
      },
      {
        "id": "letter-test",
        "title": "Try a two-picture lettering test",
        "paragraphs": [
          "Use a piece of paper with a short ordinary word written on it. Hold it beside you in even light, without including addresses or personal information. Keep the phone in one position. Make a capture with Mirror Front Camera off, then another with it on, and compare the saved files.",
          "Look at the word first. Decide which saved orientation matches your preview and which makes the word readable. Then compare the portraits. This is a suggested way to learn your camera's behavior, not a reported device test or a measure of which photograph is more attractive.",
          "If the face also looks stretched, repeat the comparison from farther away with similar framing. Flipping a close image only reverses the same captured geometry. Moving the camera changes the viewpoint, so treat that as a separate comparison."
        ]
      },
      {
        "id": "choose-orientation",
        "title": "Choose orientation for the picture's purpose",
        "paragraphs": [
          "For a casual selfie without important text, either orientation may suit your preference. For a picture meant to show a design, a sign, or how a room is arranged, check that the final image communicates those details accurately. A horizontally reversed logo or word can matter more than the orientation you are used to seeing.",
          "Keep one chosen orientation through your final edits so later comparisons remain useful. If a photo will be used as an AI portrait source, review the returned details independently; the source's orientation is not a guarantee about a generated result."
        ]
      }
    ],
    "faq": [
      {
        "question": "Is a mirrored selfie the only correct version of my face?",
        "answer": "No single two-dimensional picture is a complete account of your appearance. This setting controls orientation. Lighting, distance, expression, and camera position still affect the photograph."
      },
      {
        "question": "Will Mirror Front Camera flip photos I have already taken?",
        "answer": "Use the Photos editing controls for saved pictures. Change the Camera setting when you want future selfies to keep the mirrored preview."
      },
      {
        "question": "Can I fix backwards text without mirroring the whole photo?",
        "answer": "The ordinary Flip control reverses everything. If both the portrait orientation and readable text matter, use another capture or compose the photo around that requirement rather than assuming a global flip fixes both."
      }
    ],
    "sources": [
      {
        "title": "Apple: Take a selfie with your iPhone camera",
        "url": "https://support.apple.com/en-ca/guide/iphone/iph1b88429a6/ios",
        "note": "Documents Mirror Front Camera and its relationship to the front-camera frame. The lettering comparison is an editorial exercise."
      },
      {
        "title": "Apple: Crop, rotate, flip, or straighten photos and videos",
        "url": "https://support.apple.com/en-ie/guide/iphone/iph0f3ebb1dd/ios",
        "note": "Documents the horizontal Flip operation in Photos and the separate Rotate control."
      }
    ],
    "related": [
      "why-close-selfies-look-different",
      "mirror-selfie-photo-tips",
      "choose-photo-for-ai-portraits"
    ],
    "image": "blog/pexels-17502436-4k.webp",
    "imageAlt": "Woman holding a phone in front of her face for a selfie",
    "imagePosition": "50% 35%",
    "imageVariants": [
      {
        "src": "blog/pexels-17502436-480.webp",
        "width": 480
      },
      {
        "src": "blog/pexels-17502436-960.webp",
        "width": 960
      },
      {
        "src": "blog/pexels-17502436-1600.webp",
        "width": 1600
      },
      {
        "src": "blog/pexels-17502436-4k.webp",
        "width": 2560
      }
    ],
    "imageCredit": {
      "name": "olga Volkovitskaia",
      "url": "https://www.pexels.com/photo/a-woman-taking-a-selfie-with-her-phone-17502436/"
    },
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
  },
  {
    "slug": "read-histogram-for-portraits",
    "title": "How to read a histogram when editing portraits",
    "description": "Understand histogram peaks, shadows, highlights, and clipping warnings without forcing every portrait into the same brightness pattern.",
    "summary": "A histogram helps explain a photograph's tones. Use it to find a problem in the picture, then decide whether that problem matters.",
    "published": "2026-10-21",
    "modified": "2026-10-21",
    "quickAnswer": "On a conventional photo histogram, dark tones are on the left and bright tones on the right; taller areas mean more pixels at those values. Check the ends for possible clipping, then use a clipping overlay to locate the affected parts of the portrait. Do not brighten a dark scene just to move its graph toward the center.",
    "sections": [
      {
        "id": "read-axes",
        "title": "Read the axes before interpreting the shape",
        "paragraphs": [
          "Adobe's Camera Raw documentation describes a histogram as a count of pixels at different tonal values. The horizontal position describes the tone, and the height describes how common it is. A tall peak is not a tall object, and the graph's left side does not represent the left side of the photograph.",
          "A large dark wall can dominate the graph even when the smaller face is comfortably lit. Similarly, a bright backdrop can account for much of the right side. Start by connecting the distribution to the contents of the frame rather than treating a peak as an automatic instruction to move a slider."
        ],
        "table": {
          "headers": [
            "Graph feature",
            "Useful reading",
            "What it cannot tell you alone"
          ],
          "rows": [
            [
              "Most values toward the left",
              "Much of the image is dark",
              "Whether the face needs brightening"
            ],
            [
              "Most values toward the right",
              "Much of the image is bright",
              "Whether the bright background is intentional"
            ],
            [
              "Values crowded at an endpoint",
              "Inspect possible clipping",
              "Which detail matters or can be recovered"
            ],
            [
              "Different colored ribbons",
              "Separate red, green, and blue channel distributions",
              "Whether a particular skin tone looks appropriate"
            ]
          ]
        }
      },
      {
        "id": "find-clipping",
        "title": "Locate the warning on the photograph",
        "paragraphs": [
          "Clipping means values have reached the limit of what the image representation can show. In a conventional rendering, that can leave areas at output black or white. Check a warning against the image itself: a tiny light source and a broad blank patch across a cheek deserve different decisions.",
          "In Lightroom desktop, Adobe documents Show Histogram in the Edit panel's three-dot menu. Its left clipping indicator can display a blue shadow overlay, and the right indicator can display a red highlight overlay. The J key toggles these warnings. These are Lightroom desktop instructions, not a claim about controls available in Meluvya.",
          "An editor's warning describes the current rendering. It is not, by itself, proof that the original capture contains no recoverable information. Undo an aggressive edit or test the original before deciding that the missing texture is permanently absent."
        ]
      },
      {
        "id": "portrait-priorities",
        "title": "Decide which areas need detail",
        "paragraphs": [
          "Use a short priority list for the particular portrait. The following are suggested decisions, not fixed exposure rules or measurements taken from the illustrative photograph."
        ],
        "list": {
          "items": [
            {
              "title": "Expression first.",
              "text": "If a warning covers an eye or a large part of the face, zoom in and compare with the original before continuing."
            },
            {
              "title": "Clothing when it carries the story.",
              "text": "A white outfit might need visible folds for a fashion picture, while a tiny jewelry reflection may be less important."
            },
            {
              "title": "Background according to intent.",
              "text": "A dark doorway can stay dark if the subject is clear. Lifting it solely to spread the histogram may weaken the picture."
            },
            {
              "title": "Color as well as brightness.",
              "text": "If skin color becomes strange after a strong edit, inspect the color channels and reduce the responsible change. A useful-looking overall graph is not a color-quality score."
            }
          ]
        }
      },
      {
        "id": "controlled-comparison",
        "title": "Use a three-version comparison",
        "list": {
          "ordered": true,
          "items": [
            {
              "title": "Start with the unedited version.",
              "text": "Note the area you want to improve in plain language, such as 'the shaded eye is hard to read.' Avoid goals such as 'make the graph more balanced.'"
            },
            {
              "title": "Make one restrained adjustment.",
              "text": "Change the relevant tonal control and watch both the warning overlay and the face. Keep track of whether the intended detail becomes easier to see."
            },
            {
              "title": "Make a stronger comparison version.",
              "text": "Check whether it adds useful information or only produces flat skin, noisy shadows, or a dull background. Return to the milder version when the extra movement does not help."
            },
            {
              "title": "Hide the warnings for the final decision.",
              "text": "Look at the photograph at its intended display size. Keep the original available and select the version that communicates the expression and atmosphere best."
            }
          ]
        }
      },
      {
        "id": "limits",
        "title": "Know what the graph leaves out",
        "paragraphs": [
          "A histogram is not a map of facial features. Two different pictures can have similar tonal distributions while one has a blurred eye or an awkward crop. You still need to inspect focus, edges, expression, and framing directly.",
          "This guide concerns a conventional still-photo histogram. HDR editing can use additional brightness ranges and different displays. Check your editor's documentation rather than applying the same endpoint rule to every HDR view. If your editor has no histogram, compare the original and edited image carefully instead of assuming an unseen graph is necessary for a good portrait."
        ]
      }
    ],
    "faq": [
      {
        "question": "Should a portrait histogram form a bell curve?",
        "answer": "No. A portrait against a dark wall and one against a bright window can have different useful distributions. Choose the intended tonal result and inspect important detail rather than copying a graph shape."
      },
      {
        "question": "Does a clipping warning mean my photo is ruined?",
        "answer": "No. Find the warned area and decide whether it affects something important. Then check the original and a restrained adjustment. A warning alone cannot establish whether a retake is necessary."
      },
      {
        "question": "Can a histogram prove an image is sharp?",
        "answer": "No. It summarizes tones rather than where fine detail occurs. Inspect the eyes and other important edges directly, ideally in the original file."
      }
    ],
    "sources": [
      {
        "title": "Adobe: Color and tonal adjustments in Camera Raw",
        "url": "https://helpx.adobe.com/camera-raw/desktop/using/make-color-tonal-adjustments-camera.html",
        "note": "Explains histogram values, RGB ribbons, clipping, and how adjustments change the graph. The portrait priority list and comparison exercise are editorial guidance."
      },
      {
        "title": "Adobe: Edit photos in Lightroom desktop",
        "url": "https://helpx.adobe.com/lightroom/desktop/edit-photos/edit-photos.html",
        "note": "Documents Show Histogram, shadow and highlight overlays, and the J shortcut in Lightroom desktop."
      },
      {
        "title": "Adobe: How to read a histogram",
        "url": "https://www.adobe.com/creativecloud/photography/discover/how-to-read-a-histogram.html",
        "note": "Explains why different subjects and lighting produce different histogram shapes; there is no single correct shape."
      }
    ],
    "related": [
      "can-you-fix-overexposed-portraits",
      "brighten-dark-face-in-photo",
      "hdr-phone-photos-explained"
    ],
    "image": "blog/pexels-34806640-4k.webp",
    "imageAlt": "Portrait of a woman with bright light across one side of her face and deep shadows around her",
    "imagePosition": "50% 35%",
    "imageVariants": [
      {
        "src": "blog/pexels-34806640-480.webp",
        "width": 480
      },
      {
        "src": "blog/pexels-34806640-960.webp",
        "width": 960
      },
      {
        "src": "blog/pexels-34806640-1600.webp",
        "width": 1600
      },
      {
        "src": "blog/pexels-34806640-4k.webp",
        "width": 2560
      }
    ],
    "imageCredit": {
      "name": "elif s.",
      "url": "https://www.pexels.com/photo/moody-portrait-of-woman-in-dramatic-lighting-34806640/"
    },
    "caption": "Illustrative stock photograph; not a Meluvya result or a test of the technique."
  },
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
    "modified": "2026-10-21",
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
      "why-iphone-selfies-flip",
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
    "modified": "2026-10-21",
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
      "read-histogram-for-portraits",
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
    "modified": "2026-10-21",
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
      "remove-location-from-iphone-photos",
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
