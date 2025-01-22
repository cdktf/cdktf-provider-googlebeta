# `googleKmsCryptoKeyVersion` Submodule <a name="`googleKmsCryptoKeyVersion` Submodule" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleKmsCryptoKeyVersion <a name="GoogleKmsCryptoKeyVersion" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key_version google_kms_crypto_key_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key_version.GoogleKmsCryptoKeyVersion;

GoogleKmsCryptoKeyVersion.Builder.create(Construct scope, java.lang.String id)
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
    .cryptoKey(java.lang.String)
//  .externalProtectionLevelOptions(GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .timeouts(GoogleKmsCryptoKeyVersionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.cryptoKey">cryptoKey</a></code> | <code>java.lang.String</code> | The name of the cryptoKey associated with the CryptoKeyVersions. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyring}}/cryptoKeys/{{cryptoKey}}''. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.externalProtectionLevelOptions">externalProtectionLevelOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions</a></code> | external_protection_level_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key_version#id GoogleKmsCryptoKeyVersion#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | The current state of the CryptoKeyVersion. Possible values: ["PENDING_GENERATION", "ENABLED", "DISABLED", "DESTROYED", "DESTROY_SCHEDULED", "PENDING_IMPORT", "IMPORT_FAILED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts">GoogleKmsCryptoKeyVersionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cryptoKey`<sup>Required</sup> <a name="cryptoKey" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.cryptoKey"></a>

- *Type:* java.lang.String

