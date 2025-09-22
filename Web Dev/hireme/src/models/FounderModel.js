/**
 * Founder Model Class
 * Represents a founder/team member with their details
 */
class FounderModel {
  constructor(name, role, image, description, socialLinks = {}) {
    this.name = name;
    this.role = role;
    this.image = image;
    this.description = description;
    this.socialLinks = socialLinks;
    this.id = this.generateId();
  }

  /**
   * Generate a unique ID for the founder
   * @returns {string} Unique identifier
   */
  generateId() {
    return `founder_${this.name.toLowerCase()}_${Date.now()}`;
  }

  /**
   * Get founder's full details
   * @returns {Object} Complete founder information
   */
  getDetails() {
    return {
      id: this.id,
      name: this.name,
      role: this.role,
      image: this.image,
      description: this.description,
      socialLinks: this.socialLinks
    };
  }

  /**
   * Update founder's role
   * @param {string} newRole - New role for the founder
   */
  updateRole(newRole) {
    this.role = newRole;
  }

  /**
   * Update founder's description
   * @param {string} newDescription - New description for the founder
   */
  updateDescription(newDescription) {
    this.description = newDescription;
  }

  /**
   * Add social media link
   * @param {string} platform - Social media platform (e.g., 'linkedin', 'twitter')
   * @param {string} url - Social media URL
   */
  addSocialLink(platform, url) {
    this.socialLinks[platform] = url;
  }

  /**
   * Remove social media link
   * @param {string} platform - Social media platform to remove
   */
  removeSocialLink(platform) {
    delete this.socialLinks[platform];
  }

  /**
   * Get founder's display name (formatted)
   * @returns {string} Formatted display name
   */
  getDisplayName() {
    return this.name.toUpperCase();
  }

  /**
   * Check if founder has social links
   * @returns {boolean} True if has social links
   */
  hasSocialLinks() {
    return Object.keys(this.socialLinks).length > 0;
  }

  /**
   * Get founder summary (name and role)
   * @returns {string} Summary string
   */
  getSummary() {
    return `${this.name} - ${this.role}`;
  }
}

export default FounderModel;
