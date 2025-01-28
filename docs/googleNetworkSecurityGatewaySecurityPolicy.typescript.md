# `googleNetworkSecurityGatewaySecurityPolicy` Submodule <a name="`googleNetworkSecurityGatewaySecurityPolicy` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityGatewaySecurityPolicy <a name="GoogleNetworkSecurityGatewaySecurityPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy google_network_security_gateway_security_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.Initializer"></a>

```typescript
import { googleNetworkSecurityGatewaySecurityPolicy } from '@cdktf/provider-google-beta'

new googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy(scope: Construct, id: string, config: GoogleNetworkSecurityGatewaySecurityPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig">GoogleNetworkSecurityGatewaySecurityPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig">GoogleNetworkSecurityGatewaySecurityPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.resetTlsInspectionPolicy">resetTlsInspectionPolicy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkSecurityGatewaySecurityPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeouts">GoogleNetworkSecurityGatewaySecurityPolicyTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTlsInspectionPolicy` <a name="resetTlsInspectionPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.resetTlsInspectionPolicy"></a>

```typescript
public resetTlsInspectionPolicy(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityGatewaySecurityPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.isConstruct"></a>

```typescript
import { googleNetworkSecurityGatewaySecurityPolicy } from '@cdktf/provider-google-beta'

googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.isTerraformElement"></a>

```typescript
import { googleNetworkSecurityGatewaySecurityPolicy } from '@cdktf/provider-google-beta'

googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.isTerraformResource"></a>

```typescript
import { googleNetworkSecurityGatewaySecurityPolicy } from '@cdktf/provider-google-beta'

googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.generateConfigForImport"></a>

```typescript
import { googleNetworkSecurityGatewaySecurityPolicy } from '@cdktf/provider-google-beta'

googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleNetworkSecurityGatewaySecurityPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkSecurityGatewaySecurityPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkSecurityGatewaySecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityGatewaySecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference">GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeouts">GoogleNetworkSecurityGatewaySecurityPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.tlsInspectionPolicyInput">tlsInspectionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.tlsInspectionPolicy">tlsInspectionPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference">GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkSecurityGatewaySecurityPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeouts">GoogleNetworkSecurityGatewaySecurityPolicyTimeouts</a>

---

##### `tlsInspectionPolicyInput`<sup>Optional</sup> <a name="tlsInspectionPolicyInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.tlsInspectionPolicyInput"></a>

```typescript
public readonly tlsInspectionPolicyInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `tlsInspectionPolicy`<sup>Required</sup> <a name="tlsInspectionPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.tlsInspectionPolicy"></a>

```typescript
public readonly tlsInspectionPolicy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityGatewaySecurityPolicyConfig <a name="GoogleNetworkSecurityGatewaySecurityPolicyConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.Initializer"></a>

```typescript
import { googleNetworkSecurityGatewaySecurityPolicy } from '@cdktf/provider-google-beta'

const googleNetworkSecurityGatewaySecurityPolicyConfig: googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. Name is of the form projects/{project}/locations/{location}/gatewaySecurityPolicies/{gatewaySecurityPolicy} gatewaySecurityPolicy should match the pattern:(^a-z?$). |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.description">description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy#id GoogleNetworkSecurityGatewaySecurityPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.location">location</a></code> | <code>string</code> | The location of the gateway security policy. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy#project GoogleNetworkSecurityGatewaySecurityPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeouts">GoogleNetworkSecurityGatewaySecurityPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.tlsInspectionPolicy">tlsInspectionPolicy</a></code> | <code>string</code> | Name of a TlsInspectionPolicy resource that defines how TLS inspection is performed for any rule that enables it. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource. Name is of the form projects/{project}/locations/{location}/gatewaySecurityPolicies/{gatewaySecurityPolicy} gatewaySecurityPolicy should match the pattern:(^a-z?$).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy#name GoogleNetworkSecurityGatewaySecurityPolicy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy#description GoogleNetworkSecurityGatewaySecurityPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy#id GoogleNetworkSecurityGatewaySecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the gateway security policy. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy#location GoogleNetworkSecurityGatewaySecurityPolicy#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy#project GoogleNetworkSecurityGatewaySecurityPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecurityGatewaySecurityPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeouts">GoogleNetworkSecurityGatewaySecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy#timeouts GoogleNetworkSecurityGatewaySecurityPolicy#timeouts}

---

##### `tlsInspectionPolicy`<sup>Optional</sup> <a name="tlsInspectionPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyConfig.property.tlsInspectionPolicy"></a>

```typescript
public readonly tlsInspectionPolicy: string;
```

- *Type:* string

Name of a TlsInspectionPolicy resource that defines how TLS inspection is performed for any rule that enables it.

Note: google_network_security_tls_inspection_policy resource is still in [Beta](https://terraform.io/docs/providers/google/guides/provider_versions.html) therefore it will need to import the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy#tls_inspection_policy GoogleNetworkSecurityGatewaySecurityPolicy#tls_inspection_policy}

---

### GoogleNetworkSecurityGatewaySecurityPolicyTimeouts <a name="GoogleNetworkSecurityGatewaySecurityPolicyTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeouts.Initializer"></a>

```typescript
import { googleNetworkSecurityGatewaySecurityPolicy } from '@cdktf/provider-google-beta'

const googleNetworkSecurityGatewaySecurityPolicyTimeouts: googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy#create GoogleNetworkSecurityGatewaySecurityPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy#delete GoogleNetworkSecurityGatewaySecurityPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy#update GoogleNetworkSecurityGatewaySecurityPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy#create GoogleNetworkSecurityGatewaySecurityPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy#delete GoogleNetworkSecurityGatewaySecurityPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_gateway_security_policy#update GoogleNetworkSecurityGatewaySecurityPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference <a name="GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecurityGatewaySecurityPolicy } from '@cdktf/provider-google-beta'

new googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeouts">GoogleNetworkSecurityGatewaySecurityPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecurityGatewaySecurityPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicy.GoogleNetworkSecurityGatewaySecurityPolicyTimeouts">GoogleNetworkSecurityGatewaySecurityPolicyTimeouts</a>

---



