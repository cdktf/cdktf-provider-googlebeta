# `googleBackupDrBackupVault` Submodule <a name="`googleBackupDrBackupVault` Submodule" id="@cdktf/provider-google-beta.googleBackupDrBackupVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBackupDrBackupVault <a name="GoogleBackupDrBackupVault" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault google_backup_dr_backup_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_backup_dr_backup_vault.GoogleBackupDrBackupVault;

GoogleBackupDrBackupVault.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .backupMinimumEnforcedRetentionDuration(java.lang.String)
    .backupVaultId(java.lang.String)
    .location(java.lang.String)
//  .accessRestriction(java.lang.String)
//  .allowMissing(java.lang.Boolean)
//  .allowMissing(IResolvable)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .effectiveTime(java.lang.String)
//  .forceDelete(java.lang.Boolean)
//  .forceDelete(IResolvable)
//  .forceUpdate(java.lang.Boolean)
//  .forceUpdate(IResolvable)
//  .id(java.lang.String)
//  .ignoreBackupPlanReferences(java.lang.Boolean)
//  .ignoreBackupPlanReferences(IResolvable)
//  .ignoreInactiveDatasources(java.lang.Boolean)
//  .ignoreInactiveDatasources(IResolvable)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleBackupDrBackupVaultTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.backupMinimumEnforcedRetentionDuration">backupMinimumEnforcedRetentionDuration</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.backupVaultId">backupVaultId</a></code> | <code>java.lang.String</code> | Required. ID of the requesting object. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The GCP location for the backup vault. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.accessRestriction">accessRestriction</a></code> | <code>java.lang.String</code> | Access restriction for the backup vault. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.allowMissing">allowMissing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow idempotent deletion of backup vault. The request will still succeed in case the backup vault does not exist. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. User annotations. See https://google.aip.dev/128#annotations Stores small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional. The description of the BackupVault instance (2048 characters or less). |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.effectiveTime">effectiveTime</a></code> | <code>java.lang.String</code> | Optional. Time after which the BackupVault resource is locked. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.forceUpdate">forceUpdate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, allow update to extend the minimum enforced retention for backup vault. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#id GoogleBackupDrBackupVault#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.ignoreBackupPlanReferences">ignoreBackupPlanReferences</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance that is being referenced by an active backup plan. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.ignoreInactiveDatasources">ignoreInactiveDatasources</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#project GoogleBackupDrBackupVault#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts">GoogleBackupDrBackupVaultTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backupMinimumEnforcedRetentionDuration`<sup>Required</sup> <a name="backupMinimumEnforcedRetentionDuration" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.backupMinimumEnforcedRetentionDuration"></a>

- *Type:* java.lang.String

Required.

The default and minimum enforced retention for each backup within the backup vault. The enforced retention for each backup can be extended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#backup_minimum_enforced_retention_duration GoogleBackupDrBackupVault#backup_minimum_enforced_retention_duration}

---

##### `backupVaultId`<sup>Required</sup> <a name="backupVaultId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.backupVaultId"></a>

- *Type:* java.lang.String

Required. ID of the requesting object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#backup_vault_id GoogleBackupDrBackupVault#backup_vault_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The GCP location for the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#location GoogleBackupDrBackupVault#location}

---

##### `accessRestriction`<sup>Optional</sup> <a name="accessRestriction" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.accessRestriction"></a>

- *Type:* java.lang.String

Access restriction for the backup vault.

