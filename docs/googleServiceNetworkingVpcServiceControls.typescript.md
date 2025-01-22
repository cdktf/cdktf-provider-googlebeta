# `googleServiceNetworkingVpcServiceControls` Submodule <a name="`googleServiceNetworkingVpcServiceControls` Submodule" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleServiceNetworkingVpcServiceControls <a name="GoogleServiceNetworkingVpcServiceControls" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_networking_vpc_service_controls google_service_networking_vpc_service_controls}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer"></a>

```typescript
import { googleServiceNetworkingVpcServiceControls } from '@cdktf/provider-google-beta'

new googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls(scope: Construct, id: string, config: GoogleServiceNetworkingVpcServiceControlsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig">GoogleServiceNetworkingVpcServiceControlsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig">GoogleServiceNetworkingVpcServiceControlsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleServiceNetworkingVpcServiceControlsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts">GoogleServiceNetworkingVpcServiceControlsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleServiceNetworkingVpcServiceControls resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.isConstruct"></a>

```typescript
import { googleServiceNetworkingVpcServiceControls } from '@cdktf/provider-google-beta'

googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.isTerraformElement"></a>

```typescript
import { googleServiceNetworkingVpcServiceControls } from '@cdktf/provider-google-beta'

googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.isTerraformResource"></a>

```typescript
import { googleServiceNetworkingVpcServiceControls } from '@cdktf/provider-google-beta'

googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.generateConfigForImport"></a>

```typescript
import { googleServiceNetworkingVpcServiceControls } from '@cdktf/provider-google-beta'

googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleServiceNetworkingVpcServiceControls resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleServiceNetworkingVpcServiceControls to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleServiceNetworkingVpcServiceControls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_networking_vpc_service_controls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleServiceNetworkingVpcServiceControls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference">GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts">GoogleServiceNetworkingVpcServiceControlsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.service">service</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference">GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleServiceNetworkingVpcServiceControlsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts">GoogleServiceNetworkingVpcServiceControlsTimeouts</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleServiceNetworkingVpcServiceControlsConfig <a name="GoogleServiceNetworkingVpcServiceControlsConfig" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.Initializer"></a>

```typescript
import { googleServiceNetworkingVpcServiceControls } from '@cdktf/provider-google-beta'

const googleServiceNetworkingVpcServiceControlsConfig: googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Desired VPC Service Controls state service producer VPC network, as described at the top of this page. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.network">network</a></code> | <code>string</code> | The network that the consumer is using to connect with services. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.service">service</a></code> | <code>string</code> | The service that is managing peering connectivity for a service producer's organization. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_networking_vpc_service_controls#id GoogleServiceNetworkingVpcServiceControls#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.project">project</a></code> | <code>string</code> | The id of the Google Cloud project containing the consumer network. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts">GoogleServiceNetworkingVpcServiceControlsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Desired VPC Service Controls state service producer VPC network, as described at the top of this page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_networking_vpc_service_controls#enabled GoogleServiceNetworkingVpcServiceControls#enabled}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The network that the consumer is using to connect with services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_networking_vpc_service_controls#network GoogleServiceNetworkingVpcServiceControls#network}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The service that is managing peering connectivity for a service producer's organization.

For Google services that support this
functionality, this value is 'servicenetworking.googleapis.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_networking_vpc_service_controls#service GoogleServiceNetworkingVpcServiceControls#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_networking_vpc_service_controls#id GoogleServiceNetworkingVpcServiceControls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The id of the Google Cloud project containing the consumer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_networking_vpc_service_controls#project GoogleServiceNetworkingVpcServiceControls#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleServiceNetworkingVpcServiceControlsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts">GoogleServiceNetworkingVpcServiceControlsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_networking_vpc_service_controls#timeouts GoogleServiceNetworkingVpcServiceControls#timeouts}

---

### GoogleServiceNetworkingVpcServiceControlsTimeouts <a name="GoogleServiceNetworkingVpcServiceControlsTimeouts" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts.Initializer"></a>

```typescript
import { googleServiceNetworkingVpcServiceControls } from '@cdktf/provider-google-beta'

const googleServiceNetworkingVpcServiceControlsTimeouts: googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_networking_vpc_service_controls#create GoogleServiceNetworkingVpcServiceControls#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_networking_vpc_service_controls#delete GoogleServiceNetworkingVpcServiceControls#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_networking_vpc_service_controls#update GoogleServiceNetworkingVpcServiceControls#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_networking_vpc_service_controls#create GoogleServiceNetworkingVpcServiceControls#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_networking_vpc_service_controls#delete GoogleServiceNetworkingVpcServiceControls#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_networking_vpc_service_controls#update GoogleServiceNetworkingVpcServiceControls#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference <a name="GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleServiceNetworkingVpcServiceControls } from '@cdktf/provider-google-beta'

new googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts">GoogleServiceNetworkingVpcServiceControlsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleServiceNetworkingVpcServiceControlsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts">GoogleServiceNetworkingVpcServiceControlsTimeouts</a>

---



