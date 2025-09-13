# `googleApigeeSecurityAction` Submodule <a name="`googleApigeeSecurityAction` Submodule" id="@cdktf/provider-google-beta.googleApigeeSecurityAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeSecurityAction <a name="GoogleApigeeSecurityAction" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action google_apigee_security_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_security_action.GoogleApigeeSecurityAction;

GoogleApigeeSecurityAction.Builder.create(Construct scope, java.lang.String id)
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
    .conditionConfig(GoogleApigeeSecurityActionConditionConfig)
    .envId(java.lang.String)
    .orgId(java.lang.String)
    .securityActionId(java.lang.String)
    .state(java.lang.String)
//  .allow(GoogleApigeeSecurityActionAllow)
//  .apiProxies(java.util.List<java.lang.String>)
//  .deny(GoogleApigeeSecurityActionDeny)
//  .description(java.lang.String)
//  .expireTime(java.lang.String)
//  .flag(GoogleApigeeSecurityActionFlag)
//  .id(java.lang.String)
//  .timeouts(GoogleApigeeSecurityActionTimeouts)
//  .ttl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.conditionConfig">conditionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a></code> | condition_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.envId">envId</a></code> | <code>java.lang.String</code> | The Apigee environment that this security action applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.orgId">orgId</a></code> | <code>java.lang.String</code> | The organization that this security action applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.securityActionId">securityActionId</a></code> | <code>java.lang.String</code> | The ID to use for the SecurityAction, which will become the final component of the action's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Only an ENABLED SecurityAction is enforced. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.allow">allow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.apiProxies">apiProxies</a></code> | <code>java.util.List<java.lang.String></code> | If unset, this would apply to all proxies in the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.deny">deny</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a></code> | deny block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional user provided description of the SecurityAction. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.expireTime">expireTime</a></code> | <code>java.lang.String</code> | The expiration for this SecurityAction. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.flag">flag</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a></code> | flag block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#id GoogleApigeeSecurityAction#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts">GoogleApigeeSecurityActionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.String</code> | The TTL for this SecurityAction. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `conditionConfig`<sup>Required</sup> <a name="conditionConfig" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.conditionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a>

condition_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#condition_config GoogleApigeeSecurityAction#condition_config}

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.envId"></a>

- *Type:* java.lang.String

The Apigee environment that this security action applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#env_id GoogleApigeeSecurityAction#env_id}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.orgId"></a>

- *Type:* java.lang.String

The organization that this security action applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#org_id GoogleApigeeSecurityAction#org_id}

---

##### `securityActionId`<sup>Required</sup> <a name="securityActionId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.securityActionId"></a>

- *Type:* java.lang.String

The ID to use for the SecurityAction, which will become the final component of the action's resource name.

This value should be 0-61 characters, and valid format is (^a-z?$).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#security_action_id GoogleApigeeSecurityAction#security_action_id}

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Only an ENABLED SecurityAction is enforced.