The name of the cryptoKey associated with the CryptoKeyVersions. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyring}}/cryptoKeys/{{cryptoKey}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key_version#crypto_key GoogleKmsCryptoKeyVersion#crypto_key}

---

##### `externalProtectionLevelOptions`<sup>Optional</sup> <a name="externalProtectionLevelOptions" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.externalProtectionLevelOptions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions</a>

external_protection_level_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key_version#external_protection_level_options GoogleKmsCryptoKeyVersion#external_protection_level_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key_version#id GoogleKmsCryptoKeyVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.state"></a>

- *Type:* java.lang.String

The current state of the CryptoKeyVersion. Possible values: ["PENDING_GENERATION", "ENABLED", "DISABLED", "DESTROYED", "DESTROY_SCHEDULED", "PENDING_IMPORT", "IMPORT_FAILED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key_version#state GoogleKmsCryptoKeyVersion#state}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts">GoogleKmsCryptoKeyVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key_version#timeouts GoogleKmsCryptoKeyVersion#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.putExternalProtectionLevelOptions">putExternalProtectionLevelOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetExternalProtectionLevelOptions">resetExternalProtectionLevelOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExternalProtectionLevelOptions` <a name="putExternalProtectionLevelOptions" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.putExternalProtectionLevelOptions"></a>

```java
public void putExternalProtectionLevelOptions(GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.putExternalProtectionLevelOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.putTimeouts"></a>

```java
public void putTimeouts(GoogleKmsCryptoKeyVersionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts">GoogleKmsCryptoKeyVersionTimeouts</a>

---

##### `resetExternalProtectionLevelOptions` <a name="resetExternalProtectionLevelOptions" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetExternalProtectionLevelOptions"></a>

```java
public void resetExternalProtectionLevelOptions()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetState"></a>

```java
public void resetState()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleKmsCryptoKeyVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key_version.GoogleKmsCryptoKeyVersion;

GoogleKmsCryptoKeyVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key_version.GoogleKmsCryptoKeyVersion;

GoogleKmsCryptoKeyVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key_version.GoogleKmsCryptoKeyVersion;

GoogleKmsCryptoKeyVersion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key_version.GoogleKmsCryptoKeyVersion;

GoogleKmsCryptoKeyVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleKmsCryptoKeyVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleKmsCryptoKeyVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleKmsCryptoKeyVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleKmsCryptoKeyVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleKmsCryptoKeyVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.attestation">attestation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList">GoogleKmsCryptoKeyVersionAttestationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.externalProtectionLevelOptions">externalProtectionLevelOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.generateTime">generateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.protectionLevel">protectionLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference">GoogleKmsCryptoKeyVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.cryptoKeyInput">cryptoKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.externalProtectionLevelOptionsInput">externalProtectionLevelOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts">GoogleKmsCryptoKeyVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.cryptoKey">cryptoKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `attestation`<sup>Required</sup> <a name="attestation" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.attestation"></a>

```java
public GoogleKmsCryptoKeyVersionAttestationList getAttestation();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList">GoogleKmsCryptoKeyVersionAttestationList</a>

---

##### `externalProtectionLevelOptions`<sup>Required</sup> <a name="externalProtectionLevelOptions" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.externalProtectionLevelOptions"></a>

```java
public GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference getExternalProtectionLevelOptions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference</a>

---

##### `generateTime`<sup>Required</sup> <a name="generateTime" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.generateTime"></a>

```java
public java.lang.String getGenerateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protectionLevel`<sup>Required</sup> <a name="protectionLevel" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.protectionLevel"></a>

```java
public java.lang.String getProtectionLevel();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.timeouts"></a>

```java
public GoogleKmsCryptoKeyVersionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference">GoogleKmsCryptoKeyVersionTimeoutsOutputReference</a>

---

##### `cryptoKeyInput`<sup>Optional</sup> <a name="cryptoKeyInput" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.cryptoKeyInput"></a>

```java
public java.lang.String getCryptoKeyInput();
```

- *Type:* java.lang.String

---

##### `externalProtectionLevelOptionsInput`<sup>Optional</sup> <a name="externalProtectionLevelOptionsInput" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.externalProtectionLevelOptionsInput"></a>

```java
public GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions getExternalProtectionLevelOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts">GoogleKmsCryptoKeyVersionTimeouts</a>

---

##### `cryptoKey`<sup>Required</sup> <a name="cryptoKey" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.cryptoKey"></a>

```java
public java.lang.String getCryptoKey();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleKmsCryptoKeyVersionAttestation <a name="GoogleKmsCryptoKeyVersionAttestation" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key_version.GoogleKmsCryptoKeyVersionAttestation;

GoogleKmsCryptoKeyVersionAttestation.builder()
    .build();
```


### GoogleKmsCryptoKeyVersionAttestationCertChains <a name="GoogleKmsCryptoKeyVersionAttestationCertChains" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChains.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key_version.GoogleKmsCryptoKeyVersionAttestationCertChains;

GoogleKmsCryptoKeyVersionAttestationCertChains.builder()
    .build();
```


### GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions <a name="GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key_version.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions;

GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions.builder()
    .build();
```


### GoogleKmsCryptoKeyVersionConfig <a name="GoogleKmsCryptoKeyVersionConfig" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key_version.GoogleKmsCryptoKeyVersionConfig;

GoogleKmsCryptoKeyVersionConfig.builder()
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
    .cryptoKey(java.lang.String)
//  .externalProtectionLevelOptions(GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .timeouts(GoogleKmsCryptoKeyVersionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.cryptoKey">cryptoKey</a></code> | <code>java.lang.String</code> | The name of the cryptoKey associated with the CryptoKeyVersions. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyring}}/cryptoKeys/{{cryptoKey}}''. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.externalProtectionLevelOptions">externalProtectionLevelOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions</a></code> | external_protection_level_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key_version#id GoogleKmsCryptoKeyVersion#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.state">state</a></code> | <code>java.lang.String</code> | The current state of the CryptoKeyVersion. Possible values: ["PENDING_GENERATION", "ENABLED", "DISABLED", "DESTROYED", "DESTROY_SCHEDULED", "PENDING_IMPORT", "IMPORT_FAILED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts">GoogleKmsCryptoKeyVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cryptoKey`<sup>Required</sup> <a name="cryptoKey" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.cryptoKey"></a>

```java
public java.lang.String getCryptoKey();
```

- *Type:* java.lang.String

The name of the cryptoKey associated with the CryptoKeyVersions. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyring}}/cryptoKeys/{{cryptoKey}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key_version#crypto_key GoogleKmsCryptoKeyVersion#crypto_key}

---

##### `externalProtectionLevelOptions`<sup>Optional</sup> <a name="externalProtectionLevelOptions" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.externalProtectionLevelOptions"></a>

```java
public GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions getExternalProtectionLevelOptions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions</a>

external_protection_level_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key_version#external_protection_level_options GoogleKmsCryptoKeyVersion#external_protection_level_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key_version#id GoogleKmsCryptoKeyVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

The current state of the CryptoKeyVersion. Possible values: ["PENDING_GENERATION", "ENABLED", "DISABLED", "DESTROYED", "DESTROY_SCHEDULED", "PENDING_IMPORT", "IMPORT_FAILED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key_version#state GoogleKmsCryptoKeyVersion#state}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.timeouts"></a>

```java
public GoogleKmsCryptoKeyVersionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts">GoogleKmsCryptoKeyVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key_version#timeouts GoogleKmsCryptoKeyVersion#timeouts}

---

### GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions <a name="GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key_version.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions;

GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions.builder()
//  .ekmConnectionKeyPath(java.lang.String)
//  .externalKeyUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions.property.ekmConnectionKeyPath">ekmConnectionKeyPath</a></code> | <code>java.lang.String</code> | The path to the external key material on the EKM when using EkmConnection e.g., "v0/my/key". Set this field instead of externalKeyUri when using an EkmConnection. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions.property.externalKeyUri">externalKeyUri</a></code> | <code>java.lang.String</code> | The URI for an external resource that this CryptoKeyVersion represents. |

---

##### `ekmConnectionKeyPath`<sup>Optional</sup> <a name="ekmConnectionKeyPath" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions.property.ekmConnectionKeyPath"></a>

```java
public java.lang.String getEkmConnectionKeyPath();
```

- *Type:* java.lang.String

The path to the external key material on the EKM when using EkmConnection e.g., "v0/my/key". Set this field instead of externalKeyUri when using an EkmConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key_version#ekm_connection_key_path GoogleKmsCryptoKeyVersion#ekm_connection_key_path}

---

##### `externalKeyUri`<sup>Optional</sup> <a name="externalKeyUri" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions.property.externalKeyUri"></a>

```java
public java.lang.String getExternalKeyUri();
```

- *Type:* java.lang.String

The URI for an external resource that this CryptoKeyVersion represents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key_version#external_key_uri GoogleKmsCryptoKeyVersion#external_key_uri}

---

### GoogleKmsCryptoKeyVersionTimeouts <a name="GoogleKmsCryptoKeyVersionTimeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key_version.GoogleKmsCryptoKeyVersionTimeouts;

GoogleKmsCryptoKeyVersionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key_version#create GoogleKmsCryptoKeyVersion#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key_version#delete GoogleKmsCryptoKeyVersion#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key_version#update GoogleKmsCryptoKeyVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key_version#create GoogleKmsCryptoKeyVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key_version#delete GoogleKmsCryptoKeyVersion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key_version#update GoogleKmsCryptoKeyVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleKmsCryptoKeyVersionAttestationCertChainsList <a name="GoogleKmsCryptoKeyVersionAttestationCertChainsList" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key_version.GoogleKmsCryptoKeyVersionAttestationCertChainsList;

new GoogleKmsCryptoKeyVersionAttestationCertChainsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.get"></a>

```java
public GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference <a name="GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key_version.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference;

new GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.caviumCerts">caviumCerts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.googleCardCerts">googleCardCerts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.googlePartitionCerts">googlePartitionCerts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChains">GoogleKmsCryptoKeyVersionAttestationCertChains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caviumCerts`<sup>Required</sup> <a name="caviumCerts" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.caviumCerts"></a>

```java
public java.util.List<java.lang.String> getCaviumCerts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `googleCardCerts`<sup>Required</sup> <a name="googleCardCerts" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.googleCardCerts"></a>

```java
public java.util.List<java.lang.String> getGoogleCardCerts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `googlePartitionCerts`<sup>Required</sup> <a name="googlePartitionCerts" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.googlePartitionCerts"></a>

```java
public java.util.List<java.lang.String> getGooglePartitionCerts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.internalValue"></a>

```java
public GoogleKmsCryptoKeyVersionAttestationCertChains getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChains">GoogleKmsCryptoKeyVersionAttestationCertChains</a>

---


### GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList <a name="GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key_version.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList;

new GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.get"></a>

```java
public GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference <a name="GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key_version.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference;

new GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPath">ekmConnectionKeyPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.externalKeyUri">externalKeyUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ekmConnectionKeyPath`<sup>Required</sup> <a name="ekmConnectionKeyPath" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPath"></a>

```java
public java.lang.String getEkmConnectionKeyPath();
```

- *Type:* java.lang.String

---

##### `externalKeyUri`<sup>Required</sup> <a name="externalKeyUri" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.externalKeyUri"></a>

```java
public java.lang.String getExternalKeyUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.internalValue"></a>

```java
public GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions</a>

---


### GoogleKmsCryptoKeyVersionAttestationList <a name="GoogleKmsCryptoKeyVersionAttestationList" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key_version.GoogleKmsCryptoKeyVersionAttestationList;

new GoogleKmsCryptoKeyVersionAttestationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.get"></a>

```java
public GoogleKmsCryptoKeyVersionAttestationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleKmsCryptoKeyVersionAttestationOutputReference <a name="GoogleKmsCryptoKeyVersionAttestationOutputReference" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key_version.GoogleKmsCryptoKeyVersionAttestationOutputReference;

new GoogleKmsCryptoKeyVersionAttestationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.certChains">certChains</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList">GoogleKmsCryptoKeyVersionAttestationCertChainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.externalProtectionLevelOptions">externalProtectionLevelOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList">GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestation">GoogleKmsCryptoKeyVersionAttestation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certChains`<sup>Required</sup> <a name="certChains" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.certChains"></a>

```java
public GoogleKmsCryptoKeyVersionAttestationCertChainsList getCertChains();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList">GoogleKmsCryptoKeyVersionAttestationCertChainsList</a>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `externalProtectionLevelOptions`<sup>Required</sup> <a name="externalProtectionLevelOptions" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.externalProtectionLevelOptions"></a>

```java
public GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList getExternalProtectionLevelOptions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList">GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList</a>

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.internalValue"></a>

```java
public GoogleKmsCryptoKeyVersionAttestation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestation">GoogleKmsCryptoKeyVersionAttestation</a>

---


### GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference <a name="GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key_version.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference;

new GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resetEkmConnectionKeyPath">resetEkmConnectionKeyPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resetExternalKeyUri">resetExternalKeyUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEkmConnectionKeyPath` <a name="resetEkmConnectionKeyPath" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resetEkmConnectionKeyPath"></a>

```java
public void resetEkmConnectionKeyPath()
```

##### `resetExternalKeyUri` <a name="resetExternalKeyUri" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resetExternalKeyUri"></a>

```java
public void resetExternalKeyUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPathInput">ekmConnectionKeyPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.externalKeyUriInput">externalKeyUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPath">ekmConnectionKeyPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.externalKeyUri">externalKeyUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ekmConnectionKeyPathInput`<sup>Optional</sup> <a name="ekmConnectionKeyPathInput" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPathInput"></a>

```java
public java.lang.String getEkmConnectionKeyPathInput();
```

- *Type:* java.lang.String

---

##### `externalKeyUriInput`<sup>Optional</sup> <a name="externalKeyUriInput" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.externalKeyUriInput"></a>

```java
public java.lang.String getExternalKeyUriInput();
```

- *Type:* java.lang.String

---

##### `ekmConnectionKeyPath`<sup>Required</sup> <a name="ekmConnectionKeyPath" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPath"></a>

```java
public java.lang.String getEkmConnectionKeyPath();
```

- *Type:* java.lang.String

---

##### `externalKeyUri`<sup>Required</sup> <a name="externalKeyUri" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.externalKeyUri"></a>

```java
public java.lang.String getExternalKeyUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.internalValue"></a>

```java
public GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions</a>

---


### GoogleKmsCryptoKeyVersionTimeoutsOutputReference <a name="GoogleKmsCryptoKeyVersionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key_version.GoogleKmsCryptoKeyVersionTimeoutsOutputReference;

new GoogleKmsCryptoKeyVersionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts">GoogleKmsCryptoKeyVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts">GoogleKmsCryptoKeyVersionTimeouts</a>

---



