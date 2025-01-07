# `googleApigeeKeystoresAliasesKeyCertFile` Submodule <a name="`googleApigeeKeystoresAliasesKeyCertFile` Submodule" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeKeystoresAliasesKeyCertFile <a name="GoogleApigeeKeystoresAliasesKeyCertFile" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file google_apigee_keystores_aliases_key_cert_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_key_cert_file.GoogleApigeeKeystoresAliasesKeyCertFile;

GoogleApigeeKeystoresAliasesKeyCertFile.Builder.create(Construct scope, java.lang.String id)
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
    .alias(java.lang.String)
    .cert(java.lang.String)
    .environment(java.lang.String)
    .keystore(java.lang.String)
    .orgId(java.lang.String)
//  .certsInfo(GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo)
//  .id(java.lang.String)
//  .key(java.lang.String)
//  .password(java.lang.String)
//  .timeouts(GoogleApigeeKeystoresAliasesKeyCertFileTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias Name. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.cert">cert</a></code> | <code>java.lang.String</code> | Cert content. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.environment">environment</a></code> | <code>java.lang.String</code> | Environment associated with the alias. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.keystore">keystore</a></code> | <code>java.lang.String</code> | Keystore Name. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.orgId">orgId</a></code> | <code>java.lang.String</code> | Organization ID associated with the alias. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.certsInfo">certsInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo</a></code> | certs_info block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#id GoogleApigeeKeystoresAliasesKeyCertFile#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | Private Key content, omit if uploading to truststore. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Password for the Private Key if it's encrypted. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts">GoogleApigeeKeystoresAliasesKeyCertFileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#alias GoogleApigeeKeystoresAliasesKeyCertFile#alias}

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.cert"></a>

- *Type:* java.lang.String

Cert content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#cert GoogleApigeeKeystoresAliasesKeyCertFile#cert}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.environment"></a>

- *Type:* java.lang.String

Environment associated with the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#environment GoogleApigeeKeystoresAliasesKeyCertFile#environment}

---

##### `keystore`<sup>Required</sup> <a name="keystore" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.keystore"></a>

- *Type:* java.lang.String

Keystore Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#keystore GoogleApigeeKeystoresAliasesKeyCertFile#keystore}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.orgId"></a>

- *Type:* java.lang.String

Organization ID associated with the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#org_id GoogleApigeeKeystoresAliasesKeyCertFile#org_id}

---

##### `certsInfo`<sup>Optional</sup> <a name="certsInfo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.certsInfo"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo</a>

certs_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#certs_info GoogleApigeeKeystoresAliasesKeyCertFile#certs_info}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#id GoogleApigeeKeystoresAliasesKeyCertFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.key"></a>

- *Type:* java.lang.String

Private Key content, omit if uploading to truststore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#key GoogleApigeeKeystoresAliasesKeyCertFile#key}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Password for the Private Key if it's encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#password GoogleApigeeKeystoresAliasesKeyCertFile#password}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts">GoogleApigeeKeystoresAliasesKeyCertFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#timeouts GoogleApigeeKeystoresAliasesKeyCertFile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.putCertsInfo">putCertsInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetCertsInfo">resetCertsInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCertsInfo` <a name="putCertsInfo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.putCertsInfo"></a>