Default value is 'WITHIN_ORGANIZATION' if not provided during creation. Default value: "WITHIN_ORGANIZATION" Possible values: ["ACCESS_RESTRICTION_UNSPECIFIED", "WITHIN_PROJECT", "WITHIN_ORGANIZATION", "UNRESTRICTED", "WITHIN_ORG_BUT_UNRESTRICTED_FOR_BA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#access_restriction GoogleBackupDrBackupVault#access_restriction}

---

##### `allowMissing`<sup>Optional</sup> <a name="allowMissing" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.allowMissing"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow idempotent deletion of backup vault. The request will still succeed in case the backup vault does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#allow_missing GoogleBackupDrBackupVault#allow_missing}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. User annotations. See https://google.aip.dev/128#annotations Stores small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#annotations GoogleBackupDrBackupVault#annotations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional. The description of the BackupVault instance (2048 characters or less).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#description GoogleBackupDrBackupVault#description}

---

##### `effectiveTime`<sup>Optional</sup> <a name="effectiveTime" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.effectiveTime"></a>

- *Type:* java.lang.String

Optional. Time after which the BackupVault resource is locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#effective_time GoogleBackupDrBackupVault#effective_time}

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.forceDelete"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources.

* deletion of a backup vault instance that is being referenced by an active backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#force_delete GoogleBackupDrBackupVault#force_delete}

---

##### `forceUpdate`<sup>Optional</sup> <a name="forceUpdate" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.forceUpdate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, allow update to extend the minimum enforced retention for backup vault.

This overrides
the restriction against conflicting retention periods. This conflict may occur when the
expiration schedule defined by the associated backup plan is shorter than the minimum
retention set by the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#force_update GoogleBackupDrBackupVault#force_update}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#id GoogleBackupDrBackupVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreBackupPlanReferences`<sup>Optional</sup> <a name="ignoreBackupPlanReferences" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.ignoreBackupPlanReferences"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance that is being referenced by an active backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#ignore_backup_plan_references GoogleBackupDrBackupVault#ignore_backup_plan_references}

---

##### `ignoreInactiveDatasources`<sup>Optional</sup> <a name="ignoreInactiveDatasources" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.ignoreInactiveDatasources"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#ignore_inactive_datasources GoogleBackupDrBackupVault#ignore_inactive_datasources}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#labels GoogleBackupDrBackupVault#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#project GoogleBackupDrBackupVault#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts">GoogleBackupDrBackupVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#timeouts GoogleBackupDrBackupVault#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetAccessRestriction">resetAccessRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetAllowMissing">resetAllowMissing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetEffectiveTime">resetEffectiveTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetForceDelete">resetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetForceUpdate">resetForceUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetIgnoreBackupPlanReferences">resetIgnoreBackupPlanReferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetIgnoreInactiveDatasources">resetIgnoreInactiveDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.putTimeouts"></a>

```java
public void putTimeouts(GoogleBackupDrBackupVaultTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts">GoogleBackupDrBackupVaultTimeouts</a>

---

##### `resetAccessRestriction` <a name="resetAccessRestriction" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetAccessRestriction"></a>

```java
public void resetAccessRestriction()
```

##### `resetAllowMissing` <a name="resetAllowMissing" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetAllowMissing"></a>

```java
public void resetAllowMissing()
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEffectiveTime` <a name="resetEffectiveTime" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetEffectiveTime"></a>

```java
public void resetEffectiveTime()
```

##### `resetForceDelete` <a name="resetForceDelete" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetForceDelete"></a>

```java
public void resetForceDelete()
```

##### `resetForceUpdate` <a name="resetForceUpdate" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetForceUpdate"></a>

```java
public void resetForceUpdate()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetId"></a>

```java
public void resetId()
```

##### `resetIgnoreBackupPlanReferences` <a name="resetIgnoreBackupPlanReferences" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetIgnoreBackupPlanReferences"></a>

```java
public void resetIgnoreBackupPlanReferences()
```

##### `resetIgnoreInactiveDatasources` <a name="resetIgnoreInactiveDatasources" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetIgnoreInactiveDatasources"></a>

```java
public void resetIgnoreInactiveDatasources()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBackupDrBackupVault resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_backup_dr_backup_vault.GoogleBackupDrBackupVault;

GoogleBackupDrBackupVault.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_backup_dr_backup_vault.GoogleBackupDrBackupVault;

GoogleBackupDrBackupVault.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_backup_dr_backup_vault.GoogleBackupDrBackupVault;

GoogleBackupDrBackupVault.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_backup_dr_backup_vault.GoogleBackupDrBackupVault;

GoogleBackupDrBackupVault.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleBackupDrBackupVault.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleBackupDrBackupVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleBackupDrBackupVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleBackupDrBackupVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBackupDrBackupVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupCount">backupCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.deletable">deletable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference">GoogleBackupDrBackupVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.totalStoredBytes">totalStoredBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.accessRestrictionInput">accessRestrictionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.allowMissingInput">allowMissingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupMinimumEnforcedRetentionDurationInput">backupMinimumEnforcedRetentionDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupVaultIdInput">backupVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.effectiveTimeInput">effectiveTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forceDeleteInput">forceDeleteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forceUpdateInput">forceUpdateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.ignoreBackupPlanReferencesInput">ignoreBackupPlanReferencesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.ignoreInactiveDatasourcesInput">ignoreInactiveDatasourcesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts">GoogleBackupDrBackupVaultTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.accessRestriction">accessRestriction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.allowMissing">allowMissing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupMinimumEnforcedRetentionDuration">backupMinimumEnforcedRetentionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupVaultId">backupVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.effectiveTime">effectiveTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forceUpdate">forceUpdate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.ignoreBackupPlanReferences">ignoreBackupPlanReferences</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.ignoreInactiveDatasources">ignoreInactiveDatasources</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backupCount`<sup>Required</sup> <a name="backupCount" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupCount"></a>

```java
public java.lang.String getBackupCount();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deletable`<sup>Required</sup> <a name="deletable" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.deletable"></a>

```java
public IResolvable getDeletable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.timeouts"></a>

```java
public GoogleBackupDrBackupVaultTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference">GoogleBackupDrBackupVaultTimeoutsOutputReference</a>

---

##### `totalStoredBytes`<sup>Required</sup> <a name="totalStoredBytes" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.totalStoredBytes"></a>

```java
public java.lang.String getTotalStoredBytes();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `accessRestrictionInput`<sup>Optional</sup> <a name="accessRestrictionInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.accessRestrictionInput"></a>

```java
public java.lang.String getAccessRestrictionInput();
```

- *Type:* java.lang.String

---

##### `allowMissingInput`<sup>Optional</sup> <a name="allowMissingInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.allowMissingInput"></a>

```java
public java.lang.Object getAllowMissingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `backupMinimumEnforcedRetentionDurationInput`<sup>Optional</sup> <a name="backupMinimumEnforcedRetentionDurationInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupMinimumEnforcedRetentionDurationInput"></a>

```java
public java.lang.String getBackupMinimumEnforcedRetentionDurationInput();
```

- *Type:* java.lang.String

---

##### `backupVaultIdInput`<sup>Optional</sup> <a name="backupVaultIdInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupVaultIdInput"></a>

```java
public java.lang.String getBackupVaultIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `effectiveTimeInput`<sup>Optional</sup> <a name="effectiveTimeInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.effectiveTimeInput"></a>

```java
public java.lang.String getEffectiveTimeInput();
```

- *Type:* java.lang.String

---

##### `forceDeleteInput`<sup>Optional</sup> <a name="forceDeleteInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forceDeleteInput"></a>

```java
public java.lang.Object getForceDeleteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forceUpdateInput`<sup>Optional</sup> <a name="forceUpdateInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forceUpdateInput"></a>

```java
public java.lang.Object getForceUpdateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ignoreBackupPlanReferencesInput`<sup>Optional</sup> <a name="ignoreBackupPlanReferencesInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.ignoreBackupPlanReferencesInput"></a>

```java
public java.lang.Object getIgnoreBackupPlanReferencesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ignoreInactiveDatasourcesInput`<sup>Optional</sup> <a name="ignoreInactiveDatasourcesInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.ignoreInactiveDatasourcesInput"></a>

```java
public java.lang.Object getIgnoreInactiveDatasourcesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts">GoogleBackupDrBackupVaultTimeouts</a>

---

##### `accessRestriction`<sup>Required</sup> <a name="accessRestriction" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.accessRestriction"></a>

```java
public java.lang.String getAccessRestriction();
```

- *Type:* java.lang.String

---

##### `allowMissing`<sup>Required</sup> <a name="allowMissing" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.allowMissing"></a>

```java
public java.lang.Object getAllowMissing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `backupMinimumEnforcedRetentionDuration`<sup>Required</sup> <a name="backupMinimumEnforcedRetentionDuration" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupMinimumEnforcedRetentionDuration"></a>

```java
public java.lang.String getBackupMinimumEnforcedRetentionDuration();
```

- *Type:* java.lang.String

---

##### `backupVaultId`<sup>Required</sup> <a name="backupVaultId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupVaultId"></a>

```java
public java.lang.String getBackupVaultId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `effectiveTime`<sup>Required</sup> <a name="effectiveTime" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.effectiveTime"></a>

```java
public java.lang.String getEffectiveTime();
```

- *Type:* java.lang.String

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forceDelete"></a>

```java
public java.lang.Object getForceDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forceUpdate`<sup>Required</sup> <a name="forceUpdate" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forceUpdate"></a>

```java
public java.lang.Object getForceUpdate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ignoreBackupPlanReferences`<sup>Required</sup> <a name="ignoreBackupPlanReferences" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.ignoreBackupPlanReferences"></a>

```java
public java.lang.Object getIgnoreBackupPlanReferences();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ignoreInactiveDatasources`<sup>Required</sup> <a name="ignoreInactiveDatasources" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.ignoreInactiveDatasources"></a>

```java
public java.lang.Object getIgnoreInactiveDatasources();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBackupDrBackupVaultConfig <a name="GoogleBackupDrBackupVaultConfig" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_backup_dr_backup_vault.GoogleBackupDrBackupVaultConfig;

GoogleBackupDrBackupVaultConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .backupMinimumEnforcedRetentionDuration(java.lang.String)
    .backupVaultId(java.lang.String)
    .location(java.lang.String)
//  .accessRestriction(java.lang.String)
//  .allowMissing(java.lang.Boolean)
//  .allowMissing(IResolvable)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .effectiveTime(java.lang.String)
//  .forceDelete(java.lang.Boolean)
//  .forceDelete(IResolvable)
//  .forceUpdate(java.lang.Boolean)
//  .forceUpdate(IResolvable)
//  .id(java.lang.String)
//  .ignoreBackupPlanReferences(java.lang.Boolean)
//  .ignoreBackupPlanReferences(IResolvable)
//  .ignoreInactiveDatasources(java.lang.Boolean)
//  .ignoreInactiveDatasources(IResolvable)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleBackupDrBackupVaultTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.backupMinimumEnforcedRetentionDuration">backupMinimumEnforcedRetentionDuration</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.backupVaultId">backupVaultId</a></code> | <code>java.lang.String</code> | Required. ID of the requesting object. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.location">location</a></code> | <code>java.lang.String</code> | The GCP location for the backup vault. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.accessRestriction">accessRestriction</a></code> | <code>java.lang.String</code> | Access restriction for the backup vault. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.allowMissing">allowMissing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow idempotent deletion of backup vault. The request will still succeed in case the backup vault does not exist. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. User annotations. See https://google.aip.dev/128#annotations Stores small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional. The description of the BackupVault instance (2048 characters or less). |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.effectiveTime">effectiveTime</a></code> | <code>java.lang.String</code> | Optional. Time after which the BackupVault resource is locked. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.forceUpdate">forceUpdate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, allow update to extend the minimum enforced retention for backup vault. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#id GoogleBackupDrBackupVault#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.ignoreBackupPlanReferences">ignoreBackupPlanReferences</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance that is being referenced by an active backup plan. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.ignoreInactiveDatasources">ignoreInactiveDatasources</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#project GoogleBackupDrBackupVault#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts">GoogleBackupDrBackupVaultTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backupMinimumEnforcedRetentionDuration`<sup>Required</sup> <a name="backupMinimumEnforcedRetentionDuration" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.backupMinimumEnforcedRetentionDuration"></a>

```java
public java.lang.String getBackupMinimumEnforcedRetentionDuration();
```

- *Type:* java.lang.String

Required.

The default and minimum enforced retention for each backup within the backup vault. The enforced retention for each backup can be extended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#backup_minimum_enforced_retention_duration GoogleBackupDrBackupVault#backup_minimum_enforced_retention_duration}

---

##### `backupVaultId`<sup>Required</sup> <a name="backupVaultId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.backupVaultId"></a>

```java
public java.lang.String getBackupVaultId();
```

- *Type:* java.lang.String

Required. ID of the requesting object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#backup_vault_id GoogleBackupDrBackupVault#backup_vault_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The GCP location for the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#location GoogleBackupDrBackupVault#location}

---

##### `accessRestriction`<sup>Optional</sup> <a name="accessRestriction" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.accessRestriction"></a>

```java
public java.lang.String getAccessRestriction();
```

- *Type:* java.lang.String

Access restriction for the backup vault.

Default value is 'WITHIN_ORGANIZATION' if not provided during creation. Default value: "WITHIN_ORGANIZATION" Possible values: ["ACCESS_RESTRICTION_UNSPECIFIED", "WITHIN_PROJECT", "WITHIN_ORGANIZATION", "UNRESTRICTED", "WITHIN_ORG_BUT_UNRESTRICTED_FOR_BA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#access_restriction GoogleBackupDrBackupVault#access_restriction}

---

##### `allowMissing`<sup>Optional</sup> <a name="allowMissing" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.allowMissing"></a>

```java
public java.lang.Object getAllowMissing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow idempotent deletion of backup vault. The request will still succeed in case the backup vault does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#allow_missing GoogleBackupDrBackupVault#allow_missing}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. User annotations. See https://google.aip.dev/128#annotations Stores small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#annotations GoogleBackupDrBackupVault#annotations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional. The description of the BackupVault instance (2048 characters or less).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#description GoogleBackupDrBackupVault#description}

---

##### `effectiveTime`<sup>Optional</sup> <a name="effectiveTime" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.effectiveTime"></a>

```java
public java.lang.String getEffectiveTime();
```

- *Type:* java.lang.String

Optional. Time after which the BackupVault resource is locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#effective_time GoogleBackupDrBackupVault#effective_time}

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.forceDelete"></a>

```java
public java.lang.Object getForceDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources.

* deletion of a backup vault instance that is being referenced by an active backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#force_delete GoogleBackupDrBackupVault#force_delete}

---

##### `forceUpdate`<sup>Optional</sup> <a name="forceUpdate" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.forceUpdate"></a>

```java
public java.lang.Object getForceUpdate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, allow update to extend the minimum enforced retention for backup vault.

This overrides
the restriction against conflicting retention periods. This conflict may occur when the
expiration schedule defined by the associated backup plan is shorter than the minimum
retention set by the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#force_update GoogleBackupDrBackupVault#force_update}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#id GoogleBackupDrBackupVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreBackupPlanReferences`<sup>Optional</sup> <a name="ignoreBackupPlanReferences" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.ignoreBackupPlanReferences"></a>

```java
public java.lang.Object getIgnoreBackupPlanReferences();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance that is being referenced by an active backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#ignore_backup_plan_references GoogleBackupDrBackupVault#ignore_backup_plan_references}

---

##### `ignoreInactiveDatasources`<sup>Optional</sup> <a name="ignoreInactiveDatasources" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.ignoreInactiveDatasources"></a>

```java
public java.lang.Object getIgnoreInactiveDatasources();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#ignore_inactive_datasources GoogleBackupDrBackupVault#ignore_inactive_datasources}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#labels GoogleBackupDrBackupVault#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#project GoogleBackupDrBackupVault#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.timeouts"></a>

```java
public GoogleBackupDrBackupVaultTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts">GoogleBackupDrBackupVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#timeouts GoogleBackupDrBackupVault#timeouts}

---

### GoogleBackupDrBackupVaultTimeouts <a name="GoogleBackupDrBackupVaultTimeouts" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_backup_dr_backup_vault.GoogleBackupDrBackupVaultTimeouts;

GoogleBackupDrBackupVaultTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#create GoogleBackupDrBackupVault#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#delete GoogleBackupDrBackupVault#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#update GoogleBackupDrBackupVault#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#create GoogleBackupDrBackupVault#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#delete GoogleBackupDrBackupVault#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_backup_dr_backup_vault#update GoogleBackupDrBackupVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBackupDrBackupVaultTimeoutsOutputReference <a name="GoogleBackupDrBackupVaultTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_backup_dr_backup_vault.GoogleBackupDrBackupVaultTimeoutsOutputReference;

new GoogleBackupDrBackupVaultTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts">GoogleBackupDrBackupVaultTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts">GoogleBackupDrBackupVaultTimeouts</a>

---



