# `googleContactCenterInsightsView` Submodule <a name="`googleContactCenterInsightsView` Submodule" id="@cdktf/provider-google-beta.googleContactCenterInsightsView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContactCenterInsightsView <a name="GoogleContactCenterInsightsView" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_view google_contact_center_insights_view}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer"></a>

```typescript
import { googleContactCenterInsightsView } from '@cdktf/provider-google-beta'

new googleContactCenterInsightsView.GoogleContactCenterInsightsView(scope: Construct, id: string, config: GoogleContactCenterInsightsViewConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig">GoogleContactCenterInsightsViewConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig">GoogleContactCenterInsightsViewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.resetValue">resetValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleContactCenterInsightsViewTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts">GoogleContactCenterInsightsViewTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.resetValue"></a>

```typescript
public resetValue(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleContactCenterInsightsView resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.isConstruct"></a>

```typescript
import { googleContactCenterInsightsView } from '@cdktf/provider-google-beta'

googleContactCenterInsightsView.GoogleContactCenterInsightsView.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.isTerraformElement"></a>

```typescript
import { googleContactCenterInsightsView } from '@cdktf/provider-google-beta'

googleContactCenterInsightsView.GoogleContactCenterInsightsView.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.isTerraformResource"></a>

```typescript
import { googleContactCenterInsightsView } from '@cdktf/provider-google-beta'

googleContactCenterInsightsView.GoogleContactCenterInsightsView.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.generateConfigForImport"></a>

```typescript
import { googleContactCenterInsightsView } from '@cdktf/provider-google-beta'

googleContactCenterInsightsView.GoogleContactCenterInsightsView.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleContactCenterInsightsView resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleContactCenterInsightsView to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleContactCenterInsightsView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_view#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleContactCenterInsightsView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference">GoogleContactCenterInsightsViewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts">GoogleContactCenterInsightsViewTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleContactCenterInsightsViewTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference">GoogleContactCenterInsightsViewTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleContactCenterInsightsViewTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts">GoogleContactCenterInsightsViewTimeouts</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContactCenterInsightsViewConfig <a name="GoogleContactCenterInsightsViewConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.Initializer"></a>

```typescript
import { googleContactCenterInsightsView } from '@cdktf/provider-google-beta'

const googleContactCenterInsightsViewConfig: googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.location">location</a></code> | <code>string</code> | Location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.displayName">displayName</a></code> | <code>string</code> | The human-readable display name of the view. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_view#id GoogleContactCenterInsightsView#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_view#project GoogleContactCenterInsightsView#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts">GoogleContactCenterInsightsViewTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.value">value</a></code> | <code>string</code> | A filter to reduce conversation results to a specific subset. Refer to https://cloud.google.com/contact-center/insights/docs/filtering for details. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_view#location GoogleContactCenterInsightsView#location}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human-readable display name of the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_view#display_name GoogleContactCenterInsightsView#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_view#id GoogleContactCenterInsightsView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_view#project GoogleContactCenterInsightsView#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleContactCenterInsightsViewTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts">GoogleContactCenterInsightsViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_view#timeouts GoogleContactCenterInsightsView#timeouts}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

A filter to reduce conversation results to a specific subset. Refer to https://cloud.google.com/contact-center/insights/docs/filtering for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_view#value GoogleContactCenterInsightsView#value}

---

### GoogleContactCenterInsightsViewTimeouts <a name="GoogleContactCenterInsightsViewTimeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts.Initializer"></a>

```typescript
import { googleContactCenterInsightsView } from '@cdktf/provider-google-beta'

const googleContactCenterInsightsViewTimeouts: googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_view#create GoogleContactCenterInsightsView#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_view#delete GoogleContactCenterInsightsView#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_view#update GoogleContactCenterInsightsView#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_view#create GoogleContactCenterInsightsView#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_view#delete GoogleContactCenterInsightsView#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_contact_center_insights_view#update GoogleContactCenterInsightsView#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContactCenterInsightsViewTimeoutsOutputReference <a name="GoogleContactCenterInsightsViewTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleContactCenterInsightsView } from '@cdktf/provider-google-beta'

new googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts">GoogleContactCenterInsightsViewTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleContactCenterInsightsViewTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts">GoogleContactCenterInsightsViewTimeouts</a>

---