```java
public void putCertsInfo(GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.putCertsInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.putTimeouts"></a>

```java
public void putTimeouts(GoogleApigeeKeystoresAliasesKeyCertFileTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts">GoogleApigeeKeystoresAliasesKeyCertFileTimeouts</a>

---

##### `resetCertsInfo` <a name="resetCertsInfo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetCertsInfo"></a>

```java
public void resetCertsInfo()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetId"></a>

```java
public void resetId()
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetKey"></a>

```java
public void resetKey()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApigeeKeystoresAliasesKeyCertFile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_key_cert_file.GoogleApigeeKeystoresAliasesKeyCertFile;

GoogleApigeeKeystoresAliasesKeyCertFile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_key_cert_file.GoogleApigeeKeystoresAliasesKeyCertFile;

GoogleApigeeKeystoresAliasesKeyCertFile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_key_cert_file.GoogleApigeeKeystoresAliasesKeyCertFile;

GoogleApigeeKeystoresAliasesKeyCertFile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_key_cert_file.GoogleApigeeKeystoresAliasesKeyCertFile;

GoogleApigeeKeystoresAliasesKeyCertFile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleApigeeKeystoresAliasesKeyCertFile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleApigeeKeystoresAliasesKeyCertFile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleApigeeKeystoresAliasesKeyCertFile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleApigeeKeystoresAliasesKeyCertFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeKeystoresAliasesKeyCertFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.certsInfo">certsInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference">GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.certInput">certInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.certsInfoInput">certsInfoInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.keystoreInput">keystoreInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.orgIdInput">orgIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts">GoogleApigeeKeystoresAliasesKeyCertFileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.cert">cert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.keystore">keystore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.orgId">orgId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certsInfo`<sup>Required</sup> <a name="certsInfo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.certsInfo"></a>

```java
public GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference getCertsInfo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.timeouts"></a>

```java
public GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference">GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `certInput`<sup>Optional</sup> <a name="certInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.certInput"></a>

```java
public java.lang.String getCertInput();
```

- *Type:* java.lang.String

---

##### `certsInfoInput`<sup>Optional</sup> <a name="certsInfoInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.certsInfoInput"></a>

```java
public GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo getCertsInfoInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo</a>

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `keystoreInput`<sup>Optional</sup> <a name="keystoreInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.keystoreInput"></a>

```java
public java.lang.String getKeystoreInput();
```

- *Type:* java.lang.String

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.orgIdInput"></a>

```java
public java.lang.String getOrgIdInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts">GoogleApigeeKeystoresAliasesKeyCertFileTimeouts</a>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.cert"></a>

```java
public java.lang.String getCert();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `keystore`<sup>Required</sup> <a name="keystore" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.keystore"></a>

```java
public java.lang.String getKeystore();
```

- *Type:* java.lang.String

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo <a name="GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_key_cert_file.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo;

GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo.builder()
//  .certInfo(IResolvable)
//  .certInfo(java.util.List<GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo.property.certInfo">certInfo</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo</a>></code> | cert_info block. |

---

##### `certInfo`<sup>Optional</sup> <a name="certInfo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo.property.certInfo"></a>

```java
public java.lang.Object getCertInfo();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo</a>>

cert_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#cert_info GoogleApigeeKeystoresAliasesKeyCertFile#cert_info}

---

### GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo <a name="GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_key_cert_file.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo;

GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.builder()
//  .basicConstraints(java.lang.String)
//  .expiryDate(java.lang.String)
//  .issuer(java.lang.String)
//  .isValid(java.lang.String)
//  .publicKey(java.lang.String)
//  .serialNumber(java.lang.String)
//  .sigAlgName(java.lang.String)
//  .subject(java.lang.String)
//  .subjectAlternativeNames(java.util.List<java.lang.String>)
//  .validFrom(java.lang.String)
//  .version(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.basicConstraints">basicConstraints</a></code> | <code>java.lang.String</code> | X.509 basic constraints extension. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.expiryDate">expiryDate</a></code> | <code>java.lang.String</code> | X.509 notAfter validity period in milliseconds since epoch. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.issuer">issuer</a></code> | <code>java.lang.String</code> | X.509 issuer. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.isValid">isValid</a></code> | <code>java.lang.String</code> | Flag that specifies whether the certificate is valid. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | Public key component of the X.509 subject public key info. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | X.509 serial number. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.sigAlgName">sigAlgName</a></code> | <code>java.lang.String</code> | X.509 signatureAlgorithm. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.subject">subject</a></code> | <code>java.lang.String</code> | X.509 subject. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code>java.util.List<java.lang.String></code> | X.509 subject alternative names (SANs) extension. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.validFrom">validFrom</a></code> | <code>java.lang.String</code> | X.509 notBefore validity period in milliseconds since epoch. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.version">version</a></code> | <code>java.lang.Number</code> | X.509 version. |

---

##### `basicConstraints`<sup>Optional</sup> <a name="basicConstraints" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.basicConstraints"></a>

```java
public java.lang.String getBasicConstraints();
```

- *Type:* java.lang.String

X.509 basic constraints extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#basic_constraints GoogleApigeeKeystoresAliasesKeyCertFile#basic_constraints}

---

##### `expiryDate`<sup>Optional</sup> <a name="expiryDate" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.expiryDate"></a>

```java
public java.lang.String getExpiryDate();
```

- *Type:* java.lang.String

X.509 notAfter validity period in milliseconds since epoch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#expiry_date GoogleApigeeKeystoresAliasesKeyCertFile#expiry_date}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

X.509 issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#issuer GoogleApigeeKeystoresAliasesKeyCertFile#issuer}

---

##### `isValid`<sup>Optional</sup> <a name="isValid" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.isValid"></a>

```java
public java.lang.String getIsValid();
```

- *Type:* java.lang.String

Flag that specifies whether the certificate is valid.

Flag is set to Yes if the certificate is valid, No if expired, or Not yet if not yet valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#is_valid GoogleApigeeKeystoresAliasesKeyCertFile#is_valid}

---

##### `publicKey`<sup>Optional</sup> <a name="publicKey" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

Public key component of the X.509 subject public key info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#public_key GoogleApigeeKeystoresAliasesKeyCertFile#public_key}

---

##### `serialNumber`<sup>Optional</sup> <a name="serialNumber" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

X.509 serial number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#serial_number GoogleApigeeKeystoresAliasesKeyCertFile#serial_number}

---

##### `sigAlgName`<sup>Optional</sup> <a name="sigAlgName" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.sigAlgName"></a>

```java
public java.lang.String getSigAlgName();
```

- *Type:* java.lang.String

X.509 signatureAlgorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#sig_alg_name GoogleApigeeKeystoresAliasesKeyCertFile#sig_alg_name}

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

X.509 subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#subject GoogleApigeeKeystoresAliasesKeyCertFile#subject}

---

##### `subjectAlternativeNames`<sup>Optional</sup> <a name="subjectAlternativeNames" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.subjectAlternativeNames"></a>

```java
public java.util.List<java.lang.String> getSubjectAlternativeNames();
```

- *Type:* java.util.List<java.lang.String>

X.509 subject alternative names (SANs) extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#subject_alternative_names GoogleApigeeKeystoresAliasesKeyCertFile#subject_alternative_names}

---

##### `validFrom`<sup>Optional</sup> <a name="validFrom" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.validFrom"></a>

```java
public java.lang.String getValidFrom();
```

- *Type:* java.lang.String

X.509 notBefore validity period in milliseconds since epoch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#valid_from GoogleApigeeKeystoresAliasesKeyCertFile#valid_from}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

X.509 version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#version GoogleApigeeKeystoresAliasesKeyCertFile#version}

---

### GoogleApigeeKeystoresAliasesKeyCertFileConfig <a name="GoogleApigeeKeystoresAliasesKeyCertFileConfig" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_key_cert_file.GoogleApigeeKeystoresAliasesKeyCertFileConfig;

GoogleApigeeKeystoresAliasesKeyCertFileConfig.builder()
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
    .alias(java.lang.String)
    .cert(java.lang.String)
    .environment(java.lang.String)
    .keystore(java.lang.String)
    .orgId(java.lang.String)
//  .certsInfo(GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo)
//  .id(java.lang.String)
//  .key(java.lang.String)
//  .password(java.lang.String)
//  .timeouts(GoogleApigeeKeystoresAliasesKeyCertFileTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias Name. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.cert">cert</a></code> | <code>java.lang.String</code> | Cert content. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.environment">environment</a></code> | <code>java.lang.String</code> | Environment associated with the alias. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.keystore">keystore</a></code> | <code>java.lang.String</code> | Keystore Name. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.orgId">orgId</a></code> | <code>java.lang.String</code> | Organization ID associated with the alias. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.certsInfo">certsInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo</a></code> | certs_info block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#id GoogleApigeeKeystoresAliasesKeyCertFile#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.key">key</a></code> | <code>java.lang.String</code> | Private Key content, omit if uploading to truststore. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.password">password</a></code> | <code>java.lang.String</code> | Password for the Private Key if it's encrypted. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts">GoogleApigeeKeystoresAliasesKeyCertFileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#alias GoogleApigeeKeystoresAliasesKeyCertFile#alias}

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.cert"></a>

```java
public java.lang.String getCert();
```

- *Type:* java.lang.String

Cert content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#cert GoogleApigeeKeystoresAliasesKeyCertFile#cert}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

Environment associated with the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#environment GoogleApigeeKeystoresAliasesKeyCertFile#environment}

---

##### `keystore`<sup>Required</sup> <a name="keystore" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.keystore"></a>

```java
public java.lang.String getKeystore();
```

- *Type:* java.lang.String

Keystore Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#keystore GoogleApigeeKeystoresAliasesKeyCertFile#keystore}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

Organization ID associated with the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#org_id GoogleApigeeKeystoresAliasesKeyCertFile#org_id}

---

##### `certsInfo`<sup>Optional</sup> <a name="certsInfo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.certsInfo"></a>

```java
public GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo getCertsInfo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo</a>

certs_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#certs_info GoogleApigeeKeystoresAliasesKeyCertFile#certs_info}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#id GoogleApigeeKeystoresAliasesKeyCertFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Private Key content, omit if uploading to truststore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#key GoogleApigeeKeystoresAliasesKeyCertFile#key}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password for the Private Key if it's encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#password GoogleApigeeKeystoresAliasesKeyCertFile#password}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.timeouts"></a>

```java
public GoogleApigeeKeystoresAliasesKeyCertFileTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts">GoogleApigeeKeystoresAliasesKeyCertFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#timeouts GoogleApigeeKeystoresAliasesKeyCertFile#timeouts}

---

### GoogleApigeeKeystoresAliasesKeyCertFileTimeouts <a name="GoogleApigeeKeystoresAliasesKeyCertFileTimeouts" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_key_cert_file.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts;

GoogleApigeeKeystoresAliasesKeyCertFileTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#create GoogleApigeeKeystoresAliasesKeyCertFile#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#delete GoogleApigeeKeystoresAliasesKeyCertFile#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#read GoogleApigeeKeystoresAliasesKeyCertFile#read}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#update GoogleApigeeKeystoresAliasesKeyCertFile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#create GoogleApigeeKeystoresAliasesKeyCertFile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#delete GoogleApigeeKeystoresAliasesKeyCertFile#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#read GoogleApigeeKeystoresAliasesKeyCertFile#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#update GoogleApigeeKeystoresAliasesKeyCertFile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList <a name="GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_key_cert_file.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList;

new GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.get"></a>

```java
public GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo</a>>

---


### GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference <a name="GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_key_cert_file.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference;

new GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetBasicConstraints">resetBasicConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetExpiryDate">resetExpiryDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetIsValid">resetIsValid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetPublicKey">resetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetSerialNumber">resetSerialNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetSigAlgName">resetSigAlgName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetSubject">resetSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetSubjectAlternativeNames">resetSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetValidFrom">resetValidFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBasicConstraints` <a name="resetBasicConstraints" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetBasicConstraints"></a>

```java
public void resetBasicConstraints()
```

##### `resetExpiryDate` <a name="resetExpiryDate" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetExpiryDate"></a>

```java
public void resetExpiryDate()
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetIssuer"></a>

```java
public void resetIssuer()
```

##### `resetIsValid` <a name="resetIsValid" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetIsValid"></a>

```java
public void resetIsValid()
```

##### `resetPublicKey` <a name="resetPublicKey" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetPublicKey"></a>

```java
public void resetPublicKey()
```

##### `resetSerialNumber` <a name="resetSerialNumber" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetSerialNumber"></a>

```java
public void resetSerialNumber()
```

##### `resetSigAlgName` <a name="resetSigAlgName" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetSigAlgName"></a>

```java
public void resetSigAlgName()
```

##### `resetSubject` <a name="resetSubject" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetSubject"></a>

```java
public void resetSubject()
```

##### `resetSubjectAlternativeNames` <a name="resetSubjectAlternativeNames" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetSubjectAlternativeNames"></a>

```java
public void resetSubjectAlternativeNames()
```

##### `resetValidFrom` <a name="resetValidFrom" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetValidFrom"></a>

```java
public void resetValidFrom()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.basicConstraintsInput">basicConstraintsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.expiryDateInput">expiryDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.isValidInput">isValidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.publicKeyInput">publicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.serialNumberInput">serialNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.sigAlgNameInput">sigAlgNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.subjectAlternativeNamesInput">subjectAlternativeNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.subjectInput">subjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.validFromInput">validFromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.basicConstraints">basicConstraints</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.expiryDate">expiryDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.isValid">isValid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.sigAlgName">sigAlgName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.validFrom">validFrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `basicConstraintsInput`<sup>Optional</sup> <a name="basicConstraintsInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.basicConstraintsInput"></a>

```java
public java.lang.String getBasicConstraintsInput();
```

- *Type:* java.lang.String

---

##### `expiryDateInput`<sup>Optional</sup> <a name="expiryDateInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.expiryDateInput"></a>

```java
public java.lang.String getExpiryDateInput();
```

- *Type:* java.lang.String

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `isValidInput`<sup>Optional</sup> <a name="isValidInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.isValidInput"></a>

```java
public java.lang.String getIsValidInput();
```

- *Type:* java.lang.String

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.publicKeyInput"></a>

```java
public java.lang.String getPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `serialNumberInput`<sup>Optional</sup> <a name="serialNumberInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.serialNumberInput"></a>

```java
public java.lang.String getSerialNumberInput();
```

- *Type:* java.lang.String

---

##### `sigAlgNameInput`<sup>Optional</sup> <a name="sigAlgNameInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.sigAlgNameInput"></a>

```java
public java.lang.String getSigAlgNameInput();
```

- *Type:* java.lang.String

---

##### `subjectAlternativeNamesInput`<sup>Optional</sup> <a name="subjectAlternativeNamesInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.subjectAlternativeNamesInput"></a>

```java
public java.util.List<java.lang.String> getSubjectAlternativeNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.subjectInput"></a>

```java
public java.lang.String getSubjectInput();
```

- *Type:* java.lang.String

---

##### `validFromInput`<sup>Optional</sup> <a name="validFromInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.validFromInput"></a>

```java
public java.lang.String getValidFromInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.versionInput"></a>

```java
public java.lang.Number getVersionInput();
```

- *Type:* java.lang.Number

---

##### `basicConstraints`<sup>Required</sup> <a name="basicConstraints" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.basicConstraints"></a>

```java
public java.lang.String getBasicConstraints();
```

- *Type:* java.lang.String

---

##### `expiryDate`<sup>Required</sup> <a name="expiryDate" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.expiryDate"></a>

```java
public java.lang.String getExpiryDate();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `isValid`<sup>Required</sup> <a name="isValid" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.isValid"></a>

```java
public java.lang.String getIsValid();
```

- *Type:* java.lang.String

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

---

##### `sigAlgName`<sup>Required</sup> <a name="sigAlgName" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.sigAlgName"></a>

```java
public java.lang.String getSigAlgName();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `subjectAlternativeNames`<sup>Required</sup> <a name="subjectAlternativeNames" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.subjectAlternativeNames"></a>

```java
public java.util.List<java.lang.String> getSubjectAlternativeNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `validFrom`<sup>Required</sup> <a name="validFrom" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.validFrom"></a>

```java
public java.lang.String getValidFrom();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo</a>

---


### GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference <a name="GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_key_cert_file.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference;

new GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.putCertInfo">putCertInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.resetCertInfo">resetCertInfo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCertInfo` <a name="putCertInfo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.putCertInfo"></a>

```java
public void putCertInfo(IResolvable OR java.util.List<GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.putCertInfo.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo</a>>

---

##### `resetCertInfo` <a name="resetCertInfo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.resetCertInfo"></a>

```java
public void resetCertInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.certInfo">certInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.certInfoInput">certInfoInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certInfo`<sup>Required</sup> <a name="certInfo" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.certInfo"></a>

```java
public GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList getCertInfo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList</a>

---

##### `certInfoInput`<sup>Optional</sup> <a name="certInfoInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.certInfoInput"></a>

```java
public java.lang.Object getCertInfoInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.internalValue"></a>

```java
public GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo</a>

---


### GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference <a name="GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_keystores_aliases_key_cert_file.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference;

new GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts">GoogleApigeeKeystoresAliasesKeyCertFileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts">GoogleApigeeKeystoresAliasesKeyCertFileTimeouts</a>

---



