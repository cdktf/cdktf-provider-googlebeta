# `googleKmsCryptoKey` Submodule <a name="`googleKmsCryptoKey` Submodule" id="@cdktf/provider-google-beta.googleKmsCryptoKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleKmsCryptoKey <a name="GoogleKmsCryptoKey" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key google_kms_crypto_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key.GoogleKmsCryptoKey;

GoogleKmsCryptoKey.Builder.create(Construct scope, java.lang.String id)
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
    .keyRing(java.lang.String)
    .name(java.lang.String)
//  .cryptoKeyBackend(java.lang.String)
//  .destroyScheduledDuration(java.lang.String)
//  .id(java.lang.String)
//  .importOnly(java.lang.Boolean)
//  .importOnly(IResolvable)
//  .keyAccessJustificationsPolicy(GoogleKmsCryptoKeyKeyAccessJustificationsPolicy)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .purpose(java.lang.String)
//  .rotationPeriod(java.lang.String)
//  .skipInitialVersionCreation(java.lang.Boolean)
//  .skipInitialVersionCreation(IResolvable)
//  .timeouts(GoogleKmsCryptoKeyTimeouts)
//  .versionTemplate(GoogleKmsCryptoKeyVersionTemplate)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.keyRing">keyRing</a></code> | <code>java.lang.String</code> | The KeyRing that this key belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name for the CryptoKey. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.cryptoKeyBackend">cryptoKeyBackend</a></code> | <code>java.lang.String</code> | The resource name of the backend environment associated with all CryptoKeyVersions within this CryptoKey. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.destroyScheduledDuration">destroyScheduledDuration</a></code> | <code>java.lang.String</code> | The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#id GoogleKmsCryptoKey#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.importOnly">importOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this key may contain imported versions only. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.keyAccessJustificationsPolicy">keyAccessJustificationsPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy">GoogleKmsCryptoKeyKeyAccessJustificationsPolicy</a></code> | key_access_justifications_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels with user-defined metadata to apply to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.purpose">purpose</a></code> | <code>java.lang.String</code> | The immutable purpose of this CryptoKey. See the [purpose reference](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys#CryptoKeyPurpose) for possible inputs. Default value is "ENCRYPT_DECRYPT". |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.String</code> | Every time this period passes, generate a new CryptoKeyVersion and set it as the primary. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.skipInitialVersionCreation">skipInitialVersionCreation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, the request will create a CryptoKey without any CryptoKeyVersions. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts">GoogleKmsCryptoKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.versionTemplate">versionTemplate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a></code> | version_template block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keyRing`<sup>Required</sup> <a name="keyRing" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.keyRing"></a>

- *Type:* java.lang.String

The KeyRing that this key belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#key_ring GoogleKmsCryptoKey#key_ring}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name for the CryptoKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#name GoogleKmsCryptoKey#name}

---

##### `cryptoKeyBackend`<sup>Optional</sup> <a name="cryptoKeyBackend" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.cryptoKeyBackend"></a>

- *Type:* java.lang.String

The resource name of the backend environment associated with all CryptoKeyVersions within this CryptoKey.

The resource name is in the format "projects/* /locations/* /ekmConnections/*" and only applies to "EXTERNAL_VPC" keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#crypto_key_backend GoogleKmsCryptoKey#crypto_key_backend}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `destroyScheduledDuration`<sup>Optional</sup> <a name="destroyScheduledDuration" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.destroyScheduledDuration"></a>

- *Type:* java.lang.String

The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED.

If not specified at creation time, the default duration is 30 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#destroy_scheduled_duration GoogleKmsCryptoKey#destroy_scheduled_duration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#id GoogleKmsCryptoKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importOnly`<sup>Optional</sup> <a name="importOnly" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.importOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this key may contain imported versions only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#import_only GoogleKmsCryptoKey#import_only}

---

##### `keyAccessJustificationsPolicy`<sup>Optional</sup> <a name="keyAccessJustificationsPolicy" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.keyAccessJustificationsPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy">GoogleKmsCryptoKeyKeyAccessJustificationsPolicy</a>

key_access_justifications_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#key_access_justifications_policy GoogleKmsCryptoKey#key_access_justifications_policy}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels with user-defined metadata to apply to this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#labels GoogleKmsCryptoKey#labels}

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.purpose"></a>

- *Type:* java.lang.String

