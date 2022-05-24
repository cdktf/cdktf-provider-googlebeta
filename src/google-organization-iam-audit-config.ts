// https://www.terraform.io/docs/providers/google-beta/r/google_organization_iam_audit_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleOrganizationIamAuditConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The numeric ID of the organization in which you want to manage the audit logging config.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_organization_iam_audit_config#org_id GoogleOrganizationIamAuditConfig#org_id}
  */
  readonly orgId: string;
  /**
  * Service which will be enabled for audit logging. The special value allServices covers all services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_organization_iam_audit_config#service GoogleOrganizationIamAuditConfig#service}
  */
  readonly service: string;
  /**
  * audit_log_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_organization_iam_audit_config#audit_log_config GoogleOrganizationIamAuditConfig#audit_log_config}
  */
  readonly auditLogConfig: GoogleOrganizationIamAuditConfigAuditLogConfig[] | cdktf.IResolvable;
}
export interface GoogleOrganizationIamAuditConfigAuditLogConfig {
  /**
  * Identities that do not cause logging for this type of permission. Each entry can have one of the following values:user:{emailid}: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com. serviceAccount:{emailid}: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com. group:{emailid}: An email address that represents a Google group. For example, admins@example.com. domain:{domain}: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_organization_iam_audit_config#exempted_members GoogleOrganizationIamAuditConfig#exempted_members}
  */
  readonly exemptedMembers?: string[];
  /**
  * Permission type for which logging is to be configured. Must be one of DATA_READ, DATA_WRITE, or ADMIN_READ.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_organization_iam_audit_config#log_type GoogleOrganizationIamAuditConfig#log_type}
  */
  readonly logType: string;
}

export function googleOrganizationIamAuditConfigAuditLogConfigToTerraform(struct?: GoogleOrganizationIamAuditConfigAuditLogConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exempted_members: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exemptedMembers),
    log_type: cdktf.stringToTerraform(struct!.logType),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_organization_iam_audit_config google_organization_iam_audit_config}
*/
export class GoogleOrganizationIamAuditConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_organization_iam_audit_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_organization_iam_audit_config google_organization_iam_audit_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleOrganizationIamAuditConfigConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleOrganizationIamAuditConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_organization_iam_audit_config',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.22.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._orgId = config.orgId;
    this._service = config.service;
    this._auditLogConfig = config.auditLogConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // audit_log_config - computed: false, optional: false, required: true
  private _auditLogConfig?: GoogleOrganizationIamAuditConfigAuditLogConfig[] | cdktf.IResolvable; 
  public get auditLogConfig() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('audit_log_config')));
  }
  public set auditLogConfig(value: GoogleOrganizationIamAuditConfigAuditLogConfig[] | cdktf.IResolvable) {
    this._auditLogConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogConfigInput() {
    return this._auditLogConfig;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      org_id: cdktf.stringToTerraform(this._orgId),
      service: cdktf.stringToTerraform(this._service),
      audit_log_config: cdktf.listMapper(googleOrganizationIamAuditConfigAuditLogConfigToTerraform)(this._auditLogConfig),
    };
  }
}
