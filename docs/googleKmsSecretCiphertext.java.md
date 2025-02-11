# `googleKmsSecretCiphertext` Submodule <a name="`googleKmsSecretCiphertext` Submodule" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleKmsSecretCiphertext <a name="GoogleKmsSecretCiphertext" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_secret_ciphertext google_kms_secret_ciphertext}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_secret_ciphertext.GoogleKmsSecretCiphertext;

GoogleKmsSecretCiphertext.Builder.create(Construct scope, java.lang.String id)
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
    .plaintext(java.lang.String)
//  .additionalAuthenticatedData(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleKmsSecretCiphertextTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.cryptoKey">cryptoKey</a></code> | <code>java.lang.String</code> | The full name of the CryptoKey that will be used to encrypt the provided plaintext. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}''. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.plaintext">plaintext</a></code> | <code>java.lang.String</code> | The plaintext to be encrypted. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.additionalAuthenticatedData">additionalAuthenticatedData</a></code> | <code>java.lang.String</code> | The additional authenticated data used for integrity checks during encryption and decryption. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_secret_ciphertext#id GoogleKmsSecretCiphertext#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts">GoogleKmsSecretCiphertextTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cryptoKey`<sup>Required</sup> <a name="cryptoKey" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.cryptoKey"></a>

- *Type:* java.lang.String

The full name of the CryptoKey that will be used to encrypt the provided plaintext. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_secret_ciphertext#crypto_key GoogleKmsSecretCiphertext#crypto_key}

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.plaintext"></a>

- *Type:* java.lang.String

The plaintext to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_secret_ciphertext#plaintext GoogleKmsSecretCiphertext#plaintext}

---

##### `additionalAuthenticatedData`<sup>Optional</sup> <a name="additionalAuthenticatedData" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.additionalAuthenticatedData"></a>

- *Type:* java.lang.String

The additional authenticated data used for integrity checks during encryption and decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_secret_ciphertext#additional_authenticated_data GoogleKmsSecretCiphertext#additional_authenticated_data}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_secret_ciphertext#id GoogleKmsSecretCiphertext#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts">GoogleKmsSecretCiphertextTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_secret_ciphertext#timeouts GoogleKmsSecretCiphertext#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.resetAdditionalAuthenticatedData">resetAdditionalAuthenticatedData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.putTimeouts"></a>

```java
public void putTimeouts(GoogleKmsSecretCiphertextTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts">GoogleKmsSecretCiphertextTimeouts</a>

---

##### `resetAdditionalAuthenticatedData` <a name="resetAdditionalAuthenticatedData" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.resetAdditionalAuthenticatedData"></a>

```java
public void resetAdditionalAuthenticatedData()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleKmsSecretCiphertext resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_secret_ciphertext.GoogleKmsSecretCiphertext;

GoogleKmsSecretCiphertext.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_secret_ciphertext.GoogleKmsSecretCiphertext;

GoogleKmsSecretCiphertext.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_secret_ciphertext.GoogleKmsSecretCiphertext;

GoogleKmsSecretCiphertext.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_secret_ciphertext.GoogleKmsSecretCiphertext;

GoogleKmsSecretCiphertext.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleKmsSecretCiphertext.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleKmsSecretCiphertext resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleKmsSecretCiphertext to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleKmsSecretCiphertext that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_secret_ciphertext#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleKmsSecretCiphertext to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.ciphertext">ciphertext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference">GoogleKmsSecretCiphertextTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.additionalAuthenticatedDataInput">additionalAuthenticatedDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.cryptoKeyInput">cryptoKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.plaintextInput">plaintextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts">GoogleKmsSecretCiphertextTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.additionalAuthenticatedData">additionalAuthenticatedData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.cryptoKey">cryptoKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.ciphertext"></a>

```java
public java.lang.String getCiphertext();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.timeouts"></a>

```java
public GoogleKmsSecretCiphertextTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference">GoogleKmsSecretCiphertextTimeoutsOutputReference</a>

---

