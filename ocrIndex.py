# print("Am working...")
import cv2
import pytesseract

# Read image
image = cv2.imread("./tabular data image.jpg")

# Convert to grayscale``
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# Apply adaptive threshold
thresh = cv2.adaptiveThreshold(gray, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 11, 2)

# Find contours
contours, _ = cv2.findContours(thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

# Iterate through contours and filter for tables
for contour in contours:
    if cv2.contourArea(contour) < 100:
        continue
    [x, y, w, h] = cv2.boundingRect(contour)
    if w < 50 or h < 50:
        continue
    if w/h > 2 or h/w > 2:
        continue
    cv2.rectangle(image, (x, y), (x+w, y+h), (0, 0, 255), 2)
    roi = gray[y:y+h, x:x+w]
    
    # Use PyTesseract to extract text from ROI
    # text = pytesseract.image_to_string(roi)
    # print(text)

print(pytesseract.image_to_string(roi))