An ENABLED SecurityAction past its expiration time will not be enforced. Possible values: ["ENABLED", "DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#state GoogleApigeeSecurityAction#state}

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.allow"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#allow GoogleApigeeSecurityAction#allow}

---

##### `apiProxies`<sup>Optional</sup> <a name="apiProxies" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.apiProxies"></a>

- *Type:* java.util.List<java.lang.String>

If unset, this would apply to all proxies in the environment.

If set, this action is enforced only if at least one proxy in the repeated
list is deployed at the time of enforcement. If set, several restrictions are enforced on SecurityActions.
There can be at most 100 enabled actions with proxies set in an env.
Several other restrictions apply on conditions and are detailed later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#api_proxies GoogleApigeeSecurityAction#api_proxies}

---

##### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.deny"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#deny GoogleApigeeSecurityAction#deny}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional user provided description of the SecurityAction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#description GoogleApigeeSecurityAction#description}

---

##### `expireTime`<sup>Optional</sup> <a name="expireTime" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.expireTime"></a>

- *Type:* java.lang.String

The expiration for this SecurityAction.

Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9
fractional digits. Offsets other than "Z" are also accepted.
Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#expire_time GoogleApigeeSecurityAction#expire_time}

---

##### `flag`<sup>Optional</sup> <a name="flag" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.flag"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a>

flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#flag GoogleApigeeSecurityAction#flag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#id GoogleApigeeSecurityAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts">GoogleApigeeSecurityActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#timeouts GoogleApigeeSecurityAction#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.ttl"></a>

- *Type:* java.lang.String

The TTL for this SecurityAction. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#ttl GoogleApigeeSecurityAction#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putAllow">putAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putConditionConfig">putConditionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putDeny">putDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putFlag">putFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetAllow">resetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetApiProxies">resetApiProxies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetDeny">resetDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetExpireTime">resetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetFlag">resetFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllow` <a name="putAllow" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putAllow"></a>

```java
public void putAllow(GoogleApigeeSecurityActionAllow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putAllow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a>

---

##### `putConditionConfig` <a name="putConditionConfig" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putConditionConfig"></a>

```java
public void putConditionConfig(GoogleApigeeSecurityActionConditionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putConditionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a>

---

##### `putDeny` <a name="putDeny" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putDeny"></a>

```java
public void putDeny(GoogleApigeeSecurityActionDeny value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putDeny.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a>

---

##### `putFlag` <a name="putFlag" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putFlag"></a>

```java
public void putFlag(GoogleApigeeSecurityActionFlag value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putFlag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putTimeouts"></a>

```java
public void putTimeouts(GoogleApigeeSecurityActionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts">GoogleApigeeSecurityActionTimeouts</a>

---

##### `resetAllow` <a name="resetAllow" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetAllow"></a>

```java
public void resetAllow()
```

##### `resetApiProxies` <a name="resetApiProxies" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetApiProxies"></a>

```java
public void resetApiProxies()
```

##### `resetDeny` <a name="resetDeny" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetDeny"></a>

```java
public void resetDeny()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExpireTime` <a name="resetExpireTime" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetExpireTime"></a>

```java
public void resetExpireTime()
```

##### `resetFlag` <a name="resetFlag" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetFlag"></a>

```java
public void resetFlag()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetTtl"></a>

```java
public void resetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApigeeSecurityAction resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_security_action.GoogleApigeeSecurityAction;

GoogleApigeeSecurityAction.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_security_action.GoogleApigeeSecurityAction;

GoogleApigeeSecurityAction.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_security_action.GoogleApigeeSecurityAction;

GoogleApigeeSecurityAction.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_security_action.GoogleApigeeSecurityAction;

GoogleApigeeSecurityAction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleApigeeSecurityAction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleApigeeSecurityAction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleApigeeSecurityAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleApigeeSecurityAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeSecurityAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference">GoogleApigeeSecurityActionAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.conditionConfig">conditionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference">GoogleApigeeSecurityActionConditionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference">GoogleApigeeSecurityActionDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.flag">flag</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference">GoogleApigeeSecurityActionFlagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference">GoogleApigeeSecurityActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.allowInput">allowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.apiProxiesInput">apiProxiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.conditionConfigInput">conditionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.denyInput">denyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.envIdInput">envIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.expireTimeInput">expireTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.flagInput">flagInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.orgIdInput">orgIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.securityActionIdInput">securityActionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts">GoogleApigeeSecurityActionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.apiProxies">apiProxies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.envId">envId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.orgId">orgId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.securityActionId">securityActionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.allow"></a>

```java
public GoogleApigeeSecurityActionAllowOutputReference getAllow();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference">GoogleApigeeSecurityActionAllowOutputReference</a>

---

##### `conditionConfig`<sup>Required</sup> <a name="conditionConfig" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.conditionConfig"></a>

```java
public GoogleApigeeSecurityActionConditionConfigOutputReference getConditionConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference">GoogleApigeeSecurityActionConditionConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deny`<sup>Required</sup> <a name="deny" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.deny"></a>

```java
public GoogleApigeeSecurityActionDenyOutputReference getDeny();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference">GoogleApigeeSecurityActionDenyOutputReference</a>

---

##### `flag`<sup>Required</sup> <a name="flag" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.flag"></a>

```java
public GoogleApigeeSecurityActionFlagOutputReference getFlag();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference">GoogleApigeeSecurityActionFlagOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.timeouts"></a>

```java
public GoogleApigeeSecurityActionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference">GoogleApigeeSecurityActionTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `allowInput`<sup>Optional</sup> <a name="allowInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.allowInput"></a>

```java
public GoogleApigeeSecurityActionAllow getAllowInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a>

---

##### `apiProxiesInput`<sup>Optional</sup> <a name="apiProxiesInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.apiProxiesInput"></a>

```java
public java.util.List<java.lang.String> getApiProxiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `conditionConfigInput`<sup>Optional</sup> <a name="conditionConfigInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.conditionConfigInput"></a>

```java
public GoogleApigeeSecurityActionConditionConfig getConditionConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a>

---

##### `denyInput`<sup>Optional</sup> <a name="denyInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.denyInput"></a>

```java
public GoogleApigeeSecurityActionDeny getDenyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `envIdInput`<sup>Optional</sup> <a name="envIdInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.envIdInput"></a>

```java
public java.lang.String getEnvIdInput();
```

- *Type:* java.lang.String

---

##### `expireTimeInput`<sup>Optional</sup> <a name="expireTimeInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.expireTimeInput"></a>

```java
public java.lang.String getExpireTimeInput();
```

- *Type:* java.lang.String

---

##### `flagInput`<sup>Optional</sup> <a name="flagInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.flagInput"></a>

```java
public GoogleApigeeSecurityActionFlag getFlagInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.orgIdInput"></a>

```java
public java.lang.String getOrgIdInput();
```

- *Type:* java.lang.String

---

##### `securityActionIdInput`<sup>Optional</sup> <a name="securityActionIdInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.securityActionIdInput"></a>

```java
public java.lang.String getSecurityActionIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts">GoogleApigeeSecurityActionTimeouts</a>

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `apiProxies`<sup>Required</sup> <a name="apiProxies" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.apiProxies"></a>

```java
public java.util.List<java.lang.String> getApiProxies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.envId"></a>

```java
public java.lang.String getEnvId();
```

- *Type:* java.lang.String

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

---

##### `securityActionId`<sup>Required</sup> <a name="securityActionId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.securityActionId"></a>

```java
public java.lang.String getSecurityActionId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeSecurityActionAllow <a name="GoogleApigeeSecurityActionAllow" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_security_action.GoogleApigeeSecurityActionAllow;

GoogleApigeeSecurityActionAllow.builder()
    .build();
```


### GoogleApigeeSecurityActionConditionConfig <a name="GoogleApigeeSecurityActionConditionConfig" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_security_action.GoogleApigeeSecurityActionConditionConfig;

GoogleApigeeSecurityActionConditionConfig.builder()
//  .accessTokens(java.util.List<java.lang.String>)
//  .apiKeys(java.util.List<java.lang.String>)
//  .apiProducts(java.util.List<java.lang.String>)
//  .asns(java.util.List<java.lang.String>)
//  .botReasons(java.util.List<java.lang.String>)
//  .developerApps(java.util.List<java.lang.String>)
//  .developers(java.util.List<java.lang.String>)
//  .httpMethods(java.util.List<java.lang.String>)
//  .ipAddressRanges(java.util.List<java.lang.String>)
//  .regionCodes(java.util.List<java.lang.String>)
//  .userAgents(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.accessTokens">accessTokens</a></code> | <code>java.util.List<java.lang.String></code> | A list of accessTokens. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.apiKeys">apiKeys</a></code> | <code>java.util.List<java.lang.String></code> | A list of API keys. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.apiProducts">apiProducts</a></code> | <code>java.util.List<java.lang.String></code> | A list of API Products. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.asns">asns</a></code> | <code>java.util.List<java.lang.String></code> | A list of ASN numbers to act on, e.g. 23. https://en.wikipedia.org/wiki/Autonomous_system_(Internet) This uses int64 instead of uint32 because of https://linter.aip.dev/141/forbidden-types. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.botReasons">botReasons</a></code> | <code>java.util.List<java.lang.String></code> | A list of Bot Reasons. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.developerApps">developerApps</a></code> | <code>java.util.List<java.lang.String></code> | A list of developer apps. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.developers">developers</a></code> | <code>java.util.List<java.lang.String></code> | A list of developers. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.httpMethods">httpMethods</a></code> | <code>java.util.List<java.lang.String></code> | Act only on particular HTTP methods. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.ipAddressRanges">ipAddressRanges</a></code> | <code>java.util.List<java.lang.String></code> | A list of IP addresses. This could be either IPv4 or IPv6. Limited to 100 per action. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.regionCodes">regionCodes</a></code> | <code>java.util.List<java.lang.String></code> | A list of countries/region codes to act on, e.g. US. This follows https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.userAgents">userAgents</a></code> | <code>java.util.List<java.lang.String></code> | A list of user agents to deny. We look for exact matches. Limit 50 per action. |

---

##### `accessTokens`<sup>Optional</sup> <a name="accessTokens" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.accessTokens"></a>

```java
public java.util.List<java.lang.String> getAccessTokens();
```

- *Type:* java.util.List<java.lang.String>

A list of accessTokens. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#access_tokens GoogleApigeeSecurityAction#access_tokens}

---

##### `apiKeys`<sup>Optional</sup> <a name="apiKeys" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.apiKeys"></a>

```java
public java.util.List<java.lang.String> getApiKeys();
```

- *Type:* java.util.List<java.lang.String>

A list of API keys. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#api_keys GoogleApigeeSecurityAction#api_keys}

---

##### `apiProducts`<sup>Optional</sup> <a name="apiProducts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.apiProducts"></a>

```java
public java.util.List<java.lang.String> getApiProducts();
```

- *Type:* java.util.List<java.lang.String>

A list of API Products. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#api_products GoogleApigeeSecurityAction#api_products}

---

##### `asns`<sup>Optional</sup> <a name="asns" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.asns"></a>

```java
public java.util.List<java.lang.String> getAsns();
```

- *Type:* java.util.List<java.lang.String>

A list of ASN numbers to act on, e.g. 23. https://en.wikipedia.org/wiki/Autonomous_system_(Internet) This uses int64 instead of uint32 because of https://linter.aip.dev/141/forbidden-types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#asns GoogleApigeeSecurityAction#asns}

---

##### `botReasons`<sup>Optional</sup> <a name="botReasons" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.botReasons"></a>

```java
public java.util.List<java.lang.String> getBotReasons();
```

- *Type:* java.util.List<java.lang.String>

A list of Bot Reasons.

Current options: Flooder, Brute Guessor, Static Content Scraper,
OAuth Abuser, Robot Abuser, TorListRule, Advanced Anomaly Detection, Advanced API Scraper,
Search Engine Crawlers, Public Clouds, Public Cloud AWS, Public Cloud Azure, and Public Cloud Google.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#bot_reasons GoogleApigeeSecurityAction#bot_reasons}

---

##### `developerApps`<sup>Optional</sup> <a name="developerApps" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.developerApps"></a>

```java
public java.util.List<java.lang.String> getDeveloperApps();
```

- *Type:* java.util.List<java.lang.String>

A list of developer apps. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#developer_apps GoogleApigeeSecurityAction#developer_apps}

---

##### `developers`<sup>Optional</sup> <a name="developers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.developers"></a>

```java
public java.util.List<java.lang.String> getDevelopers();
```

- *Type:* java.util.List<java.lang.String>

A list of developers. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#developers GoogleApigeeSecurityAction#developers}

---

##### `httpMethods`<sup>Optional</sup> <a name="httpMethods" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.httpMethods"></a>

```java
public java.util.List<java.lang.String> getHttpMethods();
```

- *Type:* java.util.List<java.lang.String>

Act only on particular HTTP methods.

E.g. A read-only API can block POST/PUT/DELETE methods.
Accepted values are: GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE and PATCH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#http_methods GoogleApigeeSecurityAction#http_methods}

---

##### `ipAddressRanges`<sup>Optional</sup> <a name="ipAddressRanges" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.ipAddressRanges"></a>

```java
public java.util.List<java.lang.String> getIpAddressRanges();
```

- *Type:* java.util.List<java.lang.String>

A list of IP addresses. This could be either IPv4 or IPv6. Limited to 100 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#ip_address_ranges GoogleApigeeSecurityAction#ip_address_ranges}

---

##### `regionCodes`<sup>Optional</sup> <a name="regionCodes" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.regionCodes"></a>

```java
public java.util.List<java.lang.String> getRegionCodes();
```

- *Type:* java.util.List<java.lang.String>

A list of countries/region codes to act on, e.g. US. This follows https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#region_codes GoogleApigeeSecurityAction#region_codes}

---

##### `userAgents`<sup>Optional</sup> <a name="userAgents" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.userAgents"></a>

```java
public java.util.List<java.lang.String> getUserAgents();
```

- *Type:* java.util.List<java.lang.String>

A list of user agents to deny. We look for exact matches. Limit 50 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#user_agents GoogleApigeeSecurityAction#user_agents}

---

### GoogleApigeeSecurityActionConfig <a name="GoogleApigeeSecurityActionConfig" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_security_action.GoogleApigeeSecurityActionConfig;

GoogleApigeeSecurityActionConfig.builder()
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
    .conditionConfig(GoogleApigeeSecurityActionConditionConfig)
    .envId(java.lang.String)
    .orgId(java.lang.String)
    .securityActionId(java.lang.String)
    .state(java.lang.String)
//  .allow(GoogleApigeeSecurityActionAllow)
//  .apiProxies(java.util.List<java.lang.String>)
//  .deny(GoogleApigeeSecurityActionDeny)
//  .description(java.lang.String)
//  .expireTime(java.lang.String)
//  .flag(GoogleApigeeSecurityActionFlag)
//  .id(java.lang.String)
//  .timeouts(GoogleApigeeSecurityActionTimeouts)
//  .ttl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.conditionConfig">conditionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a></code> | condition_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.envId">envId</a></code> | <code>java.lang.String</code> | The Apigee environment that this security action applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.orgId">orgId</a></code> | <code>java.lang.String</code> | The organization that this security action applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.securityActionId">securityActionId</a></code> | <code>java.lang.String</code> | The ID to use for the SecurityAction, which will become the final component of the action's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.state">state</a></code> | <code>java.lang.String</code> | Only an ENABLED SecurityAction is enforced. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.apiProxies">apiProxies</a></code> | <code>java.util.List<java.lang.String></code> | If unset, this would apply to all proxies in the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a></code> | deny block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional user provided description of the SecurityAction. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | The expiration for this SecurityAction. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.flag">flag</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a></code> | flag block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#id GoogleApigeeSecurityAction#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts">GoogleApigeeSecurityActionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.ttl">ttl</a></code> | <code>java.lang.String</code> | The TTL for this SecurityAction. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `conditionConfig`<sup>Required</sup> <a name="conditionConfig" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.conditionConfig"></a>

```java
public GoogleApigeeSecurityActionConditionConfig getConditionConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a>

condition_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#condition_config GoogleApigeeSecurityAction#condition_config}

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.envId"></a>

```java
public java.lang.String getEnvId();
```

- *Type:* java.lang.String

The Apigee environment that this security action applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#env_id GoogleApigeeSecurityAction#env_id}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

The organization that this security action applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#org_id GoogleApigeeSecurityAction#org_id}

---

##### `securityActionId`<sup>Required</sup> <a name="securityActionId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.securityActionId"></a>

```java
public java.lang.String getSecurityActionId();
```

- *Type:* java.lang.String

The ID to use for the SecurityAction, which will become the final component of the action's resource name.

This value should be 0-61 characters, and valid format is (^a-z?$).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#security_action_id GoogleApigeeSecurityAction#security_action_id}

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Only an ENABLED SecurityAction is enforced.

An ENABLED SecurityAction past its expiration time will not be enforced. Possible values: ["ENABLED", "DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#state GoogleApigeeSecurityAction#state}

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.allow"></a>

```java
public GoogleApigeeSecurityActionAllow getAllow();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#allow GoogleApigeeSecurityAction#allow}

---

##### `apiProxies`<sup>Optional</sup> <a name="apiProxies" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.apiProxies"></a>

```java
public java.util.List<java.lang.String> getApiProxies();
```

- *Type:* java.util.List<java.lang.String>

If unset, this would apply to all proxies in the environment.

If set, this action is enforced only if at least one proxy in the repeated
list is deployed at the time of enforcement. If set, several restrictions are enforced on SecurityActions.
There can be at most 100 enabled actions with proxies set in an env.
Several other restrictions apply on conditions and are detailed later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#api_proxies GoogleApigeeSecurityAction#api_proxies}

---

##### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.deny"></a>

```java
public GoogleApigeeSecurityActionDeny getDeny();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#deny GoogleApigeeSecurityAction#deny}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional user provided description of the SecurityAction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#description GoogleApigeeSecurityAction#description}

---

##### `expireTime`<sup>Optional</sup> <a name="expireTime" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

The expiration for this SecurityAction.

Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9
fractional digits. Offsets other than "Z" are also accepted.
Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#expire_time GoogleApigeeSecurityAction#expire_time}

---

##### `flag`<sup>Optional</sup> <a name="flag" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.flag"></a>

```java
public GoogleApigeeSecurityActionFlag getFlag();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a>

flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#flag GoogleApigeeSecurityAction#flag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#id GoogleApigeeSecurityAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.timeouts"></a>

```java
public GoogleApigeeSecurityActionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts">GoogleApigeeSecurityActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#timeouts GoogleApigeeSecurityAction#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

The TTL for this SecurityAction. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#ttl GoogleApigeeSecurityAction#ttl}

---

### GoogleApigeeSecurityActionDeny <a name="GoogleApigeeSecurityActionDeny" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_security_action.GoogleApigeeSecurityActionDeny;

GoogleApigeeSecurityActionDeny.builder()
//  .responseCode(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny.property.responseCode">responseCode</a></code> | <code>java.lang.Number</code> | The HTTP response code if the Action = DENY. |

---

##### `responseCode`<sup>Optional</sup> <a name="responseCode" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny.property.responseCode"></a>

```java
public java.lang.Number getResponseCode();
```

- *Type:* java.lang.Number

The HTTP response code if the Action = DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#response_code GoogleApigeeSecurityAction#response_code}

---

### GoogleApigeeSecurityActionFlag <a name="GoogleApigeeSecurityActionFlag" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_security_action.GoogleApigeeSecurityActionFlag;

GoogleApigeeSecurityActionFlag.builder()
//  .headers(IResolvable)
//  .headers(java.util.List<GoogleApigeeSecurityActionFlagHeaders>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag.property.headers">headers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders">GoogleApigeeSecurityActionFlagHeaders</a>></code> | headers block. |

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag.property.headers"></a>

```java
public java.lang.Object getHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders">GoogleApigeeSecurityActionFlagHeaders</a>>

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#headers GoogleApigeeSecurityAction#headers}

---

### GoogleApigeeSecurityActionFlagHeaders <a name="GoogleApigeeSecurityActionFlagHeaders" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_security_action.GoogleApigeeSecurityActionFlagHeaders;

GoogleApigeeSecurityActionFlagHeaders.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders.property.name">name</a></code> | <code>java.lang.String</code> | The header name to be sent to the target. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders.property.value">value</a></code> | <code>java.lang.String</code> | The header value to be sent to the target. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The header name to be sent to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#name GoogleApigeeSecurityAction#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The header value to be sent to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#value GoogleApigeeSecurityAction#value}

---

### GoogleApigeeSecurityActionTimeouts <a name="GoogleApigeeSecurityActionTimeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_security_action.GoogleApigeeSecurityActionTimeouts;

GoogleApigeeSecurityActionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#create GoogleApigeeSecurityAction#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#delete GoogleApigeeSecurityAction#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#create GoogleApigeeSecurityAction#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_apigee_security_action#delete GoogleApigeeSecurityAction#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeSecurityActionAllowOutputReference <a name="GoogleApigeeSecurityActionAllowOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_security_action.GoogleApigeeSecurityActionAllowOutputReference;

new GoogleApigeeSecurityActionAllowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.property.internalValue"></a>

```java
public GoogleApigeeSecurityActionAllow getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a>

---


### GoogleApigeeSecurityActionConditionConfigOutputReference <a name="GoogleApigeeSecurityActionConditionConfigOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_security_action.GoogleApigeeSecurityActionConditionConfigOutputReference;

new GoogleApigeeSecurityActionConditionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetAccessTokens">resetAccessTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetApiKeys">resetApiKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetApiProducts">resetApiProducts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetAsns">resetAsns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetBotReasons">resetBotReasons</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetDeveloperApps">resetDeveloperApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetDevelopers">resetDevelopers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetHttpMethods">resetHttpMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetIpAddressRanges">resetIpAddressRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetRegionCodes">resetRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetUserAgents">resetUserAgents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessTokens` <a name="resetAccessTokens" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetAccessTokens"></a>

```java
public void resetAccessTokens()
```

##### `resetApiKeys` <a name="resetApiKeys" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetApiKeys"></a>

```java
public void resetApiKeys()
```

##### `resetApiProducts` <a name="resetApiProducts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetApiProducts"></a>

```java
public void resetApiProducts()
```

##### `resetAsns` <a name="resetAsns" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetAsns"></a>

```java
public void resetAsns()
```

##### `resetBotReasons` <a name="resetBotReasons" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetBotReasons"></a>

```java
public void resetBotReasons()
```

##### `resetDeveloperApps` <a name="resetDeveloperApps" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetDeveloperApps"></a>

```java
public void resetDeveloperApps()
```

##### `resetDevelopers` <a name="resetDevelopers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetDevelopers"></a>

```java
public void resetDevelopers()
```

##### `resetHttpMethods` <a name="resetHttpMethods" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetHttpMethods"></a>

```java
public void resetHttpMethods()
```

##### `resetIpAddressRanges` <a name="resetIpAddressRanges" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetIpAddressRanges"></a>

```java
public void resetIpAddressRanges()
```

##### `resetRegionCodes` <a name="resetRegionCodes" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetRegionCodes"></a>

```java
public void resetRegionCodes()
```

##### `resetUserAgents` <a name="resetUserAgents" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetUserAgents"></a>

```java
public void resetUserAgents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.accessTokensInput">accessTokensInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiKeysInput">apiKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiProductsInput">apiProductsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.asnsInput">asnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.botReasonsInput">botReasonsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developerAppsInput">developerAppsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developersInput">developersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.httpMethodsInput">httpMethodsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRangesInput">ipAddressRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.regionCodesInput">regionCodesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.userAgentsInput">userAgentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.accessTokens">accessTokens</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiKeys">apiKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiProducts">apiProducts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.asns">asns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.botReasons">botReasons</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developerApps">developerApps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developers">developers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.httpMethods">httpMethods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRanges">ipAddressRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.regionCodes">regionCodes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.userAgents">userAgents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessTokensInput`<sup>Optional</sup> <a name="accessTokensInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.accessTokensInput"></a>

```java
public java.util.List<java.lang.String> getAccessTokensInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiKeysInput`<sup>Optional</sup> <a name="apiKeysInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiKeysInput"></a>

```java
public java.util.List<java.lang.String> getApiKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiProductsInput`<sup>Optional</sup> <a name="apiProductsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiProductsInput"></a>

```java
public java.util.List<java.lang.String> getApiProductsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `asnsInput`<sup>Optional</sup> <a name="asnsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.asnsInput"></a>

```java
public java.util.List<java.lang.String> getAsnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `botReasonsInput`<sup>Optional</sup> <a name="botReasonsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.botReasonsInput"></a>

```java
public java.util.List<java.lang.String> getBotReasonsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `developerAppsInput`<sup>Optional</sup> <a name="developerAppsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developerAppsInput"></a>

```java
public java.util.List<java.lang.String> getDeveloperAppsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `developersInput`<sup>Optional</sup> <a name="developersInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developersInput"></a>

```java
public java.util.List<java.lang.String> getDevelopersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `httpMethodsInput`<sup>Optional</sup> <a name="httpMethodsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.httpMethodsInput"></a>

```java
public java.util.List<java.lang.String> getHttpMethodsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipAddressRangesInput`<sup>Optional</sup> <a name="ipAddressRangesInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRangesInput"></a>

```java
public java.util.List<java.lang.String> getIpAddressRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionCodesInput`<sup>Optional</sup> <a name="regionCodesInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.regionCodesInput"></a>

```java
public java.util.List<java.lang.String> getRegionCodesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userAgentsInput`<sup>Optional</sup> <a name="userAgentsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.userAgentsInput"></a>

```java
public java.util.List<java.lang.String> getUserAgentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessTokens`<sup>Required</sup> <a name="accessTokens" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.accessTokens"></a>

```java
public java.util.List<java.lang.String> getAccessTokens();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiKeys`<sup>Required</sup> <a name="apiKeys" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiKeys"></a>

```java
public java.util.List<java.lang.String> getApiKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiProducts`<sup>Required</sup> <a name="apiProducts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiProducts"></a>

```java
public java.util.List<java.lang.String> getApiProducts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `asns`<sup>Required</sup> <a name="asns" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.asns"></a>

```java
public java.util.List<java.lang.String> getAsns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `botReasons`<sup>Required</sup> <a name="botReasons" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.botReasons"></a>

```java
public java.util.List<java.lang.String> getBotReasons();
```

- *Type:* java.util.List<java.lang.String>

---

##### `developerApps`<sup>Required</sup> <a name="developerApps" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developerApps"></a>

```java
public java.util.List<java.lang.String> getDeveloperApps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `developers`<sup>Required</sup> <a name="developers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developers"></a>

```java
public java.util.List<java.lang.String> getDevelopers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `httpMethods`<sup>Required</sup> <a name="httpMethods" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.httpMethods"></a>

```java
public java.util.List<java.lang.String> getHttpMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipAddressRanges`<sup>Required</sup> <a name="ipAddressRanges" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRanges"></a>

```java
public java.util.List<java.lang.String> getIpAddressRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionCodes`<sup>Required</sup> <a name="regionCodes" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.regionCodes"></a>

```java
public java.util.List<java.lang.String> getRegionCodes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userAgents`<sup>Required</sup> <a name="userAgents" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.userAgents"></a>

```java
public java.util.List<java.lang.String> getUserAgents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.internalValue"></a>

```java
public GoogleApigeeSecurityActionConditionConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a>

---


### GoogleApigeeSecurityActionDenyOutputReference <a name="GoogleApigeeSecurityActionDenyOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_security_action.GoogleApigeeSecurityActionDenyOutputReference;

new GoogleApigeeSecurityActionDenyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.resetResponseCode">resetResponseCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResponseCode` <a name="resetResponseCode" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.resetResponseCode"></a>

```java
public void resetResponseCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.responseCodeInput">responseCodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.responseCode">responseCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `responseCodeInput`<sup>Optional</sup> <a name="responseCodeInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.responseCodeInput"></a>

```java
public java.lang.Number getResponseCodeInput();
```

- *Type:* java.lang.Number

---

##### `responseCode`<sup>Required</sup> <a name="responseCode" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.responseCode"></a>

```java
public java.lang.Number getResponseCode();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.internalValue"></a>

```java
public GoogleApigeeSecurityActionDeny getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a>

---


### GoogleApigeeSecurityActionFlagHeadersList <a name="GoogleApigeeSecurityActionFlagHeadersList" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_security_action.GoogleApigeeSecurityActionFlagHeadersList;

new GoogleApigeeSecurityActionFlagHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.get"></a>

```java
public GoogleApigeeSecurityActionFlagHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders">GoogleApigeeSecurityActionFlagHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders">GoogleApigeeSecurityActionFlagHeaders</a>>

---


### GoogleApigeeSecurityActionFlagHeadersOutputReference <a name="GoogleApigeeSecurityActionFlagHeadersOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_security_action.GoogleApigeeSecurityActionFlagHeadersOutputReference;

new GoogleApigeeSecurityActionFlagHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders">GoogleApigeeSecurityActionFlagHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders">GoogleApigeeSecurityActionFlagHeaders</a>

---


### GoogleApigeeSecurityActionFlagOutputReference <a name="GoogleApigeeSecurityActionFlagOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_security_action.GoogleApigeeSecurityActionFlagOutputReference;

new GoogleApigeeSecurityActionFlagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.putHeaders"></a>

```java
public void putHeaders(IResolvable OR java.util.List<GoogleApigeeSecurityActionFlagHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.putHeaders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders">GoogleApigeeSecurityActionFlagHeaders</a>>

---

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList">GoogleApigeeSecurityActionFlagHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.headersInput">headersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders">GoogleApigeeSecurityActionFlagHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.headers"></a>

```java
public GoogleApigeeSecurityActionFlagHeadersList getHeaders();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList">GoogleApigeeSecurityActionFlagHeadersList</a>

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.headersInput"></a>

```java
public java.lang.Object getHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders">GoogleApigeeSecurityActionFlagHeaders</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.internalValue"></a>

```java
public GoogleApigeeSecurityActionFlag getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a>

---


### GoogleApigeeSecurityActionTimeoutsOutputReference <a name="GoogleApigeeSecurityActionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apigee_security_action.GoogleApigeeSecurityActionTimeoutsOutputReference;

new GoogleApigeeSecurityActionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts">GoogleApigeeSecurityActionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts">GoogleApigeeSecurityActionTimeouts</a>

---



