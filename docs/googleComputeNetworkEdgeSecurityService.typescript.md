# `googleComputeNetworkEdgeSecurityService` Submodule <a name="`googleComputeNetworkEdgeSecurityService` Submodule" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeNetworkEdgeSecurityService <a name="GoogleComputeNetworkEdgeSecurityService" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_edge_security_service google_compute_network_edge_security_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.Initializer"></a>

```typescript
import { googleComputeNetworkEdgeSecurityService } from '@cdktf/provider-google-beta'

new googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService(scope: Construct, id: string, config: GoogleComputeNetworkEdgeSecurityServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig">GoogleComputeNetworkEdgeSecurityServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig">GoogleComputeNetworkEdgeSecurityServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.resetSecurityPolicy">resetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeNetworkEdgeSecurityServiceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeouts">GoogleComputeNetworkEdgeSecurityServiceTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSecurityPolicy` <a name="resetSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.resetSecurityPolicy"></a>

```typescript
public resetSecurityPolicy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeNetworkEdgeSecurityService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.isConstruct"></a>

```typescript
import { googleComputeNetworkEdgeSecurityService } from '@cdktf/provider-google-beta'

googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.isTerraformElement"></a>

```typescript
import { googleComputeNetworkEdgeSecurityService } from '@cdktf/provider-google-beta'

googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.isTerraformResource"></a>

```typescript
import { googleComputeNetworkEdgeSecurityService } from '@cdktf/provider-google-beta'

googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.generateConfigForImport"></a>

```typescript
import { googleComputeNetworkEdgeSecurityService } from '@cdktf/provider-google-beta'

googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeNetworkEdgeSecurityService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeNetworkEdgeSecurityService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeNetworkEdgeSecurityService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_edge_security_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeNetworkEdgeSecurityService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.selfLinkWithServiceId">selfLinkWithServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference">GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.securityPolicyInput">securityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeouts">GoogleComputeNetworkEdgeSecurityServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.securityPolicy">securityPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `selfLinkWithServiceId`<sup>Required</sup> <a name="selfLinkWithServiceId" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.selfLinkWithServiceId"></a>

```typescript
public readonly selfLinkWithServiceId: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference">GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `securityPolicyInput`<sup>Optional</sup> <a name="securityPolicyInput" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.securityPolicyInput"></a>

```typescript
public readonly securityPolicyInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeNetworkEdgeSecurityServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeouts">GoogleComputeNetworkEdgeSecurityServiceTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeNetworkEdgeSecurityServiceConfig <a name="GoogleComputeNetworkEdgeSecurityServiceConfig" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.Initializer"></a>

```typescript
import { googleComputeNetworkEdgeSecurityService } from '@cdktf/provider-google-beta'

const googleComputeNetworkEdgeSecurityServiceConfig: googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. Provided by the client when the resource is created. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.description">description</a></code> | <code>string</code> | Free-text description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_edge_security_service#id GoogleComputeNetworkEdgeSecurityService#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_edge_security_service#project GoogleComputeNetworkEdgeSecurityService#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.region">region</a></code> | <code>string</code> | The region of the gateway security policy. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.securityPolicy">securityPolicy</a></code> | <code>string</code> | The resource URL for the network edge security service associated with this network edge security service. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeouts">GoogleComputeNetworkEdgeSecurityServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource. Provided by the client when the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_edge_security_service#name GoogleComputeNetworkEdgeSecurityService#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_edge_security_service#description GoogleComputeNetworkEdgeSecurityService#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_edge_security_service#id GoogleComputeNetworkEdgeSecurityService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_edge_security_service#project GoogleComputeNetworkEdgeSecurityService#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the gateway security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_edge_security_service#region GoogleComputeNetworkEdgeSecurityService#region}

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: string;
```

- *Type:* string

The resource URL for the network edge security service associated with this network edge security service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_edge_security_service#security_policy GoogleComputeNetworkEdgeSecurityService#security_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeNetworkEdgeSecurityServiceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeouts">GoogleComputeNetworkEdgeSecurityServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_edge_security_service#timeouts GoogleComputeNetworkEdgeSecurityService#timeouts}

---

### GoogleComputeNetworkEdgeSecurityServiceTimeouts <a name="GoogleComputeNetworkEdgeSecurityServiceTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeouts.Initializer"></a>

```typescript
import { googleComputeNetworkEdgeSecurityService } from '@cdktf/provider-google-beta'

const googleComputeNetworkEdgeSecurityServiceTimeouts: googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_edge_security_service#create GoogleComputeNetworkEdgeSecurityService#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_edge_security_service#delete GoogleComputeNetworkEdgeSecurityService#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_edge_security_service#update GoogleComputeNetworkEdgeSecurityService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_edge_security_service#create GoogleComputeNetworkEdgeSecurityService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_edge_security_service#delete GoogleComputeNetworkEdgeSecurityService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_edge_security_service#update GoogleComputeNetworkEdgeSecurityService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference <a name="GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeNetworkEdgeSecurityService } from '@cdktf/provider-google-beta'

new googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeouts">GoogleComputeNetworkEdgeSecurityServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeNetworkEdgeSecurityServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeNetworkEdgeSecurityService.GoogleComputeNetworkEdgeSecurityServiceTimeouts">GoogleComputeNetworkEdgeSecurityServiceTimeouts</a>

---