##### `additionalAuthenticatedDataInput`<sup>Optional</sup> <a name="additionalAuthenticatedDataInput" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.additionalAuthenticatedDataInput"></a>

```java
public java.lang.String getAdditionalAuthenticatedDataInput();
```

- *Type:* java.lang.String

---

##### `cryptoKeyInput`<sup>Optional</sup> <a name="cryptoKeyInput" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.cryptoKeyInput"></a>

```java
public java.lang.String getCryptoKeyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `plaintextInput`<sup>Optional</sup> <a name="plaintextInput" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.plaintextInput"></a>

```java
public java.lang.String getPlaintextInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts">GoogleKmsSecretCiphertextTimeouts</a>

---

##### `additionalAuthenticatedData`<sup>Required</sup> <a name="additionalAuthenticatedData" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.additionalAuthenticatedData"></a>

```java
public java.lang.String getAdditionalAuthenticatedData();
```

- *Type:* java.lang.String

---

##### `cryptoKey`<sup>Required</sup> <a name="cryptoKey" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.cryptoKey"></a>

```java
public java.lang.String getCryptoKey();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleKmsSecretCiphertextConfig <a name="GoogleKmsSecretCiphertextConfig" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_secret_ciphertext.GoogleKmsSecretCiphertextConfig;

GoogleKmsSecretCiphertextConfig.builder()
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
    .plaintext(java.lang.String)
//  .additionalAuthenticatedData(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleKmsSecretCiphertextTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.cryptoKey">cryptoKey</a></code> | <code>java.lang.String</code> | The full name of the CryptoKey that will be used to encrypt the provided plaintext. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}''. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | The plaintext to be encrypted. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.additionalAuthenticatedData">additionalAuthenticatedData</a></code> | <code>java.lang.String</code> | The additional authenticated data used for integrity checks during encryption and decryption. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_secret_ciphertext#id GoogleKmsSecretCiphertext#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts">GoogleKmsSecretCiphertextTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cryptoKey`<sup>Required</sup> <a name="cryptoKey" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.cryptoKey"></a>

```java
public java.lang.String getCryptoKey();
```

- *Type:* java.lang.String

The full name of the CryptoKey that will be used to encrypt the provided plaintext. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_secret_ciphertext#crypto_key GoogleKmsSecretCiphertext#crypto_key}

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

The plaintext to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_secret_ciphertext#plaintext GoogleKmsSecretCiphertext#plaintext}

---

##### `additionalAuthenticatedData`<sup>Optional</sup> <a name="additionalAuthenticatedData" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.additionalAuthenticatedData"></a>

```java
public java.lang.String getAdditionalAuthenticatedData();
```

- *Type:* java.lang.String

The additional authenticated data used for integrity checks during encryption and decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_secret_ciphertext#additional_authenticated_data GoogleKmsSecretCiphertext#additional_authenticated_data}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_secret_ciphertext#id GoogleKmsSecretCiphertext#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.timeouts"></a>

```java
public GoogleKmsSecretCiphertextTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts">GoogleKmsSecretCiphertextTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_secret_ciphertext#timeouts GoogleKmsSecretCiphertext#timeouts}

---

### GoogleKmsSecretCiphertextTimeouts <a name="GoogleKmsSecretCiphertextTimeouts" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_secret_ciphertext.GoogleKmsSecretCiphertextTimeouts;

GoogleKmsSecretCiphertextTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_secret_ciphertext#create GoogleKmsSecretCiphertext#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_secret_ciphertext#delete GoogleKmsSecretCiphertext#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_secret_ciphertext#create GoogleKmsSecretCiphertext#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_secret_ciphertext#delete GoogleKmsSecretCiphertext#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleKmsSecretCiphertextTimeoutsOutputReference <a name="GoogleKmsSecretCiphertextTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_secret_ciphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference;

new GoogleKmsSecretCiphertextTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts">GoogleKmsSecretCiphertextTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts">GoogleKmsSecretCiphertextTimeouts</a>

---



