# `google_os_login_ssh_public_key`

Refer to the Terraform Registory for docs: [`google_os_login_ssh_public_key`](https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_os_login_ssh_public_key).

# `googleOsLoginSshPublicKey` Submodule <a name="`googleOsLoginSshPublicKey` Submodule" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOsLoginSshPublicKey <a name="GoogleOsLoginSshPublicKey" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_os_login_ssh_public_key google_os_login_ssh_public_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer"></a>

```typescript
import { googleOsLoginSshPublicKey } from '@cdktf/provider-google-beta'

new googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey(scope: Construct, id: string, config: GoogleOsLoginSshPublicKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig">GoogleOsLoginSshPublicKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig">GoogleOsLoginSshPublicKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.resetExpirationTimeUsec">resetExpirationTimeUsec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleOsLoginSshPublicKeyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts">GoogleOsLoginSshPublicKeyTimeouts</a>

---

##### `resetExpirationTimeUsec` <a name="resetExpirationTimeUsec" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.resetExpirationTimeUsec"></a>

```typescript
public resetExpirationTimeUsec(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.isConstruct"></a>

```typescript
import { googleOsLoginSshPublicKey } from '@cdktf/provider-google-beta'

googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.isTerraformElement"></a>

```typescript
import { googleOsLoginSshPublicKey } from '@cdktf/provider-google-beta'

googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.isTerraformResource"></a>

```typescript
import { googleOsLoginSshPublicKey } from '@cdktf/provider-google-beta'

googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference">GoogleOsLoginSshPublicKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.expirationTimeUsecInput">expirationTimeUsecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts">GoogleOsLoginSshPublicKeyTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.expirationTimeUsec">expirationTimeUsec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.user">user</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleOsLoginSshPublicKeyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference">GoogleOsLoginSshPublicKeyTimeoutsOutputReference</a>

---

##### `expirationTimeUsecInput`<sup>Optional</sup> <a name="expirationTimeUsecInput" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.expirationTimeUsecInput"></a>

```typescript
public readonly expirationTimeUsecInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: GoogleOsLoginSshPublicKeyTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts">GoogleOsLoginSshPublicKeyTimeouts</a> | cdktf.IResolvable

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `expirationTimeUsec`<sup>Required</sup> <a name="expirationTimeUsec" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.expirationTimeUsec"></a>

```typescript
public readonly expirationTimeUsec: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOsLoginSshPublicKeyConfig <a name="GoogleOsLoginSshPublicKeyConfig" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.Initializer"></a>

```typescript
import { googleOsLoginSshPublicKey } from '@cdktf/provider-google-beta'

const googleOsLoginSshPublicKeyConfig: googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.key">key</a></code> | <code>string</code> | Public key text in SSH format, defined by RFC4253 section 6.6. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.user">user</a></code> | <code>string</code> | The user email. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.expirationTimeUsec">expirationTimeUsec</a></code> | <code>string</code> | An expiration time in microseconds since epoch. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_os_login_ssh_public_key#id GoogleOsLoginSshPublicKey#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.project">project</a></code> | <code>string</code> | The project ID of the Google Cloud Platform project. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts">GoogleOsLoginSshPublicKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Public key text in SSH format, defined by RFC4253 section 6.6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_os_login_ssh_public_key#key GoogleOsLoginSshPublicKey#key}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

The user email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_os_login_ssh_public_key#user GoogleOsLoginSshPublicKey#user}

---

##### `expirationTimeUsec`<sup>Optional</sup> <a name="expirationTimeUsec" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.expirationTimeUsec"></a>

```typescript
public readonly expirationTimeUsec: string;
```

- *Type:* string

An expiration time in microseconds since epoch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_os_login_ssh_public_key#expiration_time_usec GoogleOsLoginSshPublicKey#expiration_time_usec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_os_login_ssh_public_key#id GoogleOsLoginSshPublicKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project ID of the Google Cloud Platform project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_os_login_ssh_public_key#project GoogleOsLoginSshPublicKey#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleOsLoginSshPublicKeyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts">GoogleOsLoginSshPublicKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_os_login_ssh_public_key#timeouts GoogleOsLoginSshPublicKey#timeouts}

---

### GoogleOsLoginSshPublicKeyTimeouts <a name="GoogleOsLoginSshPublicKeyTimeouts" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts.Initializer"></a>

```typescript
import { googleOsLoginSshPublicKey } from '@cdktf/provider-google-beta'

const googleOsLoginSshPublicKeyTimeouts: googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_os_login_ssh_public_key#create GoogleOsLoginSshPublicKey#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_os_login_ssh_public_key#delete GoogleOsLoginSshPublicKey#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_os_login_ssh_public_key#update GoogleOsLoginSshPublicKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_os_login_ssh_public_key#create GoogleOsLoginSshPublicKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_os_login_ssh_public_key#delete GoogleOsLoginSshPublicKey#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_os_login_ssh_public_key#update GoogleOsLoginSshPublicKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOsLoginSshPublicKeyTimeoutsOutputReference <a name="GoogleOsLoginSshPublicKeyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleOsLoginSshPublicKey } from '@cdktf/provider-google-beta'

new googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts">GoogleOsLoginSshPublicKeyTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleOsLoginSshPublicKeyTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts">GoogleOsLoginSshPublicKeyTimeouts</a> | cdktf.IResolvable

---



