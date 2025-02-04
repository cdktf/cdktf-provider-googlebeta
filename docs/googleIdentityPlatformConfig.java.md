# `googleIdentityPlatformConfig` Submodule <a name="`googleIdentityPlatformConfig` Submodule" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIdentityPlatformConfig <a name="GoogleIdentityPlatformConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config google_identity_platform_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfig;

GoogleIdentityPlatformConfig.Builder.create(Construct scope, java.lang.String id)
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
//  .authorizedDomains(java.util.List<java.lang.String>)
//  .autodeleteAnonymousUsers(java.lang.Boolean)
//  .autodeleteAnonymousUsers(IResolvable)
//  .blockingFunctions(GoogleIdentityPlatformConfigBlockingFunctions)
//  .client(GoogleIdentityPlatformConfigClient)
//  .id(java.lang.String)
//  .mfa(GoogleIdentityPlatformConfigMfa)
//  .monitoring(GoogleIdentityPlatformConfigMonitoring)
//  .multiTenant(GoogleIdentityPlatformConfigMultiTenant)
//  .project(java.lang.String)
//  .quota(GoogleIdentityPlatformConfigQuota)
//  .signIn(GoogleIdentityPlatformConfigSignIn)
//  .smsRegionConfig(GoogleIdentityPlatformConfigSmsRegionConfig)
//  .timeouts(GoogleIdentityPlatformConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.authorizedDomains">authorizedDomains</a></code> | <code>java.util.List<java.lang.String></code> | List of domains authorized for OAuth redirects. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.autodeleteAnonymousUsers">autodeleteAnonymousUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether anonymous users will be auto-deleted after a period of 30 days. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.blockingFunctions">blockingFunctions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctions">GoogleIdentityPlatformConfigBlockingFunctions</a></code> | blocking_functions block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.client">client</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClient">GoogleIdentityPlatformConfigClient</a></code> | client block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#id GoogleIdentityPlatformConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.mfa">mfa</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfa">GoogleIdentityPlatformConfigMfa</a></code> | mfa block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.monitoring">monitoring</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoring">GoogleIdentityPlatformConfigMonitoring</a></code> | monitoring block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.multiTenant">multiTenant</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenant">GoogleIdentityPlatformConfigMultiTenant</a></code> | multi_tenant block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#project GoogleIdentityPlatformConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.quota">quota</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuota">GoogleIdentityPlatformConfigQuota</a></code> | quota block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.signIn">signIn</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignIn">GoogleIdentityPlatformConfigSignIn</a></code> | sign_in block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.smsRegionConfig">smsRegionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfig">GoogleIdentityPlatformConfigSmsRegionConfig</a></code> | sms_region_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeouts">GoogleIdentityPlatformConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorizedDomains`<sup>Optional</sup> <a name="authorizedDomains" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.authorizedDomains"></a>

- *Type:* java.util.List<java.lang.String>

List of domains authorized for OAuth redirects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#authorized_domains GoogleIdentityPlatformConfig#authorized_domains}

---

##### `autodeleteAnonymousUsers`<sup>Optional</sup> <a name="autodeleteAnonymousUsers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.autodeleteAnonymousUsers"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether anonymous users will be auto-deleted after a period of 30 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#autodelete_anonymous_users GoogleIdentityPlatformConfig#autodelete_anonymous_users}

---

##### `blockingFunctions`<sup>Optional</sup> <a name="blockingFunctions" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.blockingFunctions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctions">GoogleIdentityPlatformConfigBlockingFunctions</a>

blocking_functions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#blocking_functions GoogleIdentityPlatformConfig#blocking_functions}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.client"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClient">GoogleIdentityPlatformConfigClient</a>

client block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#client GoogleIdentityPlatformConfig#client}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#id GoogleIdentityPlatformConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mfa`<sup>Optional</sup> <a name="mfa" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.mfa"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfa">GoogleIdentityPlatformConfigMfa</a>

mfa block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#mfa GoogleIdentityPlatformConfig#mfa}

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.monitoring"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoring">GoogleIdentityPlatformConfigMonitoring</a>

monitoring block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#monitoring GoogleIdentityPlatformConfig#monitoring}

---

##### `multiTenant`<sup>Optional</sup> <a name="multiTenant" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.multiTenant"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenant">GoogleIdentityPlatformConfigMultiTenant</a>

multi_tenant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#multi_tenant GoogleIdentityPlatformConfig#multi_tenant}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#project GoogleIdentityPlatformConfig#project}.

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.quota"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuota">GoogleIdentityPlatformConfigQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#quota GoogleIdentityPlatformConfig#quota}

---

##### `signIn`<sup>Optional</sup> <a name="signIn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.signIn"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignIn">GoogleIdentityPlatformConfigSignIn</a>

sign_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#sign_in GoogleIdentityPlatformConfig#sign_in}

---

##### `smsRegionConfig`<sup>Optional</sup> <a name="smsRegionConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.smsRegionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfig">GoogleIdentityPlatformConfigSmsRegionConfig</a>

sms_region_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#sms_region_config GoogleIdentityPlatformConfig#sms_region_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeouts">GoogleIdentityPlatformConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#timeouts GoogleIdentityPlatformConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putBlockingFunctions">putBlockingFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putClient">putClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putMfa">putMfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putMonitoring">putMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putMultiTenant">putMultiTenant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putQuota">putQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putSignIn">putSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putSmsRegionConfig">putSmsRegionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetAuthorizedDomains">resetAuthorizedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetAutodeleteAnonymousUsers">resetAutodeleteAnonymousUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetBlockingFunctions">resetBlockingFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetClient">resetClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetMfa">resetMfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetMonitoring">resetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetMultiTenant">resetMultiTenant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetQuota">resetQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetSignIn">resetSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetSmsRegionConfig">resetSmsRegionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBlockingFunctions` <a name="putBlockingFunctions" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putBlockingFunctions"></a>

