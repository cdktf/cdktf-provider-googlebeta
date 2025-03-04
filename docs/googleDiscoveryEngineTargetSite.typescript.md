# `googleDiscoveryEngineTargetSite` Submodule <a name="`googleDiscoveryEngineTargetSite` Submodule" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineTargetSite <a name="GoogleDiscoveryEngineTargetSite" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_discovery_engine_target_site google_discovery_engine_target_site}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.Initializer"></a>

```typescript
import { googleDiscoveryEngineTargetSite } from '@cdktf/provider-google-beta'

new googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite(scope: Construct, id: string, config: GoogleDiscoveryEngineTargetSiteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig">GoogleDiscoveryEngineTargetSiteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig">GoogleDiscoveryEngineTargetSiteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetExactMatch">resetExactMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDiscoveryEngineTargetSiteTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts">GoogleDiscoveryEngineTargetSiteTimeouts</a>

---

##### `resetExactMatch` <a name="resetExactMatch" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetExactMatch"></a>

```typescript
public resetExactMatch(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDiscoveryEngineTargetSite resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isConstruct"></a>

```typescript
import { googleDiscoveryEngineTargetSite } from '@cdktf/provider-google-beta'

googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isTerraformElement"></a>

```typescript
import { googleDiscoveryEngineTargetSite } from '@cdktf/provider-google-beta'

googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isTerraformResource"></a>

```typescript
import { googleDiscoveryEngineTargetSite } from '@cdktf/provider-google-beta'

googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.generateConfigForImport"></a>

```typescript
import { googleDiscoveryEngineTargetSite } from '@cdktf/provider-google-beta'

googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDiscoveryEngineTargetSite resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDiscoveryEngineTargetSite to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDiscoveryEngineTargetSite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_discovery_engine_target_site#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineTargetSite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.failureReason">failureReason</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList">GoogleDiscoveryEngineTargetSiteFailureReasonList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.generatedUriPattern">generatedUriPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.indexingStatus">indexingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.rootDomainUri">rootDomainUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.siteVerificationInfo">siteVerificationInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList">GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.targetSiteId">targetSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference">GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.dataStoreIdInput">dataStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.exactMatchInput">exactMatchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.providedUriPatternInput">providedUriPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts">GoogleDiscoveryEngineTargetSiteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.dataStoreId">dataStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.exactMatch">exactMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.providedUriPattern">providedUriPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.failureReason"></a>

```typescript
public readonly failureReason: GoogleDiscoveryEngineTargetSiteFailureReasonList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList">GoogleDiscoveryEngineTargetSiteFailureReasonList</a>

---

##### `generatedUriPattern`<sup>Required</sup> <a name="generatedUriPattern" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.generatedUriPattern"></a>

```typescript
public readonly generatedUriPattern: string;
```

- *Type:* string

---

##### `indexingStatus`<sup>Required</sup> <a name="indexingStatus" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.indexingStatus"></a>

```typescript
public readonly indexingStatus: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rootDomainUri`<sup>Required</sup> <a name="rootDomainUri" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.rootDomainUri"></a>

```typescript
public readonly rootDomainUri: string;
```

- *Type:* string

---

##### `siteVerificationInfo`<sup>Required</sup> <a name="siteVerificationInfo" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.siteVerificationInfo"></a>

```typescript
public readonly siteVerificationInfo: GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList">GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList</a>

---

##### `targetSiteId`<sup>Required</sup> <a name="targetSiteId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.targetSiteId"></a>

```typescript
public readonly targetSiteId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference">GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `dataStoreIdInput`<sup>Optional</sup> <a name="dataStoreIdInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.dataStoreIdInput"></a>

```typescript
public readonly dataStoreIdInput: string;
```

- *Type:* string

---

##### `exactMatchInput`<sup>Optional</sup> <a name="exactMatchInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.exactMatchInput"></a>

```typescript
public readonly exactMatchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `providedUriPatternInput`<sup>Optional</sup> <a name="providedUriPatternInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.providedUriPatternInput"></a>

```typescript
public readonly providedUriPatternInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDiscoveryEngineTargetSiteTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts">GoogleDiscoveryEngineTargetSiteTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `dataStoreId`<sup>Required</sup> <a name="dataStoreId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.dataStoreId"></a>

```typescript
public readonly dataStoreId: string;
```

- *Type:* string

---

##### `exactMatch`<sup>Required</sup> <a name="exactMatch" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.exactMatch"></a>

```typescript
public readonly exactMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `providedUriPattern`<sup>Required</sup> <a name="providedUriPattern" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.providedUriPattern"></a>

```typescript
public readonly providedUriPattern: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineTargetSiteConfig <a name="GoogleDiscoveryEngineTargetSiteConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.Initializer"></a>

```typescript
import { googleDiscoveryEngineTargetSite } from '@cdktf/provider-google-beta'

const googleDiscoveryEngineTargetSiteConfig: googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.dataStoreId">dataStoreId</a></code> | <code>string</code> | The unique id of the data store. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.location">location</a></code> | <code>string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.providedUriPattern">providedUriPattern</a></code> | <code>string</code> | The user provided URI pattern from which the 'generated_uri_pattern' is generated. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.exactMatch">exactMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to false, a uri_pattern is generated to include all pages whose address contains the provided_uri_pattern. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_discovery_engine_target_site#id GoogleDiscoveryEngineTargetSite#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_discovery_engine_target_site#project GoogleDiscoveryEngineTargetSite#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts">GoogleDiscoveryEngineTargetSiteTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.type">type</a></code> | <code>string</code> | The possible target site types. Possible values: ["INCLUDE", "EXCLUDE"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataStoreId`<sup>Required</sup> <a name="dataStoreId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.dataStoreId"></a>

```typescript
public readonly dataStoreId: string;
```

- *Type:* string

The unique id of the data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_discovery_engine_target_site#data_store_id GoogleDiscoveryEngineTargetSite#data_store_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_discovery_engine_target_site#location GoogleDiscoveryEngineTargetSite#location}

---

##### `providedUriPattern`<sup>Required</sup> <a name="providedUriPattern" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.providedUriPattern"></a>

```typescript
public readonly providedUriPattern: string;
```

- *Type:* string

The user provided URI pattern from which the 'generated_uri_pattern' is generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_discovery_engine_target_site#provided_uri_pattern GoogleDiscoveryEngineTargetSite#provided_uri_pattern}

---

##### `exactMatch`<sup>Optional</sup> <a name="exactMatch" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.exactMatch"></a>

```typescript
public readonly exactMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to false, a uri_pattern is generated to include all pages whose address contains the provided_uri_pattern.

If set to true, an uri_pattern
is generated to try to be an exact match of the provided_uri_pattern or
just the specific page if the provided_uri_pattern is a specific one.
provided_uri_pattern is always normalized to generate the URI pattern to
be used by the search engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_discovery_engine_target_site#exact_match GoogleDiscoveryEngineTargetSite#exact_match}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_discovery_engine_target_site#id GoogleDiscoveryEngineTargetSite#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_discovery_engine_target_site#project GoogleDiscoveryEngineTargetSite#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDiscoveryEngineTargetSiteTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts">GoogleDiscoveryEngineTargetSiteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_discovery_engine_target_site#timeouts GoogleDiscoveryEngineTargetSite#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The possible target site types. Possible values: ["INCLUDE", "EXCLUDE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_discovery_engine_target_site#type GoogleDiscoveryEngineTargetSite#type}

---

### GoogleDiscoveryEngineTargetSiteFailureReason <a name="GoogleDiscoveryEngineTargetSiteFailureReason" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReason"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReason.Initializer"></a>

```typescript
import { googleDiscoveryEngineTargetSite } from '@cdktf/provider-google-beta'

const googleDiscoveryEngineTargetSiteFailureReason: googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReason = { ... }
```


### GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure <a name="GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure.Initializer"></a>

```typescript
import { googleDiscoveryEngineTargetSite } from '@cdktf/provider-google-beta'

const googleDiscoveryEngineTargetSiteFailureReasonQuotaFailure: googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure = { ... }
```


### GoogleDiscoveryEngineTargetSiteSiteVerificationInfo <a name="GoogleDiscoveryEngineTargetSiteSiteVerificationInfo" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfo.Initializer"></a>

```typescript
import { googleDiscoveryEngineTargetSite } from '@cdktf/provider-google-beta'

const googleDiscoveryEngineTargetSiteSiteVerificationInfo: googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfo = { ... }
```


### GoogleDiscoveryEngineTargetSiteTimeouts <a name="GoogleDiscoveryEngineTargetSiteTimeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts.Initializer"></a>

```typescript
import { googleDiscoveryEngineTargetSite } from '@cdktf/provider-google-beta'

const googleDiscoveryEngineTargetSiteTimeouts: googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_discovery_engine_target_site#create GoogleDiscoveryEngineTargetSite#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_discovery_engine_target_site#delete GoogleDiscoveryEngineTargetSite#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_discovery_engine_target_site#create GoogleDiscoveryEngineTargetSite#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_discovery_engine_target_site#delete GoogleDiscoveryEngineTargetSite#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineTargetSiteFailureReasonList <a name="GoogleDiscoveryEngineTargetSiteFailureReasonList" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.Initializer"></a>

```typescript
import { googleDiscoveryEngineTargetSite } from '@cdktf/provider-google-beta'

new googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.get"></a>

```typescript
public get(index: number): GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference <a name="GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineTargetSite } from '@cdktf/provider-google-beta'

new googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.property.quotaFailure">quotaFailure</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList">GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReason">GoogleDiscoveryEngineTargetSiteFailureReason</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `quotaFailure`<sup>Required</sup> <a name="quotaFailure" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.property.quotaFailure"></a>

```typescript
public readonly quotaFailure: GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList">GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDiscoveryEngineTargetSiteFailureReason;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReason">GoogleDiscoveryEngineTargetSiteFailureReason</a>

---


### GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList <a name="GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer"></a>

```typescript
import { googleDiscoveryEngineTargetSite } from '@cdktf/provider-google-beta'

new googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.get"></a>

```typescript
public get(index: number): GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference <a name="GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineTargetSite } from '@cdktf/provider-google-beta'

new googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.totalRequiredQuota">totalRequiredQuota</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure">GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `totalRequiredQuota`<sup>Required</sup> <a name="totalRequiredQuota" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.totalRequiredQuota"></a>

```typescript
public readonly totalRequiredQuota: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure">GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure</a>

---


### GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList <a name="GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer"></a>

```typescript
import { googleDiscoveryEngineTargetSite } from '@cdktf/provider-google-beta'

new googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.get"></a>

```typescript
public get(index: number): GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference <a name="GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineTargetSite } from '@cdktf/provider-google-beta'

new googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.siteVerificationState">siteVerificationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.verifyTime">verifyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfo">GoogleDiscoveryEngineTargetSiteSiteVerificationInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `siteVerificationState`<sup>Required</sup> <a name="siteVerificationState" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.siteVerificationState"></a>

```typescript
public readonly siteVerificationState: string;
```

- *Type:* string

---

##### `verifyTime`<sup>Required</sup> <a name="verifyTime" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.verifyTime"></a>

```typescript
public readonly verifyTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDiscoveryEngineTargetSiteSiteVerificationInfo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfo">GoogleDiscoveryEngineTargetSiteSiteVerificationInfo</a>

---


### GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference <a name="GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineTargetSite } from '@cdktf/provider-google-beta'

new googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts">GoogleDiscoveryEngineTargetSiteTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDiscoveryEngineTargetSiteTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts">GoogleDiscoveryEngineTargetSiteTimeouts</a>

---



