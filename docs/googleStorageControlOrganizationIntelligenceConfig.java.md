# `googleStorageControlOrganizationIntelligenceConfig` Submodule <a name="`googleStorageControlOrganizationIntelligenceConfig` Submodule" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageControlOrganizationIntelligenceConfig <a name="GoogleStorageControlOrganizationIntelligenceConfig" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_organization_intelligence_config google_storage_control_organization_intelligence_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_control_organization_intelligence_config.GoogleStorageControlOrganizationIntelligenceConfig;

GoogleStorageControlOrganizationIntelligenceConfig.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .editionConfig(java.lang.String)
//  .filter(GoogleStorageControlOrganizationIntelligenceConfigFilter)
//  .id(java.lang.String)
//  .timeouts(GoogleStorageControlOrganizationIntelligenceConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Identifier of the GCP Organization. For GCP org, this field should be organization number. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.editionConfig">editionConfig</a></code> | <code>java.lang.String</code> | Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, DISABLED, TRIAL and STANDARD. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter">GoogleStorageControlOrganizationIntelligenceConfigFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_organization_intelligence_config#id GoogleStorageControlOrganizationIntelligenceConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts">GoogleStorageControlOrganizationIntelligenceConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Identifier of the GCP Organization. For GCP org, this field should be organization number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_organization_intelligence_config#name GoogleStorageControlOrganizationIntelligenceConfig#name}

---

##### `editionConfig`<sup>Optional</sup> <a name="editionConfig" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.editionConfig"></a>

- *Type:* java.lang.String

Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, DISABLED, TRIAL and STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_organization_intelligence_config#edition_config GoogleStorageControlOrganizationIntelligenceConfig#edition_config}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter">GoogleStorageControlOrganizationIntelligenceConfigFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_organization_intelligence_config#filter GoogleStorageControlOrganizationIntelligenceConfig#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_organization_intelligence_config#id GoogleStorageControlOrganizationIntelligenceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts">GoogleStorageControlOrganizationIntelligenceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_organization_intelligence_config#timeouts GoogleStorageControlOrganizationIntelligenceConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetEditionConfig">resetEditionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.putFilter"></a>

