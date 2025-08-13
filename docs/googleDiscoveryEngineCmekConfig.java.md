# `googleDiscoveryEngineCmekConfig` Submodule <a name="`googleDiscoveryEngineCmekConfig` Submodule" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineCmekConfig <a name="GoogleDiscoveryEngineCmekConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_cmek_config google_discovery_engine_cmek_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_cmek_config.GoogleDiscoveryEngineCmekConfig;

GoogleDiscoveryEngineCmekConfig.Builder.create(Construct scope, java.lang.String id)
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
    .kmsKey(java.lang.String)
    .location(java.lang.String)
//  .cmekConfigId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .setDefault(java.lang.Boolean)
//  .setDefault(IResolvable)
//  .singleRegionKeys(IResolvable)
//  .singleRegionKeys(java.util.List<GoogleDiscoveryEngineCmekConfigSingleRegionKeys>)
//  .timeouts(GoogleDiscoveryEngineCmekConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | KMS key resource name which will be used to encrypt resources 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{keyId}'. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the CMEK config should reside. The value can only be one of "us" and "eu". |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.cmekConfigId">cmekConfigId</a></code> | <code>java.lang.String</code> | The unique id of the cmek config. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_cmek_config#id GoogleDiscoveryEngineCmekConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_cmek_config#project GoogleDiscoveryEngineCmekConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.setDefault">setDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set the following CmekConfig as the default to be used for child resources if one is not specified. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.singleRegionKeys">singleRegionKeys</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a>></code> | single_region_keys block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts">GoogleDiscoveryEngineCmekConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.kmsKey"></a>

- *Type:* java.lang.String

KMS key resource name which will be used to encrypt resources 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{keyId}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_cmek_config#kms_key GoogleDiscoveryEngineCmekConfig#kms_key}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The geographic location where the CMEK config should reside. The value can only be one of "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_cmek_config#location GoogleDiscoveryEngineCmekConfig#location}

---

##### `cmekConfigId`<sup>Optional</sup> <a name="cmekConfigId" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.cmekConfigId"></a>

- *Type:* java.lang.String

The unique id of the cmek config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_cmek_config#cmek_config_id GoogleDiscoveryEngineCmekConfig#cmek_config_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_cmek_config#id GoogleDiscoveryEngineCmekConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_cmek_config#project GoogleDiscoveryEngineCmekConfig#project}.

---

##### `setDefault`<sup>Optional</sup> <a name="setDefault" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.setDefault"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set the following CmekConfig as the default to be used for child resources if one is not specified.

The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_cmek_config#set_default GoogleDiscoveryEngineCmekConfig#set_default}

---

##### `singleRegionKeys`<sup>Optional</sup> <a name="singleRegionKeys" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.singleRegionKeys"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a>>

single_region_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_cmek_config#single_region_keys GoogleDiscoveryEngineCmekConfig#single_region_keys}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts">GoogleDiscoveryEngineCmekConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_cmek_config#timeouts GoogleDiscoveryEngineCmekConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.putSingleRegionKeys">putSingleRegionKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetCmekConfigId">resetCmekConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetSetDefault">resetSetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetSingleRegionKeys">resetSingleRegionKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSingleRegionKeys` <a name="putSingleRegionKeys" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.putSingleRegionKeys"></a>