The immutable purpose of this CryptoKey. See the [purpose reference](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys#CryptoKeyPurpose) for possible inputs. Default value is "ENCRYPT_DECRYPT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#purpose GoogleKmsCryptoKey#purpose}

---

##### `rotationPeriod`<sup>Optional</sup> <a name="rotationPeriod" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.rotationPeriod"></a>

- *Type:* java.lang.String

Every time this period passes, generate a new CryptoKeyVersion and set it as the primary.

The first rotation will take place after the specified period. The rotation period has
the format of a decimal number with up to 9 fractional digits, followed by the
letter 's' (seconds). It must be greater than a day (ie, 86400).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#rotation_period GoogleKmsCryptoKey#rotation_period}

---

##### `skipInitialVersionCreation`<sup>Optional</sup> <a name="skipInitialVersionCreation" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.skipInitialVersionCreation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, the request will create a CryptoKey without any CryptoKeyVersions.

You must use the 'google_kms_crypto_key_version' resource to create a new CryptoKeyVersion
or 'google_kms_key_ring_import_job' resource to import the CryptoKeyVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#skip_initial_version_creation GoogleKmsCryptoKey#skip_initial_version_creation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts">GoogleKmsCryptoKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#timeouts GoogleKmsCryptoKey#timeouts}

---

##### `versionTemplate`<sup>Optional</sup> <a name="versionTemplate" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.versionTemplate"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a>

version_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#version_template GoogleKmsCryptoKey#version_template}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putKeyAccessJustificationsPolicy">putKeyAccessJustificationsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putVersionTemplate">putVersionTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetCryptoKeyBackend">resetCryptoKeyBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetDestroyScheduledDuration">resetDestroyScheduledDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetImportOnly">resetImportOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetKeyAccessJustificationsPolicy">resetKeyAccessJustificationsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetPurpose">resetPurpose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetRotationPeriod">resetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetSkipInitialVersionCreation">resetSkipInitialVersionCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetVersionTemplate">resetVersionTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKeyAccessJustificationsPolicy` <a name="putKeyAccessJustificationsPolicy" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putKeyAccessJustificationsPolicy"></a>

```java
public void putKeyAccessJustificationsPolicy(GoogleKmsCryptoKeyKeyAccessJustificationsPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putKeyAccessJustificationsPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy">GoogleKmsCryptoKeyKeyAccessJustificationsPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putTimeouts"></a>

```java
public void putTimeouts(GoogleKmsCryptoKeyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts">GoogleKmsCryptoKeyTimeouts</a>

---

##### `putVersionTemplate` <a name="putVersionTemplate" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putVersionTemplate"></a>

```java
public void putVersionTemplate(GoogleKmsCryptoKeyVersionTemplate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putVersionTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a>

---

##### `resetCryptoKeyBackend` <a name="resetCryptoKeyBackend" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetCryptoKeyBackend"></a>

```java
public void resetCryptoKeyBackend()
```

##### `resetDestroyScheduledDuration` <a name="resetDestroyScheduledDuration" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetDestroyScheduledDuration"></a>

```java
public void resetDestroyScheduledDuration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetId"></a>

```java
public void resetId()
```

##### `resetImportOnly` <a name="resetImportOnly" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetImportOnly"></a>

```java
public void resetImportOnly()
```

##### `resetKeyAccessJustificationsPolicy` <a name="resetKeyAccessJustificationsPolicy" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetKeyAccessJustificationsPolicy"></a>

```java
public void resetKeyAccessJustificationsPolicy()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetPurpose` <a name="resetPurpose" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetPurpose"></a>

```java
public void resetPurpose()
```

##### `resetRotationPeriod` <a name="resetRotationPeriod" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetRotationPeriod"></a>

```java
public void resetRotationPeriod()
```

##### `resetSkipInitialVersionCreation` <a name="resetSkipInitialVersionCreation" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetSkipInitialVersionCreation"></a>

```java
public void resetSkipInitialVersionCreation()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVersionTemplate` <a name="resetVersionTemplate" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetVersionTemplate"></a>

```java
public void resetVersionTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleKmsCryptoKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key.GoogleKmsCryptoKey;

GoogleKmsCryptoKey.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key.GoogleKmsCryptoKey;

GoogleKmsCryptoKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key.GoogleKmsCryptoKey;

GoogleKmsCryptoKey.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key.GoogleKmsCryptoKey;

GoogleKmsCryptoKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleKmsCryptoKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleKmsCryptoKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleKmsCryptoKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleKmsCryptoKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleKmsCryptoKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.keyAccessJustificationsPolicy">keyAccessJustificationsPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference">GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.primary">primary</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList">GoogleKmsCryptoKeyPrimaryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference">GoogleKmsCryptoKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.versionTemplate">versionTemplate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference">GoogleKmsCryptoKeyVersionTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.cryptoKeyBackendInput">cryptoKeyBackendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.destroyScheduledDurationInput">destroyScheduledDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.importOnlyInput">importOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.keyAccessJustificationsPolicyInput">keyAccessJustificationsPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy">GoogleKmsCryptoKeyKeyAccessJustificationsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.keyRingInput">keyRingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.purposeInput">purposeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.rotationPeriodInput">rotationPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.skipInitialVersionCreationInput">skipInitialVersionCreationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts">GoogleKmsCryptoKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.versionTemplateInput">versionTemplateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.cryptoKeyBackend">cryptoKeyBackend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.destroyScheduledDuration">destroyScheduledDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.importOnly">importOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.keyRing">keyRing</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.purpose">purpose</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.skipInitialVersionCreation">skipInitialVersionCreation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `keyAccessJustificationsPolicy`<sup>Required</sup> <a name="keyAccessJustificationsPolicy" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.keyAccessJustificationsPolicy"></a>

```java
public GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference getKeyAccessJustificationsPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference">GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference</a>

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.primary"></a>

```java
public GoogleKmsCryptoKeyPrimaryList getPrimary();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList">GoogleKmsCryptoKeyPrimaryList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.timeouts"></a>

```java
public GoogleKmsCryptoKeyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference">GoogleKmsCryptoKeyTimeoutsOutputReference</a>

---

##### `versionTemplate`<sup>Required</sup> <a name="versionTemplate" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.versionTemplate"></a>

```java
public GoogleKmsCryptoKeyVersionTemplateOutputReference getVersionTemplate();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference">GoogleKmsCryptoKeyVersionTemplateOutputReference</a>

---

##### `cryptoKeyBackendInput`<sup>Optional</sup> <a name="cryptoKeyBackendInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.cryptoKeyBackendInput"></a>

```java
public java.lang.String getCryptoKeyBackendInput();
```

- *Type:* java.lang.String

---

##### `destroyScheduledDurationInput`<sup>Optional</sup> <a name="destroyScheduledDurationInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.destroyScheduledDurationInput"></a>

```java
public java.lang.String getDestroyScheduledDurationInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `importOnlyInput`<sup>Optional</sup> <a name="importOnlyInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.importOnlyInput"></a>

```java
public java.lang.Object getImportOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyAccessJustificationsPolicyInput`<sup>Optional</sup> <a name="keyAccessJustificationsPolicyInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.keyAccessJustificationsPolicyInput"></a>

```java
public GoogleKmsCryptoKeyKeyAccessJustificationsPolicy getKeyAccessJustificationsPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy">GoogleKmsCryptoKeyKeyAccessJustificationsPolicy</a>

---

##### `keyRingInput`<sup>Optional</sup> <a name="keyRingInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.keyRingInput"></a>

```java
public java.lang.String getKeyRingInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `purposeInput`<sup>Optional</sup> <a name="purposeInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.purposeInput"></a>

```java
public java.lang.String getPurposeInput();
```

- *Type:* java.lang.String

---

##### `rotationPeriodInput`<sup>Optional</sup> <a name="rotationPeriodInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.rotationPeriodInput"></a>

```java
public java.lang.String getRotationPeriodInput();
```

- *Type:* java.lang.String

---

##### `skipInitialVersionCreationInput`<sup>Optional</sup> <a name="skipInitialVersionCreationInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.skipInitialVersionCreationInput"></a>

```java
public java.lang.Object getSkipInitialVersionCreationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts">GoogleKmsCryptoKeyTimeouts</a>

---

##### `versionTemplateInput`<sup>Optional</sup> <a name="versionTemplateInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.versionTemplateInput"></a>

```java
public GoogleKmsCryptoKeyVersionTemplate getVersionTemplateInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a>

---

##### `cryptoKeyBackend`<sup>Required</sup> <a name="cryptoKeyBackend" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.cryptoKeyBackend"></a>

```java
public java.lang.String getCryptoKeyBackend();
```

- *Type:* java.lang.String

---

##### `destroyScheduledDuration`<sup>Required</sup> <a name="destroyScheduledDuration" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.destroyScheduledDuration"></a>

```java
public java.lang.String getDestroyScheduledDuration();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `importOnly`<sup>Required</sup> <a name="importOnly" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.importOnly"></a>

```java
public java.lang.Object getImportOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyRing`<sup>Required</sup> <a name="keyRing" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.keyRing"></a>

```java
public java.lang.String getKeyRing();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.purpose"></a>

```java
public java.lang.String getPurpose();
```

- *Type:* java.lang.String

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.rotationPeriod"></a>

```java
public java.lang.String getRotationPeriod();
```

- *Type:* java.lang.String

---

##### `skipInitialVersionCreation`<sup>Required</sup> <a name="skipInitialVersionCreation" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.skipInitialVersionCreation"></a>

```java
public java.lang.Object getSkipInitialVersionCreation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleKmsCryptoKeyConfig <a name="GoogleKmsCryptoKeyConfig" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key.GoogleKmsCryptoKeyConfig;

GoogleKmsCryptoKeyConfig.builder()
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
    .keyRing(java.lang.String)
    .name(java.lang.String)
//  .cryptoKeyBackend(java.lang.String)
//  .destroyScheduledDuration(java.lang.String)
//  .id(java.lang.String)
//  .importOnly(java.lang.Boolean)
//  .importOnly(IResolvable)
//  .keyAccessJustificationsPolicy(GoogleKmsCryptoKeyKeyAccessJustificationsPolicy)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .purpose(java.lang.String)
//  .rotationPeriod(java.lang.String)
//  .skipInitialVersionCreation(java.lang.Boolean)
//  .skipInitialVersionCreation(IResolvable)
//  .timeouts(GoogleKmsCryptoKeyTimeouts)
//  .versionTemplate(GoogleKmsCryptoKeyVersionTemplate)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.keyRing">keyRing</a></code> | <code>java.lang.String</code> | The KeyRing that this key belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name for the CryptoKey. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.cryptoKeyBackend">cryptoKeyBackend</a></code> | <code>java.lang.String</code> | The resource name of the backend environment associated with all CryptoKeyVersions within this CryptoKey. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.destroyScheduledDuration">destroyScheduledDuration</a></code> | <code>java.lang.String</code> | The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#id GoogleKmsCryptoKey#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.importOnly">importOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this key may contain imported versions only. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.keyAccessJustificationsPolicy">keyAccessJustificationsPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy">GoogleKmsCryptoKeyKeyAccessJustificationsPolicy</a></code> | key_access_justifications_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels with user-defined metadata to apply to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.purpose">purpose</a></code> | <code>java.lang.String</code> | The immutable purpose of this CryptoKey. See the [purpose reference](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys#CryptoKeyPurpose) for possible inputs. Default value is "ENCRYPT_DECRYPT". |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.String</code> | Every time this period passes, generate a new CryptoKeyVersion and set it as the primary. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.skipInitialVersionCreation">skipInitialVersionCreation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, the request will create a CryptoKey without any CryptoKeyVersions. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts">GoogleKmsCryptoKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.versionTemplate">versionTemplate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a></code> | version_template block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keyRing`<sup>Required</sup> <a name="keyRing" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.keyRing"></a>

```java
public java.lang.String getKeyRing();
```

- *Type:* java.lang.String

The KeyRing that this key belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#key_ring GoogleKmsCryptoKey#key_ring}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name for the CryptoKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#name GoogleKmsCryptoKey#name}

---

##### `cryptoKeyBackend`<sup>Optional</sup> <a name="cryptoKeyBackend" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.cryptoKeyBackend"></a>

```java
public java.lang.String getCryptoKeyBackend();
```

- *Type:* java.lang.String

The resource name of the backend environment associated with all CryptoKeyVersions within this CryptoKey.

The resource name is in the format "projects/* /locations/* /ekmConnections/*" and only applies to "EXTERNAL_VPC" keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#crypto_key_backend GoogleKmsCryptoKey#crypto_key_backend}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `destroyScheduledDuration`<sup>Optional</sup> <a name="destroyScheduledDuration" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.destroyScheduledDuration"></a>

```java
public java.lang.String getDestroyScheduledDuration();
```

- *Type:* java.lang.String

The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED.

If not specified at creation time, the default duration is 30 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#destroy_scheduled_duration GoogleKmsCryptoKey#destroy_scheduled_duration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#id GoogleKmsCryptoKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importOnly`<sup>Optional</sup> <a name="importOnly" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.importOnly"></a>

```java
public java.lang.Object getImportOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this key may contain imported versions only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#import_only GoogleKmsCryptoKey#import_only}

---

##### `keyAccessJustificationsPolicy`<sup>Optional</sup> <a name="keyAccessJustificationsPolicy" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.keyAccessJustificationsPolicy"></a>

```java
public GoogleKmsCryptoKeyKeyAccessJustificationsPolicy getKeyAccessJustificationsPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy">GoogleKmsCryptoKeyKeyAccessJustificationsPolicy</a>

key_access_justifications_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#key_access_justifications_policy GoogleKmsCryptoKey#key_access_justifications_policy}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels with user-defined metadata to apply to this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#labels GoogleKmsCryptoKey#labels}

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.purpose"></a>

```java
public java.lang.String getPurpose();
```

- *Type:* java.lang.String

The immutable purpose of this CryptoKey. See the [purpose reference](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys#CryptoKeyPurpose) for possible inputs. Default value is "ENCRYPT_DECRYPT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#purpose GoogleKmsCryptoKey#purpose}

---

##### `rotationPeriod`<sup>Optional</sup> <a name="rotationPeriod" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.rotationPeriod"></a>

```java
public java.lang.String getRotationPeriod();
```

- *Type:* java.lang.String

Every time this period passes, generate a new CryptoKeyVersion and set it as the primary.

The first rotation will take place after the specified period. The rotation period has
the format of a decimal number with up to 9 fractional digits, followed by the
letter 's' (seconds). It must be greater than a day (ie, 86400).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#rotation_period GoogleKmsCryptoKey#rotation_period}

---

##### `skipInitialVersionCreation`<sup>Optional</sup> <a name="skipInitialVersionCreation" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.skipInitialVersionCreation"></a>

```java
public java.lang.Object getSkipInitialVersionCreation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, the request will create a CryptoKey without any CryptoKeyVersions.

You must use the 'google_kms_crypto_key_version' resource to create a new CryptoKeyVersion
or 'google_kms_key_ring_import_job' resource to import the CryptoKeyVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#skip_initial_version_creation GoogleKmsCryptoKey#skip_initial_version_creation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.timeouts"></a>

```java
public GoogleKmsCryptoKeyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts">GoogleKmsCryptoKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#timeouts GoogleKmsCryptoKey#timeouts}

---

##### `versionTemplate`<sup>Optional</sup> <a name="versionTemplate" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.versionTemplate"></a>

```java
public GoogleKmsCryptoKeyVersionTemplate getVersionTemplate();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a>

version_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#version_template GoogleKmsCryptoKey#version_template}

---

### GoogleKmsCryptoKeyKeyAccessJustificationsPolicy <a name="GoogleKmsCryptoKeyKeyAccessJustificationsPolicy" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy;

GoogleKmsCryptoKeyKeyAccessJustificationsPolicy.builder()
//  .allowedAccessReasons(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy.property.allowedAccessReasons">allowedAccessReasons</a></code> | <code>java.util.List<java.lang.String></code> | The list of allowed reasons for access to this CryptoKey. |

---

##### `allowedAccessReasons`<sup>Optional</sup> <a name="allowedAccessReasons" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy.property.allowedAccessReasons"></a>

```java
public java.util.List<java.lang.String> getAllowedAccessReasons();
```

- *Type:* java.util.List<java.lang.String>

The list of allowed reasons for access to this CryptoKey.

Zero allowed
access reasons means all encrypt, decrypt, and sign operations for
this CryptoKey will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#allowed_access_reasons GoogleKmsCryptoKey#allowed_access_reasons}

---

### GoogleKmsCryptoKeyPrimary <a name="GoogleKmsCryptoKeyPrimary" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimary.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key.GoogleKmsCryptoKeyPrimary;

GoogleKmsCryptoKeyPrimary.builder()
    .build();
```


### GoogleKmsCryptoKeyTimeouts <a name="GoogleKmsCryptoKeyTimeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key.GoogleKmsCryptoKeyTimeouts;

GoogleKmsCryptoKeyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#create GoogleKmsCryptoKey#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#delete GoogleKmsCryptoKey#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#update GoogleKmsCryptoKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#create GoogleKmsCryptoKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#delete GoogleKmsCryptoKey#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#update GoogleKmsCryptoKey#update}.

---

### GoogleKmsCryptoKeyVersionTemplate <a name="GoogleKmsCryptoKeyVersionTemplate" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key.GoogleKmsCryptoKeyVersionTemplate;

GoogleKmsCryptoKeyVersionTemplate.builder()
    .algorithm(java.lang.String)
//  .protectionLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | The algorithm to use when creating a version based on this template. See the [algorithm reference](https://cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm) for possible inputs. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate.property.protectionLevel">protectionLevel</a></code> | <code>java.lang.String</code> | The protection level to use when creating a version based on this template. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

The algorithm to use when creating a version based on this template. See the [algorithm reference](https://cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm) for possible inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#algorithm GoogleKmsCryptoKey#algorithm}

---

##### `protectionLevel`<sup>Optional</sup> <a name="protectionLevel" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate.property.protectionLevel"></a>

```java
public java.lang.String getProtectionLevel();
```

- *Type:* java.lang.String

The protection level to use when creating a version based on this template.

Possible values include "SOFTWARE", "HSM", "EXTERNAL", "EXTERNAL_VPC". Defaults to "SOFTWARE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_crypto_key#protection_level GoogleKmsCryptoKey#protection_level}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference <a name="GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference;

new GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.resetAllowedAccessReasons">resetAllowedAccessReasons</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedAccessReasons` <a name="resetAllowedAccessReasons" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.resetAllowedAccessReasons"></a>

```java
public void resetAllowedAccessReasons()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.allowedAccessReasonsInput">allowedAccessReasonsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.allowedAccessReasons">allowedAccessReasons</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy">GoogleKmsCryptoKeyKeyAccessJustificationsPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedAccessReasonsInput`<sup>Optional</sup> <a name="allowedAccessReasonsInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.allowedAccessReasonsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedAccessReasonsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedAccessReasons`<sup>Required</sup> <a name="allowedAccessReasons" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.allowedAccessReasons"></a>

```java
public java.util.List<java.lang.String> getAllowedAccessReasons();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.internalValue"></a>

```java
public GoogleKmsCryptoKeyKeyAccessJustificationsPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy">GoogleKmsCryptoKeyKeyAccessJustificationsPolicy</a>

---


### GoogleKmsCryptoKeyPrimaryList <a name="GoogleKmsCryptoKeyPrimaryList" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key.GoogleKmsCryptoKeyPrimaryList;

new GoogleKmsCryptoKeyPrimaryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.get"></a>

```java
public GoogleKmsCryptoKeyPrimaryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleKmsCryptoKeyPrimaryOutputReference <a name="GoogleKmsCryptoKeyPrimaryOutputReference" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key.GoogleKmsCryptoKeyPrimaryOutputReference;

new GoogleKmsCryptoKeyPrimaryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimary">GoogleKmsCryptoKeyPrimary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.internalValue"></a>

```java
public GoogleKmsCryptoKeyPrimary getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimary">GoogleKmsCryptoKeyPrimary</a>

---


### GoogleKmsCryptoKeyTimeoutsOutputReference <a name="GoogleKmsCryptoKeyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key.GoogleKmsCryptoKeyTimeoutsOutputReference;

new GoogleKmsCryptoKeyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts">GoogleKmsCryptoKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts">GoogleKmsCryptoKeyTimeouts</a>

---


### GoogleKmsCryptoKeyVersionTemplateOutputReference <a name="GoogleKmsCryptoKeyVersionTemplateOutputReference" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_crypto_key.GoogleKmsCryptoKeyVersionTemplateOutputReference;

new GoogleKmsCryptoKeyVersionTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.resetProtectionLevel">resetProtectionLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProtectionLevel` <a name="resetProtectionLevel" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.resetProtectionLevel"></a>

```java
public void resetProtectionLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.protectionLevelInput">protectionLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.protectionLevel">protectionLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.algorithmInput"></a>

```java
public java.lang.String getAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `protectionLevelInput`<sup>Optional</sup> <a name="protectionLevelInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.protectionLevelInput"></a>

```java
public java.lang.String getProtectionLevelInput();
```

- *Type:* java.lang.String

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `protectionLevel`<sup>Required</sup> <a name="protectionLevel" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.protectionLevel"></a>

```java
public java.lang.String getProtectionLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.internalValue"></a>

```java
public GoogleKmsCryptoKeyVersionTemplate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a>

---



