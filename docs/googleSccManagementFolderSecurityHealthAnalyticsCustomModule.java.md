# `googleSccManagementFolderSecurityHealthAnalyticsCustomModule` Submodule <a name="`googleSccManagementFolderSecurityHealthAnalyticsCustomModule` Submodule" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module google_scc_management_folder_security_health_analytics_custom_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_folder_security_health_analytics_custom_module.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule;

GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Builder.create(Construct scope, java.lang.String id)
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
    .folder(java.lang.String)
//  .customConfig(GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig)
//  .displayName(java.lang.String)
//  .enablementState(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .timeouts(GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.folder">folder</a></code> | <code>java.lang.String</code> | Numerical ID of the parent folder. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.customConfig">customConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.enablementState">enablementState</a></code> | <code>java.lang.String</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#id GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location ID of the parent organization. If not provided, 'global' will be used as the default location. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.folder"></a>

- *Type:* java.lang.String

Numerical ID of the parent folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#folder GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#folder}

---

##### `customConfig`<sup>Optional</sup> <a name="customConfig" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.customConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#custom_config GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#custom_config}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the Security Health Analytics custom module.

This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#display_name GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#display_name}

---

##### `enablementState`<sup>Optional</sup> <a name="enablementState" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.enablementState"></a>

- *Type:* java.lang.String

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#enablement_state GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#enablement_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#id GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location ID of the parent organization. If not provided, 'global' will be used as the default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#location GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#timeouts GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.putCustomConfig">putCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.resetCustomConfig">resetCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.resetEnablementState">resetEnablementState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomConfig` <a name="putCustomConfig" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.putCustomConfig"></a>