```java
public void putBlockingFunctions(GoogleIdentityPlatformConfigBlockingFunctions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putBlockingFunctions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctions">GoogleIdentityPlatformConfigBlockingFunctions</a>

---

##### `putClient` <a name="putClient" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putClient"></a>

```java
public void putClient(GoogleIdentityPlatformConfigClient value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putClient.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClient">GoogleIdentityPlatformConfigClient</a>

---

##### `putMfa` <a name="putMfa" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putMfa"></a>

```java
public void putMfa(GoogleIdentityPlatformConfigMfa value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putMfa.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfa">GoogleIdentityPlatformConfigMfa</a>

---

##### `putMonitoring` <a name="putMonitoring" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putMonitoring"></a>

```java
public void putMonitoring(GoogleIdentityPlatformConfigMonitoring value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoring">GoogleIdentityPlatformConfigMonitoring</a>

---

##### `putMultiTenant` <a name="putMultiTenant" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putMultiTenant"></a>

```java
public void putMultiTenant(GoogleIdentityPlatformConfigMultiTenant value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putMultiTenant.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenant">GoogleIdentityPlatformConfigMultiTenant</a>

---

##### `putQuota` <a name="putQuota" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putQuota"></a>

```java
public void putQuota(GoogleIdentityPlatformConfigQuota value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putQuota.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuota">GoogleIdentityPlatformConfigQuota</a>

---

##### `putSignIn` <a name="putSignIn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putSignIn"></a>

```java
public void putSignIn(GoogleIdentityPlatformConfigSignIn value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putSignIn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignIn">GoogleIdentityPlatformConfigSignIn</a>

---

##### `putSmsRegionConfig` <a name="putSmsRegionConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putSmsRegionConfig"></a>

```java
public void putSmsRegionConfig(GoogleIdentityPlatformConfigSmsRegionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putSmsRegionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfig">GoogleIdentityPlatformConfigSmsRegionConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putTimeouts"></a>

```java
public void putTimeouts(GoogleIdentityPlatformConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeouts">GoogleIdentityPlatformConfigTimeouts</a>

---

##### `resetAuthorizedDomains` <a name="resetAuthorizedDomains" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetAuthorizedDomains"></a>

```java
public void resetAuthorizedDomains()
```

##### `resetAutodeleteAnonymousUsers` <a name="resetAutodeleteAnonymousUsers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetAutodeleteAnonymousUsers"></a>

```java
public void resetAutodeleteAnonymousUsers()
```

##### `resetBlockingFunctions` <a name="resetBlockingFunctions" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetBlockingFunctions"></a>

```java
public void resetBlockingFunctions()
```

##### `resetClient` <a name="resetClient" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetClient"></a>

```java
public void resetClient()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetId"></a>

```java
public void resetId()
```

##### `resetMfa` <a name="resetMfa" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetMfa"></a>

```java
public void resetMfa()
```

##### `resetMonitoring` <a name="resetMonitoring" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetMonitoring"></a>

```java
public void resetMonitoring()
```

##### `resetMultiTenant` <a name="resetMultiTenant" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetMultiTenant"></a>

```java
public void resetMultiTenant()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetQuota` <a name="resetQuota" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetQuota"></a>

```java
public void resetQuota()
```

##### `resetSignIn` <a name="resetSignIn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetSignIn"></a>

```java
public void resetSignIn()
```

##### `resetSmsRegionConfig` <a name="resetSmsRegionConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetSmsRegionConfig"></a>

```java
public void resetSmsRegionConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIdentityPlatformConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfig;

GoogleIdentityPlatformConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfig;

GoogleIdentityPlatformConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfig;

GoogleIdentityPlatformConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfig;

GoogleIdentityPlatformConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleIdentityPlatformConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleIdentityPlatformConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleIdentityPlatformConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleIdentityPlatformConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIdentityPlatformConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.blockingFunctions">blockingFunctions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference">GoogleIdentityPlatformConfigBlockingFunctionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.client">client</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference">GoogleIdentityPlatformConfigClientOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.mfa">mfa</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference">GoogleIdentityPlatformConfigMfaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.monitoring">monitoring</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference">GoogleIdentityPlatformConfigMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.multiTenant">multiTenant</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference">GoogleIdentityPlatformConfigMultiTenantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference">GoogleIdentityPlatformConfigQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.signIn">signIn</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference">GoogleIdentityPlatformConfigSignInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.smsRegionConfig">smsRegionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference">GoogleIdentityPlatformConfigSmsRegionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference">GoogleIdentityPlatformConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.authorizedDomainsInput">authorizedDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.autodeleteAnonymousUsersInput">autodeleteAnonymousUsersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.blockingFunctionsInput">blockingFunctionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctions">GoogleIdentityPlatformConfigBlockingFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.clientInput">clientInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClient">GoogleIdentityPlatformConfigClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.mfaInput">mfaInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfa">GoogleIdentityPlatformConfigMfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.monitoringInput">monitoringInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoring">GoogleIdentityPlatformConfigMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.multiTenantInput">multiTenantInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenant">GoogleIdentityPlatformConfigMultiTenant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.quotaInput">quotaInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuota">GoogleIdentityPlatformConfigQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.signInInput">signInInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignIn">GoogleIdentityPlatformConfigSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.smsRegionConfigInput">smsRegionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfig">GoogleIdentityPlatformConfigSmsRegionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeouts">GoogleIdentityPlatformConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.authorizedDomains">authorizedDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.autodeleteAnonymousUsers">autodeleteAnonymousUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `blockingFunctions`<sup>Required</sup> <a name="blockingFunctions" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.blockingFunctions"></a>

```java
public GoogleIdentityPlatformConfigBlockingFunctionsOutputReference getBlockingFunctions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference">GoogleIdentityPlatformConfigBlockingFunctionsOutputReference</a>

---

##### `client`<sup>Required</sup> <a name="client" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.client"></a>

```java
public GoogleIdentityPlatformConfigClientOutputReference getClient();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference">GoogleIdentityPlatformConfigClientOutputReference</a>

---

##### `mfa`<sup>Required</sup> <a name="mfa" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.mfa"></a>

```java
public GoogleIdentityPlatformConfigMfaOutputReference getMfa();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference">GoogleIdentityPlatformConfigMfaOutputReference</a>

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.monitoring"></a>

```java
public GoogleIdentityPlatformConfigMonitoringOutputReference getMonitoring();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference">GoogleIdentityPlatformConfigMonitoringOutputReference</a>

---

##### `multiTenant`<sup>Required</sup> <a name="multiTenant" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.multiTenant"></a>

```java
public GoogleIdentityPlatformConfigMultiTenantOutputReference getMultiTenant();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference">GoogleIdentityPlatformConfigMultiTenantOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.quota"></a>

```java
public GoogleIdentityPlatformConfigQuotaOutputReference getQuota();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference">GoogleIdentityPlatformConfigQuotaOutputReference</a>

---

##### `signIn`<sup>Required</sup> <a name="signIn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.signIn"></a>

```java
public GoogleIdentityPlatformConfigSignInOutputReference getSignIn();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference">GoogleIdentityPlatformConfigSignInOutputReference</a>

---

##### `smsRegionConfig`<sup>Required</sup> <a name="smsRegionConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.smsRegionConfig"></a>

```java
public GoogleIdentityPlatformConfigSmsRegionConfigOutputReference getSmsRegionConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference">GoogleIdentityPlatformConfigSmsRegionConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.timeouts"></a>

```java
public GoogleIdentityPlatformConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference">GoogleIdentityPlatformConfigTimeoutsOutputReference</a>

---

##### `authorizedDomainsInput`<sup>Optional</sup> <a name="authorizedDomainsInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.authorizedDomainsInput"></a>

```java
public java.util.List<java.lang.String> getAuthorizedDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autodeleteAnonymousUsersInput`<sup>Optional</sup> <a name="autodeleteAnonymousUsersInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.autodeleteAnonymousUsersInput"></a>

```java
public java.lang.Object getAutodeleteAnonymousUsersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `blockingFunctionsInput`<sup>Optional</sup> <a name="blockingFunctionsInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.blockingFunctionsInput"></a>

```java
public GoogleIdentityPlatformConfigBlockingFunctions getBlockingFunctionsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctions">GoogleIdentityPlatformConfigBlockingFunctions</a>

---

##### `clientInput`<sup>Optional</sup> <a name="clientInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.clientInput"></a>

```java
public GoogleIdentityPlatformConfigClient getClientInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClient">GoogleIdentityPlatformConfigClient</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mfaInput`<sup>Optional</sup> <a name="mfaInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.mfaInput"></a>

```java
public GoogleIdentityPlatformConfigMfa getMfaInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfa">GoogleIdentityPlatformConfigMfa</a>

---

##### `monitoringInput`<sup>Optional</sup> <a name="monitoringInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.monitoringInput"></a>

```java
public GoogleIdentityPlatformConfigMonitoring getMonitoringInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoring">GoogleIdentityPlatformConfigMonitoring</a>

---

##### `multiTenantInput`<sup>Optional</sup> <a name="multiTenantInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.multiTenantInput"></a>

```java
public GoogleIdentityPlatformConfigMultiTenant getMultiTenantInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenant">GoogleIdentityPlatformConfigMultiTenant</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `quotaInput`<sup>Optional</sup> <a name="quotaInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.quotaInput"></a>

```java
public GoogleIdentityPlatformConfigQuota getQuotaInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuota">GoogleIdentityPlatformConfigQuota</a>

---

##### `signInInput`<sup>Optional</sup> <a name="signInInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.signInInput"></a>

```java
public GoogleIdentityPlatformConfigSignIn getSignInInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignIn">GoogleIdentityPlatformConfigSignIn</a>

---

##### `smsRegionConfigInput`<sup>Optional</sup> <a name="smsRegionConfigInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.smsRegionConfigInput"></a>

```java
public GoogleIdentityPlatformConfigSmsRegionConfig getSmsRegionConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfig">GoogleIdentityPlatformConfigSmsRegionConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeouts">GoogleIdentityPlatformConfigTimeouts</a>

---

##### `authorizedDomains`<sup>Required</sup> <a name="authorizedDomains" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.authorizedDomains"></a>

```java
public java.util.List<java.lang.String> getAuthorizedDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autodeleteAnonymousUsers`<sup>Required</sup> <a name="autodeleteAnonymousUsers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.autodeleteAnonymousUsers"></a>

```java
public java.lang.Object getAutodeleteAnonymousUsers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIdentityPlatformConfigBlockingFunctions <a name="GoogleIdentityPlatformConfigBlockingFunctions" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigBlockingFunctions;

GoogleIdentityPlatformConfigBlockingFunctions.builder()
    .triggers(IResolvable)
    .triggers(java.util.List<GoogleIdentityPlatformConfigBlockingFunctionsTriggers>)
//  .forwardInboundCredentials(GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctions.property.triggers">triggers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggers">GoogleIdentityPlatformConfigBlockingFunctionsTriggers</a>></code> | triggers block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctions.property.forwardInboundCredentials">forwardInboundCredentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a></code> | forward_inbound_credentials block. |

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctions.property.triggers"></a>

```java
public java.lang.Object getTriggers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggers">GoogleIdentityPlatformConfigBlockingFunctionsTriggers</a>>

triggers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#triggers GoogleIdentityPlatformConfig#triggers}

---

##### `forwardInboundCredentials`<sup>Optional</sup> <a name="forwardInboundCredentials" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctions.property.forwardInboundCredentials"></a>

```java
public GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials getForwardInboundCredentials();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a>

forward_inbound_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#forward_inbound_credentials GoogleIdentityPlatformConfig#forward_inbound_credentials}

---

### GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials <a name="GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials;

GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.builder()
//  .accessToken(java.lang.Boolean)
//  .accessToken(IResolvable)
//  .idToken(java.lang.Boolean)
//  .idToken(IResolvable)
//  .refreshToken(java.lang.Boolean)
//  .refreshToken(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.accessToken">accessToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to pass the user's OAuth identity provider's access token. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.idToken">idToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to pass the user's OIDC identity provider's ID token. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.refreshToken">refreshToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to pass the user's OAuth identity provider's refresh token. |

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.accessToken"></a>

```java
public java.lang.Object getAccessToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to pass the user's OAuth identity provider's access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#access_token GoogleIdentityPlatformConfig#access_token}

---

##### `idToken`<sup>Optional</sup> <a name="idToken" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.idToken"></a>

```java
public java.lang.Object getIdToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to pass the user's OIDC identity provider's ID token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#id_token GoogleIdentityPlatformConfig#id_token}

---

##### `refreshToken`<sup>Optional</sup> <a name="refreshToken" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.refreshToken"></a>

```java
public java.lang.Object getRefreshToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to pass the user's OAuth identity provider's refresh token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#refresh_token GoogleIdentityPlatformConfig#refresh_token}

---

### GoogleIdentityPlatformConfigBlockingFunctionsTriggers <a name="GoogleIdentityPlatformConfigBlockingFunctionsTriggers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigBlockingFunctionsTriggers;

GoogleIdentityPlatformConfigBlockingFunctionsTriggers.builder()
    .eventType(java.lang.String)
    .functionUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggers.property.eventType">eventType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#event_type GoogleIdentityPlatformConfig#event_type}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggers.property.functionUri">functionUri</a></code> | <code>java.lang.String</code> | HTTP URI trigger for the Cloud Function. |

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggers.property.eventType"></a>

```java
public java.lang.String getEventType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#event_type GoogleIdentityPlatformConfig#event_type}.

---

##### `functionUri`<sup>Required</sup> <a name="functionUri" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggers.property.functionUri"></a>

```java
public java.lang.String getFunctionUri();
```

- *Type:* java.lang.String

HTTP URI trigger for the Cloud Function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#function_uri GoogleIdentityPlatformConfig#function_uri}

---

### GoogleIdentityPlatformConfigClient <a name="GoogleIdentityPlatformConfigClient" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClient"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClient.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigClient;

GoogleIdentityPlatformConfigClient.builder()
//  .permissions(GoogleIdentityPlatformConfigClientPermissions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClient.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissions">GoogleIdentityPlatformConfigClientPermissions</a></code> | permissions block. |

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClient.property.permissions"></a>

```java
public GoogleIdentityPlatformConfigClientPermissions getPermissions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissions">GoogleIdentityPlatformConfigClientPermissions</a>

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#permissions GoogleIdentityPlatformConfig#permissions}

---

### GoogleIdentityPlatformConfigClientPermissions <a name="GoogleIdentityPlatformConfigClientPermissions" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigClientPermissions;

GoogleIdentityPlatformConfigClientPermissions.builder()
//  .disabledUserDeletion(java.lang.Boolean)
//  .disabledUserDeletion(IResolvable)
//  .disabledUserSignup(java.lang.Boolean)
//  .disabledUserSignup(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissions.property.disabledUserDeletion">disabledUserDeletion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, end users cannot delete their account on the associated project through any of our API methods. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissions.property.disabledUserSignup">disabledUserSignup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, end users cannot sign up for a new account on the associated project through any of our API methods. |

---

##### `disabledUserDeletion`<sup>Optional</sup> <a name="disabledUserDeletion" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissions.property.disabledUserDeletion"></a>

```java
public java.lang.Object getDisabledUserDeletion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, end users cannot delete their account on the associated project through any of our API methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#disabled_user_deletion GoogleIdentityPlatformConfig#disabled_user_deletion}

---

##### `disabledUserSignup`<sup>Optional</sup> <a name="disabledUserSignup" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissions.property.disabledUserSignup"></a>

```java
public java.lang.Object getDisabledUserSignup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, end users cannot sign up for a new account on the associated project through any of our API methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#disabled_user_signup GoogleIdentityPlatformConfig#disabled_user_signup}

---

### GoogleIdentityPlatformConfigConfig <a name="GoogleIdentityPlatformConfigConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigConfig;

GoogleIdentityPlatformConfigConfig.builder()
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
//  .authorizedDomains(java.util.List<java.lang.String>)
//  .autodeleteAnonymousUsers(java.lang.Boolean)
//  .autodeleteAnonymousUsers(IResolvable)
//  .blockingFunctions(GoogleIdentityPlatformConfigBlockingFunctions)
//  .client(GoogleIdentityPlatformConfigClient)
//  .id(java.lang.String)
//  .mfa(GoogleIdentityPlatformConfigMfa)
//  .monitoring(GoogleIdentityPlatformConfigMonitoring)
//  .multiTenant(GoogleIdentityPlatformConfigMultiTenant)
//  .project(java.lang.String)
//  .quota(GoogleIdentityPlatformConfigQuota)
//  .signIn(GoogleIdentityPlatformConfigSignIn)
//  .smsRegionConfig(GoogleIdentityPlatformConfigSmsRegionConfig)
//  .timeouts(GoogleIdentityPlatformConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.authorizedDomains">authorizedDomains</a></code> | <code>java.util.List<java.lang.String></code> | List of domains authorized for OAuth redirects. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.autodeleteAnonymousUsers">autodeleteAnonymousUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether anonymous users will be auto-deleted after a period of 30 days. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.blockingFunctions">blockingFunctions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctions">GoogleIdentityPlatformConfigBlockingFunctions</a></code> | blocking_functions block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.client">client</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClient">GoogleIdentityPlatformConfigClient</a></code> | client block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#id GoogleIdentityPlatformConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.mfa">mfa</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfa">GoogleIdentityPlatformConfigMfa</a></code> | mfa block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.monitoring">monitoring</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoring">GoogleIdentityPlatformConfigMonitoring</a></code> | monitoring block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.multiTenant">multiTenant</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenant">GoogleIdentityPlatformConfigMultiTenant</a></code> | multi_tenant block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#project GoogleIdentityPlatformConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuota">GoogleIdentityPlatformConfigQuota</a></code> | quota block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.signIn">signIn</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignIn">GoogleIdentityPlatformConfigSignIn</a></code> | sign_in block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.smsRegionConfig">smsRegionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfig">GoogleIdentityPlatformConfigSmsRegionConfig</a></code> | sms_region_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeouts">GoogleIdentityPlatformConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorizedDomains`<sup>Optional</sup> <a name="authorizedDomains" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.authorizedDomains"></a>

```java
public java.util.List<java.lang.String> getAuthorizedDomains();
```

- *Type:* java.util.List<java.lang.String>

List of domains authorized for OAuth redirects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#authorized_domains GoogleIdentityPlatformConfig#authorized_domains}

---

##### `autodeleteAnonymousUsers`<sup>Optional</sup> <a name="autodeleteAnonymousUsers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.autodeleteAnonymousUsers"></a>

```java
public java.lang.Object getAutodeleteAnonymousUsers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether anonymous users will be auto-deleted after a period of 30 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#autodelete_anonymous_users GoogleIdentityPlatformConfig#autodelete_anonymous_users}

---

##### `blockingFunctions`<sup>Optional</sup> <a name="blockingFunctions" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.blockingFunctions"></a>

```java
public GoogleIdentityPlatformConfigBlockingFunctions getBlockingFunctions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctions">GoogleIdentityPlatformConfigBlockingFunctions</a>

blocking_functions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#blocking_functions GoogleIdentityPlatformConfig#blocking_functions}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.client"></a>

```java
public GoogleIdentityPlatformConfigClient getClient();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClient">GoogleIdentityPlatformConfigClient</a>

client block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#client GoogleIdentityPlatformConfig#client}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#id GoogleIdentityPlatformConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mfa`<sup>Optional</sup> <a name="mfa" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.mfa"></a>

```java
public GoogleIdentityPlatformConfigMfa getMfa();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfa">GoogleIdentityPlatformConfigMfa</a>

mfa block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#mfa GoogleIdentityPlatformConfig#mfa}

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.monitoring"></a>

```java
public GoogleIdentityPlatformConfigMonitoring getMonitoring();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoring">GoogleIdentityPlatformConfigMonitoring</a>

monitoring block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#monitoring GoogleIdentityPlatformConfig#monitoring}

---

##### `multiTenant`<sup>Optional</sup> <a name="multiTenant" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.multiTenant"></a>

```java
public GoogleIdentityPlatformConfigMultiTenant getMultiTenant();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenant">GoogleIdentityPlatformConfigMultiTenant</a>

multi_tenant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#multi_tenant GoogleIdentityPlatformConfig#multi_tenant}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#project GoogleIdentityPlatformConfig#project}.

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.quota"></a>

```java
public GoogleIdentityPlatformConfigQuota getQuota();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuota">GoogleIdentityPlatformConfigQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#quota GoogleIdentityPlatformConfig#quota}

---

##### `signIn`<sup>Optional</sup> <a name="signIn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.signIn"></a>

```java
public GoogleIdentityPlatformConfigSignIn getSignIn();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignIn">GoogleIdentityPlatformConfigSignIn</a>

sign_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#sign_in GoogleIdentityPlatformConfig#sign_in}

---

##### `smsRegionConfig`<sup>Optional</sup> <a name="smsRegionConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.smsRegionConfig"></a>

```java
public GoogleIdentityPlatformConfigSmsRegionConfig getSmsRegionConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfig">GoogleIdentityPlatformConfigSmsRegionConfig</a>

sms_region_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#sms_region_config GoogleIdentityPlatformConfig#sms_region_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigConfig.property.timeouts"></a>

```java
public GoogleIdentityPlatformConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeouts">GoogleIdentityPlatformConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#timeouts GoogleIdentityPlatformConfig#timeouts}

---

### GoogleIdentityPlatformConfigMfa <a name="GoogleIdentityPlatformConfigMfa" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfa.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigMfa;

GoogleIdentityPlatformConfigMfa.builder()
//  .enabledProviders(java.util.List<java.lang.String>)
//  .providerConfigs(IResolvable)
//  .providerConfigs(java.util.List<GoogleIdentityPlatformConfigMfaProviderConfigs>)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfa.property.enabledProviders">enabledProviders</a></code> | <code>java.util.List<java.lang.String></code> | A list of usable second factors for this project. Possible values: ["PHONE_SMS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfa.property.providerConfigs">providerConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigs">GoogleIdentityPlatformConfigMfaProviderConfigs</a>></code> | provider_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfa.property.state">state</a></code> | <code>java.lang.String</code> | Whether MultiFactor Authentication has been enabled for this project. Possible values: ["DISABLED", "ENABLED", "MANDATORY"]. |

---

##### `enabledProviders`<sup>Optional</sup> <a name="enabledProviders" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfa.property.enabledProviders"></a>

```java
public java.util.List<java.lang.String> getEnabledProviders();
```

- *Type:* java.util.List<java.lang.String>

A list of usable second factors for this project. Possible values: ["PHONE_SMS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#enabled_providers GoogleIdentityPlatformConfig#enabled_providers}

---

##### `providerConfigs`<sup>Optional</sup> <a name="providerConfigs" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfa.property.providerConfigs"></a>

```java
public java.lang.Object getProviderConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigs">GoogleIdentityPlatformConfigMfaProviderConfigs</a>>

provider_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#provider_configs GoogleIdentityPlatformConfig#provider_configs}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfa.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Whether MultiFactor Authentication has been enabled for this project. Possible values: ["DISABLED", "ENABLED", "MANDATORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#state GoogleIdentityPlatformConfig#state}

---

### GoogleIdentityPlatformConfigMfaProviderConfigs <a name="GoogleIdentityPlatformConfigMfaProviderConfigs" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigMfaProviderConfigs;

GoogleIdentityPlatformConfigMfaProviderConfigs.builder()
//  .state(java.lang.String)
//  .totpProviderConfig(GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigs.property.state">state</a></code> | <code>java.lang.String</code> | Whether MultiFactor Authentication has been enabled for this project. Possible values: ["DISABLED", "ENABLED", "MANDATORY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigs.property.totpProviderConfig">totpProviderConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig">GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig</a></code> | totp_provider_config block. |

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigs.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Whether MultiFactor Authentication has been enabled for this project. Possible values: ["DISABLED", "ENABLED", "MANDATORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#state GoogleIdentityPlatformConfig#state}

---

##### `totpProviderConfig`<sup>Optional</sup> <a name="totpProviderConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigs.property.totpProviderConfig"></a>

```java
public GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig getTotpProviderConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig">GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig</a>

totp_provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#totp_provider_config GoogleIdentityPlatformConfig#totp_provider_config}

---

### GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig <a name="GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig;

GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig.builder()
//  .adjacentIntervals(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig.property.adjacentIntervals">adjacentIntervals</a></code> | <code>java.lang.Number</code> | The allowed number of adjacent intervals that will be used for verification to avoid clock skew. |

---

##### `adjacentIntervals`<sup>Optional</sup> <a name="adjacentIntervals" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig.property.adjacentIntervals"></a>

```java
public java.lang.Number getAdjacentIntervals();
```

- *Type:* java.lang.Number

The allowed number of adjacent intervals that will be used for verification to avoid clock skew.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#adjacent_intervals GoogleIdentityPlatformConfig#adjacent_intervals}

---

### GoogleIdentityPlatformConfigMonitoring <a name="GoogleIdentityPlatformConfigMonitoring" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoring.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigMonitoring;

GoogleIdentityPlatformConfigMonitoring.builder()
//  .requestLogging(GoogleIdentityPlatformConfigMonitoringRequestLogging)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoring.property.requestLogging">requestLogging</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLogging">GoogleIdentityPlatformConfigMonitoringRequestLogging</a></code> | request_logging block. |

---

##### `requestLogging`<sup>Optional</sup> <a name="requestLogging" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoring.property.requestLogging"></a>

```java
public GoogleIdentityPlatformConfigMonitoringRequestLogging getRequestLogging();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLogging">GoogleIdentityPlatformConfigMonitoringRequestLogging</a>

request_logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#request_logging GoogleIdentityPlatformConfig#request_logging}

---

### GoogleIdentityPlatformConfigMonitoringRequestLogging <a name="GoogleIdentityPlatformConfigMonitoringRequestLogging" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLogging.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigMonitoringRequestLogging;

GoogleIdentityPlatformConfigMonitoringRequestLogging.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLogging.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether logging is enabled for this project or not. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLogging.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether logging is enabled for this project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#enabled GoogleIdentityPlatformConfig#enabled}

---

### GoogleIdentityPlatformConfigMultiTenant <a name="GoogleIdentityPlatformConfigMultiTenant" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenant.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigMultiTenant;

GoogleIdentityPlatformConfigMultiTenant.builder()
//  .allowTenants(java.lang.Boolean)
//  .allowTenants(IResolvable)
//  .defaultTenantLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenant.property.allowTenants">allowTenants</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this project can have tenants or not. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenant.property.defaultTenantLocation">defaultTenantLocation</a></code> | <code>java.lang.String</code> | The default cloud parent org or folder that the tenant project should be created under. |

---

##### `allowTenants`<sup>Optional</sup> <a name="allowTenants" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenant.property.allowTenants"></a>

```java
public java.lang.Object getAllowTenants();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this project can have tenants or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#allow_tenants GoogleIdentityPlatformConfig#allow_tenants}

---

##### `defaultTenantLocation`<sup>Optional</sup> <a name="defaultTenantLocation" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenant.property.defaultTenantLocation"></a>

```java
public java.lang.String getDefaultTenantLocation();
```

- *Type:* java.lang.String

The default cloud parent org or folder that the tenant project should be created under.

The parent resource name should be in the format of "/", such as "folders/123" or "organizations/456".
If the value is not set, the tenant will be created under the same organization or folder as the agent project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#default_tenant_location GoogleIdentityPlatformConfig#default_tenant_location}

---

### GoogleIdentityPlatformConfigQuota <a name="GoogleIdentityPlatformConfigQuota" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuota.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigQuota;

GoogleIdentityPlatformConfigQuota.builder()
//  .signUpQuotaConfig(GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuota.property.signUpQuotaConfig">signUpQuotaConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig">GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig</a></code> | sign_up_quota_config block. |

---

##### `signUpQuotaConfig`<sup>Optional</sup> <a name="signUpQuotaConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuota.property.signUpQuotaConfig"></a>

```java
public GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig getSignUpQuotaConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig">GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig</a>

sign_up_quota_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#sign_up_quota_config GoogleIdentityPlatformConfig#sign_up_quota_config}

---

### GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig <a name="GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig;

GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig.builder()
//  .quota(java.lang.Number)
//  .quotaDuration(java.lang.String)
//  .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig.property.quota">quota</a></code> | <code>java.lang.Number</code> | A sign up APIs quota that customers can override temporarily. Value can be in between 1 and 1000. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig.property.quotaDuration">quotaDuration</a></code> | <code>java.lang.String</code> | How long this quota will be active for. It is measurred in seconds, e.g., Example: "9.615s". |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig.property.startTime">startTime</a></code> | <code>java.lang.String</code> | When this quota will take affect. |

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig.property.quota"></a>

```java
public java.lang.Number getQuota();
```

- *Type:* java.lang.Number

A sign up APIs quota that customers can override temporarily. Value can be in between 1 and 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#quota GoogleIdentityPlatformConfig#quota}

---

##### `quotaDuration`<sup>Optional</sup> <a name="quotaDuration" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig.property.quotaDuration"></a>

```java
public java.lang.String getQuotaDuration();
```

- *Type:* java.lang.String

How long this quota will be active for. It is measurred in seconds, e.g., Example: "9.615s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#quota_duration GoogleIdentityPlatformConfig#quota_duration}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

When this quota will take affect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#start_time GoogleIdentityPlatformConfig#start_time}

---

### GoogleIdentityPlatformConfigSignIn <a name="GoogleIdentityPlatformConfigSignIn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignIn.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigSignIn;

GoogleIdentityPlatformConfigSignIn.builder()
//  .allowDuplicateEmails(java.lang.Boolean)
//  .allowDuplicateEmails(IResolvable)
//  .anonymous(GoogleIdentityPlatformConfigSignInAnonymous)
//  .email(GoogleIdentityPlatformConfigSignInEmail)
//  .phoneNumber(GoogleIdentityPlatformConfigSignInPhoneNumber)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignIn.property.allowDuplicateEmails">allowDuplicateEmails</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow more than one account to have the same email. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignIn.property.anonymous">anonymous</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymous">GoogleIdentityPlatformConfigSignInAnonymous</a></code> | anonymous block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignIn.property.email">email</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmail">GoogleIdentityPlatformConfigSignInEmail</a></code> | email block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignIn.property.phoneNumber">phoneNumber</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumber">GoogleIdentityPlatformConfigSignInPhoneNumber</a></code> | phone_number block. |

---

##### `allowDuplicateEmails`<sup>Optional</sup> <a name="allowDuplicateEmails" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignIn.property.allowDuplicateEmails"></a>

```java
public java.lang.Object getAllowDuplicateEmails();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow more than one account to have the same email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#allow_duplicate_emails GoogleIdentityPlatformConfig#allow_duplicate_emails}

---

##### `anonymous`<sup>Optional</sup> <a name="anonymous" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignIn.property.anonymous"></a>

```java
public GoogleIdentityPlatformConfigSignInAnonymous getAnonymous();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymous">GoogleIdentityPlatformConfigSignInAnonymous</a>

anonymous block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#anonymous GoogleIdentityPlatformConfig#anonymous}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignIn.property.email"></a>

```java
public GoogleIdentityPlatformConfigSignInEmail getEmail();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmail">GoogleIdentityPlatformConfigSignInEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#email GoogleIdentityPlatformConfig#email}

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignIn.property.phoneNumber"></a>

```java
public GoogleIdentityPlatformConfigSignInPhoneNumber getPhoneNumber();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumber">GoogleIdentityPlatformConfigSignInPhoneNumber</a>

phone_number block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#phone_number GoogleIdentityPlatformConfig#phone_number}

---

### GoogleIdentityPlatformConfigSignInAnonymous <a name="GoogleIdentityPlatformConfigSignInAnonymous" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymous"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymous.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigSignInAnonymous;

GoogleIdentityPlatformConfigSignInAnonymous.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymous.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether anonymous user auth is enabled for the project or not. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymous.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether anonymous user auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#enabled GoogleIdentityPlatformConfig#enabled}

---

### GoogleIdentityPlatformConfigSignInEmail <a name="GoogleIdentityPlatformConfigSignInEmail" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmail.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigSignInEmail;

GoogleIdentityPlatformConfigSignInEmail.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .passwordRequired(java.lang.Boolean)
//  .passwordRequired(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmail.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether email auth is enabled for the project or not. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmail.property.passwordRequired">passwordRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether a password is required for email auth or not. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmail.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether email auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#enabled GoogleIdentityPlatformConfig#enabled}

---

##### `passwordRequired`<sup>Optional</sup> <a name="passwordRequired" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmail.property.passwordRequired"></a>

```java
public java.lang.Object getPasswordRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether a password is required for email auth or not.

If true, both an email and
password must be provided to sign in. If false, a user may sign in via either
email/password or email link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#password_required GoogleIdentityPlatformConfig#password_required}

---

### GoogleIdentityPlatformConfigSignInHashConfig <a name="GoogleIdentityPlatformConfigSignInHashConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigSignInHashConfig;

GoogleIdentityPlatformConfigSignInHashConfig.builder()
    .build();
```


### GoogleIdentityPlatformConfigSignInPhoneNumber <a name="GoogleIdentityPlatformConfigSignInPhoneNumber" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumber"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumber.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigSignInPhoneNumber;

GoogleIdentityPlatformConfigSignInPhoneNumber.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .testPhoneNumbers(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumber.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether phone number auth is enabled for the project or not. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumber.property.testPhoneNumbers">testPhoneNumbers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of <test phone number, fake code> that can be used for phone auth testing. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumber.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether phone number auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#enabled GoogleIdentityPlatformConfig#enabled}

---

##### `testPhoneNumbers`<sup>Optional</sup> <a name="testPhoneNumbers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumber.property.testPhoneNumbers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTestPhoneNumbers();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of <test phone number, fake code> that can be used for phone auth testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#test_phone_numbers GoogleIdentityPlatformConfig#test_phone_numbers}

---

### GoogleIdentityPlatformConfigSmsRegionConfig <a name="GoogleIdentityPlatformConfigSmsRegionConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigSmsRegionConfig;

GoogleIdentityPlatformConfigSmsRegionConfig.builder()
//  .allowByDefault(GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault)
//  .allowlistOnly(GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfig.property.allowByDefault">allowByDefault</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault">GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault</a></code> | allow_by_default block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfig.property.allowlistOnly">allowlistOnly</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly">GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly</a></code> | allowlist_only block. |

---

##### `allowByDefault`<sup>Optional</sup> <a name="allowByDefault" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfig.property.allowByDefault"></a>

```java
public GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault getAllowByDefault();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault">GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault</a>

allow_by_default block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#allow_by_default GoogleIdentityPlatformConfig#allow_by_default}

---

##### `allowlistOnly`<sup>Optional</sup> <a name="allowlistOnly" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfig.property.allowlistOnly"></a>

```java
public GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly getAllowlistOnly();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly">GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly</a>

allowlist_only block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#allowlist_only GoogleIdentityPlatformConfig#allowlist_only}

---

### GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault <a name="GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault;

GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault.builder()
//  .disallowedRegions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault.property.disallowedRegions">disallowedRegions</a></code> | <code>java.util.List<java.lang.String></code> | Two letter unicode region codes to disallow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json. |

---

##### `disallowedRegions`<sup>Optional</sup> <a name="disallowedRegions" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault.property.disallowedRegions"></a>

```java
public java.util.List<java.lang.String> getDisallowedRegions();
```

- *Type:* java.util.List<java.lang.String>

Two letter unicode region codes to disallow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#disallowed_regions GoogleIdentityPlatformConfig#disallowed_regions}

---

### GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly <a name="GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly;

GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly.builder()
//  .allowedRegions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly.property.allowedRegions">allowedRegions</a></code> | <code>java.util.List<java.lang.String></code> | Two letter unicode region codes to allow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json. |

---

##### `allowedRegions`<sup>Optional</sup> <a name="allowedRegions" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly.property.allowedRegions"></a>

```java
public java.util.List<java.lang.String> getAllowedRegions();
```

- *Type:* java.util.List<java.lang.String>

Two letter unicode region codes to allow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#allowed_regions GoogleIdentityPlatformConfig#allowed_regions}

---

### GoogleIdentityPlatformConfigTimeouts <a name="GoogleIdentityPlatformConfigTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigTimeouts;

GoogleIdentityPlatformConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#create GoogleIdentityPlatformConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#delete GoogleIdentityPlatformConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#update GoogleIdentityPlatformConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#create GoogleIdentityPlatformConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#delete GoogleIdentityPlatformConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_identity_platform_config#update GoogleIdentityPlatformConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference <a name="GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference;

new GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetAccessToken">resetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetIdToken">resetIdToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetRefreshToken">resetRefreshToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetAccessToken"></a>

```java
public void resetAccessToken()
```

##### `resetIdToken` <a name="resetIdToken" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetIdToken"></a>

```java
public void resetIdToken()
```

##### `resetRefreshToken` <a name="resetRefreshToken" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetRefreshToken"></a>

```java
public void resetRefreshToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.accessTokenInput">accessTokenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.idTokenInput">idTokenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.refreshTokenInput">refreshTokenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.accessToken">accessToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.idToken">idToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.refreshToken">refreshToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.accessTokenInput"></a>

```java
public java.lang.Object getAccessTokenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idTokenInput`<sup>Optional</sup> <a name="idTokenInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.idTokenInput"></a>

```java
public java.lang.Object getIdTokenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `refreshTokenInput`<sup>Optional</sup> <a name="refreshTokenInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.refreshTokenInput"></a>

```java
public java.lang.Object getRefreshTokenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.accessToken"></a>

```java
public java.lang.Object getAccessToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idToken`<sup>Required</sup> <a name="idToken" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.idToken"></a>

```java
public java.lang.Object getIdToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `refreshToken`<sup>Required</sup> <a name="refreshToken" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.refreshToken"></a>

```java
public java.lang.Object getRefreshToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.internalValue"></a>

```java
public GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a>

---


### GoogleIdentityPlatformConfigBlockingFunctionsOutputReference <a name="GoogleIdentityPlatformConfigBlockingFunctionsOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference;

new GoogleIdentityPlatformConfigBlockingFunctionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.putForwardInboundCredentials">putForwardInboundCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.putTriggers">putTriggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.resetForwardInboundCredentials">resetForwardInboundCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putForwardInboundCredentials` <a name="putForwardInboundCredentials" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.putForwardInboundCredentials"></a>

```java
public void putForwardInboundCredentials(GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.putForwardInboundCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a>

---

##### `putTriggers` <a name="putTriggers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.putTriggers"></a>

```java
public void putTriggers(IResolvable OR java.util.List<GoogleIdentityPlatformConfigBlockingFunctionsTriggers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.putTriggers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggers">GoogleIdentityPlatformConfigBlockingFunctionsTriggers</a>>

---

##### `resetForwardInboundCredentials` <a name="resetForwardInboundCredentials" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.resetForwardInboundCredentials"></a>

```java
public void resetForwardInboundCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.property.forwardInboundCredentials">forwardInboundCredentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference">GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.property.triggers">triggers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList">GoogleIdentityPlatformConfigBlockingFunctionsTriggersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.property.forwardInboundCredentialsInput">forwardInboundCredentialsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.property.triggersInput">triggersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggers">GoogleIdentityPlatformConfigBlockingFunctionsTriggers</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctions">GoogleIdentityPlatformConfigBlockingFunctions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `forwardInboundCredentials`<sup>Required</sup> <a name="forwardInboundCredentials" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.property.forwardInboundCredentials"></a>

```java
public GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference getForwardInboundCredentials();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference">GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference</a>

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.property.triggers"></a>

```java
public GoogleIdentityPlatformConfigBlockingFunctionsTriggersList getTriggers();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList">GoogleIdentityPlatformConfigBlockingFunctionsTriggersList</a>

---

##### `forwardInboundCredentialsInput`<sup>Optional</sup> <a name="forwardInboundCredentialsInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.property.forwardInboundCredentialsInput"></a>

```java
public GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials getForwardInboundCredentialsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a>

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.property.triggersInput"></a>

```java
public java.lang.Object getTriggersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggers">GoogleIdentityPlatformConfigBlockingFunctionsTriggers</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsOutputReference.property.internalValue"></a>

```java
public GoogleIdentityPlatformConfigBlockingFunctions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctions">GoogleIdentityPlatformConfigBlockingFunctions</a>

---


### GoogleIdentityPlatformConfigBlockingFunctionsTriggersList <a name="GoogleIdentityPlatformConfigBlockingFunctionsTriggersList" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList;

new GoogleIdentityPlatformConfigBlockingFunctionsTriggersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.get"></a>

```java
public GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggers">GoogleIdentityPlatformConfigBlockingFunctionsTriggers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggers">GoogleIdentityPlatformConfigBlockingFunctionsTriggers</a>>

---


### GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference <a name="GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference;

new GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.eventTypeInput">eventTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.functionUriInput">functionUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.eventType">eventType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.functionUri">functionUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggers">GoogleIdentityPlatformConfigBlockingFunctionsTriggers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.eventTypeInput"></a>

```java
public java.lang.String getEventTypeInput();
```

- *Type:* java.lang.String

---

##### `functionUriInput`<sup>Optional</sup> <a name="functionUriInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.functionUriInput"></a>

```java
public java.lang.String getFunctionUriInput();
```

- *Type:* java.lang.String

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.eventType"></a>

```java
public java.lang.String getEventType();
```

- *Type:* java.lang.String

---

##### `functionUri`<sup>Required</sup> <a name="functionUri" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.functionUri"></a>

```java
public java.lang.String getFunctionUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigBlockingFunctionsTriggers">GoogleIdentityPlatformConfigBlockingFunctionsTriggers</a>

---


### GoogleIdentityPlatformConfigClientOutputReference <a name="GoogleIdentityPlatformConfigClientOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigClientOutputReference;

new GoogleIdentityPlatformConfigClientOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.putPermissions">putPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.resetPermissions">resetPermissions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPermissions` <a name="putPermissions" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.putPermissions"></a>

```java
public void putPermissions(GoogleIdentityPlatformConfigClientPermissions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.putPermissions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissions">GoogleIdentityPlatformConfigClientPermissions</a>

---

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.resetPermissions"></a>

```java
public void resetPermissions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.property.firebaseSubdomain">firebaseSubdomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference">GoogleIdentityPlatformConfigClientPermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.property.permissionsInput">permissionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissions">GoogleIdentityPlatformConfigClientPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClient">GoogleIdentityPlatformConfigClient</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

---

##### `firebaseSubdomain`<sup>Required</sup> <a name="firebaseSubdomain" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.property.firebaseSubdomain"></a>

```java
public java.lang.String getFirebaseSubdomain();
```

- *Type:* java.lang.String

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.property.permissions"></a>

```java
public GoogleIdentityPlatformConfigClientPermissionsOutputReference getPermissions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference">GoogleIdentityPlatformConfigClientPermissionsOutputReference</a>

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.property.permissionsInput"></a>

```java
public GoogleIdentityPlatformConfigClientPermissions getPermissionsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissions">GoogleIdentityPlatformConfigClientPermissions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientOutputReference.property.internalValue"></a>

```java
public GoogleIdentityPlatformConfigClient getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClient">GoogleIdentityPlatformConfigClient</a>

---


### GoogleIdentityPlatformConfigClientPermissionsOutputReference <a name="GoogleIdentityPlatformConfigClientPermissionsOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigClientPermissionsOutputReference;

new GoogleIdentityPlatformConfigClientPermissionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.resetDisabledUserDeletion">resetDisabledUserDeletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.resetDisabledUserSignup">resetDisabledUserSignup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabledUserDeletion` <a name="resetDisabledUserDeletion" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.resetDisabledUserDeletion"></a>

```java
public void resetDisabledUserDeletion()
```

##### `resetDisabledUserSignup` <a name="resetDisabledUserSignup" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.resetDisabledUserSignup"></a>

```java
public void resetDisabledUserSignup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserDeletionInput">disabledUserDeletionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserSignupInput">disabledUserSignupInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserDeletion">disabledUserDeletion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserSignup">disabledUserSignup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissions">GoogleIdentityPlatformConfigClientPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disabledUserDeletionInput`<sup>Optional</sup> <a name="disabledUserDeletionInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserDeletionInput"></a>

```java
public java.lang.Object getDisabledUserDeletionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disabledUserSignupInput`<sup>Optional</sup> <a name="disabledUserSignupInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserSignupInput"></a>

```java
public java.lang.Object getDisabledUserSignupInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disabledUserDeletion`<sup>Required</sup> <a name="disabledUserDeletion" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserDeletion"></a>

```java
public java.lang.Object getDisabledUserDeletion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disabledUserSignup`<sup>Required</sup> <a name="disabledUserSignup" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserSignup"></a>

```java
public java.lang.Object getDisabledUserSignup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissionsOutputReference.property.internalValue"></a>

```java
public GoogleIdentityPlatformConfigClientPermissions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigClientPermissions">GoogleIdentityPlatformConfigClientPermissions</a>

---


### GoogleIdentityPlatformConfigMfaOutputReference <a name="GoogleIdentityPlatformConfigMfaOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigMfaOutputReference;

new GoogleIdentityPlatformConfigMfaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.putProviderConfigs">putProviderConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.resetEnabledProviders">resetEnabledProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.resetProviderConfigs">resetProviderConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfigs` <a name="putProviderConfigs" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.putProviderConfigs"></a>

```java
public void putProviderConfigs(IResolvable OR java.util.List<GoogleIdentityPlatformConfigMfaProviderConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.putProviderConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigs">GoogleIdentityPlatformConfigMfaProviderConfigs</a>>

---

##### `resetEnabledProviders` <a name="resetEnabledProviders" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.resetEnabledProviders"></a>

```java
public void resetEnabledProviders()
```

##### `resetProviderConfigs` <a name="resetProviderConfigs" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.resetProviderConfigs"></a>

```java
public void resetProviderConfigs()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.resetState"></a>

```java
public void resetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.property.providerConfigs">providerConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsList">GoogleIdentityPlatformConfigMfaProviderConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.property.enabledProvidersInput">enabledProvidersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.property.providerConfigsInput">providerConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigs">GoogleIdentityPlatformConfigMfaProviderConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.property.enabledProviders">enabledProviders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfa">GoogleIdentityPlatformConfigMfa</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `providerConfigs`<sup>Required</sup> <a name="providerConfigs" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.property.providerConfigs"></a>

```java
public GoogleIdentityPlatformConfigMfaProviderConfigsList getProviderConfigs();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsList">GoogleIdentityPlatformConfigMfaProviderConfigsList</a>

---

##### `enabledProvidersInput`<sup>Optional</sup> <a name="enabledProvidersInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.property.enabledProvidersInput"></a>

```java
public java.util.List<java.lang.String> getEnabledProvidersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `providerConfigsInput`<sup>Optional</sup> <a name="providerConfigsInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.property.providerConfigsInput"></a>

```java
public java.lang.Object getProviderConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigs">GoogleIdentityPlatformConfigMfaProviderConfigs</a>>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `enabledProviders`<sup>Required</sup> <a name="enabledProviders" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.property.enabledProviders"></a>

```java
public java.util.List<java.lang.String> getEnabledProviders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaOutputReference.property.internalValue"></a>

```java
public GoogleIdentityPlatformConfigMfa getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfa">GoogleIdentityPlatformConfigMfa</a>

---


### GoogleIdentityPlatformConfigMfaProviderConfigsList <a name="GoogleIdentityPlatformConfigMfaProviderConfigsList" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigMfaProviderConfigsList;

new GoogleIdentityPlatformConfigMfaProviderConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsList.get"></a>

```java
public GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigs">GoogleIdentityPlatformConfigMfaProviderConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigs">GoogleIdentityPlatformConfigMfaProviderConfigs</a>>

---


### GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference <a name="GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference;

new GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.putTotpProviderConfig">putTotpProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.resetTotpProviderConfig">resetTotpProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTotpProviderConfig` <a name="putTotpProviderConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.putTotpProviderConfig"></a>

```java
public void putTotpProviderConfig(GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.putTotpProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig">GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig</a>

---

##### `resetState` <a name="resetState" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.resetState"></a>

```java
public void resetState()
```

##### `resetTotpProviderConfig` <a name="resetTotpProviderConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.resetTotpProviderConfig"></a>

```java
public void resetTotpProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.property.totpProviderConfig">totpProviderConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference">GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.property.totpProviderConfigInput">totpProviderConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig">GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigs">GoogleIdentityPlatformConfigMfaProviderConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `totpProviderConfig`<sup>Required</sup> <a name="totpProviderConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.property.totpProviderConfig"></a>

```java
public GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference getTotpProviderConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference">GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference</a>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `totpProviderConfigInput`<sup>Optional</sup> <a name="totpProviderConfigInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.property.totpProviderConfigInput"></a>

```java
public GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig getTotpProviderConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig">GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigs">GoogleIdentityPlatformConfigMfaProviderConfigs</a>

---


### GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference <a name="GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference;

new GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.resetAdjacentIntervals">resetAdjacentIntervals</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdjacentIntervals` <a name="resetAdjacentIntervals" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.resetAdjacentIntervals"></a>

```java
public void resetAdjacentIntervals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.adjacentIntervalsInput">adjacentIntervalsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.adjacentIntervals">adjacentIntervals</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig">GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adjacentIntervalsInput`<sup>Optional</sup> <a name="adjacentIntervalsInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.adjacentIntervalsInput"></a>

```java
public java.lang.Number getAdjacentIntervalsInput();
```

- *Type:* java.lang.Number

---

##### `adjacentIntervals`<sup>Required</sup> <a name="adjacentIntervals" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.adjacentIntervals"></a>

```java
public java.lang.Number getAdjacentIntervals();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.internalValue"></a>

```java
public GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig">GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig</a>

---


### GoogleIdentityPlatformConfigMonitoringOutputReference <a name="GoogleIdentityPlatformConfigMonitoringOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigMonitoringOutputReference;

new GoogleIdentityPlatformConfigMonitoringOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.putRequestLogging">putRequestLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.resetRequestLogging">resetRequestLogging</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequestLogging` <a name="putRequestLogging" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.putRequestLogging"></a>

```java
public void putRequestLogging(GoogleIdentityPlatformConfigMonitoringRequestLogging value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.putRequestLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLogging">GoogleIdentityPlatformConfigMonitoringRequestLogging</a>

---

##### `resetRequestLogging` <a name="resetRequestLogging" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.resetRequestLogging"></a>

```java
public void resetRequestLogging()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.property.requestLogging">requestLogging</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference">GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.property.requestLoggingInput">requestLoggingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLogging">GoogleIdentityPlatformConfigMonitoringRequestLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoring">GoogleIdentityPlatformConfigMonitoring</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `requestLogging`<sup>Required</sup> <a name="requestLogging" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.property.requestLogging"></a>

```java
public GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference getRequestLogging();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference">GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference</a>

---

##### `requestLoggingInput`<sup>Optional</sup> <a name="requestLoggingInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.property.requestLoggingInput"></a>

```java
public GoogleIdentityPlatformConfigMonitoringRequestLogging getRequestLoggingInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLogging">GoogleIdentityPlatformConfigMonitoringRequestLogging</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringOutputReference.property.internalValue"></a>

```java
public GoogleIdentityPlatformConfigMonitoring getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoring">GoogleIdentityPlatformConfigMonitoring</a>

---


### GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference <a name="GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference;

new GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLogging">GoogleIdentityPlatformConfigMonitoringRequestLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.internalValue"></a>

```java
public GoogleIdentityPlatformConfigMonitoringRequestLogging getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMonitoringRequestLogging">GoogleIdentityPlatformConfigMonitoringRequestLogging</a>

---


### GoogleIdentityPlatformConfigMultiTenantOutputReference <a name="GoogleIdentityPlatformConfigMultiTenantOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigMultiTenantOutputReference;

new GoogleIdentityPlatformConfigMultiTenantOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.resetAllowTenants">resetAllowTenants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.resetDefaultTenantLocation">resetDefaultTenantLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowTenants` <a name="resetAllowTenants" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.resetAllowTenants"></a>

```java
public void resetAllowTenants()
```

##### `resetDefaultTenantLocation` <a name="resetDefaultTenantLocation" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.resetDefaultTenantLocation"></a>

```java
public void resetDefaultTenantLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.property.allowTenantsInput">allowTenantsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.property.defaultTenantLocationInput">defaultTenantLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.property.allowTenants">allowTenants</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.property.defaultTenantLocation">defaultTenantLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenant">GoogleIdentityPlatformConfigMultiTenant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowTenantsInput`<sup>Optional</sup> <a name="allowTenantsInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.property.allowTenantsInput"></a>

```java
public java.lang.Object getAllowTenantsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultTenantLocationInput`<sup>Optional</sup> <a name="defaultTenantLocationInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.property.defaultTenantLocationInput"></a>

```java
public java.lang.String getDefaultTenantLocationInput();
```

- *Type:* java.lang.String

---

##### `allowTenants`<sup>Required</sup> <a name="allowTenants" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.property.allowTenants"></a>

```java
public java.lang.Object getAllowTenants();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultTenantLocation`<sup>Required</sup> <a name="defaultTenantLocation" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.property.defaultTenantLocation"></a>

```java
public java.lang.String getDefaultTenantLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenantOutputReference.property.internalValue"></a>

```java
public GoogleIdentityPlatformConfigMultiTenant getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigMultiTenant">GoogleIdentityPlatformConfigMultiTenant</a>

---


### GoogleIdentityPlatformConfigQuotaOutputReference <a name="GoogleIdentityPlatformConfigQuotaOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigQuotaOutputReference;

new GoogleIdentityPlatformConfigQuotaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.putSignUpQuotaConfig">putSignUpQuotaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.resetSignUpQuotaConfig">resetSignUpQuotaConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSignUpQuotaConfig` <a name="putSignUpQuotaConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.putSignUpQuotaConfig"></a>

```java
public void putSignUpQuotaConfig(GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.putSignUpQuotaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig">GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig</a>

---

##### `resetSignUpQuotaConfig` <a name="resetSignUpQuotaConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.resetSignUpQuotaConfig"></a>

```java
public void resetSignUpQuotaConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.property.signUpQuotaConfig">signUpQuotaConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference">GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.property.signUpQuotaConfigInput">signUpQuotaConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig">GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuota">GoogleIdentityPlatformConfigQuota</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `signUpQuotaConfig`<sup>Required</sup> <a name="signUpQuotaConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.property.signUpQuotaConfig"></a>

```java
public GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference getSignUpQuotaConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference">GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference</a>

---

##### `signUpQuotaConfigInput`<sup>Optional</sup> <a name="signUpQuotaConfigInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.property.signUpQuotaConfigInput"></a>

```java
public GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig getSignUpQuotaConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig">GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaOutputReference.property.internalValue"></a>

```java
public GoogleIdentityPlatformConfigQuota getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuota">GoogleIdentityPlatformConfigQuota</a>

---


### GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference <a name="GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference;

new GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetQuota">resetQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetQuotaDuration">resetQuotaDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQuota` <a name="resetQuota" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetQuota"></a>

```java
public void resetQuota()
```

##### `resetQuotaDuration` <a name="resetQuotaDuration" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetQuotaDuration"></a>

```java
public void resetQuotaDuration()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaDurationInput">quotaDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaInput">quotaInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quota">quota</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaDuration">quotaDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig">GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `quotaDurationInput`<sup>Optional</sup> <a name="quotaDurationInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaDurationInput"></a>

```java
public java.lang.String getQuotaDurationInput();
```

- *Type:* java.lang.String

---

##### `quotaInput`<sup>Optional</sup> <a name="quotaInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaInput"></a>

```java
public java.lang.Number getQuotaInput();
```

- *Type:* java.lang.Number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quota"></a>

```java
public java.lang.Number getQuota();
```

- *Type:* java.lang.Number

---

##### `quotaDuration`<sup>Required</sup> <a name="quotaDuration" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaDuration"></a>

```java
public java.lang.String getQuotaDuration();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.internalValue"></a>

```java
public GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig">GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig</a>

---


### GoogleIdentityPlatformConfigSignInAnonymousOutputReference <a name="GoogleIdentityPlatformConfigSignInAnonymousOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigSignInAnonymousOutputReference;

new GoogleIdentityPlatformConfigSignInAnonymousOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymous">GoogleIdentityPlatformConfigSignInAnonymous</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference.property.internalValue"></a>

```java
public GoogleIdentityPlatformConfigSignInAnonymous getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymous">GoogleIdentityPlatformConfigSignInAnonymous</a>

---


### GoogleIdentityPlatformConfigSignInEmailOutputReference <a name="GoogleIdentityPlatformConfigSignInEmailOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigSignInEmailOutputReference;

new GoogleIdentityPlatformConfigSignInEmailOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.resetPasswordRequired">resetPasswordRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPasswordRequired` <a name="resetPasswordRequired" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.resetPasswordRequired"></a>

```java
public void resetPasswordRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.property.passwordRequiredInput">passwordRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.property.passwordRequired">passwordRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmail">GoogleIdentityPlatformConfigSignInEmail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordRequiredInput`<sup>Optional</sup> <a name="passwordRequiredInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.property.passwordRequiredInput"></a>

```java
public java.lang.Object getPasswordRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordRequired`<sup>Required</sup> <a name="passwordRequired" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.property.passwordRequired"></a>

```java
public java.lang.Object getPasswordRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference.property.internalValue"></a>

```java
public GoogleIdentityPlatformConfigSignInEmail getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmail">GoogleIdentityPlatformConfigSignInEmail</a>

---


### GoogleIdentityPlatformConfigSignInHashConfigList <a name="GoogleIdentityPlatformConfigSignInHashConfigList" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigSignInHashConfigList;

new GoogleIdentityPlatformConfigSignInHashConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigList.get"></a>

```java
public GoogleIdentityPlatformConfigSignInHashConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleIdentityPlatformConfigSignInHashConfigOutputReference <a name="GoogleIdentityPlatformConfigSignInHashConfigOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigSignInHashConfigOutputReference;

new GoogleIdentityPlatformConfigSignInHashConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.property.memoryCost">memoryCost</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.property.rounds">rounds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.property.saltSeparator">saltSeparator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.property.signerKey">signerKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfig">GoogleIdentityPlatformConfigSignInHashConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `memoryCost`<sup>Required</sup> <a name="memoryCost" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.property.memoryCost"></a>

```java
public java.lang.Number getMemoryCost();
```

- *Type:* java.lang.Number

---

##### `rounds`<sup>Required</sup> <a name="rounds" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.property.rounds"></a>

```java
public java.lang.Number getRounds();
```

- *Type:* java.lang.Number

---

##### `saltSeparator`<sup>Required</sup> <a name="saltSeparator" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.property.saltSeparator"></a>

```java
public java.lang.String getSaltSeparator();
```

- *Type:* java.lang.String

---

##### `signerKey`<sup>Required</sup> <a name="signerKey" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.property.signerKey"></a>

```java
public java.lang.String getSignerKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigOutputReference.property.internalValue"></a>

```java
public GoogleIdentityPlatformConfigSignInHashConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfig">GoogleIdentityPlatformConfigSignInHashConfig</a>

---


### GoogleIdentityPlatformConfigSignInOutputReference <a name="GoogleIdentityPlatformConfigSignInOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigSignInOutputReference;

new GoogleIdentityPlatformConfigSignInOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.putAnonymous">putAnonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.putEmail">putEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.putPhoneNumber">putPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.resetAllowDuplicateEmails">resetAllowDuplicateEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.resetAnonymous">resetAnonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnonymous` <a name="putAnonymous" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.putAnonymous"></a>

```java
public void putAnonymous(GoogleIdentityPlatformConfigSignInAnonymous value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.putAnonymous.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymous">GoogleIdentityPlatformConfigSignInAnonymous</a>

---

##### `putEmail` <a name="putEmail" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.putEmail"></a>

```java
public void putEmail(GoogleIdentityPlatformConfigSignInEmail value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.putEmail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmail">GoogleIdentityPlatformConfigSignInEmail</a>

---

##### `putPhoneNumber` <a name="putPhoneNumber" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.putPhoneNumber"></a>

```java
public void putPhoneNumber(GoogleIdentityPlatformConfigSignInPhoneNumber value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.putPhoneNumber.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumber">GoogleIdentityPlatformConfigSignInPhoneNumber</a>

---

##### `resetAllowDuplicateEmails` <a name="resetAllowDuplicateEmails" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.resetAllowDuplicateEmails"></a>

```java
public void resetAllowDuplicateEmails()
```

##### `resetAnonymous` <a name="resetAnonymous" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.resetAnonymous"></a>

```java
public void resetAnonymous()
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.resetPhoneNumber"></a>

```java
public void resetPhoneNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.property.anonymous">anonymous</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference">GoogleIdentityPlatformConfigSignInAnonymousOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.property.email">email</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference">GoogleIdentityPlatformConfigSignInEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.property.hashConfig">hashConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigList">GoogleIdentityPlatformConfigSignInHashConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.property.phoneNumber">phoneNumber</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference">GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.property.allowDuplicateEmailsInput">allowDuplicateEmailsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.property.anonymousInput">anonymousInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymous">GoogleIdentityPlatformConfigSignInAnonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.property.emailInput">emailInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmail">GoogleIdentityPlatformConfigSignInEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumber">GoogleIdentityPlatformConfigSignInPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.property.allowDuplicateEmails">allowDuplicateEmails</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignIn">GoogleIdentityPlatformConfigSignIn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `anonymous`<sup>Required</sup> <a name="anonymous" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.property.anonymous"></a>

```java
public GoogleIdentityPlatformConfigSignInAnonymousOutputReference getAnonymous();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymousOutputReference">GoogleIdentityPlatformConfigSignInAnonymousOutputReference</a>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.property.email"></a>

```java
public GoogleIdentityPlatformConfigSignInEmailOutputReference getEmail();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmailOutputReference">GoogleIdentityPlatformConfigSignInEmailOutputReference</a>

---

##### `hashConfig`<sup>Required</sup> <a name="hashConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.property.hashConfig"></a>

```java
public GoogleIdentityPlatformConfigSignInHashConfigList getHashConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInHashConfigList">GoogleIdentityPlatformConfigSignInHashConfigList</a>

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.property.phoneNumber"></a>

```java
public GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference getPhoneNumber();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference">GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference</a>

---

##### `allowDuplicateEmailsInput`<sup>Optional</sup> <a name="allowDuplicateEmailsInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.property.allowDuplicateEmailsInput"></a>

```java
public java.lang.Object getAllowDuplicateEmailsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `anonymousInput`<sup>Optional</sup> <a name="anonymousInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.property.anonymousInput"></a>

```java
public GoogleIdentityPlatformConfigSignInAnonymous getAnonymousInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInAnonymous">GoogleIdentityPlatformConfigSignInAnonymous</a>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.property.emailInput"></a>

```java
public GoogleIdentityPlatformConfigSignInEmail getEmailInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInEmail">GoogleIdentityPlatformConfigSignInEmail</a>

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.property.phoneNumberInput"></a>

```java
public GoogleIdentityPlatformConfigSignInPhoneNumber getPhoneNumberInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumber">GoogleIdentityPlatformConfigSignInPhoneNumber</a>

---

##### `allowDuplicateEmails`<sup>Required</sup> <a name="allowDuplicateEmails" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.property.allowDuplicateEmails"></a>

```java
public java.lang.Object getAllowDuplicateEmails();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInOutputReference.property.internalValue"></a>

```java
public GoogleIdentityPlatformConfigSignIn getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignIn">GoogleIdentityPlatformConfigSignIn</a>

---


### GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference <a name="GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference;

new GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.resetTestPhoneNumbers">resetTestPhoneNumbers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTestPhoneNumbers` <a name="resetTestPhoneNumbers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.resetTestPhoneNumbers"></a>

```java
public void resetTestPhoneNumbers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.property.testPhoneNumbersInput">testPhoneNumbersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.property.testPhoneNumbers">testPhoneNumbers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumber">GoogleIdentityPlatformConfigSignInPhoneNumber</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `testPhoneNumbersInput`<sup>Optional</sup> <a name="testPhoneNumbersInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.property.testPhoneNumbersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTestPhoneNumbersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `testPhoneNumbers`<sup>Required</sup> <a name="testPhoneNumbers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.property.testPhoneNumbers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTestPhoneNumbers();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference.property.internalValue"></a>

```java
public GoogleIdentityPlatformConfigSignInPhoneNumber getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSignInPhoneNumber">GoogleIdentityPlatformConfigSignInPhoneNumber</a>

---


### GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference <a name="GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference;

new GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.resetDisallowedRegions">resetDisallowedRegions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisallowedRegions` <a name="resetDisallowedRegions" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.resetDisallowedRegions"></a>

```java
public void resetDisallowedRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.disallowedRegionsInput">disallowedRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.disallowedRegions">disallowedRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault">GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disallowedRegionsInput`<sup>Optional</sup> <a name="disallowedRegionsInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.disallowedRegionsInput"></a>

```java
public java.util.List<java.lang.String> getDisallowedRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disallowedRegions`<sup>Required</sup> <a name="disallowedRegions" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.disallowedRegions"></a>

```java
public java.util.List<java.lang.String> getDisallowedRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.internalValue"></a>

```java
public GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault">GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault</a>

---


### GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference <a name="GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference;

new GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.resetAllowedRegions">resetAllowedRegions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedRegions` <a name="resetAllowedRegions" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.resetAllowedRegions"></a>

```java
public void resetAllowedRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.allowedRegionsInput">allowedRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.allowedRegions">allowedRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly">GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedRegionsInput`<sup>Optional</sup> <a name="allowedRegionsInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.allowedRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedRegions`<sup>Required</sup> <a name="allowedRegions" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.allowedRegions"></a>

```java
public java.util.List<java.lang.String> getAllowedRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.internalValue"></a>

```java
public GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly">GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly</a>

---


### GoogleIdentityPlatformConfigSmsRegionConfigOutputReference <a name="GoogleIdentityPlatformConfigSmsRegionConfigOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference;

new GoogleIdentityPlatformConfigSmsRegionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.putAllowByDefault">putAllowByDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.putAllowlistOnly">putAllowlistOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.resetAllowByDefault">resetAllowByDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.resetAllowlistOnly">resetAllowlistOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowByDefault` <a name="putAllowByDefault" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.putAllowByDefault"></a>

```java
public void putAllowByDefault(GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.putAllowByDefault.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault">GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault</a>

---

##### `putAllowlistOnly` <a name="putAllowlistOnly" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.putAllowlistOnly"></a>

```java
public void putAllowlistOnly(GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.putAllowlistOnly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly">GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly</a>

---

##### `resetAllowByDefault` <a name="resetAllowByDefault" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.resetAllowByDefault"></a>

```java
public void resetAllowByDefault()
```

##### `resetAllowlistOnly` <a name="resetAllowlistOnly" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.resetAllowlistOnly"></a>

```java
public void resetAllowlistOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.property.allowByDefault">allowByDefault</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference">GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.property.allowlistOnly">allowlistOnly</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference">GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.property.allowByDefaultInput">allowByDefaultInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault">GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.property.allowlistOnlyInput">allowlistOnlyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly">GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfig">GoogleIdentityPlatformConfigSmsRegionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowByDefault`<sup>Required</sup> <a name="allowByDefault" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.property.allowByDefault"></a>

```java
public GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference getAllowByDefault();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference">GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference</a>

---

##### `allowlistOnly`<sup>Required</sup> <a name="allowlistOnly" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.property.allowlistOnly"></a>

```java
public GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference getAllowlistOnly();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference">GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference</a>

---

##### `allowByDefaultInput`<sup>Optional</sup> <a name="allowByDefaultInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.property.allowByDefaultInput"></a>

```java
public GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault getAllowByDefaultInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault">GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault</a>

---

##### `allowlistOnlyInput`<sup>Optional</sup> <a name="allowlistOnlyInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.property.allowlistOnlyInput"></a>

```java
public GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly getAllowlistOnlyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly">GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfigOutputReference.property.internalValue"></a>

```java
public GoogleIdentityPlatformConfigSmsRegionConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigSmsRegionConfig">GoogleIdentityPlatformConfigSmsRegionConfig</a>

---


### GoogleIdentityPlatformConfigTimeoutsOutputReference <a name="GoogleIdentityPlatformConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_config.GoogleIdentityPlatformConfigTimeoutsOutputReference;

new GoogleIdentityPlatformConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeouts">GoogleIdentityPlatformConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIdentityPlatformConfig.GoogleIdentityPlatformConfigTimeouts">GoogleIdentityPlatformConfigTimeouts</a>

---



