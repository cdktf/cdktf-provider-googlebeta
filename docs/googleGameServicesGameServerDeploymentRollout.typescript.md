# `google_game_services_game_server_deployment_rollout`

Refer to the Terraform Registory for docs: [`google_game_services_game_server_deployment_rollout`](https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment_rollout).

# `googleGameServicesGameServerDeploymentRollout` Submodule <a name="`googleGameServicesGameServerDeploymentRollout` Submodule" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGameServicesGameServerDeploymentRollout <a name="GoogleGameServicesGameServerDeploymentRollout" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment_rollout google_game_services_game_server_deployment_rollout}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer"></a>

```typescript
import { googleGameServicesGameServerDeploymentRollout } from '@cdktf/provider-google-beta'

new googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout(scope: Construct, id: string, config: GoogleGameServicesGameServerDeploymentRolloutConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig">GoogleGameServicesGameServerDeploymentRolloutConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig">GoogleGameServicesGameServerDeploymentRolloutConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.putGameServerConfigOverrides">putGameServerConfigOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetGameServerConfigOverrides">resetGameServerConfigOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putGameServerConfigOverrides` <a name="putGameServerConfigOverrides" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.putGameServerConfigOverrides"></a>

```typescript
public putGameServerConfigOverrides(value: IResolvable | GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.putGameServerConfigOverrides.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleGameServicesGameServerDeploymentRolloutTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts">GoogleGameServicesGameServerDeploymentRolloutTimeouts</a>

---

##### `resetGameServerConfigOverrides` <a name="resetGameServerConfigOverrides" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetGameServerConfigOverrides"></a>

```typescript
public resetGameServerConfigOverrides(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isConstruct"></a>

```typescript
import { googleGameServicesGameServerDeploymentRollout } from '@cdktf/provider-google-beta'

googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isTerraformElement"></a>

```typescript
import { googleGameServicesGameServerDeploymentRollout } from '@cdktf/provider-google-beta'

googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isTerraformResource"></a>

```typescript
import { googleGameServicesGameServerDeploymentRollout } from '@cdktf/provider-google-beta'

googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.gameServerConfigOverrides">gameServerConfigOverrides</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference">GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.defaultGameServerConfigInput">defaultGameServerConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.deploymentIdInput">deploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.gameServerConfigOverridesInput">gameServerConfigOverridesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts">GoogleGameServicesGameServerDeploymentRolloutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.defaultGameServerConfig">defaultGameServerConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `gameServerConfigOverrides`<sup>Required</sup> <a name="gameServerConfigOverrides" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.gameServerConfigOverrides"></a>

```typescript
public readonly gameServerConfigOverrides: GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference">GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference</a>

---

##### `defaultGameServerConfigInput`<sup>Optional</sup> <a name="defaultGameServerConfigInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.defaultGameServerConfigInput"></a>

```typescript
public readonly defaultGameServerConfigInput: string;
```

- *Type:* string

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.deploymentIdInput"></a>

```typescript
public readonly deploymentIdInput: string;
```

- *Type:* string

---

##### `gameServerConfigOverridesInput`<sup>Optional</sup> <a name="gameServerConfigOverridesInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.gameServerConfigOverridesInput"></a>

```typescript
public readonly gameServerConfigOverridesInput: IResolvable | GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleGameServicesGameServerDeploymentRolloutTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts">GoogleGameServicesGameServerDeploymentRolloutTimeouts</a>

---

##### `defaultGameServerConfig`<sup>Required</sup> <a name="defaultGameServerConfig" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.defaultGameServerConfig"></a>

```typescript
public readonly defaultGameServerConfig: string;
```

- *Type:* string

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGameServicesGameServerDeploymentRolloutConfig <a name="GoogleGameServicesGameServerDeploymentRolloutConfig" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.Initializer"></a>

```typescript
import { googleGameServicesGameServerDeploymentRollout } from '@cdktf/provider-google-beta'

const googleGameServicesGameServerDeploymentRolloutConfig: googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.defaultGameServerConfig">defaultGameServerConfig</a></code> | <code>string</code> | This field points to the game server config that is applied by default to all realms and clusters. For example,. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.deploymentId">deploymentId</a></code> | <code>string</code> | The deployment to rollout the new config to. Only 1 rollout must be associated with each deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.gameServerConfigOverrides">gameServerConfigOverrides</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>[]</code> | game_server_config_overrides block. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment_rollout#id GoogleGameServicesGameServerDeploymentRollout#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment_rollout#project GoogleGameServicesGameServerDeploymentRollout#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts">GoogleGameServicesGameServerDeploymentRolloutTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultGameServerConfig`<sup>Required</sup> <a name="defaultGameServerConfig" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.defaultGameServerConfig"></a>

```typescript
public readonly defaultGameServerConfig: string;
```

- *Type:* string

This field points to the game server config that is applied by default to all realms and clusters. For example,.

'projects/my-project/locations/global/gameServerDeployments/my-game/configs/my-config'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment_rollout#default_game_server_config GoogleGameServicesGameServerDeploymentRollout#default_game_server_config}

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

The deployment to rollout the new config to. Only 1 rollout must be associated with each deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment_rollout#deployment_id GoogleGameServicesGameServerDeploymentRollout#deployment_id}

---

##### `gameServerConfigOverrides`<sup>Optional</sup> <a name="gameServerConfigOverrides" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.gameServerConfigOverrides"></a>

```typescript
public readonly gameServerConfigOverrides: IResolvable | GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>[]

game_server_config_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment_rollout#game_server_config_overrides GoogleGameServicesGameServerDeploymentRollout#game_server_config_overrides}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment_rollout#id GoogleGameServicesGameServerDeploymentRollout#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment_rollout#project GoogleGameServicesGameServerDeploymentRollout#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGameServicesGameServerDeploymentRolloutTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts">GoogleGameServicesGameServerDeploymentRolloutTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment_rollout#timeouts GoogleGameServicesGameServerDeploymentRollout#timeouts}

---

### GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides <a name="GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides.Initializer"></a>

```typescript
import { googleGameServicesGameServerDeploymentRollout } from '@cdktf/provider-google-beta'

const googleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides: googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides.property.configVersion">configVersion</a></code> | <code>string</code> | Version of the configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides.property.realmsSelector">realmsSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a></code> | realms_selector block. |

---

##### `configVersion`<sup>Optional</sup> <a name="configVersion" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides.property.configVersion"></a>

```typescript
public readonly configVersion: string;
```

- *Type:* string

Version of the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment_rollout#config_version GoogleGameServicesGameServerDeploymentRollout#config_version}

---

##### `realmsSelector`<sup>Optional</sup> <a name="realmsSelector" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides.property.realmsSelector"></a>

```typescript
public readonly realmsSelector: GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a>

realms_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment_rollout#realms_selector GoogleGameServicesGameServerDeploymentRollout#realms_selector}

---

### GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector <a name="GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector.Initializer"></a>

```typescript
import { googleGameServicesGameServerDeploymentRollout } from '@cdktf/provider-google-beta'

const googleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector: googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector.property.realms">realms</a></code> | <code>string[]</code> | List of realms to match against. |

---

##### `realms`<sup>Optional</sup> <a name="realms" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector.property.realms"></a>

```typescript
public readonly realms: string[];
```

- *Type:* string[]

List of realms to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment_rollout#realms GoogleGameServicesGameServerDeploymentRollout#realms}

---

### GoogleGameServicesGameServerDeploymentRolloutTimeouts <a name="GoogleGameServicesGameServerDeploymentRolloutTimeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts.Initializer"></a>

```typescript
import { googleGameServicesGameServerDeploymentRollout } from '@cdktf/provider-google-beta'

const googleGameServicesGameServerDeploymentRolloutTimeouts: googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment_rollout#create GoogleGameServicesGameServerDeploymentRollout#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment_rollout#delete GoogleGameServicesGameServerDeploymentRollout#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment_rollout#update GoogleGameServicesGameServerDeploymentRollout#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment_rollout#create GoogleGameServicesGameServerDeploymentRollout#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment_rollout#delete GoogleGameServicesGameServerDeploymentRollout#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_game_services_game_server_deployment_rollout#update GoogleGameServicesGameServerDeploymentRollout#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList <a name="GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer"></a>

```typescript
import { googleGameServicesGameServerDeploymentRollout } from '@cdktf/provider-google-beta'

new googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.get"></a>

```typescript
public get(index: number): GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>[]

---


### GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference <a name="GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer"></a>

```typescript
import { googleGameServicesGameServerDeploymentRollout } from '@cdktf/provider-google-beta'

new googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.putRealmsSelector">putRealmsSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resetConfigVersion">resetConfigVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resetRealmsSelector">resetRealmsSelector</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRealmsSelector` <a name="putRealmsSelector" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.putRealmsSelector"></a>

```typescript
public putRealmsSelector(value: GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.putRealmsSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a>

---

##### `resetConfigVersion` <a name="resetConfigVersion" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resetConfigVersion"></a>

```typescript
public resetConfigVersion(): void
```

##### `resetRealmsSelector` <a name="resetRealmsSelector" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resetRealmsSelector"></a>

```typescript
public resetRealmsSelector(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.realmsSelector">realmsSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.configVersionInput">configVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.realmsSelectorInput">realmsSelectorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.configVersion">configVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `realmsSelector`<sup>Required</sup> <a name="realmsSelector" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.realmsSelector"></a>

```typescript
public readonly realmsSelector: GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference</a>

---

##### `configVersionInput`<sup>Optional</sup> <a name="configVersionInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.configVersionInput"></a>

```typescript
public readonly configVersionInput: string;
```

- *Type:* string

---

##### `realmsSelectorInput`<sup>Optional</sup> <a name="realmsSelectorInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.realmsSelectorInput"></a>

```typescript
public readonly realmsSelectorInput: GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a>

---

##### `configVersion`<sup>Required</sup> <a name="configVersion" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.configVersion"></a>

```typescript
public readonly configVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>

---


### GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference <a name="GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer"></a>

```typescript
import { googleGameServicesGameServerDeploymentRollout } from '@cdktf/provider-google-beta'

new googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resetRealms">resetRealms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRealms` <a name="resetRealms" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resetRealms"></a>

```typescript
public resetRealms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.realmsInput">realmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.realms">realms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `realmsInput`<sup>Optional</sup> <a name="realmsInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.realmsInput"></a>

```typescript
public readonly realmsInput: string[];
```

- *Type:* string[]

---

##### `realms`<sup>Required</sup> <a name="realms" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.realms"></a>

```typescript
public readonly realms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a>

---


### GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference <a name="GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleGameServicesGameServerDeploymentRollout } from '@cdktf/provider-google-beta'

new googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts">GoogleGameServicesGameServerDeploymentRolloutTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGameServicesGameServerDeploymentRolloutTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts">GoogleGameServicesGameServerDeploymentRolloutTimeouts</a>

---