```java
public void putCustomConfig(GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.putTimeouts"></a>

```java
public void putTimeouts(GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a>

---

##### `resetCustomConfig` <a name="resetCustomConfig" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.resetCustomConfig"></a>

```java
public void resetCustomConfig()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEnablementState` <a name="resetEnablementState" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.resetEnablementState"></a>

```java
public void resetEnablementState()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_folder_security_health_analytics_custom_module.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule;

GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_folder_security_health_analytics_custom_module.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule;

GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_folder_security_health_analytics_custom_module.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule;

GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_folder_security_health_analytics_custom_module.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule;

GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.ancestorModule">ancestorModule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.customConfig">customConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.lastEditor">lastEditor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.customConfigInput">customConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.enablementStateInput">enablementStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.folderInput">folderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.enablementState">enablementState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.folder">folder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ancestorModule`<sup>Required</sup> <a name="ancestorModule" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.ancestorModule"></a>

```java
public java.lang.String getAncestorModule();
```

- *Type:* java.lang.String

---

##### `customConfig`<sup>Required</sup> <a name="customConfig" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.customConfig"></a>

```java
public GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference getCustomConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference</a>

---

##### `lastEditor`<sup>Required</sup> <a name="lastEditor" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.lastEditor"></a>

```java
public java.lang.String getLastEditor();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.timeouts"></a>

```java
public GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `customConfigInput`<sup>Optional</sup> <a name="customConfigInput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.customConfigInput"></a>

```java
public GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig getCustomConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enablementStateInput`<sup>Optional</sup> <a name="enablementStateInput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.enablementStateInput"></a>

```java
public java.lang.String getEnablementStateInput();
```

- *Type:* java.lang.String

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.folderInput"></a>

```java
public java.lang.String getFolderInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enablementState`<sup>Required</sup> <a name="enablementState" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.enablementState"></a>

```java
public java.lang.String getEnablementState();
```

- *Type:* java.lang.String

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_folder_security_health_analytics_custom_module.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig;

GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.builder()
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
    .folder(java.lang.String)
//  .customConfig(GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig)
//  .displayName(java.lang.String)
//  .enablementState(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .timeouts(GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.folder">folder</a></code> | <code>java.lang.String</code> | Numerical ID of the parent folder. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.customConfig">customConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.enablementState">enablementState</a></code> | <code>java.lang.String</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#id GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location ID of the parent organization. If not provided, 'global' will be used as the default location. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

Numerical ID of the parent folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#folder GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#folder}

---

##### `customConfig`<sup>Optional</sup> <a name="customConfig" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.customConfig"></a>

```java
public GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig getCustomConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#custom_config GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#custom_config}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the Security Health Analytics custom module.

This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#display_name GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#display_name}

---

##### `enablementState`<sup>Optional</sup> <a name="enablementState" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.enablementState"></a>

```java
public java.lang.String getEnablementState();
```

- *Type:* java.lang.String

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#enablement_state GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#enablement_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#id GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location ID of the parent organization. If not provided, 'global' will be used as the default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#location GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.timeouts"></a>

```java
public GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#timeouts GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#timeouts}

---

### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_folder_security_health_analytics_custom_module.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig;

GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.builder()
//  .customOutput(GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput)
//  .description(java.lang.String)
//  .predicate(GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate)
//  .recommendation(java.lang.String)
//  .resourceSelector(GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector)
//  .severity(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.customOutput">customOutput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | custom_output block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.description">description</a></code> | <code>java.lang.String</code> | Text that describes the vulnerability or misconfiguration that the custom module detects. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | predicate block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.recommendation">recommendation</a></code> | <code>java.lang.String</code> | An explanation of the recommended steps that security teams can take to resolve the detected issue. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.resourceSelector">resourceSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | resource_selector block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.severity">severity</a></code> | <code>java.lang.String</code> | The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"]. |

---

##### `customOutput`<sup>Optional</sup> <a name="customOutput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.customOutput"></a>

```java
public GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput getCustomOutput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#custom_output GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#custom_output}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Text that describes the vulnerability or misconfiguration that the custom module detects.

This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#description GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#description}

---

##### `predicate`<sup>Optional</sup> <a name="predicate" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.predicate"></a>

```java
public GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate getPredicate();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#predicate GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#predicate}

---

##### `recommendation`<sup>Optional</sup> <a name="recommendation" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.recommendation"></a>

```java
public java.lang.String getRecommendation();
```

- *Type:* java.lang.String

An explanation of the recommended steps that security teams can take to resolve the detected issue.

This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#recommendation GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#recommendation}

---

##### `resourceSelector`<sup>Optional</sup> <a name="resourceSelector" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.resourceSelector"></a>

```java
public GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector getResourceSelector();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#resource_selector GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#resource_selector}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#severity GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#severity}

---

### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_folder_security_health_analytics_custom_module.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput;

GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.builder()
//  .properties(IResolvable)
//  .properties(java.util.List<GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.property.properties">properties</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>></code> | properties block. |

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.property.properties"></a>

```java
public java.lang.Object getProperties();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#properties GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#properties}

---

### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_folder_security_health_analytics_custom_module.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties;

GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.builder()
//  .name(java.lang.String)
//  .valueExpression(GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.name">name</a></code> | <code>java.lang.String</code> | Name of the property for the custom output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.valueExpression">valueExpression</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | value_expression block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the property for the custom output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#name GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#name}

---

##### `valueExpression`<sup>Optional</sup> <a name="valueExpression" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.valueExpression"></a>

```java
public GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression getValueExpression();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

value_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#value_expression GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#value_expression}

---

### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_folder_security_health_analytics_custom_module.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression;

GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.builder()
    .expression(java.lang.String)
//  .description(java.lang.String)
//  .location(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description">description</a></code> | <code>java.lang.String</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location">location</a></code> | <code>java.lang.String</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title">title</a></code> | <code>java.lang.String</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#expression GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#description GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#location GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#title GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#title}

---

### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_folder_security_health_analytics_custom_module.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate;

GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.builder()
    .expression(java.lang.String)
//  .description(java.lang.String)
//  .location(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.description">description</a></code> | <code>java.lang.String</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.location">location</a></code> | <code>java.lang.String</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.title">title</a></code> | <code>java.lang.String</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#expression GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#description GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#location GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#title GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#title}

---

### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_folder_security_health_analytics_custom_module.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector;

GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.builder()
    .resourceTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | The resource types to run the detector on. |

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#resource_types GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#resource_types}

---

### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_folder_security_health_analytics_custom_module.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts;

GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#create GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#delete GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#update GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#create GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#delete GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#update GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_folder_security_health_analytics_custom_module.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference;

new GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProperties` <a name="putProperties" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties"></a>

```java
public void putProperties(IResolvable OR java.util.List<GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>>

---

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resetProperties"></a>

```java
public void resetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.properties"></a>

```java
public GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList getProperties();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList</a>

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput"></a>

```java
public java.lang.Object getPropertiesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue"></a>

```java
public GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---


### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_folder_security_health_analytics_custom_module.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList;

new GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get"></a>

```java
public GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>>

---


### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_folder_security_health_analytics_custom_module.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference;

new GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression">putValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression">resetValueExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValueExpression` <a name="putValueExpression" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression"></a>

```java
public void putValueExpression(GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValueExpression` <a name="resetValueExpression" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression"></a>

```java
public void resetValueExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression">valueExpression</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput">valueExpressionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueExpression`<sup>Required</sup> <a name="valueExpression" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression"></a>

```java
public GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference getValueExpression();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueExpressionInput`<sup>Optional</sup> <a name="valueExpressionInput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput"></a>

```java
public GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression getValueExpressionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>

---


### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_folder_security_health_analytics_custom_module.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference;

new GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue"></a>

```java
public GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---


### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_folder_security_health_analytics_custom_module.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference;

new GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput">putCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate">putPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector">putResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetCustomOutput">resetCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetPredicate">resetPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetRecommendation">resetRecommendation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetResourceSelector">resetResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetSeverity">resetSeverity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomOutput` <a name="putCustomOutput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput"></a>

```java
public void putCustomOutput(GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---

##### `putPredicate` <a name="putPredicate" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate"></a>

```java
public void putPredicate(GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---

##### `putResourceSelector` <a name="putResourceSelector" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector"></a>

```java
public void putResourceSelector(GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---

##### `resetCustomOutput` <a name="resetCustomOutput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetCustomOutput"></a>

```java
public void resetCustomOutput()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetPredicate` <a name="resetPredicate" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetPredicate"></a>

```java
public void resetPredicate()
```

##### `resetRecommendation` <a name="resetRecommendation" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetRecommendation"></a>

```java
public void resetRecommendation()
```

##### `resetResourceSelector` <a name="resetResourceSelector" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetResourceSelector"></a>

```java
public void resetResourceSelector()
```

##### `resetSeverity` <a name="resetSeverity" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetSeverity"></a>

```java
public void resetSeverity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutput">customOutput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelector">resourceSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutputInput">customOutputInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicateInput">predicateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendationInput">recommendationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelectorInput">resourceSelectorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severityInput">severityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendation">recommendation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customOutput`<sup>Required</sup> <a name="customOutput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutput"></a>

```java
public GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference getCustomOutput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference</a>

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicate"></a>

```java
public GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference getPredicate();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference</a>

---

##### `resourceSelector`<sup>Required</sup> <a name="resourceSelector" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelector"></a>

```java
public GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference getResourceSelector();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference</a>

---

##### `customOutputInput`<sup>Optional</sup> <a name="customOutputInput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutputInput"></a>

```java
public GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput getCustomOutputInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `predicateInput`<sup>Optional</sup> <a name="predicateInput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicateInput"></a>

```java
public GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate getPredicateInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---

##### `recommendationInput`<sup>Optional</sup> <a name="recommendationInput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendationInput"></a>

```java
public java.lang.String getRecommendationInput();
```

- *Type:* java.lang.String

---

##### `resourceSelectorInput`<sup>Optional</sup> <a name="resourceSelectorInput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelectorInput"></a>

```java
public GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector getResourceSelectorInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severityInput"></a>

```java
public java.lang.String getSeverityInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendation"></a>

```java
public java.lang.String getRecommendation();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.internalValue"></a>

```java
public GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---


### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_folder_security_health_analytics_custom_module.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference;

new GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.internalValue"></a>

```java
public GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---


### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_folder_security_health_analytics_custom_module.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference;

new GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue"></a>

```java
public GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---


### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_folder_security_health_analytics_custom_module.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference;

new GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a>

---



