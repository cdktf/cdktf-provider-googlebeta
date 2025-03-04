# `googleVmwareengineNetworkPolicy` Submodule <a name="`googleVmwareengineNetworkPolicy` Submodule" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVmwareengineNetworkPolicy <a name="GoogleVmwareengineNetworkPolicy" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy google_vmwareengine_network_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.Initializer"></a>

```typescript
import { googleVmwareengineNetworkPolicy } from '@cdktf/provider-google-beta'

new googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy(scope: Construct, id: string, config: GoogleVmwareengineNetworkPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig">GoogleVmwareengineNetworkPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig">GoogleVmwareengineNetworkPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.putExternalIp">putExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.putInternetAccess">putInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.resetExternalIp">resetExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.resetInternetAccess">resetInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExternalIp` <a name="putExternalIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.putExternalIp"></a>

```typescript
public putExternalIp(value: GoogleVmwareengineNetworkPolicyExternalIp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.putExternalIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIp">GoogleVmwareengineNetworkPolicyExternalIp</a>

---

##### `putInternetAccess` <a name="putInternetAccess" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.putInternetAccess"></a>

```typescript
public putInternetAccess(value: GoogleVmwareengineNetworkPolicyInternetAccess): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.putInternetAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccess">GoogleVmwareengineNetworkPolicyInternetAccess</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleVmwareengineNetworkPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeouts">GoogleVmwareengineNetworkPolicyTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExternalIp` <a name="resetExternalIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.resetExternalIp"></a>

```typescript
public resetExternalIp(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInternetAccess` <a name="resetInternetAccess" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.resetInternetAccess"></a>

```typescript
public resetInternetAccess(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleVmwareengineNetworkPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.isConstruct"></a>

```typescript
import { googleVmwareengineNetworkPolicy } from '@cdktf/provider-google-beta'

googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.isTerraformElement"></a>

```typescript
import { googleVmwareengineNetworkPolicy } from '@cdktf/provider-google-beta'

googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.isTerraformResource"></a>

```typescript
import { googleVmwareengineNetworkPolicy } from '@cdktf/provider-google-beta'

googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.generateConfigForImport"></a>

```typescript
import { googleVmwareengineNetworkPolicy } from '@cdktf/provider-google-beta'

googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleVmwareengineNetworkPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVmwareengineNetworkPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVmwareengineNetworkPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVmwareengineNetworkPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.externalIp">externalIp</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference">GoogleVmwareengineNetworkPolicyExternalIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.internetAccess">internetAccess</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference">GoogleVmwareengineNetworkPolicyInternetAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference">GoogleVmwareengineNetworkPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.vmwareEngineNetworkCanonical">vmwareEngineNetworkCanonical</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.edgeServicesCidrInput">edgeServicesCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.externalIpInput">externalIpInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIp">GoogleVmwareengineNetworkPolicyExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.internetAccessInput">internetAccessInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccess">GoogleVmwareengineNetworkPolicyInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeouts">GoogleVmwareengineNetworkPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.vmwareEngineNetworkInput">vmwareEngineNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.edgeServicesCidr">edgeServicesCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.vmwareEngineNetwork">vmwareEngineNetwork</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `externalIp`<sup>Required</sup> <a name="externalIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.externalIp"></a>

```typescript
public readonly externalIp: GoogleVmwareengineNetworkPolicyExternalIpOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference">GoogleVmwareengineNetworkPolicyExternalIpOutputReference</a>

---

##### `internetAccess`<sup>Required</sup> <a name="internetAccess" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.internetAccess"></a>

```typescript
public readonly internetAccess: GoogleVmwareengineNetworkPolicyInternetAccessOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference">GoogleVmwareengineNetworkPolicyInternetAccessOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVmwareengineNetworkPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference">GoogleVmwareengineNetworkPolicyTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `vmwareEngineNetworkCanonical`<sup>Required</sup> <a name="vmwareEngineNetworkCanonical" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.vmwareEngineNetworkCanonical"></a>

```typescript
public readonly vmwareEngineNetworkCanonical: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `edgeServicesCidrInput`<sup>Optional</sup> <a name="edgeServicesCidrInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.edgeServicesCidrInput"></a>

```typescript
public readonly edgeServicesCidrInput: string;
```

- *Type:* string

---

##### `externalIpInput`<sup>Optional</sup> <a name="externalIpInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.externalIpInput"></a>

```typescript
public readonly externalIpInput: GoogleVmwareengineNetworkPolicyExternalIp;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIp">GoogleVmwareengineNetworkPolicyExternalIp</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `internetAccessInput`<sup>Optional</sup> <a name="internetAccessInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.internetAccessInput"></a>

```typescript
public readonly internetAccessInput: GoogleVmwareengineNetworkPolicyInternetAccess;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccess">GoogleVmwareengineNetworkPolicyInternetAccess</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleVmwareengineNetworkPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeouts">GoogleVmwareengineNetworkPolicyTimeouts</a>

---

##### `vmwareEngineNetworkInput`<sup>Optional</sup> <a name="vmwareEngineNetworkInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.vmwareEngineNetworkInput"></a>

```typescript
public readonly vmwareEngineNetworkInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `edgeServicesCidr`<sup>Required</sup> <a name="edgeServicesCidr" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.edgeServicesCidr"></a>

```typescript
public readonly edgeServicesCidr: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `vmwareEngineNetwork`<sup>Required</sup> <a name="vmwareEngineNetwork" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.vmwareEngineNetwork"></a>

```typescript
public readonly vmwareEngineNetwork: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVmwareengineNetworkPolicyConfig <a name="GoogleVmwareengineNetworkPolicyConfig" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.Initializer"></a>

```typescript
import { googleVmwareengineNetworkPolicy } from '@cdktf/provider-google-beta'

const googleVmwareengineNetworkPolicyConfig: googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.edgeServicesCidr">edgeServicesCidr</a></code> | <code>string</code> | IP address range in CIDR notation used to create internet access and external IP access. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.location">location</a></code> | <code>string</code> | The resource name of the location (region) to create the new network policy in. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.name">name</a></code> | <code>string</code> | The ID of the Network Policy. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.vmwareEngineNetwork">vmwareEngineNetwork</a></code> | <code>string</code> | The relative resource name of the VMware Engine network. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.description">description</a></code> | <code>string</code> | User-provided description for this network policy. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.externalIp">externalIp</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIp">GoogleVmwareengineNetworkPolicyExternalIp</a></code> | external_ip block. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#id GoogleVmwareengineNetworkPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.internetAccess">internetAccess</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccess">GoogleVmwareengineNetworkPolicyInternetAccess</a></code> | internet_access block. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#project GoogleVmwareengineNetworkPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeouts">GoogleVmwareengineNetworkPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `edgeServicesCidr`<sup>Required</sup> <a name="edgeServicesCidr" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.edgeServicesCidr"></a>

```typescript
public readonly edgeServicesCidr: string;
```

- *Type:* string

IP address range in CIDR notation used to create internet access and external IP access.

An RFC 1918 CIDR block, with a "/26" prefix, is required. The range cannot overlap with any
prefixes either in the consumer VPC network or in use by the private clouds attached to that VPC network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#edge_services_cidr GoogleVmwareengineNetworkPolicy#edge_services_cidr}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The resource name of the location (region) to create the new network policy in.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-central1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#location GoogleVmwareengineNetworkPolicy#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The ID of the Network Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#name GoogleVmwareengineNetworkPolicy#name}

---

##### `vmwareEngineNetwork`<sup>Required</sup> <a name="vmwareEngineNetwork" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.vmwareEngineNetwork"></a>

```typescript
public readonly vmwareEngineNetwork: string;
```

- *Type:* string

The relative resource name of the VMware Engine network.

Specify the name in the following form:
projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}
can either be a project number or a project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#vmware_engine_network GoogleVmwareengineNetworkPolicy#vmware_engine_network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

User-provided description for this network policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#description GoogleVmwareengineNetworkPolicy#description}

---

##### `externalIp`<sup>Optional</sup> <a name="externalIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.externalIp"></a>

```typescript
public readonly externalIp: GoogleVmwareengineNetworkPolicyExternalIp;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIp">GoogleVmwareengineNetworkPolicyExternalIp</a>

external_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#external_ip GoogleVmwareengineNetworkPolicy#external_ip}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#id GoogleVmwareengineNetworkPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internetAccess`<sup>Optional</sup> <a name="internetAccess" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.internetAccess"></a>

```typescript
public readonly internetAccess: GoogleVmwareengineNetworkPolicyInternetAccess;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccess">GoogleVmwareengineNetworkPolicyInternetAccess</a>

internet_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#internet_access GoogleVmwareengineNetworkPolicy#internet_access}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#project GoogleVmwareengineNetworkPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVmwareengineNetworkPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeouts">GoogleVmwareengineNetworkPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#timeouts GoogleVmwareengineNetworkPolicy#timeouts}

---

### GoogleVmwareengineNetworkPolicyExternalIp <a name="GoogleVmwareengineNetworkPolicyExternalIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIp.Initializer"></a>

```typescript
import { googleVmwareengineNetworkPolicy } from '@cdktf/provider-google-beta'

const googleVmwareengineNetworkPolicyExternalIp: googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIp.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | True if the service is enabled; false otherwise. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIp.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

True if the service is enabled; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#enabled GoogleVmwareengineNetworkPolicy#enabled}

---

### GoogleVmwareengineNetworkPolicyInternetAccess <a name="GoogleVmwareengineNetworkPolicyInternetAccess" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccess.Initializer"></a>

```typescript
import { googleVmwareengineNetworkPolicy } from '@cdktf/provider-google-beta'

const googleVmwareengineNetworkPolicyInternetAccess: googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccess.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | True if the service is enabled; false otherwise. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccess.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

True if the service is enabled; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#enabled GoogleVmwareengineNetworkPolicy#enabled}

---

### GoogleVmwareengineNetworkPolicyTimeouts <a name="GoogleVmwareengineNetworkPolicyTimeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeouts.Initializer"></a>

```typescript
import { googleVmwareengineNetworkPolicy } from '@cdktf/provider-google-beta'

const googleVmwareengineNetworkPolicyTimeouts: googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#create GoogleVmwareengineNetworkPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#delete GoogleVmwareengineNetworkPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#update GoogleVmwareengineNetworkPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#create GoogleVmwareengineNetworkPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#delete GoogleVmwareengineNetworkPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network_policy#update GoogleVmwareengineNetworkPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVmwareengineNetworkPolicyExternalIpOutputReference <a name="GoogleVmwareengineNetworkPolicyExternalIpOutputReference" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.Initializer"></a>

```typescript
import { googleVmwareengineNetworkPolicy } from '@cdktf/provider-google-beta'

new googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIp">GoogleVmwareengineNetworkPolicyExternalIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVmwareengineNetworkPolicyExternalIp;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyExternalIp">GoogleVmwareengineNetworkPolicyExternalIp</a>

---


### GoogleVmwareengineNetworkPolicyInternetAccessOutputReference <a name="GoogleVmwareengineNetworkPolicyInternetAccessOutputReference" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.Initializer"></a>

```typescript
import { googleVmwareengineNetworkPolicy } from '@cdktf/provider-google-beta'

new googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccess">GoogleVmwareengineNetworkPolicyInternetAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVmwareengineNetworkPolicyInternetAccess;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyInternetAccess">GoogleVmwareengineNetworkPolicyInternetAccess</a>

---


### GoogleVmwareengineNetworkPolicyTimeoutsOutputReference <a name="GoogleVmwareengineNetworkPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleVmwareengineNetworkPolicy } from '@cdktf/provider-google-beta'

new googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeouts">GoogleVmwareengineNetworkPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVmwareengineNetworkPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPolicy.GoogleVmwareengineNetworkPolicyTimeouts">GoogleVmwareengineNetworkPolicyTimeouts</a>

---