```java
public void putSingleRegionKeys(IResolvable OR java.util.List<GoogleDiscoveryEngineCmekConfigSingleRegionKeys> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.putSingleRegionKeys.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.putTimeouts"></a>

```java
public void putTimeouts(GoogleDiscoveryEngineCmekConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts">GoogleDiscoveryEngineCmekConfigTimeouts</a>

---

##### `resetCmekConfigId` <a name="resetCmekConfigId" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetCmekConfigId"></a>

```java
public void resetCmekConfigId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetSetDefault` <a name="resetSetDefault" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetSetDefault"></a>

```java
public void resetSetDefault()
```

##### `resetSingleRegionKeys` <a name="resetSingleRegionKeys" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetSingleRegionKeys"></a>

```java
public void resetSingleRegionKeys()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDiscoveryEngineCmekConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_cmek_config.GoogleDiscoveryEngineCmekConfig;

GoogleDiscoveryEngineCmekConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_cmek_config.GoogleDiscoveryEngineCmekConfig;

GoogleDiscoveryEngineCmekConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_cmek_config.GoogleDiscoveryEngineCmekConfig;

GoogleDiscoveryEngineCmekConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_cmek_config.GoogleDiscoveryEngineCmekConfig;

GoogleDiscoveryEngineCmekConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDiscoveryEngineCmekConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDiscoveryEngineCmekConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDiscoveryEngineCmekConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDiscoveryEngineCmekConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_cmek_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineCmekConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.isDefault">isDefault</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.kmsKeyVersion">kmsKeyVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.lastRotationTimestampMicros">lastRotationTimestampMicros</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.notebooklmState">notebooklmState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.singleRegionKeys">singleRegionKeys</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList">GoogleDiscoveryEngineCmekConfigSingleRegionKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference">GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.cmekConfigIdInput">cmekConfigIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.setDefaultInput">setDefaultInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.singleRegionKeysInput">singleRegionKeysInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts">GoogleDiscoveryEngineCmekConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.cmekConfigId">cmekConfigId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.setDefault">setDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.isDefault"></a>

```java
public IResolvable getIsDefault();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `kmsKeyVersion`<sup>Required</sup> <a name="kmsKeyVersion" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.kmsKeyVersion"></a>

```java
public java.lang.String getKmsKeyVersion();
```

- *Type:* java.lang.String

---

##### `lastRotationTimestampMicros`<sup>Required</sup> <a name="lastRotationTimestampMicros" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.lastRotationTimestampMicros"></a>

```java
public java.lang.Number getLastRotationTimestampMicros();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `notebooklmState`<sup>Required</sup> <a name="notebooklmState" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.notebooklmState"></a>

```java
public java.lang.String getNotebooklmState();
```

- *Type:* java.lang.String

---

##### `singleRegionKeys`<sup>Required</sup> <a name="singleRegionKeys" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.singleRegionKeys"></a>

```java
public GoogleDiscoveryEngineCmekConfigSingleRegionKeysList getSingleRegionKeys();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList">GoogleDiscoveryEngineCmekConfigSingleRegionKeysList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.timeouts"></a>

```java
public GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference">GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference</a>

---

##### `cmekConfigIdInput`<sup>Optional</sup> <a name="cmekConfigIdInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.cmekConfigIdInput"></a>

```java
public java.lang.String getCmekConfigIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `setDefaultInput`<sup>Optional</sup> <a name="setDefaultInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.setDefaultInput"></a>

```java
public java.lang.Object getSetDefaultInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `singleRegionKeysInput`<sup>Optional</sup> <a name="singleRegionKeysInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.singleRegionKeysInput"></a>

```java
public java.lang.Object getSingleRegionKeysInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts">GoogleDiscoveryEngineCmekConfigTimeouts</a>

---

##### `cmekConfigId`<sup>Required</sup> <a name="cmekConfigId" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.cmekConfigId"></a>

```java
public java.lang.String getCmekConfigId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `setDefault`<sup>Required</sup> <a name="setDefault" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.setDefault"></a>

```java
public java.lang.Object getSetDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineCmekConfigConfig <a name="GoogleDiscoveryEngineCmekConfigConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_cmek_config.GoogleDiscoveryEngineCmekConfigConfig;

GoogleDiscoveryEngineCmekConfigConfig.builder()
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
    .kmsKey(java.lang.String)
    .location(java.lang.String)
//  .cmekConfigId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .setDefault(java.lang.Boolean)
//  .setDefault(IResolvable)
//  .singleRegionKeys(IResolvable)
//  .singleRegionKeys(java.util.List<GoogleDiscoveryEngineCmekConfigSingleRegionKeys>)
//  .timeouts(GoogleDiscoveryEngineCmekConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | KMS key resource name which will be used to encrypt resources 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{keyId}'. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the CMEK config should reside. The value can only be one of "us" and "eu". |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.cmekConfigId">cmekConfigId</a></code> | <code>java.lang.String</code> | The unique id of the cmek config. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_cmek_config#id GoogleDiscoveryEngineCmekConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_cmek_config#project GoogleDiscoveryEngineCmekConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.setDefault">setDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set the following CmekConfig as the default to be used for child resources if one is not specified. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.singleRegionKeys">singleRegionKeys</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a>></code> | single_region_keys block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts">GoogleDiscoveryEngineCmekConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

KMS key resource name which will be used to encrypt resources 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{keyId}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_cmek_config#kms_key GoogleDiscoveryEngineCmekConfig#kms_key}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The geographic location where the CMEK config should reside. The value can only be one of "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_cmek_config#location GoogleDiscoveryEngineCmekConfig#location}

---

##### `cmekConfigId`<sup>Optional</sup> <a name="cmekConfigId" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.cmekConfigId"></a>

```java
public java.lang.String getCmekConfigId();
```

- *Type:* java.lang.String

The unique id of the cmek config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_cmek_config#cmek_config_id GoogleDiscoveryEngineCmekConfig#cmek_config_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_cmek_config#id GoogleDiscoveryEngineCmekConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_cmek_config#project GoogleDiscoveryEngineCmekConfig#project}.

---

##### `setDefault`<sup>Optional</sup> <a name="setDefault" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.setDefault"></a>

```java
public java.lang.Object getSetDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set the following CmekConfig as the default to be used for child resources if one is not specified.

The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_cmek_config#set_default GoogleDiscoveryEngineCmekConfig#set_default}

---

##### `singleRegionKeys`<sup>Optional</sup> <a name="singleRegionKeys" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.singleRegionKeys"></a>

```java
public java.lang.Object getSingleRegionKeys();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a>>

single_region_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_cmek_config#single_region_keys GoogleDiscoveryEngineCmekConfig#single_region_keys}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.timeouts"></a>

```java
public GoogleDiscoveryEngineCmekConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts">GoogleDiscoveryEngineCmekConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_cmek_config#timeouts GoogleDiscoveryEngineCmekConfig#timeouts}

---

### GoogleDiscoveryEngineCmekConfigSingleRegionKeys <a name="GoogleDiscoveryEngineCmekConfigSingleRegionKeys" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_cmek_config.GoogleDiscoveryEngineCmekConfigSingleRegionKeys;

GoogleDiscoveryEngineCmekConfigSingleRegionKeys.builder()
    .kmsKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | Single-regional kms key resource name which will be used to encrypt resources 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{keyId}'. |

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

Single-regional kms key resource name which will be used to encrypt resources 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{keyId}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_cmek_config#kms_key GoogleDiscoveryEngineCmekConfig#kms_key}

---

### GoogleDiscoveryEngineCmekConfigTimeouts <a name="GoogleDiscoveryEngineCmekConfigTimeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_cmek_config.GoogleDiscoveryEngineCmekConfigTimeouts;

GoogleDiscoveryEngineCmekConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_cmek_config#create GoogleDiscoveryEngineCmekConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_cmek_config#delete GoogleDiscoveryEngineCmekConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_cmek_config#update GoogleDiscoveryEngineCmekConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_cmek_config#create GoogleDiscoveryEngineCmekConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_cmek_config#delete GoogleDiscoveryEngineCmekConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_discovery_engine_cmek_config#update GoogleDiscoveryEngineCmekConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineCmekConfigSingleRegionKeysList <a name="GoogleDiscoveryEngineCmekConfigSingleRegionKeysList" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_cmek_config.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList;

new GoogleDiscoveryEngineCmekConfigSingleRegionKeysList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.get"></a>

```java
public GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a>>

---


### GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference <a name="GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_cmek_config.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference;

new GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a>

---


### GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference <a name="GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_discovery_engine_cmek_config.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference;

new GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts">GoogleDiscoveryEngineCmekConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts">GoogleDiscoveryEngineCmekConfigTimeouts</a>

---



