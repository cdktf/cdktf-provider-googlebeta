# `googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule` Submodule <a name="`googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule` Submodule" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule <a name="GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module google_scc_management_organization_security_health_analytics_custom_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_organization_security_health_analytics_custom_module.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule;

GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Builder.create(Construct scope, java.lang.String id)
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
    .organization(java.lang.String)
//  .customConfig(GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig)
//  .displayName(java.lang.String)
//  .enablementState(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .timeouts(GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | Numerical ID of the parent organization. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.customConfig">customConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.enablementState">enablementState</a></code> | <code>java.lang.String</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#id GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location ID of the parent organization. If not provided, 'global' will be used as the default location. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

Numerical ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#organization GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#organization}

---

##### `customConfig`<sup>Optional</sup> <a name="customConfig" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.customConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#custom_config GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#custom_config}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the Security Health Analytics custom module.

This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#display_name GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#display_name}

---

##### `enablementState`<sup>Optional</sup> <a name="enablementState" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.enablementState"></a>

- *Type:* java.lang.String

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#enablement_state GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#enablement_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#id GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location ID of the parent organization. If not provided, 'global' will be used as the default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#location GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#timeouts GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.putCustomConfig">putCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetCustomConfig">resetCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetEnablementState">resetEnablementState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomConfig` <a name="putCustomConfig" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.putCustomConfig"></a>