```java
public void putFilter(GoogleStorageControlOrganizationIntelligenceConfigFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter">GoogleStorageControlOrganizationIntelligenceConfigFilter</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.putTimeouts"></a>

```java
public void putTimeouts(GoogleStorageControlOrganizationIntelligenceConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts">GoogleStorageControlOrganizationIntelligenceConfigTimeouts</a>

---

##### `resetEditionConfig` <a name="resetEditionConfig" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetEditionConfig"></a>

```java
public void resetEditionConfig()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleStorageControlOrganizationIntelligenceConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_control_organization_intelligence_config.GoogleStorageControlOrganizationIntelligenceConfig;

GoogleStorageControlOrganizationIntelligenceConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_control_organization_intelligence_config.GoogleStorageControlOrganizationIntelligenceConfig;

GoogleStorageControlOrganizationIntelligenceConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_control_organization_intelligence_config.GoogleStorageControlOrganizationIntelligenceConfig;

GoogleStorageControlOrganizationIntelligenceConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_control_organization_intelligence_config.GoogleStorageControlOrganizationIntelligenceConfig;

GoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleStorageControlOrganizationIntelligenceConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleStorageControlOrganizationIntelligenceConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleStorageControlOrganizationIntelligenceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_organization_intelligence_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleStorageControlOrganizationIntelligenceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.effectiveIntelligenceConfig">effectiveIntelligenceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList">GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.trialConfig">trialConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList">GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.editionConfigInput">editionConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter">GoogleStorageControlOrganizationIntelligenceConfigFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts">GoogleStorageControlOrganizationIntelligenceConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.editionConfig">editionConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `effectiveIntelligenceConfig`<sup>Required</sup> <a name="effectiveIntelligenceConfig" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.effectiveIntelligenceConfig"></a>

```java
public GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList getEffectiveIntelligenceConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList">GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.filter"></a>

```java
public GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.timeouts"></a>

```java
public GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference</a>

---

##### `trialConfig`<sup>Required</sup> <a name="trialConfig" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.trialConfig"></a>

```java
public GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList getTrialConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList">GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `editionConfigInput`<sup>Optional</sup> <a name="editionConfigInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.editionConfigInput"></a>

```java
public java.lang.String getEditionConfigInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.filterInput"></a>

```java
public GoogleStorageControlOrganizationIntelligenceConfigFilter getFilterInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter">GoogleStorageControlOrganizationIntelligenceConfigFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts">GoogleStorageControlOrganizationIntelligenceConfigTimeouts</a>

---

##### `editionConfig`<sup>Required</sup> <a name="editionConfig" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.editionConfig"></a>

```java
public java.lang.String getEditionConfig();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageControlOrganizationIntelligenceConfigConfig <a name="GoogleStorageControlOrganizationIntelligenceConfigConfig" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_control_organization_intelligence_config.GoogleStorageControlOrganizationIntelligenceConfigConfig;

GoogleStorageControlOrganizationIntelligenceConfigConfig.builder()
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
    .name(java.lang.String)
//  .editionConfig(java.lang.String)
//  .filter(GoogleStorageControlOrganizationIntelligenceConfigFilter)
//  .id(java.lang.String)
//  .timeouts(GoogleStorageControlOrganizationIntelligenceConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.name">name</a></code> | <code>java.lang.String</code> | Identifier of the GCP Organization. For GCP org, this field should be organization number. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.editionConfig">editionConfig</a></code> | <code>java.lang.String</code> | Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, DISABLED, TRIAL and STANDARD. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter">GoogleStorageControlOrganizationIntelligenceConfigFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_organization_intelligence_config#id GoogleStorageControlOrganizationIntelligenceConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts">GoogleStorageControlOrganizationIntelligenceConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Identifier of the GCP Organization. For GCP org, this field should be organization number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_organization_intelligence_config#name GoogleStorageControlOrganizationIntelligenceConfig#name}

---

##### `editionConfig`<sup>Optional</sup> <a name="editionConfig" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.editionConfig"></a>

```java
public java.lang.String getEditionConfig();
```

- *Type:* java.lang.String

Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, DISABLED, TRIAL and STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_organization_intelligence_config#edition_config GoogleStorageControlOrganizationIntelligenceConfig#edition_config}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.filter"></a>

```java
public GoogleStorageControlOrganizationIntelligenceConfigFilter getFilter();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter">GoogleStorageControlOrganizationIntelligenceConfigFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_organization_intelligence_config#filter GoogleStorageControlOrganizationIntelligenceConfig#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_organization_intelligence_config#id GoogleStorageControlOrganizationIntelligenceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.timeouts"></a>

```java
public GoogleStorageControlOrganizationIntelligenceConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts">GoogleStorageControlOrganizationIntelligenceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_organization_intelligence_config#timeouts GoogleStorageControlOrganizationIntelligenceConfig#timeouts}

---

### GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig <a name="GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_control_organization_intelligence_config.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig;

GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig.builder()
    .build();
```


### GoogleStorageControlOrganizationIntelligenceConfigFilter <a name="GoogleStorageControlOrganizationIntelligenceConfigFilter" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_control_organization_intelligence_config.GoogleStorageControlOrganizationIntelligenceConfigFilter;

GoogleStorageControlOrganizationIntelligenceConfigFilter.builder()
//  .excludedCloudStorageBuckets(GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets)
//  .excludedCloudStorageLocations(GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations)
//  .includedCloudStorageBuckets(GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets)
//  .includedCloudStorageLocations(GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter.property.excludedCloudStorageBuckets">excludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | excluded_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter.property.excludedCloudStorageLocations">excludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | excluded_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter.property.includedCloudStorageBuckets">includedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | included_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter.property.includedCloudStorageLocations">includedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | included_cloud_storage_locations block. |

---

##### `excludedCloudStorageBuckets`<sup>Optional</sup> <a name="excludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter.property.excludedCloudStorageBuckets"></a>

```java
public GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets getExcludedCloudStorageBuckets();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

excluded_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_organization_intelligence_config#excluded_cloud_storage_buckets GoogleStorageControlOrganizationIntelligenceConfig#excluded_cloud_storage_buckets}

---

##### `excludedCloudStorageLocations`<sup>Optional</sup> <a name="excludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter.property.excludedCloudStorageLocations"></a>

```java
public GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations getExcludedCloudStorageLocations();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a>

excluded_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_organization_intelligence_config#excluded_cloud_storage_locations GoogleStorageControlOrganizationIntelligenceConfig#excluded_cloud_storage_locations}

---

##### `includedCloudStorageBuckets`<sup>Optional</sup> <a name="includedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter.property.includedCloudStorageBuckets"></a>

```java
public GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets getIncludedCloudStorageBuckets();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

included_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_organization_intelligence_config#included_cloud_storage_buckets GoogleStorageControlOrganizationIntelligenceConfig#included_cloud_storage_buckets}

---

##### `includedCloudStorageLocations`<sup>Optional</sup> <a name="includedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter.property.includedCloudStorageLocations"></a>

```java
public GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations getIncludedCloudStorageLocations();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a>

included_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_organization_intelligence_config#included_cloud_storage_locations GoogleStorageControlOrganizationIntelligenceConfig#included_cloud_storage_locations}

---

### GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets <a name="GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_control_organization_intelligence_config.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets;

GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets.builder()
    .bucketIdRegexes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets.property.bucketIdRegexes">bucketIdRegexes</a></code> | <code>java.util.List<java.lang.String></code> | List of bucket id regexes to exclude in the storage intelligence plan. |

---

##### `bucketIdRegexes`<sup>Required</sup> <a name="bucketIdRegexes" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets.property.bucketIdRegexes"></a>

```java
public java.util.List<java.lang.String> getBucketIdRegexes();
```

- *Type:* java.util.List<java.lang.String>

List of bucket id regexes to exclude in the storage intelligence plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_organization_intelligence_config#bucket_id_regexes GoogleStorageControlOrganizationIntelligenceConfig#bucket_id_regexes}

---

### GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations <a name="GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_control_organization_intelligence_config.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations;

GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations.builder()
    .locations(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations.property.locations">locations</a></code> | <code>java.util.List<java.lang.String></code> | List of locations. |

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations.property.locations"></a>

```java
public java.util.List<java.lang.String> getLocations();
```

- *Type:* java.util.List<java.lang.String>

List of locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_organization_intelligence_config#locations GoogleStorageControlOrganizationIntelligenceConfig#locations}

---

### GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets <a name="GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_control_organization_intelligence_config.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets;

GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets.builder()
    .bucketIdRegexes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes">bucketIdRegexes</a></code> | <code>java.util.List<java.lang.String></code> | List of bucket id regexes to exclude in the storage intelligence plan. |

---

##### `bucketIdRegexes`<sup>Required</sup> <a name="bucketIdRegexes" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes"></a>

```java
public java.util.List<java.lang.String> getBucketIdRegexes();
```

- *Type:* java.util.List<java.lang.String>

List of bucket id regexes to exclude in the storage intelligence plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_organization_intelligence_config#bucket_id_regexes GoogleStorageControlOrganizationIntelligenceConfig#bucket_id_regexes}

---

### GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations <a name="GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_control_organization_intelligence_config.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations;

GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations.builder()
    .locations(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations.property.locations">locations</a></code> | <code>java.util.List<java.lang.String></code> | List of locations. |

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations.property.locations"></a>

```java
public java.util.List<java.lang.String> getLocations();
```

- *Type:* java.util.List<java.lang.String>

List of locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_organization_intelligence_config#locations GoogleStorageControlOrganizationIntelligenceConfig#locations}

---

### GoogleStorageControlOrganizationIntelligenceConfigTimeouts <a name="GoogleStorageControlOrganizationIntelligenceConfigTimeouts" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_control_organization_intelligence_config.GoogleStorageControlOrganizationIntelligenceConfigTimeouts;

GoogleStorageControlOrganizationIntelligenceConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_organization_intelligence_config#create GoogleStorageControlOrganizationIntelligenceConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_organization_intelligence_config#delete GoogleStorageControlOrganizationIntelligenceConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_organization_intelligence_config#update GoogleStorageControlOrganizationIntelligenceConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_organization_intelligence_config#create GoogleStorageControlOrganizationIntelligenceConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_organization_intelligence_config#delete GoogleStorageControlOrganizationIntelligenceConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_organization_intelligence_config#update GoogleStorageControlOrganizationIntelligenceConfig#update}.

---

### GoogleStorageControlOrganizationIntelligenceConfigTrialConfig <a name="GoogleStorageControlOrganizationIntelligenceConfigTrialConfig" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_control_organization_intelligence_config.GoogleStorageControlOrganizationIntelligenceConfigTrialConfig;

GoogleStorageControlOrganizationIntelligenceConfigTrialConfig.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList <a name="GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_control_organization_intelligence_config.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList;

new GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.get"></a>

```java
public GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference <a name="GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_control_organization_intelligence_config.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference;

new GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition">effectiveEdition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig">intelligenceConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig">GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectiveEdition`<sup>Required</sup> <a name="effectiveEdition" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition"></a>

```java
public java.lang.String getEffectiveEdition();
```

- *Type:* java.lang.String

---

##### `intelligenceConfig`<sup>Required</sup> <a name="intelligenceConfig" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig"></a>

```java
public java.lang.String getIntelligenceConfig();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue"></a>

```java
public GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig">GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig</a>

---


### GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference <a name="GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_control_organization_intelligence_config.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference;

new GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput">bucketIdRegexesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">bucketIdRegexes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketIdRegexesInput`<sup>Optional</sup> <a name="bucketIdRegexesInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput"></a>

```java
public java.util.List<java.lang.String> getBucketIdRegexesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bucketIdRegexes`<sup>Required</sup> <a name="bucketIdRegexes" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```java
public java.util.List<java.lang.String> getBucketIdRegexes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```java
public GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---


### GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference <a name="GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_control_organization_intelligence_config.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference;

new GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locationsInput">locationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locationsInput"></a>

```java
public java.util.List<java.lang.String> getLocationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations"></a>

```java
public java.util.List<java.lang.String> getLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```java
public GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---


### GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference <a name="GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_control_organization_intelligence_config.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference;

new GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput">bucketIdRegexesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">bucketIdRegexes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketIdRegexesInput`<sup>Optional</sup> <a name="bucketIdRegexesInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput"></a>

```java
public java.util.List<java.lang.String> getBucketIdRegexesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bucketIdRegexes`<sup>Required</sup> <a name="bucketIdRegexes" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```java
public java.util.List<java.lang.String> getBucketIdRegexes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```java
public GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---


### GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference <a name="GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_control_organization_intelligence_config.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference;

new GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locationsInput">locationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locationsInput"></a>

```java
public java.util.List<java.lang.String> getLocationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations"></a>

```java
public java.util.List<java.lang.String> getLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```java
public GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---


### GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference <a name="GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_control_organization_intelligence_config.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference;

new GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets">putExcludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations">putExcludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets">putIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations">putIncludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageBuckets">resetExcludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageLocations">resetExcludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageBuckets">resetIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageLocations">resetIncludedCloudStorageLocations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExcludedCloudStorageBuckets` <a name="putExcludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets"></a>

```java
public void putExcludedCloudStorageBuckets(GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---

##### `putExcludedCloudStorageLocations` <a name="putExcludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations"></a>

```java
public void putExcludedCloudStorageLocations(GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---

##### `putIncludedCloudStorageBuckets` <a name="putIncludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets"></a>

```java
public void putIncludedCloudStorageBuckets(GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---

##### `putIncludedCloudStorageLocations` <a name="putIncludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations"></a>

```java
public void putIncludedCloudStorageLocations(GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---

##### `resetExcludedCloudStorageBuckets` <a name="resetExcludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageBuckets"></a>

```java
public void resetExcludedCloudStorageBuckets()
```

##### `resetExcludedCloudStorageLocations` <a name="resetExcludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageLocations"></a>

```java
public void resetExcludedCloudStorageLocations()
```

##### `resetIncludedCloudStorageBuckets` <a name="resetIncludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageBuckets"></a>

```java
public void resetIncludedCloudStorageBuckets()
```

##### `resetIncludedCloudStorageLocations` <a name="resetIncludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageLocations"></a>

```java
public void resetIncludedCloudStorageLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets">excludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations">excludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets">includedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations">includedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBucketsInput">excludedCloudStorageBucketsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocationsInput">excludedCloudStorageLocationsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageBucketsInput">includedCloudStorageBucketsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocationsInput">includedCloudStorageLocationsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter">GoogleStorageControlOrganizationIntelligenceConfigFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludedCloudStorageBuckets`<sup>Required</sup> <a name="excludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets"></a>

```java
public GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference getExcludedCloudStorageBuckets();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference</a>

---

##### `excludedCloudStorageLocations`<sup>Required</sup> <a name="excludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations"></a>

```java
public GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference getExcludedCloudStorageLocations();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference</a>

---

##### `includedCloudStorageBuckets`<sup>Required</sup> <a name="includedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets"></a>

```java
public GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference getIncludedCloudStorageBuckets();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference</a>

---

##### `includedCloudStorageLocations`<sup>Required</sup> <a name="includedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations"></a>

```java
public GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference getIncludedCloudStorageLocations();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference</a>

---

##### `excludedCloudStorageBucketsInput`<sup>Optional</sup> <a name="excludedCloudStorageBucketsInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBucketsInput"></a>

```java
public GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets getExcludedCloudStorageBucketsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---

##### `excludedCloudStorageLocationsInput`<sup>Optional</sup> <a name="excludedCloudStorageLocationsInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocationsInput"></a>

```java
public GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations getExcludedCloudStorageLocationsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---

##### `includedCloudStorageBucketsInput`<sup>Optional</sup> <a name="includedCloudStorageBucketsInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageBucketsInput"></a>

```java
public GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets getIncludedCloudStorageBucketsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---

##### `includedCloudStorageLocationsInput`<sup>Optional</sup> <a name="includedCloudStorageLocationsInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocationsInput"></a>

```java
public GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations getIncludedCloudStorageLocationsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.internalValue"></a>

```java
public GoogleStorageControlOrganizationIntelligenceConfigFilter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter">GoogleStorageControlOrganizationIntelligenceConfigFilter</a>

---


### GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference <a name="GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_control_organization_intelligence_config.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference;

new GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts">GoogleStorageControlOrganizationIntelligenceConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts">GoogleStorageControlOrganizationIntelligenceConfigTimeouts</a>

---


### GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList <a name="GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_control_organization_intelligence_config.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList;

new GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.get"></a>

```java
public GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference <a name="GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_storage_control_organization_intelligence_config.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference;

new GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfig">GoogleStorageControlOrganizationIntelligenceConfigTrialConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.internalValue"></a>

```java
public GoogleStorageControlOrganizationIntelligenceConfigTrialConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfig">GoogleStorageControlOrganizationIntelligenceConfigTrialConfig</a>

---