```java
public void putCustomConfig(GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.putTimeouts"></a>

```java
public void putTimeouts(GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts</a>

---

##### `resetCustomConfig` <a name="resetCustomConfig" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetCustomConfig"></a>

```java
public void resetCustomConfig()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEnablementState` <a name="resetEnablementState" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetEnablementState"></a>

```java
public void resetEnablementState()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_organization_security_health_analytics_custom_module.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule;

GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_organization_security_health_analytics_custom_module.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule;

GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_organization_security_health_analytics_custom_module.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule;

GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_organization_security_health_analytics_custom_module.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule;

GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.ancestorModule">ancestorModule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.customConfig">customConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.lastEditor">lastEditor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.customConfigInput">customConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.enablementStateInput">enablementStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.enablementState">enablementState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ancestorModule`<sup>Required</sup> <a name="ancestorModule" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.ancestorModule"></a>

```java
public java.lang.String getAncestorModule();
```

- *Type:* java.lang.String

---

##### `customConfig`<sup>Required</sup> <a name="customConfig" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.customConfig"></a>

```java
public GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference getCustomConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference</a>

---

##### `lastEditor`<sup>Required</sup> <a name="lastEditor" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.lastEditor"></a>

```java
public java.lang.String getLastEditor();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.timeouts"></a>

```java
public GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `customConfigInput`<sup>Optional</sup> <a name="customConfigInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.customConfigInput"></a>

```java
public GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig getCustomConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enablementStateInput`<sup>Optional</sup> <a name="enablementStateInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.enablementStateInput"></a>

```java
public java.lang.String getEnablementStateInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enablementState`<sup>Required</sup> <a name="enablementState" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.enablementState"></a>

```java
public java.lang.String getEnablementState();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig <a name="GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_organization_security_health_analytics_custom_module.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig;

GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.builder()
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
    .organization(java.lang.String)
//  .customConfig(GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig)
//  .displayName(java.lang.String)
//  .enablementState(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .timeouts(GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | Numerical ID of the parent organization. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.customConfig">customConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.enablementState">enablementState</a></code> | <code>java.lang.String</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#id GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location ID of the parent organization. If not provided, 'global' will be used as the default location. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

Numerical ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#organization GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#organization}

---

##### `customConfig`<sup>Optional</sup> <a name="customConfig" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.customConfig"></a>

```java
public GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig getCustomConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#custom_config GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#custom_config}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.displayName"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#display_name GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#display_name}

---

##### `enablementState`<sup>Optional</sup> <a name="enablementState" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.enablementState"></a>

```java
public java.lang.String getEnablementState();
```

- *Type:* java.lang.String

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#enablement_state GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#enablement_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#id GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location ID of the parent organization. If not provided, 'global' will be used as the default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#location GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.timeouts"></a>

```java
public GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#timeouts GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#timeouts}

---

### GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig <a name="GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_organization_security_health_analytics_custom_module.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig;

GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.builder()
    .predicate(GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate)
    .recommendation(java.lang.String)
    .resourceSelector(GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector)
    .severity(java.lang.String)
//  .customOutput(GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | predicate block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.recommendation">recommendation</a></code> | <code>java.lang.String</code> | An explanation of the recommended steps that security teams can take to resolve the detected issue. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.resourceSelector">resourceSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | resource_selector block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.severity">severity</a></code> | <code>java.lang.String</code> | The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.customOutput">customOutput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | custom_output block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.description">description</a></code> | <code>java.lang.String</code> | Text that describes the vulnerability or misconfiguration that the custom module detects. |

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.predicate"></a>

```java
public GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate getPredicate();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#predicate GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#predicate}

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.recommendation"></a>

```java
public java.lang.String getRecommendation();
```

- *Type:* java.lang.String

An explanation of the recommended steps that security teams can take to resolve the detected issue.

This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#recommendation GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#recommendation}

---

##### `resourceSelector`<sup>Required</sup> <a name="resourceSelector" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.resourceSelector"></a>

```java
public GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector getResourceSelector();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#resource_selector GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#resource_selector}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#severity GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#severity}

---

##### `customOutput`<sup>Optional</sup> <a name="customOutput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.customOutput"></a>

```java
public GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput getCustomOutput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#custom_output GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#custom_output}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Text that describes the vulnerability or misconfiguration that the custom module detects.

This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#description GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#description}

---

### GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput <a name="GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_organization_security_health_analytics_custom_module.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput;

GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.builder()
//  .properties(IResolvable)
//  .properties(java.util.List<GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.property.properties">properties</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>></code> | properties block. |

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.property.properties"></a>

```java
public java.lang.Object getProperties();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#properties GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#properties}

---

### GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties <a name="GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_organization_security_health_analytics_custom_module.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties;

GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.builder()
//  .name(java.lang.String)
//  .valueExpression(GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.name">name</a></code> | <code>java.lang.String</code> | Name of the property for the custom output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.valueExpression">valueExpression</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | value_expression block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the property for the custom output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#name GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#name}

---

##### `valueExpression`<sup>Optional</sup> <a name="valueExpression" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.valueExpression"></a>

```java
public GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression getValueExpression();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

value_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#value_expression GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#value_expression}

---

### GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression <a name="GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_organization_security_health_analytics_custom_module.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression;

GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.builder()
    .expression(java.lang.String)
//  .description(java.lang.String)
//  .location(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description">description</a></code> | <code>java.lang.String</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location">location</a></code> | <code>java.lang.String</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title">title</a></code> | <code>java.lang.String</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#expression GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#description GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#location GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#title GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#title}

---

### GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate <a name="GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_organization_security_health_analytics_custom_module.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate;

GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.builder()
    .expression(java.lang.String)
//  .description(java.lang.String)
//  .location(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.description">description</a></code> | <code>java.lang.String</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.location">location</a></code> | <code>java.lang.String</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.title">title</a></code> | <code>java.lang.String</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#expression GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#description GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#location GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#title GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#title}

---

### GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector <a name="GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_organization_security_health_analytics_custom_module.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector;

GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.builder()
    .resourceTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | The resource types to run the detector on. |

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#resource_types GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#resource_types}

---

### GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts <a name="GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_organization_security_health_analytics_custom_module.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts;

GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#create GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#delete GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#update GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#create GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#delete GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_management_organization_security_health_analytics_custom_module#update GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference <a name="GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_organization_security_health_analytics_custom_module.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference;

new GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProperties` <a name="putProperties" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties"></a>

```java
public void putProperties(IResolvable OR java.util.List<GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>>

---

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resetProperties"></a>

```java
public void resetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.properties"></a>

```java
public GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList getProperties();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList</a>

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput"></a>

```java
public java.lang.Object getPropertiesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue"></a>

```java
public GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---


### GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList <a name="GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_organization_security_health_analytics_custom_module.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList;

new GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get"></a>

```java
public GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>>

---


### GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference <a name="GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_organization_security_health_analytics_custom_module.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference;

new GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression">putValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression">resetValueExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValueExpression` <a name="putValueExpression" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression"></a>

```java
public void putValueExpression(GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValueExpression` <a name="resetValueExpression" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression"></a>

```java
public void resetValueExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression">valueExpression</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput">valueExpressionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueExpression`<sup>Required</sup> <a name="valueExpression" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression"></a>

```java
public GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference getValueExpression();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueExpressionInput`<sup>Optional</sup> <a name="valueExpressionInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput"></a>

```java
public GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression getValueExpressionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>

---


### GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference <a name="GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_organization_security_health_analytics_custom_module.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference;

new GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue"></a>

```java
public GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---


### GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference <a name="GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_organization_security_health_analytics_custom_module.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference;

new GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput">putCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate">putPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector">putResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetCustomOutput">resetCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomOutput` <a name="putCustomOutput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput"></a>

```java
public void putCustomOutput(GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---

##### `putPredicate` <a name="putPredicate" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate"></a>

```java
public void putPredicate(GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---

##### `putResourceSelector` <a name="putResourceSelector" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector"></a>

```java
public void putResourceSelector(GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---

##### `resetCustomOutput` <a name="resetCustomOutput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetCustomOutput"></a>

```java
public void resetCustomOutput()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutput">customOutput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelector">resourceSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutputInput">customOutputInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicateInput">predicateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendationInput">recommendationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelectorInput">resourceSelectorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severityInput">severityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendation">recommendation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customOutput`<sup>Required</sup> <a name="customOutput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutput"></a>

```java
public GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference getCustomOutput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference</a>

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicate"></a>

```java
public GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference getPredicate();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference</a>

---

##### `resourceSelector`<sup>Required</sup> <a name="resourceSelector" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelector"></a>

```java
public GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference getResourceSelector();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference</a>

---

##### `customOutputInput`<sup>Optional</sup> <a name="customOutputInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutputInput"></a>

```java
public GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput getCustomOutputInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `predicateInput`<sup>Optional</sup> <a name="predicateInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicateInput"></a>

```java
public GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate getPredicateInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---

##### `recommendationInput`<sup>Optional</sup> <a name="recommendationInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendationInput"></a>

```java
public java.lang.String getRecommendationInput();
```

- *Type:* java.lang.String

---

##### `resourceSelectorInput`<sup>Optional</sup> <a name="resourceSelectorInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelectorInput"></a>

```java
public GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector getResourceSelectorInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severityInput"></a>

```java
public java.lang.String getSeverityInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendation"></a>

```java
public java.lang.String getRecommendation();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.internalValue"></a>

```java
public GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---


### GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference <a name="GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_organization_security_health_analytics_custom_module.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference;

new GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.internalValue"></a>

```java
public GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---


### GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference <a name="GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_organization_security_health_analytics_custom_module.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference;

new GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue"></a>

```java
public GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---


### GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference <a name="GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_organization_security_health_analytics_custom_module.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference;

new GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationSecurityHealthAnalyticsCustomModule.GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts</a>

---



